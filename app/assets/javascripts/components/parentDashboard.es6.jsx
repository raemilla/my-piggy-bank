class ParentDashboard extends React.Component {
	constructor(){
		super()
	}


  render(){
    return(
      <section>
      <div className="row">
        <h1>{this.props.parent.name}'s dashboard</h1>
        <div className="col-sm-4">
          <InitialSetup />
        </div>
        <div className="col-sm-4">
          <SendMoney children={this.props.parent.children} />
        </div>
        <div className="col-sm-4">
          <NotificationList />
        </div>
      </div>
      <div className="row">
        <h2>manage your child's accounts</h2>
        <div className="col-md-8"><ManageAccounts children={this.props.parent.children} /></div>
      </div>
      </section>
    )
  }
}
