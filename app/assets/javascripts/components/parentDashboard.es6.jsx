class ParentDashboard extends React.Component {
  render(){
  	debugger
    return(
      <div className="row">
        <h1>{this.props.parent.name}'s dashboard</h1>
        <div className="col-sm-4">
          <InitialSetup />
        </div>
        <div className="col-sm-4">
          <SendMoney children={this.props.parent.children} />
        </div>
      </div>
    )
  }
}
