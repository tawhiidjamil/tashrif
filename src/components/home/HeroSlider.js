'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slidesData, statsData } from '@/data/slides';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SLIDE_DURATION = 6000;

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, SLIDE_DURATION);

    return () => clearInterval(slideTimer);
  }, [currentSlide]);

  const slide = slidesData[currentSlide];

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="hero-slide-body"
            >
              {/* Sleek Pill Badge */}
              <div className={`hero-pill-badge ${slide.tagColor}`}>
                <i className={
                  slide.tagIcon === 'faShieldAlt' ? 'fas fa-shield-alt' :
                  slide.tagIcon === 'faAward' ? 'fas fa-award' :
                  slide.tagIcon === 'faCheckDouble' ? 'fas fa-check-double' : 'fas fa-star'
                }></i>
                <span>{slide.tag}</span>
              </div>

              {/* Title */}
              <h1 className="hero-title">
                {slide.title && `${slide.title} `}
                <span className={`hero-highlight ${slide.highlightColor}`}>
                  {slide.highlight}
                </span>{' '}
                {slide.titleEnd}
              </h1>

              {/* Description */}
              <p className="hero-subtitle">{slide.description}</p>

              {/* Sleek Action Buttons */}
              <div className="hero-btn-row">
                {slide.buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    href={btn.href}
                    target={btn.external ? '_blank' : '_self'}
                    rel={btn.external ? 'noopener noreferrer' : ''}
                    className={`btn btn-${btn.variant} hero-btn`}
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
            </motion.div>
          </AnimatePresence>

          {/* Minimalist Slider Dots (No Progress Bar) */}
          <div className="hero-dots-container">
            {slidesData.map((_, idx) => (
              <button
                type="button"
                key={idx}
                className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`স্লাইড ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Compact, Sleek Stats Bar */}
        <div className="hero-stats-bar">
          {statsData.map((stat, idx) => (
            <div key={idx} className="hero-stat-item">
              <span className="stat-value">{stat.number}</span>
              <span className="stat-text">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
