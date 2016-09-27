class ChangeMachine extends React.Component {
	 constructor() {
    super();
    this.state = {
      coins: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loop = this.loop.bind(this)
  }

	componentDidUpdate(){
    $('.coin').draggable()
  }



  handleSubmit(event){
  	event.preventDefault()

  	var coins = [25, 10, 5, 1]
  	var coinArray = []
  	var remainder = this.refs.amount.value

		if(remainder > this.props.current_child.undeposited_funds){
			return (alert("Sorry, you don't have that much money"))
		}

  	coins.forEach(function(value){

  		let numOfCoins = Math.floor(remainder / value)

  		for(var i=0; i < numOfCoins; i++){
    		coinArray.push({id: i, value: value})
			}
			remainder = remainder % value

  	}.bind(this))

    this.props.setCoins(coinArray)

    this.refs.amount.value = ''
  }

   loop(){

      if(this.props.coins){
      return(
      	<div className="row">
        {
            this.props.coins.map((coin, i)=>{
							if(coin.value === 25){
                
            		return (<Quarter key={i} index={i} />)
							}else if(coin.value === 10){
								return (<Dime key={i} index={i}/>)
							}else if(coin.value === 5){
								return (<Nickel key={i} index={i}/>)
							}else if(coin.value === 1){
								return (<Penny key={i} index={i}/>)
							}     
            })   
        }
      
      </div>
      )
      }

  }



	render(){

		return(
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					<h3 className="text-center">Make change</h3>
					<form className="form-inline text-center" onSubmit={this.handleSubmit}>

						<div className="form-group">
					    <label>Amount: </label>
					    <input type="text" ref="amount" className="form-control" placeholder="enter in an amount"/>
		  			</div>
		  			<button type="submit" className="btn btn-primary">Make Change</button>

					</form>
				</div>
				{this.loop()}
			</div>

			)
	}
}
