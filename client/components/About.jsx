import React from 'react'

const About = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="2500">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="first-slide" src="/images/Slide1Trans.png" alt="First slide"/>
          <div className="container">
            <div className="carousel-caption d-none d-md-block text-left">
              <p>streelfeel is a digital space to help make sense of our collective emotions and experiences, reflecting particular ways of behaving, thinking and being.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide" src="/images/Slide2Trans.png" alt="Second slide"/>
          <div className="container">
            <div className="carousel-caption d-none d-md-block">
              <h1>share</h1>
              <p>click the share button to tag your own emotional response to a space</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide" src="/images/Slide3Trans.png" alt="Third slide"/>
          <div className="container">
            <div className="carousel-caption d-none d-md-block text-right">
              <h1>explore</h1>
              <p>click explore to view the emotional landscapes that have been mapped by others</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default About
