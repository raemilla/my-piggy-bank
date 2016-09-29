class ParentDashboard extends React.Component {


	constructor(){
		super()
		this.getMoney=this.getMoney.bind(this)
    this.addChild=this.addChild.bind(this)
    this.parentWithdraw=this.parentWithdraw.bind(this)
    this.parentTransfer = this.parentWithdraw.bind(this)
    this.toggleError=this.toggleError.bind(this)
		this.toggleAdd = this.toggleAdd.bind(this)
		this.toggleSend = this.toggleSend.bind(this)
		this.toggleAccounts = this.toggleAccounts.bind(this)
		this.toggleRewards = this.toggleRewards.bind(this)
		this.state = {
			children: [],
			error: false,
			displaySend: true,
			displayAdd: false,
			displayAccounts: false,
			displayRewards: false,
			activeSend: true,
			activeAdd: false,
			activeAccounts: false,
			activeRewards: false,
			toggleError: false
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
    newChildren.error ? this.setState({error: newChildren.error, children: newChildren.children, toggleError:true}) : this.setState({children: newChildren})


  }

  parentTransfer(newChildren){
     newChildren.error ? this.setState({error: newChildren.error, children: newChildren.children, toggleError:true }) : this.setState({children: newChildren})
  }

  toggleError(){
    this.setState({toggleError: false})
  }

	toggleAdd(){
		this.setState({
			displaySend: false,
			displayAdd: true,
			displayAccounts: false,
			displayRewards: false,
			activeAdd: true,
			activeSend: false,
			activeAccounts: false,
			activeRewards: false
		})
	}

	toggleSend(){
		this.setState({
			displaySend: true,
			displayAdd: false,
			displayAccounts: false,
			displayRewards: false,
			activeAdd: false,
			activeSend: true,
			activeAccounts: false,
			activeRewards: false
		})
	}

	toggleAccounts(){
		this.setState({
			displaySend: false,
			displayAdd: false,
			displayAccounts: true,
			displayRewards: false,
			activeAdd: false,
			activeSend: false,
			activeAccounts: true,
			activeRewards: false
		})
	}

	toggleRewards(){
		this.setState({
			displaySend: false,
			displayAdd: false,
			displayAccounts: false,
			displayRewards: true,
			activeAdd: false,
			activeSend: false,
			activeAccounts: false,
			activeRewards: true
		})
	}

  render(){
    return(
      <section>
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-5 col-md-offset-1"><h1 className="text-center header">{this.props.parent.name}'s Dashboard</h1></div>
			</div>
      <div className="row">
        <div className="col-md-2">
					<ul id="dashboard-nav" className="nav nav-pills nav-stacked">
						<li role="presentation" onClick={this.toggleAdd} className={this.state.activeAdd ? 'active' : null }><a>add child</a></li>
						<li role="presentation" onClick={this.toggleSend} className={this.state.activeSend ? 'active' : null}><a>send money</a></li>
						<li role="presentation" onClick={this.toggleAccounts} className={this.state.activeAccounts ? 'active' : null }><a>accounts</a></li>
						<li role="presentation" onClick={this.toggleRewards} className={this.state.activeRewards ? 'active' : null }><a>rewards</a></li>
					</ul>
        </div>
        <div className="col-md-5 col-md-offset-1">
			
					{this.state.displaySend ? <SendMoney children={this.state.children} sendMoneyValue={this.getMoney} toggleAccounts={this.toggleAccounts}/> : null }
					{this.state.displayAdd ? <InitialSetup UpdateManageChildAccounts={this.addChild} toggleSend={this.toggleSend}/> : null }
					{this.state.displayAccounts ? <ManageAccounts trueUpdateBalance={this.parentTransfer} trueWithdraw={this.parentWithdraw} children={this.state.children} /> : null }
					{this.state.displayRewards ? <ParentRewardsList children={this.state.children} rewards={this.props.parent.rewards} /> : null }
					
        </div>
        <div className="col-md-3 col-md-offset-1">
          <NotificationList />
        </div>
      </div>
      </section>
    )
  }
}
