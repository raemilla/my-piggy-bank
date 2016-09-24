class ParentDashboard extends React.Component {
  render(){
  	debugger
    return(

      <div>
        <h1>{this.props.parent.name}'s dashboard</h1>
        <InitialSetup />
      </div>
    )
  }
}
