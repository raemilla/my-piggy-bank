class InitialSetup extends React.Component {
  constructor(){
    super()
    this.state = {
      displayForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.displayForm = this.displayForm.bind(this)
  }

  toggleForm(event){
    event.preventDefault()
    let shouldToggle = !this.state.displayForm

    this.setState({
      displayForm: shouldToggle
    })
  }

  displayForm(){
    return(
      <p>toggle yay</p>
    )
  }

  render(){
    return(
      <div className="row">
        <div className="col-sm-8">
          <button onClick={this.toggleForm} type="button" className="btn btn-outline-primary">Add a child</button>
          {this.state.displayForm ? this.displayForm() : null }
        </div>
        <div className="col-sm-2"></div>
      </div>
    )
  }
}
