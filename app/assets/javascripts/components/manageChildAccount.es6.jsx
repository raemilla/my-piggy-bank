class ManageChildAccount extends React.Component {
  constructor(){
    super()
    this.state = {
      displayBanks: false
    }
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.displayBanks = this.displayBanks.bind(this)
  }

  toggleDisplay(){
    let shouldToggle = !this.state.displayBanks
    this.setState({
      displayBanks: shouldToggle
    })
  }

  displayBanks(){
    return(
      <ul>
        {this.props.child.banks.map((bank, idx) => <li key={idx}>{bank.type}, {bank.balance}</li>)}
      </ul>
    )
  }


  render(){
    return(
      <div>
      <li onClick={this.toggleDisplay}>
        <strong>{this.props.child.name}</strong> <br/>
        total undeposited funds: {this.props.child.undeposited_funds}
        {this.state.displayBanks ? this.displayBanks() : null }
      </li>
      <br/>
      </div>
    )
  }
}
