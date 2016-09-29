class ParentRewardsList extends React.Component {
  constructor(){
    super()
    this.state = {
      displayButton: true,
      displayForm: false,
      rewards: []
    }
    this.toggleRewardForm = this.toggleRewardForm.bind(this)
    this.displayRewardForm = this.displayRewardForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteReward = this.deleteReward.bind(this)
  }

  componentDidMount(){
    this.setState({
      rewards: this.props.rewards
    })
  }

  handleSubmit(event){
    event.preventDefault()
    var child = this.refs.child.value,
    amount = this.refs.amount.value,
    item = this.refs.item.value
    $.ajax({
      method: 'post',
      url: '/rewards',
      data: {
        amount: amount,
        child: child,
        item: item
      }
    }).done((response) => {
      this.setState({
        displayForm: false,
        displayButton: true,
      })
      this.props.updateRewards(response)
    })
  }

  deleteReward(event){
    event.preventDefault()
    var rewardId = event.target.name
    if (confirm('Are you sure you want to delete this reward?')) {
    $.ajax({
      method: "delete",
      url: '/rewards/'+rewardId
    }).done((response) => {
      this.props.deleteRewards(response)
    })

    } else {
      null
    }

  }

  toggleRewardForm(){
    let shouldToggleForm = !this.state.displayForm
    let shouldToggleButton = !this.state.displayButton

    this.setState({
      displayButton: shouldToggleButton,
      displayForm: shouldToggleForm
    })
  }

  displayRewardForm(){
    return(
      <form id="add-reward-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>reward: </label>
          <input className="form-control" ref="item" type="text" placeholder="enter a reward" name="reward[item]" required/>
        </div>
        <div className="form-group">
          <label>cost: </label>
          <input required min="0" step="any" id="reward-cost-input" className="form-control" ref="amount" type="number" placeholder="
        0.00" name="reward[amount]"/>
        </div>
        <div id="reward-child-input" className="form-group">
          <label>child: </label><br/>
          <select className="form-control" ref="child">
            <option selected>select your child</option>
            {
              this.props.children.map((child, idx) =>
              <option key={idx}>{child.name}</option>
            )
            }
            <option>All</option>
          </select>
        </div>
        <button id="reward-submit" type="submit" className="btn btn-primary">create reward!</button>
      </form>
    )
  }

  render(){
    return(
      <div>
      <h3 className="header">manage your child's rewards</h3>
      <table className="table table-sm table-striped">
        <thead className="thead-default">
          <tr>
            <th>Reward Item</th>
            <th>Cost</th>
            <th>Child</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.rewards.map((reward, idx) => <tr key={idx}>
              <th scope="row">{reward.item}</th>
              <td>{reward.dollars}</td>
              <td>{reward.child.name}</td>
              <td><button className="btn btn-primary btn-xs btn-default" name={reward.id} onClick={this.deleteReward}>x</button></td>
            </tr>)
          }
        </tbody>
      </table>
      {this.state.displayButton ? <button onClick={this.toggleRewardForm} id="add-reward-toggle-button" className="btn btn-primary btn-lg">add a reward</button> : null }
      {this.state.displayForm ? this.displayRewardForm() : null }
      </div>
    )
  }
}
