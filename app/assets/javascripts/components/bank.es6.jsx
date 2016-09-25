class Bank extends React.Component {
  render () {

    return (

    	<div className="col-md-12 banks" id={this.props.bank.type}>
    	<li><h1>{this.props.bank.type}</h1></li>
    	<li><h1>{this.props.bank.balance}</h1></li>
    	<li><div className="btn-group btn-group-justified" role="group" aria-label="...">
  		<div className="btn-group" role="group">
   	  <button type="submit" className="btn btn-primary">Request Transfer</button>
  		</div></div></li>
    	</div>

    	)}
}
