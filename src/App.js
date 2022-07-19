import React from 'react'

class App extends React.Component {
	render(){
		return (
			<>
			<nav className="navbar">
      <img className="result" src="./google.png" alt="google logo" />
      <form>
        <input className="result" classtype="text" />
        <button className="result">Search</button>
      </form>
    </nav>
    <div className="results">
		</div>
		<div className="contanier">
			<small className="search-results">37 Results</small>
		<div className="result">
		<div className="site">
		<div className="res">
		 <div>
			<small>www.w3school.com</small>
		 </div>
			<h2><a href="#">JavaScript Tutorial -W3School</a></h2>
			<div>
				<p>
					Well organized and easy to understand Web building tutorials with
					lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP,
					Python, Bootstrap, Java
				</p>
			</div>
			<div>
				<ul>
					<li><a href="#">JavaScript Introduction</a></li>
					<li><a href="#">JS Functions</a></li>
					<li><a href="#">JavaScript Examples</a></li>
				</ul>
			</div>
		</div>
		<div className="res">
			<div>
				<small>developer.mozilla.org</small>
			</div>
			<h2><a href="#">JavaScript | MDN</a></h2>
			<div>
				<p>
					JavaScript(JS) is a lightweight, interpreted, or just-in-time
					compiled programming language with first-class functions. While it
					is most well-known as a scripting language for Web page. CouchDB
					and Adobe Acrbat
				</p>
			</div>
			<div>
				<ul>
					<li><a href="#">JavaScript Operator</a></li>
					<li><a href="#">JavaScript Code</a></li>
					<li><a href="#">JavaScript Meaning</a></li>
				</ul>
			</div>
		</div>
		<div className="res">
			<div>
				<small>en.Wikipedia.org</small>
			</div>
			<h2><a href="#">JavaScript -Wikipedia</a></h2>
			<div>
				<p>
					JavaScript often abbreviated JS, is a programming language that
					conforms to ECMAScript specification. JavaScript is high-level,
					often just-in-time.
				</p>
			</div>
			<div>
				<ul>
					<li><a href="#">JavaScript Online</a></li>
					<li><a href="#">JavaScript Definition</a></li>
				</ul>
			</div>
		   </div>
	    </div>
 		 </div>
		</div>
		 </>
		)
	}
}

export default App
