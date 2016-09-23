class ChildDashboard extends React.Component {
	render(){

		return(
			<div>
			<UndepositedFunds current_child={this.props.current_child} />
			<ChangeMachine />
			</div>
		)
	}
}
