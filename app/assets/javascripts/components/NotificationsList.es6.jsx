class NotificationList extends React.Component {



  render(){

    return(
      <div className="container">
      	<h3>Notifications</h3>
      	<ul>
      		{
      			this.props.notifications.map((notification, idx) => {
      				return( <div key = {idx}>
      					<Notification data={notification}/>
      					<br/>
      					</div> 
      					)
      			})
      		}
      	</ul>
      </div>
   	 )
  }
}
