class ManageChildAccount extends React.Component {
  constructor(){
    super()
    this.state = {
      displayBanks: false
    }
    this.toggleDisplayBanks = this.toggleDisplayBanks.bind(this)
    this.displayBanks = this.displayBanks.bind(this)
  }

  toggleDisplayBanks(){
    let shouldToggleBanks = !this.state.displayBanks
    this.setState({
      displayBanks: shouldToggleBanks
    })
  }

  displayBanks(){
    return(
      <table className="table table-sm table-striped">
        <thead className="thead-default">
          <tr>
            <th>Bank</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.child.banks.map((bank, idx) =>
          <tr key={idx}>
            <th scope="row">{bank.type}</th>
            <td>{bank.balance}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    )
  }


  render(){
    return(
      <div className="row">
      <li className="list-group-item list-group-item-action">
        <strong onClick={this.toggleDisplayBanks}>{this.props.child.name}</strong> <br/>
        total undeposited funds: {this.props.child.undeposited_funds}
        {this.state.displayBanks ? this.displayBanks() : null }
      </li>
      </div>
    )
  }
}
