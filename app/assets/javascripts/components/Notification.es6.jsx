class Notification extends React.Component {
	constructor(){
		super()
		this.handleClick=this.handleClick.bind(this)
	}

	handleClick() {
		var id= this.props.data.id
		$.ajax({
			url: '/notifications/'.concat(id),
			method: 'delete',
		}).done((response) => {
			console.log('hey! things got deleted')
		}.bind(this))
	}



  render(){

    return(
    	<div className="row" >
    	<span className="col-sm-5" >{this.props.data.text}</span>
    		<div className="col-sm-2"><span ref = "x" onClick={this.handleClick()}>x</span></div>
    		<br/> 
    	<span className="notification-child">- {
    		this.props.data.child.name
    	}</span> 
      </div>
    )
  }
}
