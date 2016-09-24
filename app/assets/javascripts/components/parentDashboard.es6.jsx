class ParentDashboard extends React.Component {
	constructor(){
		super()
	}


  render(){
    return(

      <div>
        <h1>{this.props.parent.name}'s dashboard</h1>
        <InitialSetup /> 
        	<NotificationList />
      </div>
    )
  }
}
