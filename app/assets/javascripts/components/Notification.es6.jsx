class Notification extends React.Component {
	constructor(){
		super()
		this.state = {
      notifications: null
    }
    this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		e.preventDefault()
		var id= this.props.data.id
    $.ajax({
      url: '/notifications/'.concat(id),
      method: 'delete',
    }).done((response) => {
      this.props.onSearch(response)
      console.log('hey! things got deleted')
    }.bind(this))

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
