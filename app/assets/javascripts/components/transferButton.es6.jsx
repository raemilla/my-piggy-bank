
class TransferButton extends React.Component {
  constructor(){
    super()
    this.state = {
      displayTransferForm: false,
      displayButton: true,
      displayTransferFeedback:false,
      transferError: false,

    }
    this.toggleTransferForm = this.toggleTransferForm.bind(this)
    this.displayForm = this.displayForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleTransferFeedback = this.toggleTransferFeedback.bind(this)

  }

  toggleTransferForm(){
    let shouldToggle = !this.state.displayTransferForm
    let shouldToggleButton = !this.state.displayButton
    this.setState({
      displayTransferForm: shouldToggle,
      displayButton: shouldToggleButton
    })
  }

   toggleTransferFeedback(){
    this.setState({
      displayTransferFeedback: false
    })
  }



  handleSubmit(event){
    event.preventDefault()
    var child = this.refs.child.value
    fromBank = this.refs.fromBank.value
    toBank = this.refs.toBank.value
    amount = this.refs.amount.value
      if(fromBank === toBank){
      return (alert("Sorry, can't transfer to the same bank"))
    }
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
      response.error? this.setState({ transferError: true}):null
      this.setState({
        displayTransferForm: false,
        displayButton: true,
        displayTransferFeedback: true,
        blah: true
      })
      this.props.updateBalance(response);

      // this.blah()
      // tried to use fade out

    })
  }


  displayForm(){
    return(
      <form id="transfer-child-form" onSubmit={this.handleSubmit} className="form-inline">
        <div id="transfer-child-input" className="form-group">
          <label>Child: </label>
          <select className="form-control" ref="child">
            {
              this.props.children.map((child, idx) => <option key={idx}>{child.name}</option>)
            }
          </select>
        </div>
        <div className="form-group">
          <label>From: </label>
          <select className="form-control" ref="fromBank">
            <option>Investment</option>
            <option>Spending</option>
            <option>Donation</option>
            <option>Saving</option>
          </select>
        </div>

        <div className="form-group">
          <label>To: </label>
          <select className="form-control" ref="toBank">
          <option>Investment</option>
          <option>Spending</option>
          <option>Donation</option>
          <option>Saving</option>
          </select>
        </div>

        <div id="transfer-amount" className="form-group">
          <label>Amount: </label>
          <input  min = "0" step = "any" ref="amount" type="number" className="form-control form-control-sm"  placeholder="0.00" required/>
        </div>

        <button type="submit" className="btn btn-primary">submit transfer!</button>
      </form>
    )
  }

  render(){
    return(
      <div>
        {this.state.displayButton ? <button onClick={this.toggleTransferForm} type="button" className="btn btn-primary btn-lg">transfer</button> : null }
        {this.state.displayTransferForm ? this.displayForm() : null }
      {
        this.state.displayTransferFeedback && !this.state.transferError ?  <div  className="alert alert-success">
          <button  type="button" className="close"  aria-label="Close">
             <span onClick={this.toggleTransferFeedback} aria-hidden="true">&times;</span>
            </button>
          <strong >Transfer Successful</strong>
        </div> : null
      }
      </div>

    )
  }
}
