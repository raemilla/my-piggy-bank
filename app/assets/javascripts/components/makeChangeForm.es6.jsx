class ChangeMachine extends React.Component {
	 constructor() {
    super();
    this.state = {
      coins: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loop = this.loop.bind(this)
  }

	ComponentDidUpdate(){

  }

  handleSubmit(event){
  	event.preventDefault()

  	var coins = [25, 10, 5]
  	var coinArray = []
  	var remainder = this.refs.amount.value
  	coins.forEach(function(value){

  		let numOfCoins = Math.floor(remainder / value)

  		for(var i=0; i < numOfCoins; i++){
    		coinArray.push(value)
			}
			remainder = remainder % value

  	}.bind(this))

  	this.setState({
        coins: coinArray
      })

  }

   loop(){

      if(this.state.coins){

      return(
      	<div className="row">
        {
            this.state.coins.map((coin)=>{
            return (<Quarter />)
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
