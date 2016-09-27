class NotificationList extends React.Component {
  constructor(){
    super()
    this.state = {
      notifications:null
    }
    this.updateNotifications = this.updateNotifications.bind(this)
  }

  componentDidMount(){
    var blah = setInterval (()=> {
      $.ajax({
      url: '/notifications',
      method: 'GET'
      }).done(response =>{
      this.setState({notifications: response
      })
      })
     }, 500);
    
  }


  updateNotifications(response){
    this.setState({ notifications: response})
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
