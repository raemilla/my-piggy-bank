class TransferButton extends React.Component {
  constructor(){
    super()
    this.state = {
      displayTransferForm: false,
      displayButton: true
    }
    this.toggleTransferForm = this.toggleTransferForm.bind(this)
    this.displayForm = this.displayForm.bind(this)
  }

  toggleTransferForm(){
    let shouldToggle = !this.state.displayTransferForm
    let shouldToggleButton = !this.state.displayButton
    this.setState({
      displayTransferForm: shouldToggle,
      displayButton: shouldToggleButton
    })
  }

  displayForm(){
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
          <label>To: </label>
          <select>
          <option>Investment</option>
          <option>Spending</option>
          <option>Donation</option>
          <option>Saving</option>
          </select>
        </div>

        <div className="form-group">
          <label>Amount: </label>
          <input type="number" className="form-control form-control-sm" />
        </div>

        <button type="submit" className="btn btn-primary btn-sm">submit transfer!</button>
      </form>
    )
  }

  render(){
    return(
      <div>
        {this.state.displayButton ? <button onClick={this.toggleTransferForm} type="button" className="btn btn-primary btn-sm">transfer</button> : null }
        {this.state.displayTransferForm ? this.displayForm() : null }
      </div>
    )
  }
}
