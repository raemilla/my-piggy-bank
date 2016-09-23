class ChildDashboard extends React.Component {
	render(){
	
		return(
			<div>
			<pre><code>{JSON.stringify(this.props,null,2)}</code></pre>
			<UndepositedFunds current_child={this.props.current_child} />
			</div>
			)
	}
}

