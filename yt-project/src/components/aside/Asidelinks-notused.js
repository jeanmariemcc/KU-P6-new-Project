import Asidelink from "./Asidelink";
import "./aside.css";

export default function Asidelinks({ posts }) {
	console.log("Asidelinks.js");
	console.log(posts);

	return (
		<div>
			{posts.map((p) => (
				<Asidelink post={p} />
			))}
		</div>
	);
}
