class App extends React.Component {
  constructor(){
    super()
    this.displayUserComponent = this.displayUserComponent.bind(this)
  }

  displayUserComponent(){
    if(this.props["parent?"]){
      return (<ParentDashboard parent={this.props.current_user}/>)
    } else {
      return (<ChildDashboard current_child={this.props.current_child} />)
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
