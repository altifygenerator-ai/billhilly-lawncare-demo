import Link from "next/link";
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="eyebrow">Lawn Care in Northwest Arkansas</div>

          <h1>
            Reliable lawn care that keeps your yard <span>looking clean.</span>
          </h1>

          <p>
            Professional lawn mowing, weed control, fertilization, and yard
            cleanup services for homeowners in Bentonville, Rogers, Bella Vista,
            and Centerton, Arkansas.
          </p>

          <div className="hero-buttons">
            <Link href="#contact" className="btn btn-primary">
              Get a Free Quote <FaArrowRight />
            </Link>

            <Link href={site.phoneHref} className="btn btn-secondary">
              <FaPhone /> Call Now: {site.phone}
            </Link>
          </div>

          <div className="hero-card">
            <span className="hero-pill">Veteran Owned & Operated</span>
            <span className="hero-pill">Local</span>
            <span className="hero-pill">Reliable</span>
            <span className="hero-pill">Affordable</span>
          </div>
        </div>
      </div>
    </section>
  );
}