export const load = async ({ fetch }) => {
	const res = await fetch('https://httpbin.org/json');
	console.log(res);

	const data = await res.json();

	return { data };
};