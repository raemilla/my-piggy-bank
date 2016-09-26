class App extends React.Component {
  constructor(){
    super()
    this.displayUserComponent = this.displayUserComponent.bind(this)
    this.state= {
      notifications : []
    }
    this.appNotifications = this.appNotifications.bind(this)
  }

  appNotifications(response){
    // debugger
    this.setState({
      notifications: response
    })
    
  }
  




  componentDidMount(){
    // this.setState({
    //   notifications: this.props.current_user.notifications
    // })
  }

  displayUserComponent(){
    if(this.props["parent?"]){
      return (<ParentDashboard parent={this.props.current_user} parentNotifications={this.state.notifications}/>)
    } else {
      return (<ChildDashboard newNotifications={this.appNotifications} current_child={this.props.current_user} interestAmount={this.props.interest_amount} />)
    }
  }

  render(){
    return(
      <div className="container">
        <pre><code>{JSON.stringify(this.props,null,2)}</code></pre>
        {this.displayUserComponent()}
      </div>
    )
  }
}
