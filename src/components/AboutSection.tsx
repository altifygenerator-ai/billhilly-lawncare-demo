import { FaStar } from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import { site } from "@/data/site";

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <FadeIn className="about-image">
          <img src="/images/work-8.jpg" alt="Billhilly Lawncare local lawn work" />
        </FadeIn>

        <FadeIn className="about-content" delay={0.1}>
          <p className="section-kicker">About Billhilly Lawncare</p>

          <h2>Dependable local lawn care without making it complicated.</h2>

          <p>
            Billhilly Lawncare is a local lawn care company serving Bentonville,
            Rogers, Bella Vista, and Centerton Arkansas. We are committed to
            dependable service, affordable pricing, and making your yard look its
            best.
          </p>

          <div className="veteran-card">
            <div className="veteran-heading">
              <span>
                <FaStar />
              </span>
              <h3>Veteran Owned & Operated</h3>
            </div>

            <p>
              Service Areas: Bentonville, Bella Vista, Rogers, and Centerton,
              AR.
            </p>

            <div className="area-list">
              {site.areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}