import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h1>Street Feel</h1>

      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="5000">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img className="first-slide" src="/images/city1.jpg" alt="First slide"/>
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-left">
                <h1>Street Feel</h1>
                <p>Instructions</p>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img className="second-slide" src="/images/city2.jpg" alt="Second slide"/>
            <div className="container">
              <div className="carousel-caption d-none d-md-block">
                <h1>Add emotions to the map</h1>
                <p>Instructions</p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img className="third-slide" src="/images/city3.jpg" alt="Third slide"/>
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-right">
                <h1>Explore emotions on the map</h1>
                <p>Instructions</p>
              </div>
            </div>
          </div>
        </div>
        {/* Next-Previous Buttons */}
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </div>
  )
}

export default About
