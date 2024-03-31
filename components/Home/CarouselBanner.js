import { Carousel } from "react-bootstrap";
import Image from 'next/image';

export default function CarouselBanner() {
  return (
    <div style={{ width: '800px', margin: 'auto' }}>
      <Carousel>
        <Carousel.Item>
          <Image
            src="https://via.placeholder.com/800x400"
            alt="First slide"
            width={800}
            height={400}
          />
          <Carousel.Caption>
            <h3>Smart TV 4K UHD Samsung 55 `&apos;` UN55AU7000</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
            width={800}
            height={400}
          />
          <Carousel.Caption>
            <h3>Smart TV 4K UHD Samsung 55`&apos;` UN55AU7000</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://via.placeholder.com/800x400"
            alt="Third slide"
            width={800}
            height={400}
          />
          <Carousel.Caption>
            <h3>Smart TV 4K UHD Samsung 55`&apos;` UN55AU7000</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

