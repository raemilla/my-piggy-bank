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
          <h3 id="send-money-header" className="header">send your child money</h3>
          <form id="send-money-form" className="form" method='post' action="/transfer" ref="sendmoneyform" onSubmit={this.handleSubmit}>
            <div id="send-money-select-child" className="form-group">
              <label>Child: </label><br/>
              <select className="form-control" ref="child">
              {
                this.props.children.map((child, idx) => <option key={idx} value={child.name}> {child.name} </option>)
              }
             </select>
            </div>
            <div id="send-money-amount-input" className="form-group">
              <label>Amount: </label>
              <input ref="amount" type="number" className="form-control" id="amount" placeholder=" 
        0.00" step ="any" min = "0" required />
             </div>
            <button id="send-money-submit" type="submit" className="btn btn-primary"><span className="home-text">Send</span></button>
          </form>
          </div>
    )
  }

}
