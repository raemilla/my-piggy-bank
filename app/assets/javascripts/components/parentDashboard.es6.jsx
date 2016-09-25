class ParentDashboard extends React.Component {
	constructor(){
		super()
		debugger;
		this.getMoney=this.getMoney.bind(this)
		this.state = {
			children: [], notifications: []
		}
	}

	componentDidMount() {
		this.setState({
			children: this.props.parent.children
		})
	}


	getMoney(newChildren){
		this.setState({ children: newChildren})
	}

  render(){
    return(
      <section>
      <div className="row">
        <h1>{this.props.parent.name}'s dashboard</h1>
        <div className="col-sm-3">
          <InitialSetup />
        </div>
        <div className="col-sm-3">
          <SendMoney children={this.props.parent.children} sendMoneyValue={this.getMoney} />
        </div>
        <div className="col-sm-6">
          <NotificationList />
        </div>
      </div>
      <div className="row">
        <h2>manage your child's accounts</h2>
        <div className="col-md-8"><ManageAccounts children={this.state.children} /></div>
      </div>
      </section>
    )
  }
}
