import "./home.css";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import Posts from "../../components/posts/Posts";
import Footer from "../../components/footer/Footer";

import axios from "axios"; // library used to send asynch CRUD
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function Home() {
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
		<>
			
			<div className="home">
				<Aside posts={posts} />
				<Posts posts={posts} />
				{/* posts are from setPosts */}
			</div>
		</>
	);
}
