// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
        var AppView = React.createClass ({ 
        render: function() { 
        //console.log(the AppView is...)
        //console.log(this)
    		return (
    			<div className="pageContainer">	
	    			<img className="tardis" src="../dist/images/tardis.png"/>
	    			<Console/>
	    		</div>	
    		)
    	}
    })

        var Console = React.createClass ({

        	_forward: function() {
        		if (!this.state.ticking) {
            		var forwardYear = function() {
              			 this.setState({ 
                 		 year: this.state.year + 1,
                  		 forwardSymbol: "\u23f8", 
                  			ticking: true,                  
              			 })
           			}
          		var boundIncrementer = forwardYear.bind(this)
          		this.intervalId = setInterval(boundIncrementer,500)
        		}		

        		else {
          			clearInterval(this.intervalId)
          			this.setState({
            		forwardSymbol: '\u23E9',
            		ticking: false
          			})
        		}
        
      		},

      		_rewind: function() {
				if (!this.state.ticking) {
            		var rewindYear = function() {
              			 this.setState({ 
                 		 year: this.state.year - 1,
                  		 rewindSymbol: "\u23f8", 
                  			ticking: true,                  
              			 })
           			}
          		var boundIncrementer = rewindYear.bind(this)
          		this.intervalId = setInterval(boundIncrementer,500)
        		}		

        		else {
          			clearInterval(this.intervalId)
          			this.setState({
            		rewindSymbol: '\u23ea',
            		ticking: false
          			})
        		}

      		},

        	getInitialState: function() { 
        		return {
          			year: 2016,
          			forwardSymbol: "\u23E9",
          			rewindSymbol: "\u23ea", 
          			ticking: false
        		}
      		},

        	render: function() {
        		return (
        			<div className="console">
        				
        				<p className="year"><button className="rewindButton" onClick={this._rewind}>{this.state.rewindSymbol}</button>{this.state.year}<button className="forwardButton" onClick={this._forward}>{this.state.forwardSymbol}</button></p>
        			
        			</div>
        			)
        	}
        })
    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
