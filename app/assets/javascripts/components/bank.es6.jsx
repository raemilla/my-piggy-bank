class Bank extends React.Component {
  constructor(){
    super()
    this.handleRequestTransfer=this.handleRequestTransfer.bind(this)
     this.state = {
      displayTransferForm: false
    }
    this.displayDonationForm = this.displayDonationForm.bind(this)
    this.displayDonationButton = this.displayDonationButton.bind(this)
    this.toggleDisplayTransferForm = this.toggleDisplayTransferForm.bind(this)
    this.displayTransferForm = this.displayTransferForm.bind(this)
    this.filterBanks = this.filterBanks.bind(this)
  }

    handleRequestTransfer(event){
    var amount = this.refs.amount.value
    var bank = this.refs.bank.value
    event.preventDefault()
    $.ajax({
      url: '/notifications',
      method: 'POST',
      data: {text: this.props.child.name + " requested a transfer of "
      + amount + " cents from " + this.props.bank.type + " to " + bank}
    }).done((response) => {
     
    
    })
  }

    toggleDisplayTransferForm(){
    let shouldToggleTransferForm = !this.state.displayTransferForm
    this.setState({
      displayTransferForm: shouldToggleTransferForm
    }) 
  }

    filterBanks(bank){
    if(bank.type === this.props.bank.type){
      return false
    }
    return true
  }

    displayTransferForm(){
    return(
      <div className="row">
      <form className="form-inline" onSubmit={this.handleRequestTransfer} >
      <div className="form-group">
          <label>To: </label>
          <select ref='bank'>
              {
              this.props.child.banks.filter(this.filterBanks).map((bank, idx) => <option key={idx}>{bank.type}</option>)
            }
          </select>
        </div>
        <div className="form-group">
          <label className="label-lg"> <h5>Amount:</h5> </label>
          <input type="number" className="form-control input-lg" ref='amount'/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
   
      </form>
         </div>
    )
  }

    displayDonationForm(){
       return(
         <h1>Clicked me!</h1>
        )
    }

    displayDonationButton(){
      return(
         <button type="submit" onClick={this.displayDonationForm} className="btn btn-primary btn-lg">Request to Donate</button>
        )
    }




  render () {

    return (

    	<div className="col-md-12 banks" id={this.props.bank.type}>
    	<li><h1>{this.props.bank.type}</h1></li>
    	<li><h1>{this.props.bank.balance}</h1></li>
    	<li><div className="btn-group btn-group-justified" role="group" aria-label="...">
  		<div className="btn-group" role="group">

   	  <button type="submit" onClick={this.toggleDisplayTransferForm} className="btn btn-primary btn-lg">Request Transfer</button>
      {this.state.displayTransferForm ? this.displayTransferForm() : null }
      {this.props.bank.type === "Donation" ? this.displayDonationButton() : null }
  		</div></div>

      </li>
    	</div>

    	)}
}
