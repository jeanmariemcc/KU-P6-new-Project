import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">
					Atlas Health and Wellness, LLC
				</span>
				<span className="headerTitleLg">BLOG</span>
			</div>
			<img
				className="headerImg"
				src="https://s-i.huffpost.com/gen/2250882/images/o-ATLAS-SHRUGGED-facebook.jpg"
				alt="atlasheader"
			/>
		</div>
	);
}
