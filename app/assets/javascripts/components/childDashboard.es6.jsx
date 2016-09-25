class ChildDashboard extends React.Component {
 
  componentDidMount(){

    $('body').css('color', 'green')

    $('#Saving').droppable({
    	accept: ".coin",
    	drop: function(event,ui){
    		var childId = this.props.current_child.id
    		var bankId = this.props.current_child.banks[2].id
    		$.ajax({
    			url: '/children/'+childId+'/banks/'+bankId,
    			method: 'PUT',
    			data: {value: $(ui.draggable[0]).text()}
    		})
    		.done((response)=>{
    			ui.draggable.remove();
    		})
    	}.bind(this)
    })

    // $('#Investment').droppable({
    // 	accept: ".coin",
    // 	drop: function(event,ui){
    // 		var childId = this.props.current_child.id
    // 		var bankId = this.props.current_child.banks[0].id
    // 		$.ajax({
    // 			url: '/children/'+childId+'/banks/'+bankId,
    // 			method: 'PUT',
    // 			data: {value: $(ui.draggable[0]).text()}
    // 		})
    // 		.done((response)=>{
    // 			ui.draggable.remove();
    // 		})
    // 	}.bind(this)
    // })

  //   $('#bank_account').droppable({
  //   accept: ".coin",
  //   drop: function(event, ui){


  //     $.ajax({
  //       url: '/banks',
  //       method: 'post',
  //       data: {value: ui.draggable.attr('value')}
  //     }).done(function(response){
  //       $('.deposit_amount').html(response["remainder"])
  //       $('.account-total').html(response["total"])
  //       ui.draggable.remove();
  //     })

  //   },

  // })
  }

	render(){

		return(
			<div>
			<UndepositedFunds current_child={this.props.current_child} />
			<ChangeMachine />
			<Banks current_child={this.props.current_child}/>
			</div>
		)
	}
}
