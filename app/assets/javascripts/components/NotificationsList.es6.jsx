class NotificationList extends React.Component {



  render(){

    return(
      <div id="notification-list" className="container">
      	<h3 className="row-sm-2">Notifications</h3>
      	<div className ="row">
      		{
      			this.props.notifications.map((notification, idx) => {
      				return( <div key = {idx}>
      					<Notification data={notification}/>
      					<br/>
      					</div> 
      					)
      			})
      		}
      	</div>
      </div>
   	 )
  }
}
