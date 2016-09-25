class ManageAccounts extends React.Component {
  constructor(){
    super()
  }


  render(){
    // debugger;
    return(
      <ul className="list-group">
        {
          this.props.children.map((child, idx) =>
            <ManageChildAccount child={child} key={idx} />)
        }
        <TransferButton onClick={this.toggleTransferButton} children={this.props.children}/>
        <WithdrawButton children={this.props.children} />
      </ul>
    )
  }
}
