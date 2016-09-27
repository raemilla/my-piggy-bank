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
        rewards: response
      })
    })
  }

  deleteReward(event){
    event.preventDefault()
    var rewardId = event.target.name
    debugger;
    $.ajax({
      method: "delete",
      url: '/rewards/'+rewardId
    }).done((response) => {
      this.setState({
        rewards: response
      })
    })
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
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group">
          <label>reward: </label>
          <input ref="item" type="text" placeholder="enter a reward" name="reward[item]"/>
        </div>
        <div className="form-group">
          <label>cost: </label>
          <input ref="amount" type="number" placeholder="set a cost" name="reward[amount]"/>
        </div>
        <div className="form-group">
          <label>child: </label>
          <select ref="child">
            {
              this.props.children.map((child, idx) =>
              <option key={idx} >{child.name}</option>
            )
            }
            <option>All</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">create reward!</button>
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
            this.state.rewards.map((reward, idx) => <tr key={idx}>
              <th scope="row">{reward.item}</th>
              <td>{reward.dollars}</td>
              <td>{reward.child.name}</td>
              <td><button className="btn btn-primary btn-xs btn-default" name={reward.id} onClick={this.deleteReward}>x</button></td>
            </tr>)
          }
        </tbody>
      </table>
      {this.state.displayButton ? <div class><button onClick={this.toggleRewardForm} className="btn btn-primary">add reward</button></div> : null }
      {this.state.displayForm ? this.displayRewardForm() : null }
      </div>
    )
  }
}
