class ChildRewardList extends React.Component {
  constructor(){
    super()
    this.handlePurchase = this.handlePurchase.bind(this)
  }

  handlePurchase(event) {
    event.preventDefault();
    $.ajax({
      method: 'post',
      url: '/notifications',
      data: {
        text: this.props.child.name + " wants to buy a reward: " + event.target.name
      }
    }).done((response) => {
      console.log("great success")
    })
  }

  render(){
    return(
      <table className="table table-sm table-striped">
        <thead className="thead-default">
          <tr>
            <th>Reward</th>
            <th>Cost</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.rewards.map((reward, idx) =>
              <tr key={idx}>
                <th scope="row">{reward.item}</th>
                <td>{reward.amount}</td>
                <td><a name={reward.item} onClick={this.handlePurchase}>buy</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
