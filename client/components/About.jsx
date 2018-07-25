import React from 'react'

const About = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="5000">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="first-slide" src="/images/Slide1.png" alt="First slide"/>
          <div className="container">
            <div className="carousel-caption d-none d-md-block text-left" id='slide1'>
              <h1 className='txt'></h1>
              <p className='txt'><b className='sf'>streelfeel</b> is a digital space to help make sense of our collective emotions and experiences, reflecting particular ways of behaving, thinking and being.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide" src="/images/Slide2.png" alt="Second slide"/>
          <div className="container">
            <div className="carousel-caption d-none d-md-block text-right" id='slide2'>
              <img className="addCarousal" src="/images/AddCarousal.png" />
              <h1 className='txt'>share</h1>
              <p className='txt'>click the share button to tag your own emotional response to a space</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide" src="/images/Slide3.png" alt="Third slide"/>
          <div className="container">
            <div className="carousel-caption d-none d-md-block" id='slide3'>
              <img className="viewCarousal" src="/images/ViewCarousal.png" />
              <h1 className='txt'>explore all</h1>
              <p className='txt'>click explore to view the emotional landscapes that have been mapped by others</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="forth-slide" src="/images/Slide4.png" alt="Forth slide"/>
          <div className="container">
            <div className="carousel-caption d-none d-md-block" id='slide4'>
              <img className="areaCarousal" src="/images/AreaCarousal.png" />
              <h1 className='txt'>explore by area</h1>
              <p className='txt'>click to explore the emotional experiences by area</p>
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
