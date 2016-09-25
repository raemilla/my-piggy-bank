class ManageAccounts extends React.Component {
  constructor(){
    super()

    this.withdraw=this.withdraw.bind(this)
  }

  withdraw(response){
    this.props.trueWithdraw(response)
  }


  render(){
   
    return(
      <ul className="list-group">
        {
          this.props.children.map((child, idx) =>
            <ManageChildAccount child={child} key={idx} />)
        }
        <TransferButton onClick={this.toggleTransferButton} children={this.props.children}/>
        <WithdrawButton children={this.props.children} withdrawUpdateChildren={this.withdraw} />
      </ul>
    )
  }
}
