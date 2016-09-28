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
    	<div>
	    	<div className="row" >
	    		<span className="col-sm-9" >{this.props.data.text}</span>
	    		<div className="col-sm-1">
	    			<button className="btn btn-primary btn-xs btn-default" onClick={this.handleClick}>x</button>
	    		</div>
	    	</div>

      </div>
    )
  }
}
