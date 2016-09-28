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
    $('.coin').css('z-index', '2')
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
      	<div className="row change">
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
      <div>
			<div className="row">
			
				<div className="col-md-8 col-md-offset-2">

          <h2 className="text-center">Make change</h2>
          <h4 className="text-center">Please enter an amount below</h4>

          <div className="change-machine">
            <img src="https://maxcdn.icons8.com/Share/icon/Finance//atm1600.png" className="img-rounded" alt="piggy" width="350" height="236" id="atm-pic"/>

  					<div className="form-content">
  					<form className="form-inline text-center input-group-lg" id="change-form" onSubmit={this.handleSubmit}>
  					    <input type="text" ref="amount" className="form-control font-weight-bold" placeholder="Enter Amount" id="amount-field" required/>
  					</form>
            </div>
          </div>
				</div>

        <div className="col-md-2"></div>
			</div>
      <div className="row">
        {this.loop()}
        </div>
      </div>

			)
	}
}
