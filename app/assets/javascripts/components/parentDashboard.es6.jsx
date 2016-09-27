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
			error: null,
			displaySend: true,
			displayAdd: false,
			displayAccounts: false,
			displayRewards: false
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
    newChildren.error ? this.setState({error: newChildren.error, children: newChildren.children}) : this.setState({children: newChildren})


  }

  parentTransfer(newChildren){
     newChildren.error ? this.setState({error: newChildren.error, children: newChildren.children}) : this.setState({children: newChildren})
  }

  toggleError(){
    this.setState({error:false})
  }

	toggleAdd(){
		this.setState({
			displaySend: false,
			displayAdd: true,
			displayAccounts: false,
			displayRewards: false
		})
	}

	toggleSend(){
		this.setState({
			displaySend: true,
			displayAdd: false,
			displayAccounts: false,
			displayRewards: false
		})
	}

	toggleAccounts(){
		this.setState({
			displaySend: false,
			displayAdd: false,
			displayAccounts: true,
			displayRewards: false
		})
	}

	toggleRewards(){
		this.setState({
			displaySend: false,
			displayAdd: false,
			displayAccounts: false,
			displayRewards: true
		})
	}

  render(){
    return(
      <section>
      <div className="row">
        <h1>{this.props.parent.name}'s dashboard</h1>
        <div className="col-sm-2">
					<ul className="nav nav-pills nav-stacked">
						<li role="presentation" onClick={this.toggleAdd}><a>add child</a></li>
						<li role="presentation" onClick={this.toggleSend}><a>send money</a></li>
						<li role="presentation" onClick={this.toggleAccounts}><a>accounts</a></li>
						<li role="presentation" onClick={this.toggleRewards}><a>rewards</a></li>
					</ul>
        </div>
        <div className="col-sm-6">
					{this.state.displaySend ? <SendMoney children={this.state.children} sendMoneyValue={this.getMoney}/> : null }
					{this.state.displayAdd ? <InitialSetup UpdateManageChildAccounts={this.addChild} /> : null }
					{this.state.displayAccounts ? <ManageAccounts trueUpdateBalance={this.parentTransfer} trueWithdraw={this.parentWithdraw} children={this.state.children} /> : null }
					{this.state.displayRewards ? <ParentRewardsList children={this.state.children} rewards={this.props.parent.rewards} /> : null }
        </div>
        <div className="col-sm-4">
          <NotificationList />
        </div>
      </div>
      </section>
    )
  }
}
