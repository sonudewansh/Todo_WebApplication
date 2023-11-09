<script>
  import { setData } from "../helper/localstorage";

  export let changeState 
  
  let Firstname = "";
  let Lastname = "";
  let Username = "";
  let Password = "";
  let isSubmitted = false;

    const handleSubmitBtn = async () => {
    if (Firstname && Lastname && Username && Password ) {
        try {
            const response = await fetch("https://todossd.vercel.app/api/sign-up", {
                method: "POST",
                body: JSON.stringify({
                    Firstname,
                    Lastname,
                    Username,
                    Password
                }),
            });
            const data = await response.json();
            console.log("Response Data:", data.id);

            if (response.ok) {
                setData(data.id);
                // location.reload();
            } else {
                console.error("Signup failed");
            }
            isSubmitted = true;

        } catch (error) {
            console.error("Error:", error);
        }
    } else {
        console.error("Empty fields");
    }
};
</script>

<main>
  <form on:submit|preventDefault={handleSubmitBtn}>
        <div class="container px-5 py-24 mx-auto flex flex-wrap justify-center">
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-bold title-font ">Sign Up</h2>
            <p class="mb-5">It's quick and easy.</p>
            <div class="relative mb-4">
              <label for="firstname" class="leading-7 text-sm text-gray-600">First Name*</label>
              <input bind:value={Firstname} type="text" placeholder="Firstname" name="firstname" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="lastname" class="leading-7 text-sm text-gray-600">Last Name*</label>
              <input bind:value={Lastname} type="text" placeholder="Lastname" name="lastname" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="username" class="leading-7 text-sm text-gray-600">Username*</label>
              <input bind:value={Username} type="text" placeholder="Email address" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">Password*</label>
              <input bind:value={Password} type="password" placeholder="Password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="confirmpassword" class="leading-7 text-sm text-gray-600">Confirm Password*</label>
              <input type="password" placeholder="Confirm Password" name="confirmpassword" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            {#if isSubmitted}
            <button type="submit" value="signup" class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign Up Completed</button>
            {:else}
            <button type="submit" value="signup" on:submit={handleSubmitBtn} class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign Up</button>
            {/if}
            <p class="text-xs text-gray-500 my-3">Already have an account?</p>
            <button on:click={()=>changeState("LOGIN")} class="flex mx-auto ml-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Login</button>
          </div>
        </div>
  </form>
</main>

