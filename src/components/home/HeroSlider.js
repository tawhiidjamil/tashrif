'use client';

import { useState, useEffect, useRef } from 'react';
import { slidesData, statsData } from '@/data/slides';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const SLIDE_DURATION = 5500;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Swipe left -> next slide
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    } else if (diff < -45) {
      // Swipe right -> prev slide
      setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        {/* Main Hero Slider Container with Touch Swipe */}
        <div
          className="hero-slider-box"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slidesData.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`hero-slide-item ${isActive ? 'active' : ''}`}
                aria-hidden={!isActive}
              >
                {/* Pill Tag */}
                <div className={`slide-pill-tag ${slide.tagColor}`}>
                  <i className={
                    slide.tagIcon === 'faShieldAlt' ? 'fas fa-shield-alt' :
                    slide.tagIcon === 'faAward' ? 'fas fa-award' :
                    slide.tagIcon === 'faCheckDouble' ? 'fas fa-check-double' : 'fas fa-star'
                  }></i>
                  <span>{slide.tag}</span>
                </div>

                {/* Mobile-Proportionate Title */}
                <h1 className="slide-hero-title">
                  {slide.title && `${slide.title} `}
                  <span className={`slide-highlight ${slide.highlightColor}`}>
                    {slide.highlight}
                  </span>{' '}
                  {slide.titleEnd}
                </h1>

                {/* Subtitle */}
                <p className="slide-hero-desc">{slide.description}</p>

                {/* Sleek Buttons */}
                <div className="slide-btn-group">
                  {slide.buttons.map((btn, bIdx) => (
                    <a
                      key={bIdx}
                      href={btn.href}
                      target={btn.external ? '_blank' : '_self'}
                      rel={btn.external ? 'noopener noreferrer' : ''}
                      className={`btn btn-${btn.variant} slide-action-btn`}
                    >
                      <i className={
                        btn.icon === 'faCalculator' ? 'fas fa-calculator' :
                        btn.icon === 'faWhatsapp' ? 'fab fa-whatsapp' :
                        btn.icon === 'faArrowRight' ? 'fas fa-arrow-right' :
                        btn.icon === 'faTags' ? 'fas fa-tags' : 'fas fa-question-circle'
                      }></i>
                      <span>{btn.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Sleek Slider Navigation Bar */}
          <div className="hero-nav-controls">
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={prevSlide}
              aria-label="পূর্ববর্তী স্লাইড"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="hero-dots-list">
              {slidesData.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  className={`hero-dot-indicator ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`স্লাইড ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="hero-arrow-btn"
              onClick={nextSlide}
              aria-label="পরবর্তী স্লাইড"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Compact Quick Stats Strip */}
        <div className="hero-mini-stats-strip">
          {statsData.map((stat, idx) => (
            <div key={idx} className="mini-stat-pill">
              <strong className="mini-stat-num">{stat.number}</strong>
              <span className="mini-stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
