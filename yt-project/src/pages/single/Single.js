import "./single.css";
import Aside from "../../components/aside/Aside";
import SinglePost from "../../components/singlePost/SinglePost";

import { useEffect, useState } from "react";
import axios from "axios"; // library used to send asynch CRUD

function Single() {
	const [posts, setPosts] = useState([]); // empty because have not fetched data yet
	useEffect(() => {
		// can't fetch data directly here b/c asynch,
		//so create a function to do it
		// mongodb proxy set in package.json as http://localhost:9999/atlas
		const fetchPosts = async () => {
			const res = await axios.get("/articles/");
			// console.log(res.data);
			setPosts(res.data);
		};
		fetchPosts();
	}, []);
	return (
		<div className="single">
			<Aside posts={posts} />
			<SinglePost />
		</div>
	);
}

export default Single;
