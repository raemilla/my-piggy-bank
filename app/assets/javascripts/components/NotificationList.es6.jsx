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
     }, 1000);

  }



  updateNotifications(response){
    this.setState({ notifications: response})
  }



  render(){
    return(
      <div id="notification-container">
      	<h3 className="header notification-header">Notifications</h3>
          <table className="table table-sm table-striped notification-table">
          <tbody>
      		{
            this.state.notifications?
      			this.state.notifications.map((notification, idx) => {
      				return( <tr key = {idx}><th scope="row">
      					<Notification data={notification} onSearch={this.updateNotifications}/></th>
      					<br/>
      					</tr>
      					)
      			}) : null
          }
          </tbody>
          </table>
      </div>
   	 )
  }
}
