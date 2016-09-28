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
      <div>
      <h3 className="header">manage your child's accounts</h3>
      <ul className="list-group">
        {
          this.props.children.map((child, idx) =>
            <ManageChildAccount child={child} key={idx} />)
        }
        <ul className="account-buttons list-inline text-center">
          <li><TransferButton onClick={this.toggleTransferButton} children={this.props.children}
          updateBalance={this.transfer}/></li> <li><WithdrawButton children={this.props.children} withdrawUpdateChildren={this.withdraw} /></li>
        </ul>
      </ul>
      </div>
    )
  }
}
