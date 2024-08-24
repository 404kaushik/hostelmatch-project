import React, { useState, useEffect, useRef, useCallback } from 'react';
import pic1 from '../assets/home-01.jpg';
import pic2 from '../assets/home-02.jpg';
import pic3 from '../assets/home-03.jpg';
import pic1LQIP from '../assets/home-01-lqip.jpg';
import pic2LQIP from '../assets/home-02-lqip.jpg';
import pic3LQIP from '../assets/home-03-lqip.jpg';
import './MatchMaker.css';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const autoSlideTimerRef = useRef(null);

  const images = [pic1, pic2, pic3];
  const imagesLQIP = [pic1LQIP, pic2LQIP, pic3LQIP];

  document.addEventListener('lazyloaded', function(e) {
    e.target.style.filter = 'blur(0)';
  });

  const totalSlides = images.length;

  const updateTrackTransform = useCallback(() => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth / (totalSlides + 2);
      trackRef.current.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }
  }, [currentIndex, totalSlides]);

  const showSlide = useCallback((index) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(totalSlides);
    } else if (currentIndex === totalSlides + 1) {
      setCurrentIndex(1);
    }
  };

  const changeSlide = (direction) => {
    showSlide(currentIndex + direction);
  };

  const goToSlide = (index) => {
    showSlide(index + 1);
  };

  const resetAutoSlide = useCallback(() => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    autoSlideTimerRef.current = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  }, [currentIndex, showSlide]);

  useEffect(() => {
    updateTrackTransform();
    resetAutoSlide();

    const handleResize = () => {
      updateTrackTransform();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [updateTrackTransform, resetAutoSlide]);

  const trackStyle = {
    display: 'flex',
    transition: isTransitioning ? 'transform 0.5s ease' : 'none',
    width: `${100 * (totalSlides + 2)}%`,
  };

  const slideStyle = {
    flex: `0 0 ${100 / (totalSlides + 2)}%`,
    width: `${100 / (totalSlides + 2)}%`,
    height: '31rem',
  };

  return (
    <div className="slider-container" style={{ maxWidth: '100%', position: 'relative', margin: 'auto', height: '31rem', overflow: 'hidden' }}>
      <div className="slider-track" ref={trackRef} style={trackStyle} onTransitionEnd={handleTransitionEnd}>
        <div className="slide" style={slideStyle}>
          <img 
            src={imagesLQIP[totalSlides - 1]}
            data-src={images[totalSlides - 1]} 
            alt={`Slide ${totalSlides}`} 
            className="lazyload" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(10px)', transition: 'filter 0.1s ease-out' }} 
          />
        </div>
        {images.map((src, index) => (
          <div key={index} className="slide" style={slideStyle}>
            <img 
              src={imagesLQIP[index]}
              data-src={src} 
              alt={`Slide ${index + 1}`} 
              className="lazyload" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(10px)', transition: 'filter 0.1s ease-out' }} 
            />
          </div>
        ))}
        <div className="slide" style={slideStyle}>
          <img 
            src={imagesLQIP[0]}
            data-src={images[0]} 
            alt={`Slide 1`} 
            className="lazyload" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(10px)', transition: 'filter 0.1s ease-out' }} 
          />
        </div>
      </div>

      <button className="prev" onClick={() => changeSlide(-1)} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1 }}>&#10094;</button>
      <button className="next" onClick={() => changeSlide(1)} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1 }}>&#10095;</button>

      <div className="dots" style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center', zIndex: 1 }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex - 1 ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            style={{
              cursor: 'pointer',
              height: '15px',
              width: '15px',
              margin: '3px',
              backgroundColor: index === currentIndex - 1 ? '#717171' : '#bbb',
              borderRadius: '50%',
              display: 'inline-block',
              transition: 'background-color 0.6s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
