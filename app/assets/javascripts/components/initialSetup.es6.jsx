class InitialSetup extends React.Component {
  constructor(){
    super()
    this.state = {
      displayButton: true,
      displayForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.displayForm = this.displayForm.bind(this)
    this.createChild = this.createChild.bind(this)
  }

  toggleForm(event){
    event.preventDefault()
    let shouldToggleForm = !this.state.displayForm
    let shouldToggleButton = !this.state.displayButton

    this.setState({
      displayForm: shouldToggleForm,
      displayButton: shouldToggleButton
    })

  }

  displayForm(){
    return(
      <form onSubmit={this.createChild} method="post" action="/children">
        <div className="form-group">
          <label htmlFor="childName">Name</label>
          <input type="text" className="form-control" placeholder="Enter your child's name" name="child[name]" />
        </div>
        <div className="form-group">
          <label htmlFor="childUsername">Username</label>
          <input type="text" className="form-control" placeholder="Set a username for your child" name="child[username]" />
        </div>
        <div className="form-group">
          <label htmlFor="childPassword">Password</label>
          <input type="password" className="form-control" placeholder="Set a password for your child" name="child[password]" />
        </div>
        <div className="form-group">
          <label htmlFor="childInterestRate">Interest Rate</label>
          <input type="number" className="form-control" defaultValue="2" name="interest_rate" />
        </div>
        <button type="submit" className="btn btn-primary">Add!</button>
      </form>
    )
  }

  createChild(event){
    event.preventDefault()
    $.ajax({
      method: 'post',
      url: '/children',
      data: $(event.target).serialize()
    }).done((response) => {
      console.log(response)
    })
  }

  render(){
    return(
      <div className="row">
        <div className="col-sm-8">
          {this.state.displayButton ? <button onClick={this.toggleForm} type="button" className="btn btn-primary">Add a child</button> : null }
          {this.state.displayForm ? this.displayForm() : null }
        </div>
        <div className="col-sm-2"></div>
      </div>
    )
  }
}
