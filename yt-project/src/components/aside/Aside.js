import "./aside.css";
// import { Link } from "react-router-dom";

export default function Aside() {
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
					About Dr. Hartwig Laboris sunt aute cupidatat velit magna
					velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud
					id quis proident.
				</p>
			</div>
			<div className="asideItem">
				<span className="asideTitle">Blog Articles</span>
				<ul className="asideList">
					<li className="asideListItem">
						Blog 1
						{/* <Link className="link" to="/posts?cat=Life">
							Life
						</Link> */}
					</li>
					<li className="asideListItem">
						Blog 2
						{/* <Link className="link" to="/posts?cat=Music">
							Music
						</Link> */}
					</li>
					<li className="asideListItem">
						{/* <Link className="link" to="/posts?cat=Sport">
							Sport
						</Link> */}
						Blog Title 3 is Long
					</li>
					<li className="asideListItem">
						{/* <Link className="link" to="/posts?cat=Style">
							Style
						</Link> */}
						Blog 4 is also long and wordy
					</li>
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
