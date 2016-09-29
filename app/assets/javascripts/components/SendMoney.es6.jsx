class SendMoney extends React.Component {

constructor(){
  super()
  this.state = {
      sendMoneyFeedback  : false
    }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.displaySendMoneyFeedback = this.displaySendMoneyFeedback.bind(this)  
  this.toggleSendMoneyFeedback = this.toggleSendMoneyFeedback.bind(this) 
}


displaySendMoneyFeedback(){
     return( <div  className="alert alert-success blah ">
          <button  type="button" className="close"  aria-label="Close">
             <span onClick={this.toggleSendMoneyFeedback} aria-hidden="true">&times;</span>
            </button>
          <strong >Your child's money is on its way!</strong>
        </div> 
        )
  }

  toggleSendMoneyFeedback (){
    this.setState({ sendMoneyFeedback: false})
    this.props.toggleAccounts()
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
    this.setState({ sendMoneyFeedback: true})
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
          {this.state.sendMoneyFeedback? this.displaySendMoneyFeedback(): null}
          </div>
    )
  }

}
