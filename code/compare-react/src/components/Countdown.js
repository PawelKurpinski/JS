import React, { Component } from 'react';

class Countdown extends Component {
   
    render() {
        return (
        <div className>
            <section className="hero is-info is-fullheight is-bold has-text-centered">
                <div className="hero-body">
                	<div className="container">
                		<h1 className="title">
                			New Year is Coming Up!
                		</h1>
										<div className = "section">
										
										<nav className="level">
											<div className="level-item has-text-centered">
												<div>
													<p className="heading">Days</p>
													<p className="title">3,456</p>
												</div>
											</div>
											<div className="level-item has-text-centered">
												<div>
													<p className="heading">Hours</p>
													<p className="title">123</p>
												</div>
											</div>
											<div className="level-item has-text-centered">
												<div>
													<p className="heading">Minutes</p>
													<p className="title">456K</p>
												</div>
											</div>
											<div className="level-item has-text-centered">
												<div>
													<p className="heading">Seconds</p>
													<p className="title">789</p>
												</div>
											</div>
										</nav>
										
										</div>
                	</div>
                </div>
              </section>
          </div>
        )
    }
}
export default Countdown