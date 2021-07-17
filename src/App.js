import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Test</h1> 
}

class Componets extends React.Component {
	
	
   constructor(props) {
    super(props);
    this.state = { html: '',css:'',js:'',framesrc:''}; 
  }
  
  //Change event of text area
  
  //HTML Text area change
   htmlChange = (event) => {
    this.setState({html: event.target.value});
   }
   //css Text area change
   cssChange = (event) => {
    this.setState({css: event.target.value});
   }
    //js Text area change
   jsChange = (event) => {
    this.setState({js: event.target.value});
	
   }
   componentDidMount() {
	  //Constructing the string which will act as a source code for our frame
	  this.interval = setInterval(() => this.setState({ framesrc:"<html>"+"<style>"+this.state.css+"</style><script>"+this.state.js+"</script>"+this.state.html+"</html>" }), 350);
   }
	componentWillUnmount() {
	  clearInterval(this.interval);
	}
	
  render() {
    return (
	 <div class="container">
		<div class="row h-100">
		{/*Coloum first will list files*/}
			<div class="col-2">
			<h1>Files</h1>
			<div class="list-group" id="list-tab" role="tablist">
			  <a class="list-group-item list-group-item-action active" id="list-html" data-toggle="list" href="#list-home" role="tab" aria-controls="home">
			  index.html
			  </a>
			  <a class="list-group-item list-group-item-action" id="list-css" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">
			  style.css
			  </a> 
			  <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">
			  script.js
			  </a>
		</div>
			</div>
			<div class="col-3">
			{/*colum second will have 3 text area which will be toggled when we click file name in coloum 2*/}
		<div class="tab-content" id="nav-tabContent">
		  <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
				<textarea class="form-control" onChange={this.htmlChange} rows="20" placeholder="Cool stuff goes here"></textarea>
		  </div>
		  <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
				<textarea class="form-control" onChange={this.cssChange} rows="20"></textarea>
		  </div>
		  <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
				<textarea class="form-control"  onChange={this.jsChange} rows="20"></textarea>
		  </div>
      
    </div>
			</div>
			<div class="col-7 p-3 mb-2"> 			{/*This is our third colum which have a iframe which has source as framesrc which we rendered in componenetDidmount()*/}
			  <iframe width="100%" height="100%" srcDoc={this.state.framesrc}></iframe>
			</div>
  </div> 
</div>
	);
  }
}

class Header extends React.Component {
	render() {
		return (
			<div>
			<nav class="navbar navbar-light bg-primary">
			  <span class="navbar-brand mb-0 h1">Codepen Clone</span>
			</nav>
			</div>
		);
	 }}
//***********SEE INDEX.HTML***********************************/
ReactDOM.render(<Componets />, document.getElementById('root'));
//*************^^^^^^^^^^^^^This is our comonent class which has all editor elements. It is rendered in root div which is in our index.html file.
ReactDOM.render(<Header />, document.getElementById('header'));
//************^^^^^^^^^^^^ Similarly header is also a class it also has a div id which is in index.html renders navbar.

export default App;
