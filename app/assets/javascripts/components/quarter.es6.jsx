class Quarter extends React.Component {
	
  render(){
  	
    return(
			<img className="coin" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/COBREcentavosecuador2000-2.png" value="25" data-index={this.props.index}  />
        )
  }
}

// set initial style to display inline
// style={{display: this.props.display}}