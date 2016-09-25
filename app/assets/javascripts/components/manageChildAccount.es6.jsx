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
      <ul className="list-group">
        {
          this.props.child.banks.map((bank, idx) =>
          <li className="list-group-item list-group-item-action" key={idx}>
              {bank.type}, {bank.balance}
              <TransferButton bank={bank} banks={this.props.child.banks} /> <WithdrawButton bank={bank} />
          </li>)
        }
      </ul>
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
