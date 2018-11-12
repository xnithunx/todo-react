class ListInput extends React.Component {

   constructor(){
     super()

     this.state ={
     list: [],
     word: ""
     }

     this.changeHandler = this.changeHandler.bind(this);
     this.submitHandler = this.submitHandler.bind(this);
     this.deleteHandler = this.deleteHandler.bind(this);

   }

   changeHandler(event){

     if (event.target.value.length <= 15) {

       this.setState({
         word: event.target.value
       });

       console.log("change", event.target.value);

     }

     else {

       alert('Entries must be less than 20 characters')

     }

   }

   submitHandler(event){

     this.setState({
       word: "",
       list: [...this.state.list, this.state.word]
     })

     event.preventDefault();

   }

   deleteHandler(index){

     const list = this.state.list.filter((list, listIndex) => {
       return listIndex !== index
     })

     this.setState({list})

   }

   render() {
       // render the list with a map() here
       console.log("rendering");

       return (
         <form onSubmit={this.submitHandler}>
           <div className="todolist">
             <h1><i>To-do List</i></h1>
               <input onChange={this.changeHandler} value={this.state.word}/>
               <button>Add</button>
             <ShowList ToDoList={this.state.list} ToDelete={this.deleteHandler}/>
           </div>
         </form>
       );

   }

 }

 class ShowList extends React.Component {

   render() {

     return (
       <div>
       <br/>
         <b> Current To-dos: </b>
         <ul>
          <div>
           {this.props.ToDoList.map((List, index) =>
             <li onClick={(event) => {this.props.ToDelete(index)}} key={index}> {List} </li>)}
           </div>
         </ul>
       </div>
     )

   }

 }

 ReactDOM.render(

     <ListInput/>,
     document.getElementById('root')

 );