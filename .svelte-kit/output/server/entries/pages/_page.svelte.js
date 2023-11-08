import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { changeState } = $$props;
  let Firstname = "";
  let Lastname = "";
  let Username = "";
  let Password = "";
  if ($$props.changeState === void 0 && $$bindings.changeState && changeState !== void 0)
    $$bindings.changeState(changeState);
  return `<main><form><div class="container px-5 py-24 mx-auto flex flex-wrap justify-center"><div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0"><h2 class="text-gray-900 text-lg font-bold title-font " data-svelte-h="svelte-1ntrhi4">Sign Up</h2> <p class="mb-5" data-svelte-h="svelte-1f25ngx">It&#39;s quick and easy.</p> <div class="relative mb-4"><label for="firstname" class="leading-7 text-sm text-gray-600" data-svelte-h="svelte-cw236f">First Name*</label> <input type="text" placeholder="Firstname" name="firstname" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${add_attribute("value", Firstname, 0)}></div> <div class="relative mb-4"><label for="lastname" class="leading-7 text-sm text-gray-600" data-svelte-h="svelte-6yu80j">Last Name*</label> <input type="text" placeholder="Lastname" name="lastname" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${add_attribute("value", Lastname, 0)}></div> <div class="relative mb-4"><label for="username" class="leading-7 text-sm text-gray-600" data-svelte-h="svelte-n646p9">Username*</label> <input type="text" placeholder="Email address" name="username" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${add_attribute("value", Username, 0)}></div> <div class="relative mb-4"><label for="password" class="leading-7 text-sm text-gray-600" data-svelte-h="svelte-dlqp0p">Password*</label> <input type="password" placeholder="Password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"${add_attribute("value", Password, 0)}></div> <div class="relative mb-4" data-svelte-h="svelte-tzxa2g"><label for="confirmpassword" class="leading-7 text-sm text-gray-600">Confirm Password*</label> <input type="password" placeholder="Confirm Password" name="confirmpassword" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div> ${`<button type="submit" value="signup" class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" data-svelte-h="svelte-166xiyj">Sign Up</button>`} <p class="text-xs text-gray-500 my-3" data-svelte-h="svelte-1jtyk90">Already have an account?</p> <button class="flex mx-auto ml-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" data-svelte-h="svelte-1o19706">Login</button></div></div></form></main>`;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { changeState } = $$props;
  if ($$props.changeState === void 0 && $$bindings.changeState && changeState !== void 0)
    $$bindings.changeState(changeState);
  return `<main><form><div class="container px-5 py-24 mx-auto flex flex-wrap justify-center"><div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0"><h2 class="text-gray-900 text-lg font-bold title-font mb-5" data-svelte-h="svelte-1m0thlg">Login</h2> <div class="relative mb-4" data-svelte-h="svelte-1qpzu3e"><label for="username" class="leading-7 text-sm text-gray-600">Username</label> <input type="text" placeholder="Email address" id="username" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div> <div class="relative mb-4" data-svelte-h="svelte-1s0xnkk"><label for="password" class="leading-7 text-sm text-gray-600">Password</label> <input type="password" placeholder="Password" id="password" class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div> <button type="submit" class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" data-svelte-h="svelte-1d4vgxz">Login</button> <p class="text-xs text-gray-500 my-3" data-svelte-h="svelte-15bvx7u">Don&#39;t have an account?</p> <button class="flex mx-auto ml-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" data-svelte-h="svelte-zfcrn3">Sign Up</button></div></div></form></main>`;
});
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todos;
  let title = "";
  const getTodo = () => {
    fetch("https://todo-nodejs-svelte-mongodb.vercel.app/api/get-todo").then((res) => res.json()).then((data) => {
      console.log("Data: ", data);
      todos = data;
    });
  };
  getTodo();
  let editTodoId = "";
  todos = [];
  {
    console.log("Title: ", title);
  }
  return `<main><div class="flex justify-end"><button class="rounded-md text-blue-900 text-center sm:text-left sm:text-lg md:text-xl lg:text-2xl sm:pt-1 mt-1 px-1 border-2 lg:pb-1 mr-1 border-sky-900" data-svelte-h="svelte-4oe0h">Logout</button></div> <div class="mx-1 pt-[40px] lg:m-[10px] lg:p-[20px]"><p class="text-center text-blue-900 font-bold text-[40px] underline decoration-solid decoration-sky-500" data-svelte-h="svelte-1yyh79n">ToDo List</p> <div class="flex justify-center mt-20"><p class="rounded-md text-blue-900 font-bold text-center sm:text-left sm:text-lg md:text-xl lg:text-2xl sm:pt-1 pt-1 mr-3 border-2 px-2 border-sky-500" data-svelte-h="svelte-wch7is">Enter your List</p> <input type="text" class="sm:text-xs lg:text-2xl text-gray-900 rounded-lg w-[50vw] p-2 mr-3 border-2 border-sky-500" placeholder="Add Todo"${add_attribute("value", title, 0)}> ${editTodoId.length ? `<button type="button" class="sm:text-xs lg:text-2xl px-2 my-1 border-2 border-blue-900 rounded-md" data-svelte-h="svelte-1yqeia7">Done</button>` : `<button class="sm:text-xs lg:text-2xl px-2 border-2 border-blue-900 rounded-md" type="button" data-svelte-h="svelte-1c911fk">Save</button>`}</div></div> ${each(todos, (toDo, i) => {
    return `<div class="mt-[20px] flex justify-around w-[100vw]"><div class="w-[50vw] flex"><span class="sm:text-xs lg:text-2xl mr-2 py-2">${escape(i + 1)}.</span> <span class="sm:text-xs lg:text-2xl w-[50vw] py-2">${escape(toDo.title)}</span></div> <div><button class="sm:text-xs lg:text-2xl px-2 my-1 border-2 border-blue-900 rounded-md" data-svelte-h="svelte-obqivb">Edit</button> <button class="sm:text-xs lg:text-2xl ml-2 px-2 my-1 border-2 border-blue-900 rounded-md" data-svelte-h="svelte-1sbv2er">Delete</button></div> </div>`;
  })}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mypage;
  let title = "";
  const getTodo = () => {
    fetch("https://todo-nodejs-svelte-mongodb.vercel.app/api/get-todo").then((res) => res.json()).then((data) => {
      console.log("Data: ", data);
    });
  };
  getTodo();
  const handleStateChange = (data) => {
    console.log(data);
    mypage = data;
  };
  mypage = "LOADING";
  {
    console.log("Title: ", title);
  }
  return `<main>${mypage === "LOADING" ? `<h1 data-svelte-h="svelte-v881eu">loading...</h1>` : `${mypage === "SIGN_UP" ? `${validate_component(Signup, "Signup").$$render($$result, { changeState: handleStateChange }, {}, {})}` : `${mypage === "LOGIN" ? `${validate_component(Login, "Login").$$render($$result, { changeState: handleStateChange }, {}, {})}` : `${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`}`}`}</main>`;
});
export {
  Page as default
};
