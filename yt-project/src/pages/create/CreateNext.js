import { useState } from "react";
import "./create.css";
import axios from "axios";

export default function Create() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [description2, setDescription2] = useState("");
	const [imageURL2, setImageURL2] = useState("");
	const [description3, setDescription3] = useState("");
	const [imageURL3, setImageURL3] = useState("");

	const createPost = async (e) => {
		e.preventDefault();
		const newPost = {
			title,
			description,
			imageURL,
		};

		try {
			// setting a variable (newPostRes) to obtain the new post's data
			// will use the _id to re-route to single post page for confirmation
			const newPostRes = await axios.post("/articles", newPost);

			window.location.replace("/post/" + newPostRes.data._id);
		} catch (err) {
			console.log("Unable to create a new Blog Article");
			console.log(err);
		}
	};
	return (
		<div className="create">
			<h1>Create Your Blog Article Here</h1>
			<img className="createImg" src={imageURL} alt="" />

			<form className="createForm" onSubmit={createPost}>
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Title"
						type="text"
						autoFocus={true}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
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
						value={imageURL}
						onChange={(e) => setImageURL(e.target.value)}
					/>
				</div>
				<div className="createFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="createInput createText"
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>

				{/* Second Input */}
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Second Image URL"
						name="imageURL2"
						type="text"
						autoFocus={true}
						value={imageURL}
						onChange={(e) => setImageURL2(e.target.value)}
					/>
				</div>
				<div className="createFormGroup">
					<textarea
						placeholder="Second part of story"
						type="text"
						className="createInput createText"
						onChange={(e) => setDescription2(e.target.value)}
					></textarea>
				</div>

				{/* Third Input */}

				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Third Image URL"
						name="imageURL3"
						type="text"
						autoFocus={true}
						value={imageURL3}
						onChange={(e) => setImageURL3(e.target.value)}
					/>
				</div>
				<div className="createFormGroup">
					<textarea
						placeholder="Last Part of Story"
						type="text"
						className="createInput createText"
						onChange={(e) => setDescription3(e.target.value)}
					></textarea>
				</div>
				{/* end Third Input */}

				<button className="createSubmit" type="submit">
					Publish
				</button>
			</form>
		</div>
	);
}
