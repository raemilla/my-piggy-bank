class TransferButton extends React.Component {
  constructor(){
    super()
    this.state = {
      displayTransferForm: false
    }
    this.toggleTransferForm = this.toggleTransferForm.bind(this)
    this.displayForm = this.displayForm.bind(this)
    this.filterBanks = this.filterBanks.bind(this)
  }

  toggleTransferForm(){
    let shouldToggle = !this.state.displayTransferForm
    this.setState({
      displayTransferForm: shouldToggle
    })
  }

  filterBanks(bank){
    if(bank.type === this.props.bank.type){
      return false
    }
    return true
  }

  displayForm(){
    return(
      <form className="form-inline">
        <div className="form-group">
          <label>From: </label>
          <select>
            <option defaultValue></option>
          </select>
        </div>

        <div className="form-group">
          <label>To: </label>
          <select>
            {
              this.props.banks.filter(this.filterBanks).map((bank, idx) => <option key={idx}>{bank.type}</option>)
            }
          </select>
        </div>

        <div className="form-group">
          <label>Amount: </label>
          <input type="number" className="form-control form-control-sm" max={this.props.bank.balance}/>
        </div>

        <button type="submit" className="btn btn-primary btn-sm">submit transfer!</button>
      </form>
    )
  }

  render(){
    return(
      <div>
        <button onClick={this.toggleTransferForm} type="button" className="btn btn-primary btn-sm">transfer</button>
        {this.state.displayTransferForm ? this.displayForm() : null }
      </div>
    )
  }
}
