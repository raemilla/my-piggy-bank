class NotificationList extends React.Component {
  constructor(){
    super()
    this.state = {
      notifications:null
    }
    this.updateNotifications = this.updateNotifications.bind(this)
    this.nootifications=this.nootifications.bind(this )
  }

  componentDidMount(){
    $.ajax({
      url: '/notifications',
      method: 'GET'
    }).done(response =>{
      console.log('hi')
      this.setState({notifications: response
      })
    })
  }


  updateNotifications(response){
    this.setState({ notifications: response})
  }
  
  nootifications(){
    if (this.props.parentChildNotifications.length > 0){
    this.setState({
      notifications: this.props.parentChildNotifications
    })
    }
  }

  render(){
    return(
      <div id="notification-list" className="container">
      	<h3 className="row-sm-2">Notifications</h3>
      	<div className ="row">
      		{
            this.state.notifications? 
      			this.state.notifications.map((notification, idx) => {
      				return( <div key = {idx}>
      					<Notification data={notification} onSearch={this.updateNotifications}/>
      					<br/>
      					</div> 
      					)
      			}) :
            null

      		}
      	</div>
      </div>
   	 )
  }
}
