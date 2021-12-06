import "./single.css";
import Aside from "../../components/aside/Aside";
import SinglePost from "../../components/singlePost/SinglePost";

function Single() {
	return (
		<div className="single">
			<Aside />
			<SinglePost />
		</div>
	);
}

export default Single;
