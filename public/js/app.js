'use strict'


import React from 'react';
import ReactDOM from 'react-dom';

 class MenuNavbar extends React.Component{
  render() {
	let navbar = <div className="menu">
		<ul>
	 		<li><a href="#">Link</a></li>
	 		<li><a href="#">Link</a></li>
	 		<li><a href="#">Link</a></li>
	 		<li><a href="#">Link</a></li>
	 		
		</ul>
	</div>;

    return navbar;
  }
};


class ContextMenu extends React.Component{
	render(){
		let iconMenu = 
			
              <a href="#" className="menu-anchor"></a>
          

        return iconMenu;
	}
}

class BodyCanvas  extends React.Component{
	render(){
		let context = <div className="conteudo">
				
				<h1>Look this!</h1>
				<p>My first template in React =)</p>

			</div>


		return context
	}
}

class AllApp extends React.Component{
	render(){
		return (
				<div className="wrapper">
					<div className="canvas">
						<MenuNavbar/>
						<ContextMenu/>
						<BodyCanvas/>
					</div>
				</div>
			)
	}
}

ReactDOM.render(<AllApp />, document.getElementById('content'));