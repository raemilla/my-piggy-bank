class Bank extends React.Component {
  constructor(){
    super()

    this.handleRequestTransfer=this.handleRequestTransfer.bind(this)
     this.state = {
      displayTransferForm: false,
      displayDonationForm: false,
      displayTransferButton: true
    }
    this.displayDonationForm = this.displayDonationForm.bind(this)
    this.displayDonationButton = this.displayDonationButton.bind(this)
    this.toggleDisplayTransferForm = this.toggleDisplayTransferForm.bind(this)
    this.toggleDisplayDonationForm = this.toggleDisplayDonationForm.bind(this)
    this.displayTransferForm = this.displayTransferForm.bind(this)
    this.filterBanks = this.filterBanks.bind(this)
    this.handleDonateClick = this.handleDonateClick.bind(this)
    this.showInterest = this.showInterest.bind(this)
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
     this.setState({
      displayTransferForm: false,
      displayTransferButton: true
     })


      this.props.liveUpdateNotifications(response)
    

    })
  }
  toggleDisplayDonationForm(){
    let shouldToggleDonationForm = !this.state.displayTransferForm
    this.setState({
      displayDonationForm: shouldToggleDonationForm
    })

  }
    toggleDisplayTransferForm(){
    let shouldToggleTransferForm = !this.state.displayTransferForm
    let shouldToggleTransferButton = !this.state.displayTransferButton
    this.setState({
      displayTransferForm: shouldToggleTransferForm,
      displayTransferButton: shouldToggleTransferButton
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

    handleDonateClick(event){
      event.preventDefault();
       $.ajax({
      url: '/notifications',
      method: 'POST',
      data: {text: this.props.child.name + " wants to make a donation"
      }
    }).done((response) => {


    })

    }

    displayDonationForm(){
       return(
         <h1>Where Donation form goes</h1>
        )
    }

    displayDonationButton(){
      return(
         <button type="submit" onClick={this.handleDonateClick} className="btn btn-primary btn-lg">Request to Donate</button>
        )
    }







  showInterest(){

    if(this.props.bank.type === 'Investment'){

      if(this.props.interestAmount > 0){

        return(
          <div className="alert alert-warning alert-dismissible fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
      <strong>Yay!</strong> You Just earned {this.props.interestAmount} cents interest!
    </div>
        )
      }
    }
  }


  render () {

    return (

    	<div className="col-md-12 banks" id={this.props.bank.type}>
    	<li><h1>{this.props.bank.type}</h1></li>
    	<li><h1>{this.props.bank.balance}</h1></li>
      {this.showInterest()}
    	<li><div className="btn-group btn-group-justified" role="group" aria-label="...">
  		<div className="btn-group" role="group">

   	  {this.state.displayTransferButton ? <button type="submit" onClick={this.toggleDisplayTransferForm} className="btn btn-primary btn-lg">Request Transfer</button> : null}
      {this.state.displayTransferForm ? this.displayTransferForm() : null }
      {this.props.bank.type === "Donation" ? this.displayDonationButton() : null }
  		</div></div>

      </li>
    	</div>

    	)}
}
