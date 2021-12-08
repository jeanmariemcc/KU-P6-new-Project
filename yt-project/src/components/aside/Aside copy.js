import "./aside.css";
import Asidelinks from "./Asidelinks";
import { Link } from "react-router-dom";

export default function Aside({ posts2 }) {
	console.log(posts2);
	return (
		<div className="aside">
			<div className="asideItem">
				<span className="asideTitle">About Dr. Hartwig</span>
				<img
					className="asideImg"
					src="../../img/Headshots-DavidHartwig.webp"
					alt="drHartwig"
				/>
				<p>
					Dr. David Hartwig is the founder and owner of Atlas Health
					and Wellness, established in 2021. Over the next several
					years, David plans to reshape the concept of health and
					wellness by providing highly skilled PT directly in the
					homes of the community of Palm Beach County and beyond.
				</p>
			</div>
			<div className="asideItem">
				<span className="asideTitle">Blog Articles</span>
				<ul className="asideList">
					{/* {posts.map((p) => (
						<Asidelinks post={p} />
					))} */}
				</ul>
			</div>
			<div className="asideItem">
				<span className="asideTitle">FOLLOW US</span>
				<div className="asideSocial">
					{/* <i className="asideIcon fab fa-facebook-square"></i> */}
					<i className="asideIcon fab fa-instagram-square"></i>
					{/* <i className="asideIcon fab fa-pinterest-square"></i>
					<i className="asideIcon fab fa-twitter-square"></i> */}
				</div>
			</div>
		</div>
	);
}
