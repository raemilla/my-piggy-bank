class ParentRewardsList extends React.Component {
  render(){
    return(
      <div>
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
              <td>{reward.amount}</td>
              <td>{reward.child.name}</td>
              <td>delete</td>
            </tr>)
          }
        </tbody>
      </table>
      <p>add reward button</p>
      </div>
    )
  }
}
