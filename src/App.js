import React from 'react'

class App extends React.Component {
/*state */

	state = {
		searched:'',
		results: [
		{
		 url: 'www.goodbye.com',
		 title: 'Search Results',
		 description: 'description',
		 link: ['www.linkplop.com']
	},{
		 url: 'www.hello.com',
	   title: 'Welcom to JavaScript',
	   description: 'description gg',
	   link: ['www.link.com']
	}, {
	   url: 'www.Whatup.com',
	   title: 'JavaScript Home',
	   description: 'ggg',
	   link: ['www.shrinks.com']
  }
 ]
}
/*methods */

/*searchbar */
search = (e) => {
	this.setState({
		searched: e.target.value,
	})
}
/* change the results*/
changeResult = (e) => {
	this.setState({
		results: this.state.results.filter(e => e.description.includes(this.state.searched))
	})
}
/*render.. veiw */
	render(){
		return (
			<>
     {/* Nav */}

			<nav className="navbar">
      <img className="result" src="./google.png" alt="google logo" />
      <form>
			{/*searchbar*/}

        <input className="result" classtype="text" onChange={(e) => this.search(e)}/>
        <button className="result" onClick={() => this.changeResult()} type="button">Search</button>
      </form>
    </nav>
		{/* Reuslts */}

    <div className="results">
		</div>
		<div className="contanier">
			<small className="search-results">{this.state.url} Results</small>
			{this.state.results.map(result => (
		<div className="result">
			<div className="site">
				<div className="res">
					<div>
						<small>{result.url}</small>
					</div>
					<h2><a href="#">{result.title}</a></h2>
					<div>
						<p>{result.description}</p>
					</div>
					<div>
						<ul>
							<li><a href="#">{result.link}</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	  ))}
	</div>
</>
	 )
	}
}

export default App
