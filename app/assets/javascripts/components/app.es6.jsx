class App extends React.Component {
  constructor(){
    super()
    this.displayUserComponent = this.displayUserComponent.bind(this)


  }



  displayUserComponent(){
    if(this.props["parent?"]){
      return (<div className="color-change"><ParentDashboard parent={this.props.current_user} /></div>)
    } else {
      return (<ChildDashboard  current_child={this.props.current_user} interestAmount={this.props.interest_amount} />)
    }
  }

  render(){
    return(
      <div className="container">
        {this.displayUserComponent()}

      </div>
    )
  }
}
