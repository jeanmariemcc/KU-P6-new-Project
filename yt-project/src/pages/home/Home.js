import "./home.css";
import Header from "../../components/header/Header";
import Aside from "../../components/aside/Aside";
import Posts from "../../components/posts/Posts";

export default function Home() {
	return (
		<>
			<Header />

			<div className="home">
				<Aside />
				<Posts />
			</div>
		</>
	);
}
