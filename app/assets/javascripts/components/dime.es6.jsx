class Dime extends React.Component {
  render(){

    return(
		    <img className="coin" src="http://www.usmint.gov/images/mint_programs/circulatingCoins/dime-reverse.png" value="10" height="100" width="100" data-index={this.props.index}/>
        )
  }
}
