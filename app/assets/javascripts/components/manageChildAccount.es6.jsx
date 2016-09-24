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
      <ul className="list-group">
        {
          this.props.child.banks.map((bank, idx) =>
          <li className="list-group-item list-group-item-action" key={idx}>
            <div className="col-md-8">
              {bank.type}, {bank.balance}
            </div>
              <button type="button" className="btn btn-primary btn-sm">transfer</button>
              <button className="btn btn-primary btn-sm">withdraw</button>
          </li>)
        }
      </ul>
    )
  }


  render(){
    return(
      <div className="row">
      <li className="list-group-item list-group-item-action" onClick={this.toggleDisplay}>
        <strong>{this.props.child.name}</strong> <br/>
        total undeposited funds: {this.props.child.undeposited_funds}
        {this.state.displayBanks ? this.displayBanks() : null }
      </li>
      </div>
    )
  }
}
