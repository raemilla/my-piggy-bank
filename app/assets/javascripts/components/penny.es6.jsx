class Penny extends React.Component {
  render(){

    return(
		    <img className="coin" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/2005_Penny_Rev_Unc_D.png" value="1" height="110" width="110" data-index={this.props.index}/>
        )
  }
}
