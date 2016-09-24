class Notification extends React.Component {
	constructor(){
		super()
		this.handleClick=this.handleClick.bind(this)
	}

	handleClick(event) {
		event.preventDefault()

		var id= this.props.data.id
		$.ajax({
			url: '/notifications/'.concat(id),
			method: 'delete',
		}).done((response) => {
			debugger
			console.log('hey! things got deleted')
		})
	}




  render(){

    return(
    	<div id="notification"className = "container">
	    	<div className="row" >
	    		<span className="col-sm-5" >{this.props.data.text}</span>
	    		<div className="col-sm-1">
	    			<button onClick={this.handleClick}>x</button>
	    		</div>
	    	</div>
	    	<div className="row"> 
	    		<span className="col-sm-5">- 
	    		{
	    			this.props.data.child.name
	    		}
	    		</span> 
	      </div>
      </div>
    )
  }
}
