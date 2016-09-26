class ChildRewardList extends React.Component {
  render(){
    debugger;
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
                <td><a>buy</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
