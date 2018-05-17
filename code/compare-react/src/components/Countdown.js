import React, { Component } from 'react';
import moment from 'moment';

class Countdown extends Component {
  constructor(props){
    super(props)

  

    this.state = {
      interval: this.getRemainingTime()
    }
  }

  getRemainingTime() {   /* moment is a library witch we nedd to install using npm */
    let now = moment(),
        newYear =  moment({year: now.year()+ 1}),
        diff = newYear.diff(now)
    return moment.duration(diff)
  }  

    // let now = new Date(),
    // newYear = new Date(now.getFullYear() + 1, 0, 1) 
    // /* +1 because we will compare current date with the one in a year 
    // or do sth like this ;) 0 i January and on is the first */
    // console.log(now, newYear) 


	render() {
    return (
    <section className="hero is-success is-fullheight has-text-centered">
   	 <div className="hero-body">
      <div className="container">
        <h1 className="title">
          New Year is comming up!
        </h1>
        <div className='section'>
                  <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">DAYS</p>
                <p className="title">3,456</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">HOURS</p>
                <p className="title">123</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">MINUTES</p>
                <p className="title">456K</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">SECONDS</p>
                <p className="title">789</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
	);
	}
}

export default Countdown;