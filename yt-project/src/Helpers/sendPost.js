function sendPost(description, title, imageURL, dateCreated) {
	const url = "http://localhost:9999/atlas/articles/";
	// console.log(`dateCreated passed to sendPost.js ${dateCreated}`);
	let data = JSON.stringify({
		description,
		title,
		imageURL,
		dateCreated,
	});
	let resources = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "Bearer "+ activeUser.token
		},
		body: data,
	};
	console.log(data);

	return fetch(url, resources).then((res) => res.json());
}

export default sendPost();