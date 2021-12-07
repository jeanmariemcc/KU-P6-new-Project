function loginHelper(state){
    let data = JSON.stringify(state)
		console.log(data)
		//add our fetch api
		let resources = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: data 
		  }
		return fetch("http://localhost:9999/atlas/users/login",resources).then(res=>{
			return res.json()
		})
}

export default loginHelper;