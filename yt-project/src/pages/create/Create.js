import "./create.css";

function Create() {
	return (
		<div className="create">
			<img
				className="createImg"
				src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
				alt=""
			/>
			<form className="createForm">
				<div className="createFormGroup">
					<input
						className="createInput"
						placeholder="Title"
						type="text"
						autoFocus={true}
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
						// onChange={(e) => {
						// 	setImageURL(e.target.value);
						// }}
					/>
				</div>

				<div className="createFormGroup">
					<textarea
						className="createInput createText"
						placeholder="Tell your story..."
						type="text"
						autoFocus={true}
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
