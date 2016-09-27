class Banks extends React.Component {

	constructor(){
		super()

	}




  render () {
  
    return (
    	<div className="row">
    	<ul className="list-inline">
				{
					this.props.current_child.banks.map((bank, idx) => {

						return (<Bank  interestAmount = {this.props.interestAmount} child={this.props.current_child}  key={idx} bank={bank} />)

					})
				}
			</ul>
			</div>

    	)
  }
}
