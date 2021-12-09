import "./singlePost.css";

import { useLocation } from "react-router";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import axios from "axios";

function SinglePost() {
	const admin = "true";
	const location = useLocation();
	// console.log(location);
	// this hook - useLocation - will pass the article id in pathname
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({}); // useState hook setup with empty object
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [editMode, setEditMode] = useState(false);

	// useEffect - whenever this path changes, useEffect will launch
	useEffect(() => {
		// getPost is an internal function to useEffect because I cannot call asynch (axios) directly
		const getPost = async () => {
			const res = await axios.get("/articles/" + path);
			setPost(res.data); //setPost declared above; hook useState  - post obtains data object
			setTitle(res.data.title);
			setDescription(res.data.description);
			setImageURL(res.data.imageURL);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await axios.delete("/articles/" + path);
			window.location.replace("/");
		} catch (err) {
			console.log("could not delete the blog post");
			console.log(err);
		}
	};

	const handleEdit = async () => {
		try {
			await axios.put("/articles/" + path, {
				title,
				description,
				imageURL,
			});
			window.location.replace("/");
		} catch (err) {
			console.log("could not update the blog post");
			console.log(err);
		}
	};

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{imageURL && (
					<img className="singlePostImg" src={imageURL} alt="" />
				)}
				{editMode && (
					<>
						<div>
							<label>Image URL</label>
							<input
								type="text"
								value={imageURL}
								className="singlePostTitleInput"
								autoFocus
								onChange={(e) => setImageURL(e.target.value)}
							/>
						</div>
					</>
				)}

				{/* <img
					className="singlePostImg"
					src={imageURL}
					alt="articleimage"
				/> */}

				{/* If editMode clicked	then create an input box with current title pre-set. Else display the title as an h1 */}
				{editMode ? (
					<>
						<div>
							<label>Title</label>
							<input
								type="text"
								value={title}
								className="singlePostTitleInput"
								autoFocus
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
					</>
				) : (
					<h1 className="singlePostTitle">{title}</h1>
				)}
				{/* End of title */}

				<div className="singlePostInfo">
					<span>
						Created on: {new Date(post.createdAt).toDateString()}
					</span>
					{/* Need logic to display only if admin */}
					{admin === "true" && (
						<div className="singlePostEdit">
							<i
								className="singlePostIcon far fa-edit"
								onClick={() => setEditMode(true)}
							></i>
							<i
								className="singlePostIcon far fa-trash-alt"
								onClick={handleDelete}
							></i>
						</div>
					)}

					{/* end of need logic */}
				</div>
				{editMode ? (
					<>
						<div>
							<label>Description</label>
							<textarea
								className="singlePostDescInput"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
					</>
				) : (
					<p className="singlePostDesc">{description}</p>
				)}
				{editMode && (
					<button className="singlePostButton" onClick={handleEdit}>
						Update Changes
					</button>
				)}
			</div>
		</div>
	);
}

export default SinglePost;
