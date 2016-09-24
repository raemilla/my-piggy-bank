class ManageChildAccount extends React.Component {
  constructor(){
    super()
    this.state = {
      displayBanks: false
    }
    this.toggleDisplay = this.toggleDisplay.bind(this)
  }

  toggleDisplay(){
    let shouldToggle = !this.state.displayBanks
    this.setState({
      displayBanks: shouldToggle
    })
  }


  render(){
    return(
      <div>
      <li onClick={this.toggleDisplay}>
        <strong>{this.props.child.name}</strong> <br/>
        total undeposited funds: {this.props.child.undeposited_funds}
        {this.state.displayBanks ? <p>yay toggle</p> : null }
      </li>
      <br/>
      </div>
    )
  }
}
