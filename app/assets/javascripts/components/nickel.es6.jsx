class Nickel extends React.Component {
  render(){

    return(
		    <img className="coin" src="https://www.usmint.gov/kids/coinnews/circulating/images/5c2012Rev72x2.jpg" value="5" data-index={this.props.index} />
        )
  }
}
