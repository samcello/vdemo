const BASE_URL = 'http://localhost:3002'

export function fetchData(){
	return fetch(`${BASE_URL}/plays`)
	.then( response => response.json())
	.then( json => { return json.videos } )
}