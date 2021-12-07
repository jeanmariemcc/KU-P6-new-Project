import "./create.css";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import sendPost from "../../Helpers/sendPost";

function Create() {
	const navigate = useNavigate();
	const [description, setDescription] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [title, setTitle] = useState("");
	const dateCreated = new Date().toLocaleDateString();
	// const changeHandler = (event) => {
	// 	//console.log(event.target)
	// 	setPost(event.target.value);
	// };
	const submitHandler = (event) => {
		event.preventDefault();
		sendPost(description, title, imageURL, dateCreated).then((res) => {
			navigate("/");

			// props.addPost();
		});
	};

	return (
		<div className="create">
			<img
				className="createImg"
				src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			<form className="createForm" onSubmit={submitHandler}>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Title"
						type="text"
						autoFocus={true}
						name="title"
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</div>
				<div className="createFormGroup">
					{/* Actually want the image URL here */}

					<input
						className="createInput"
						placeholder="Image URL"
						name="imageURL"
						type="text"
						autoFocus={true}
						// value={imageURL}
						onChange={(e) => {
							setImageURL(e.target.value);
						}}
					/>
				</div>

				<div className="createFormGroup">
					<textarea
						className="createInput createText"
						placeholder="Tell your story..."
						type="text"
						autoFocus={true}
						name="description"
						onChange={(e)=>{
							setDescription(e.target.value);
						}}
					/>
				</div>
				<div className="createFormGroup">
					<button className="createSubmit" type="submit">
						Publish
					</button>
				</div>
			</form>
		</div>
	);
}

export default Create;
