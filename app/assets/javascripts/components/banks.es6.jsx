class Banks extends React.Component {

	constructor(){
		super()
		this.updateNotifications=this.updateNotifications.bind(this)
	}

	updateNotifications(response) {
		this.props.notifications(response)
	}


  render () {

    return (
    	<div className="row">
    	<ul className="list-inline">
				{
					this.props.current_child.banks.map((bank, idx) => {

						return (<Bank  interestAmount = {this.props.interestAmount} child={this.props.current_child} liveUpdateNotifications={this.updateNotifications} key={idx} bank={bank} />)

					})
				}
			</ul>
			</div>

    	)
  }
}
