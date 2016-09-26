class ManageAccounts extends React.Component {
  constructor(){
    super()

    this.withdraw=this.withdraw.bind(this)
    this.transfer=this.transfer.bind(this)
  }

  withdraw(response){
    this.props.trueWithdraw(response)
  }

  transfer(response){
    this.props.trueUpdateBalance(response)
  }


  render(){
   
    return(
      <ul className="list-group">
        {
          this.props.children.map((child, idx) =>
            <ManageChildAccount child={child} key={idx} />)
        }
        <TransferButton onClick={this.toggleTransferButton} children={this.props.children}
        updateBalance={this.transfer}/>
        <WithdrawButton children={this.props.children} withdrawUpdateChildren={this.withdraw} />
      </ul>
    )
  }
}
