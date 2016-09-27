class InitialSetup extends React.Component {
  constructor(){
    super()
    // this.toggleForm = this.toggleForm.bind(this)
    this.displayForm = this.displayForm.bind(this)
    this.createChild = this.createChild.bind(this)
    this.createNewChild = this.createNewChild.bind(this)
  }

  // toggleForm(event){
  //   event.preventDefault()
  //   let shouldToggleForm = !this.state.displayForm
  //   let shouldToggleButton = !this.state.displayButton
  //
  //   this.setState({
  //     displayForm: shouldToggleForm,
  //     displayButton: shouldToggleButton
  //   })
  //
  // }

  displayForm(){
    return(
      <form onSubmit={this.createChild}  method="post" action="/children">
        <div className="form-group">
          <label htmlFor="childName">Name</label>
          <input type="text" className="form-control" placeholder="Enter your child's name" name="child[name]" />
        </div>
        <div className="form-group">
          <label htmlFor="childUsername">Username</label>
          <input type="text" className="form-control" placeholder="Set a username for your child" name="child[username]" />
        </div>
         <div className="form-group">
          <label htmlFor="childSaveFor">Save For</label>
          <input type="text" className="form-control" placeholder="Set a saving item for your child" name="child[save_item]" />
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

  createNewChild(event){
    event.preventDefault();
  }

  createChild(event){
    event.preventDefault()
    $.ajax({
      method: 'post',
      url: '/children',
      data: $(event.target).serialize()
    }).done((response) => {
      this.props.UpdateManageChildAccounts(response)
      this.props.toggleSend()
    })
  }

  render(){
    return(
      <div className="row">
        <div className="col-sm-8">
          <h3 className="header">add a child</h3>
          {this.displayForm()}
        </div>
        <div className="col-sm-2"></div>
      </div>
    )
  }
}
