class Bank extends React.Component {
  render () {
  	debugger
    return (
    	<div className="col-sm-3">
    	<li><h1>{this.props.bank.type}</h1></li>
    	<li><h1>{this.props.bank.balance}</h1></li>
    	<li><div class="btn-group btn-group-justified" role="group" aria-label="...">
  		<div class="btn-group" role="group">
   	  <button type="submit" className="btn btn-primary">Request Transfer</button>
  		</div></div></li>
    	</div>
    	)}
}

