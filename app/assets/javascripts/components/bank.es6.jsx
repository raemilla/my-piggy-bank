class Bank extends React.Component {
  constructor(){
    super()
    this.handleRequestTransfer=this.handleRequestTransfer.bind(this)
     this.state = {
      displayTransferForm: false
    }
    this.toggleDisplayTransferForm = this.toggleDisplayTransferForm.bind(this)
    this.displayTransferForm = this.displayTransferForm.bind(this)
  }

    toggleDisplayTransferForm(){
    let shouldToggleTransferForm = !this.state.displayTransferForm
    this.setState({
      displayTransferForm: shouldToggleTransferForm
    }) 
  }

    displayTransferForm(){
    return(
      <div className="row">
      <form className="form-inline">

        <div className="form-group">
          <label className="label-lg"> <h5>Amount:</h5> </label>
          <input type="number" className="form-control input-lg" />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Transfer</button>
   
      </form>
         </div>
    )
  }

  handleRequestTransfer(event){
    debugger;
    event.preventDefault();
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
  		</div></div>

      </li>
    	</div>

    	)}
}
