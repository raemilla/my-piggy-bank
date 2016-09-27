class Nickel extends React.Component {
  render(){

    return(
		    <img className="coin" src="http://www.usmint.gov/images/mint_programs/circulatingCoins/Nickel-reverse.png" value="5" height="120" width="120" data-index={this.props.index} />
        )
  }
}
