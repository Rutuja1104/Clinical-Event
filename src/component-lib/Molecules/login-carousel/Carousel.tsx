import React, { useEffect, useRef } from "react";
import "./Carousel.css";

interface CarouselInterface {
  images: any;
}

const Carousel = ({ images }: CarouselInterface) => {
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const totalImages = images.length;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 2000); // change slide every 2 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image: any, index: any) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
