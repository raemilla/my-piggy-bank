class ManageAccounts extends React.Component {
  render(){
    return(
      <ul className="list-group">
        {
          this.props.children.map((child, idx) =>
            <ManageChildAccount child={child} key={idx} />)
        }
      </ul>
    )
  }
}
