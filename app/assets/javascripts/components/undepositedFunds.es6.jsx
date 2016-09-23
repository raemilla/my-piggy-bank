class UndepositedFunds extends React.Component {
	constructor(){
		super()
		state = {
			 currentChild: ""

		}
	}
	render(){
		return(
			<div className="container">
				<div className="row">
				<div className="col-sm-2">
				
				</div>
					<div className="col-md-8">
						<p className="text-center">Ephraim(current_child.name), you have 25(current_child.undeposited_funds) cents to Deposit.</p>
					</div>
					<div className="col-md-2">
					
					</div>
				</div>
			</div>
			)
	}
}
