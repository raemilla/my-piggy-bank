class SendMoney extends React.Component {

constructor(){
  super()
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event){
  var grab = this.refs
  var childname = grab.childname.value
  var amount = grab.amount.value
  $.ajax({
    url: '/shawntests',
    method: 'post',
    data: {child_id: childname, amount: amount}
  }).done((response) => {
    this.refs.amount.value = ""
    })
}



render(){
  return(
      <div className="container">
          <div className = "row">
          <div className="col-sm-3">
          <form ref="sendmoneyform" onSubmit={this.handleSubmit}> 
            <div className="form-group">
              <label >Child:</label>
              <select>
              {
              this.props.children.map((child, idx) => <option ref="childname" key = {idx}value={child.id}>{child.name}</option>)
              }
             </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input ref="amount"type="number" className="form-control" id="amount" placeholder="Amount"/>
             </div>
              <button type="submit" className="btn btn-default">Submit</button>
          </form> 
          </div>
          </div>
      </div>  
    )
  }

}