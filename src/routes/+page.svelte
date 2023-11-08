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


