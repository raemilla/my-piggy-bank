class RequestTransfer extends React.Component {




render(){ 
  return(

  
      <form action="/notifications" method="post" onSubmit={this.handleSubmit}>
        <select name="review[rating]">
          <option value="Investment">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
            <input ref="amount" type="number" />
            <input ref="test" type="text" placeholder=""/>
            <input ref="description" type="text" placeholder="Description"/>
            <button type="submit">Submit</button>
      </form>
    

    )
  }


}