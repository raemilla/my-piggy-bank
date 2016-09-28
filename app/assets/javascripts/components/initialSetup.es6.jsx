class InitialSetup extends React.Component {
  constructor(){
    super()
    this.displayForm = this.displayForm.bind(this)
    this.createChild = this.createChild.bind(this)
    this.createNewChild = this.createNewChild.bind(this)
  }


  displayForm(){
    return(
      <form id="initial-setup" onSubmit={this.createChild}  method="post" action="/children">
        <div className="form-group">
          <label htmlFor="childName">Name</label>
          <input id="input-child-name" type="text" className="form-control" placeholder="Enter your child's name" name="child[name]" />
        </div>
        <div id="input-child-username" className="form-group">
          <label htmlFor="childUsername">Username</label>
          <input type="text" className="form-control" placeholder="Set a username for your child" name="child[username]" />
        </div>
         <div id="input-save-for" className="form-group">
          <label htmlFor="childSaveFor">Save For</label>
          <input type="text" className="form-control" placeholder="Set an item for your child to redeem from the savings bank" name="child[save_item]" />
        </div>
        <div id="input-child-password" className="form-group">
          <label htmlFor="childPassword">Password</label>
          <input type="password" className="form-control" placeholder="Set a password for your child" name="child[password]" />
        </div>
        <div id="interest-input" className="form-group">
          <label htmlFor="childInterestRate">Interest Rate</label>
          <input type="number" className="form-control" defaultValue="2" name="interest_rate" /><span id="percent" className="input-group-addon">%</span>
        </div>
        <button id="add-child-button" type="submit" className="btn btn-primary">Add!</button>
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
        <div>
          <h3 className="header">add a child</h3>
          {this.displayForm()}
        </div>
    )
  }
}
