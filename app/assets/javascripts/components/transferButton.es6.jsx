class TransferButton extends React.Component {
  constructor(){
    super()
    this.state = {
      displayTransferForm: false,
      displayButton: true
    }
    this.toggleTransferForm = this.toggleTransferForm.bind(this)
    this.displayForm = this.displayForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleTransferForm(){
    let shouldToggle = !this.state.displayTransferForm
    let shouldToggleButton = !this.state.displayButton
    this.setState({
      displayTransferForm: shouldToggle,
      displayButton: shouldToggleButton
    })
  }

  handleSubmit(event){
    event.preventDefault()
    var child = this.refs.child.value,
    fromBank = this.refs.fromBank.value,
    toBank = this.refs.toBank.value,
    amount = this.refs.amount.value
    $.ajax({
      method: 'post',
      url: '/banks/transfer',
      data: {
        amount: amount,
        fromBank: fromBank,
        toBank: toBank,
        child: child
      }
    }).done((response) => {
      this.setState({
        displayTransferForm: false,
        displayButton: true
      })
    })
  }

  displayForm(){
    return(
      <form onSubmit={this.handleSubmit} className="form-inline">
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
          <select ref="fromBank">
            <option>Investment</option>
            <option>Spending</option>
            <option>Donation</option>
            <option>Saving</option>
          </select>
        </div>

        <div className="form-group">
          <label>To: </label>
          <select ref="toBank">
          <option>Investment</option>
          <option>Spending</option>
          <option>Donation</option>
          <option>Saving</option>
          </select>
        </div>

        <div className="form-group">
          <label>Amount: </label>
          <input ref="amount" type="number" className="form-control form-control-sm" />
        </div>

        <button type="submit" className="btn btn-primary">submit transfer!</button>
      </form>
    )
  }

  render(){
    return(
      <div>
        {this.state.displayButton ? <button onClick={this.toggleTransferForm} type="button" className="btn btn-primary">transfer</button> : null }
        {this.state.displayTransferForm ? this.displayForm() : null }
      </div>
    )
  }
}
