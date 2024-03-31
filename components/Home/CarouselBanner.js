import { Carousel } from "react-bootstrap";


export default function CarouselBanner(){
    return(
        <Carousel style={{ width: '800px', margin: 'auto' }}>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>Smart TV 4K UHD Samsung 55" UN55AU7000</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>Smart TV 4K UHD Samsung 55" UN55AU7000</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>Smart TV 4K UHD Samsung 55" UN55AU7000</h3>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}