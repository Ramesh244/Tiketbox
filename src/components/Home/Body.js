import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Body.css'
import slide1 from '../Images/pic3.png'
import slide2 from '../Images/pic2.png'
import slide3 from '../Images/pic1.png'

function Body() {
    return (
        <div >

            <div className="scrolling">
                <marquee ><h2><b>Welcome to Ticket Box...</b></h2></marquee>
            </div>
            <div>
                <Carousel className='carousel-main'>
                    <Carousel.Item interval={1000}>
                        <img 
                            className="d-block"
                            src={slide1}
                            alt="First slide"
                            width="100%"
                            height="600"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block"
                            src={slide2}
                            alt="Second slide"
                            width="100%"
                            height="600"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block"
                            src={slide3}
                            alt="Third slide"
                            width="100%"
                            height="600"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}

export default Body
