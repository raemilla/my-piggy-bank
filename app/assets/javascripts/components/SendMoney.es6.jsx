class SendMoney extends React.Component {

constructor(){
  super()
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event){
  event.preventDefault()
  var grab = this.refs
  var child = grab.child.value
  var amount = grab.amount.value

  $.ajax({
    url: '/transfer',
    method: 'post',
    data: {child: child, amount: amount}
  }).done((response) => {
    this.props.sendMoneyValue(response)
    this.refs.amount.value = ""
  }.bind(this))
}

render(){
  return(
      <div>
          <h2>send your child money</h2>
          <form method='post' action="/transfer" ref="sendmoneyform" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label >Child:</label>
              <select ref="child">
              {
                this.props.children.map((child, idx) => <option key={idx} value={child.name}> {child.name} </option>)
              }
             </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input ref="amount" type="number" className="form-control" id="amount" placeholder="Amount"/>
             </div>
              <button type="submit" className="btn btn-default">Submit</button>
          </form>
          </div>
    )
  }

}
