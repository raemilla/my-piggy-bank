class WithdrawButton extends React.Component {
  constructor(){
    super()
    this.state = {
      displayForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.displayWithdrawForm = this.displayWithdrawForm.bind(this)
  }

  toggleForm(){
    let shouldToggle = !this.state.displayForm
    this.setState({
      displayForm: shouldToggle
    })
  }

  displayWithdrawForm(){
    return(
    <form className="form-inline">
      <div className="form-group">
        <select>
          <option defaultValue>{this.props.bank.type}</option>
          </select>
      </div>
      <div className="form-group">
        <label>Amount: </label>
        <input type="number" className="form-control form-control-sm" max={this.props.bank.balance}/>
      </div>
      <button type="submit" className="btn btn-primary btn-sm">submit withdraw!</button>
    </form>
    )
  }

  render(){
    return(
      <div>
        <button onClick={this.toggleForm} type="button" className="btn btn-primary btn-sm">withdraw</button>
        {this.state.displayForm ? this.displayWithdrawForm() : null }
      </div>
    )
  }
}
