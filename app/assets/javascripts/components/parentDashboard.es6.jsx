class ParentDashboard extends React.Component {
	constructor(){
		super()
		this.getMoney=this.getMoney.bind(this)
    this.addChild=this.addChild.bind(this)
    this.parentWithdraw=this.parentWithdraw.bind(this)
    this.parentTransfer = this.parentWithdraw.bind(this)
		this.state = {
			children: [], notifications: []
		}
	}

	componentDidMount() {
		this.setState({
      children: this.props.parent.children
    })
	}

  addChild(newChildren){
    this.setState({children: newChildren})
  }


	getMoney(newChildren){
		this.setState({ children: newChildren})
	}

  parentWithdraw(newChildren){
    this.setState({children: newChildren})
  }

  parentTransfer(newChildren){
    this.setState({children: newChildren})
  }

  render(){
    return(
      <section>
      <div className="row">
        <h1>{this.props.parent.name}'s dashboard</h1>
        <div className="col-sm-3">
          <InitialSetup UpdateManageChildAccounts={this.addChild}/>
        </div>
        <div className="col-sm-3">
          <SendMoney children={this.state.children} sendMoneyValue={this.getMoney} />
        </div>
        <div className="col-sm-6">
          <NotificationList parentChildNotifications={this.props.parentNotifications}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
					<h2>manage your child's accounts</h2>
					<ManageAccounts trueUpdateBalance={this.parentTransfer} trueWithdraw={this.parentWithdraw} children={this.state.children} />
				</div>
				<div className="col-sm-1"></div>
				<div className="col-md-5">
					<h2>manage rewards</h2>
					<ParentRewardsList rewards={this.props.parent.rewards} />
				</div>
      </div>
      </section>
    )
  }
}
