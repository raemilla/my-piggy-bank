class Quarter extends React.Component {
	ComponentDidMount(){
    $('.coin').draggable()
  }
  render(){

    return(

      <p className="coin">25</p>
        )
  }
}