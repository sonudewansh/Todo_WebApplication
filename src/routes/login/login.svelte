<script>
  import { setData } from "../../helper/localstorage";

  export let changeState 

  const handleLoginBtn = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://todo-nodejs-svelte-mongodb.vercel.app/api/login", {
            method: "POST",
            body: JSON.stringify({
                Username: username,
                Password: password,
            }),
        });

        const data = await response.json();
        console.log("Response Data:", data);
        
        if (response.ok && data.success) {
          console.log(data.id);
           setData(data.id)
           location.reload()
        } else {
            console.error("Invalid login");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

</script>

<main>
  <form on:submit|preventDefault={handleLoginBtn}>
        <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center">
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-bold title-font mb-5">Login</h2>
            <div class="relative mb-4">
              <label for="username" class="leading-7 text-sm text-gray-600">Username</label>
              <input type="text" placeholder="Email address" id="username" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" placeholder="Password" id="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button on:submit={handleLoginBtn} type="submit" class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>
            <p class="text-xs text-gray-500 my-3">Don't have an account?</p>
            <button on:click={()=>changeState("SIGN_UP")} class="flex mx-auto ml-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign Up</button>
          </div>
        </div>
  </form>
</main>
