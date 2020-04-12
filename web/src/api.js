import xf from './xfetch'
window.props = { 
	title: 'GDIndex', 
	default_root_id: 'root', 
	api: "http://localhost:8080", 
	upload: false 
	};

const headers = {}
if (localStorage.token) {
	headers.Authorization = 'Basic ' + localStorage.token
}
console.log(window.props);
export default xf.extend({
	baseURI: window.props.api,
	headers
})
