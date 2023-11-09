<script>
  import { onMount } from 'svelte';
  import { getData, setData } from '../helper/localstorage';    //importing getData and setData from helper folder
  import Signup from './signup.svelte';
  import Login from './login/login.svelte';
  import Dashboard from './dashboard.svelte';
  

  onMount(() => {
    console.log("getData",getData())
    mypage = (getData() === null || getData() === undefined) ? "SIGN_UP" : "DASHBOARD";
  });

  $: mypage = "LOADING";
  $: todos = [];    //$: To make it reactive 

  //Fetching add-todo
  let title = "";
  $: console.log("Title: ",title);  
  const handleAddTodoBtn = async() => {
      fetch("https://todossd.vercel.app/api/add-todo", {
          method:"POST",
          body:JSON.stringify({
              title,    //Inserting data into title = ""
          }),
      })
      .then((res) => res.json())
      .then((data) => {
      console.log("Response Data:", data);
      todos = [...todos, data];   //Adding data in todos = [] to display in Todo List
      title = "";   //To show the placeholder as null in the input text
    });
  }


  //Fetching get-todo
  const getTodo = () => {
  fetch("https://todossd.vercel.app/api/get-todo")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data: ", data);
      todos = data;   //inserting data into todos = []
    });
  };
  getTodo();    //Calling Function


  //Fetching delete-todo
  const handleDeleteTodoBtn = (id) => {
  fetch("https://todossd.vercel.app/api/delete-todo", {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
  })
  .then((res) => res.json())
  .then((data) => {
      console.log("Data:", data);

      //Disaapering data from Todo List 
      let new_todos = todos.filter((item) => item._id !== id);
      todos = new_todos;
    });
  };

  let editTodoId = "";
  const handleEditBtnClick = (id) => {
  editTodoId = id;

  let todo = todos.find((item) => item._id === id);
  console.log("Todo: ", todo);
  title = todo.title;   //After clicking on Edit data will move to input placeholder
  };
  const haneleEditSubmitBtnClick = () => {
  fetch("https://todossd.vercel.app/api/edit-todo", {
    method: "POST",
    body: JSON.stringify({
      id: editTodoId,
      title: title,
    }),
  })
  .then((res) => res.json())
  .then((data) => {
  console.log("Data: ", data);
  todos = todos.map((item) => {
      if (item._id === editTodoId) {
          item.title = data.title;
          }
          return item;
          });
          title = "";
          editTodoId = "";
      });
  };
  const handleStateChange=(data)=>{
    console.log(data);
    mypage=data
  }


</script>

<main>
  {#if mypage === "LOADING"}
    <h1>loading...</h1>
  {:else if mypage === "SIGN_UP"}
    <Signup changeState={handleStateChange}/>
  {:else if mypage === "LOGIN"}
    <Login changeState={handleStateChange}/>
  {:else}
    <Dashboard/>
  {/if}
</main>


