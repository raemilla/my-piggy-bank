class App extends React.Component {
  constructor(){
    super()
    this.displayUserComponent = this.displayUserComponent.bind(this)
  }

  displayUserComponent(){
    if(this.props["parent?"]){
      return (<ParentDashboard />) //is return necessary?
    } else {
      <ChildDashboard />
    }
  }

  render(){
    return(
      <div>
        {/* this should be bootstrapped?? */}
        <pre><code>{JSON.stringify(this.props,null,2)}</code></pre>
        {displayUserComponent()}
      </div>
    )
  }
}
