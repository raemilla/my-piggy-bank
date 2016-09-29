class ChildDashboard extends React.Component {
  constructor(){
    super()
    this.state = {
      current_child: '',
       coins: [],
       displayRewards: false
    }
    this.setCoins = this.setCoins.bind(this);
    this.setDisplayRewards = this.setDisplayRewards.bind(this)
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
        $(this).addClass( "ui-state-highlight" )
          bank = this.props.current_child.banks.find(function(bank){return bank.type === $(event.target).attr('id')})

    		var bankId = bank.id
        var audio = $('audio')[0]
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
          audio.play()
    		}.bind(this))
    	}.bind(this)
    })

  }

  setDisplayRewards(shouldToggleRewards){
   
    this.setState({
      displayRewards: shouldToggleRewards
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

			<UndepositedFunds current_child={this.state.current_child} setDisplayRewards={this.setDisplayRewards} displayRewards={this.state.displayRewards} />
			<ChangeMachine current_child={this.state.current_child} setCoins={this.setCoins} coins={this.state.coins} />

  		<Banks  interestAmount = {this.props.interestAmount} current_child={this.state.current_child} setDisplayRewards={this.setDisplayRewards} displayRewards={this.state.displayRewards}/>

			</div>
		)
	}
}
