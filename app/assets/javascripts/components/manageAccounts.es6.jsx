class ManageAccounts extends React.Component {
  constructor(){
    super()
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.displayBanks = this.displayBanks.bind(this)
  }

  toggleDisplay(){

  }

  displayBanks(){

  }

  render(){
    return(
      <ul>
        {
          this.props.children.map((child, idx) =>
            <ManageChildAccount child={child} key={idx} />)
        }
      </ul>
    )
  }
}
