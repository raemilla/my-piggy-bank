class UndepositedFunds extends React.Component {
	constructor(){
		super()
		this.state = {
			displayRewards: false,
		}
		this.toggleRewardDisplay = this.toggleRewardDisplay.bind(this)
	}

	toggleRewardDisplay(){
		let shouldToggleRewards = !this.state.displayRewards
		this.setState({
			displayRewards: shouldToggleRewards
		})
	}

	render(){
		return(

				<div className="row">
				<div className="col-sm-3">
				</div>
					<div className="col-md-6">
						<h1 className="text-center">Welcome {this.props.current_child.name}, you have {this.props.current_child.undeposited_funds} cents to Deposit.</h1>
					</div>
					<div className="col-md-3">
						<button onClick={this.toggleRewardDisplay} type="button" className="btn btn-success btn-lg btn-block">Rewards</button>
						{this.state.displayRewards ? <ChildRewardList rewards={this.props.current_child.rewards} child={this.props.current_child} /> : null }
					</div>
				</div>

			)
	}
}
