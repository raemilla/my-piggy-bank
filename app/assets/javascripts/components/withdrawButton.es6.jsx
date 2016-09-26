class WithdrawButton extends React.Component {
  constructor(){
    super()
    this.state = {
      displayForm: false,
      displayButton: true
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.displayWithdrawForm = this.displayWithdrawForm.bind(this)
    this.withdrawMoney = this.withdrawMoney.bind(this)
  }

  toggleForm(){
    let shouldToggle = !this.state.displayForm
    let shouldToggleButton = !this.state.displayButton
    this.setState({
      displayForm: shouldToggle,
      displayButton: shouldToggleButton
    })
  }

  withdrawMoney(event){
    event.preventDefault()
    $.ajax({
      url:'/banks/withdraw',
      method: 'post',
      data: {amount: this.refs.amount.value, child: this.refs.child.value, banktype: this.refs.bankType.value }
    }).done((response) => {
      this.props.withdrawUpdateChildren(response)
      this.refs.amount.value = ""
      this.setState({
        displayForm: false,
        displayButton: true
      })
    }.bind(this))
  }

  displayWithdrawForm(){
    return(
    <form onSubmit={this.withdrawMoney}className="form-inline">
      <div className="form-group">
        <label>Child: </label>
        <select ref="child">
          {
            this.props.children.map((child, idx) => <option key={idx}>{child.name}</option>)
          }
          </select>
          </div>
      <div className="form-group">
        <label>From: </label>
        <select ref="bankType">
        <option>Investment</option>
        <option>Spending</option>
        <option>Donation</option>
        <option>Saving</option>
        </select>
      </div>
      <div className="form-group">
        <label>Amount: </label>
        <input ref="amount" type="number" className="form-control form-control-sm"/>
      </div>
      <button type="submit" className="btn btn-primary">submit withdraw!</button>
    </form>
    )
  }

  render(){
    return(
      <div>
        {this.state.displayButton ? <button onClick={this.toggleForm} type="button" className="btn btn-primary">withdraw</button> : null }
        {this.state.displayForm ? this.displayWithdrawForm() : null }
      </div>
    )
  }
}
