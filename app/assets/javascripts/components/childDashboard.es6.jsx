class ChildDashboard extends React.Component {
  constructor(){
    super()
    this.state = {
      current_child: '',
       coins: []
    }
    this.setCoins = this.setCoins.bind(this)

  }

  componentWillMount(){
    this.setState({
			current_child: this.props.current_child
		})
  }

  componentDidMount(){

    $('.banks').droppable({
    	accept: ".coin",
    	drop: function(event,ui){
       
          bank = this.props.current_child.banks.find(function(bank){return bank.type === $(event.target).attr('id')})

    		var bankId = bank.id

    		$.ajax({
    			url: '/banks/'+bankId,
    			method: 'PUT',
    			data: {value: $(ui.draggable[0]).attr('value')}
    		})
    		.done((response)=>{
          ui.draggable[0].style.display = 'none'
 
          this.setState({
      			current_child: response,
            coins: this.state.coins
      		})
    		}.bind(this))
    	}.bind(this)
    })

  }

  setCoins(coins){
    this.setState({
        coins: this.state.coins.concat(coins)
      })
  }


	render(){
		return(
			<div>

			<UndepositedFunds current_child={this.state.current_child} />
			<ChangeMachine current_child={this.state.current_child} setCoins={this.setCoins} coins={this.state.coins} />

  		<Banks  interestAmount = {this.props.interestAmount} current_child={this.state.current_child}/>

			</div>
		)
	}
}
