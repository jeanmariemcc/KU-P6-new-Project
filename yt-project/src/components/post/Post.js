// import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
	// export default function Post({img}) {

	return (
		<div className="post">
			<img
				className="postImg"
				src="https://s-i.huffpost.com/gen/2250882/images/o-ATLAS-SHRUGGED-facebook.jpg"
				alt="atlas"
			/>
			<div className="postInfo">
				{/* <div className="postCats"> */}
				{/* <span className="postCat"> */}
				{/* <Link className="link" to="/posts?cat=Music"> */}
				{/* Music */}
				{/* </Link> */}
				{/* </span> */}
				{/* <span className="postCat"> */}
				{/* <Link className="link" to="/posts?cat=Music"> */}
				{/* Life */}
				{/* </Link> */}
				{/* </span> */}
				{/* </div> */}
				<span className="postTitle">
					{/* <Link to="/post/abc" className="link"> */}
					Article title
					{/* </Link> */}
				</span>
				<hr />
				<span className="postDate">Created on: 11/30/2021</span>
			</div>
			<p className="postDesc">
				DescriptionLorem ipsum dolor sit amet, consectetur adipisicing
				elit. Assumenda officia architecto deserunt deleniti? Labore
				ipsum aspernatur magnam fugiat, reprehenderit praesentium
				blanditiis quos cupiditate ratione atque, exercitationem
				quibusdam, reiciendis odio laboriosam?
			</p>
		</div>
	);
}
