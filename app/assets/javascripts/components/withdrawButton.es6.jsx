class WithdrawButton extends React.Component {
  constructor(){
    super()
    this.state = {
      displayForm: false,
      displayButton: true
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.displayWithdrawForm = this.displayWithdrawForm.bind(this)
  }

  toggleForm(){
    let shouldToggle = !this.state.displayForm
    let shouldToggleButton = !this.state.displayButton
    this.setState({
      displayForm: shouldToggle,
      displayButton: shouldToggleButton
    })
  }

  displayWithdrawForm(){
    return(
    <form className="form-inline">
      <div className="form-group">
        <label>Child: </label>
        <select>
          {
            this.props.children.map((child, idx) => <option key={idx}>{child.name}</option>)
          }
          </select>
          </div>
      <div className="form-group">
        <label>From: </label>
        <select>
        <option>Investment</option>
        <option>Spending</option>
        <option>Donation</option>
        <option>Saving</option>
        </select>
      </div>
      <div className="form-group">
        <label>Amount: </label>
        <input type="number" className="form-control form-control-sm"/>
      </div>
      <button type="submit" className="btn btn-primary btn-sm">submit withdraw!</button>
    </form>
    )
  }

  render(){
    return(
      <div>
        {this.state.displayButton ? <button onClick={this.toggleForm} type="button" className="btn btn-primary btn-sm">withdraw</button> : null }
        {this.state.displayForm ? this.displayWithdrawForm() : null }
      </div>
    )
  }
}
