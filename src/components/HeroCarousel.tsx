"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80",
    alt: "Taj Mahal at sunrise",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=80",
    alt: "Gateway of India Mumbai",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=80",
    alt: "Hawa Mahal Jaipur",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80",
    alt: "Backwaters of Kerala",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    alt: "Himalayan mountains",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80",
    alt: "Beaches of Goa",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
    alt: "Varanasi Ghats",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920&q=80",
    alt: "Udaipur Palace",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative h-[70vh] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        className="h-full w-full swiper-container"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl drop-shadow-lg">
            Explore India with Aureo Travel
          </h1>
          <p className="mt-6 text-xl text-white md:text-2xl drop-shadow-md">
            Discover curated travel experiences across India's most iconic destinations
          </p>
        </div>
      </div>

      {/* Custom Navigation Styling */}
      <style jsx global>{`
        .swiper-container {
          position: relative;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          background: rgba(0, 0, 0, 0.5) !important;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          z-index: 20 !important;
        }
        
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 0, 0, 0.8) !important;
          transform: scale(1.15) !important;
        }
        
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 22px !important;
          font-weight: bold !important;
        }
        
        .swiper-button-disabled {
          opacity: 0.35 !important;
          cursor: not-allowed !important;
        }
        
        .swiper-pagination {
          z-index: 20 !important;
        }
        
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6 !important;
          width: 12px !important;
          height: 12px !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet:hover {
          opacity: 0.8 !important;
          transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background: white !important;
          transform: scale(1.3) !important;
        }
      `}</style>
    </section>
  );
}
