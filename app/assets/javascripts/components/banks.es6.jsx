class Banks extends React.Component {
  render () {
    return (
    	<div className="row">
    	<ul className="list-inline">
				{
					this.props.current_child.banks.map((bank, idx) => {
						return (<Bank key={idx} bank={bank} />)
					})
				}
			</ul>
			</div>

    	)
  }
}

