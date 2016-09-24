class ParentDashboard extends React.Component {
	constructor(){
		super()
	}


  render(){
    return(
      <div className="row">
        <h1>{this.props.parent.name}'s dashboard</h1>
        	<NotificationList />
        <div className="col-sm-4">
          <InitialSetup />
        </div>
        <div className="col-sm-4">
          <SendMoney children={this.props.parent.children} />
        </div>
      </div>
    )
  }
}
