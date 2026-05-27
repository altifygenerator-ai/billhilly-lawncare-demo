"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";
const images = [
  "/images/work-1.jpg",
  "/images/work-2.jpg",
  "/images/work-3.jpg",
  
  "/images/work-5.jpg",
  "/images/work-6.jpg",
  "/images/work-7.jpg",
  "/images/work-8.jpg",
  "/images/work-9.jpg",
  "/images/work-10.jpg",
  "/images/work-11.jpg",
  "/images/work-12.jpg",
  "/images/work-13.jpg",
  "/images/work-14.jpg",
];

export default function GallerySection() {
  const [active, setActive] = useState(0);

  const previousImage = () => {
    setActive((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const nextImage = () => {
    setActive((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container gallery-layout">
     <FadeIn className="gallery-copy">
<SectionHeading
  kicker="Recent Lawn Work"
  title="See the kind of work we do."
  text="These are real yards we’ve worked on around Northwest Arkansas. No stock photos, no guessing — just a look at the mowing, trimming, edging, and cleanup work homeowners can expect from Billhilly Lawncare."
  light
/>

          <div className="gallery-controls">
            <button type="button" onClick={previousImage} aria-label="Previous image">
              <FaArrowLeft />
            </button>
            <button type="button" onClick={nextImage} aria-label="Next image">
              <FaArrowRight />
            </button>
          </div>
        </FadeIn>

        <FadeIn className="gallery-showcase" delay={0.1}>
          <div className="gallery-main-image">
            <img src={images[active]} alt="Billhilly Lawncare recent work" />
          </div>

          <div className="gallery-thumbs">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                className={active === index ? "active-thumb" : ""}
                onClick={() => setActive(index)}
                aria-label={`View lawn work photo ${index + 1}`}
              >
                <img src={image} alt="Billhilly Lawncare lawn work thumbnail" />
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}