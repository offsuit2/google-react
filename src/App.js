import React from 'react'

class App extends React.Component {
/*state */

	state = {
		searched:'',
		results: [
			{url: 'small url',
		title: 'Search Results',
		description: 'description',
		link: ['www.link.com']
	},
		{url: 'small url',
	   title: 'david',
	   description: 'description',
	   link: ['www.link.com']}
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
changeResult = (a) => {
	this.setState({
		results: '',
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
