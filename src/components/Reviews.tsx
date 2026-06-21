import Link from "next/link";
import { FaFacebookF, FaGoogle, FaStar } from "react-icons/fa6";
import { site } from "@/data/site";

const reviews = [
  {
    name: "Emily Lynn Cooper",
    source: "Facebook Recommendation",
    icon: <FaFacebookF />,
    href: site.facebook,
    text: "He came out super fast and did a really good job at an affordable price! Thank you so much!",
  },
  {
    name: "J H",
    source: "Google Review",
    icon: <FaGoogle />,
    href: site.google,
    text: "Billhilly did a great job! Went above and beyond with service and exceeded my expectations. Definitely will use him again!",
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section section" id="reviews">
      <div className="container">
        <div className="section-heading reviews-heading">
          <p className="section-kicker">Local Reviews</p>
          <h2>Fast, fair, and trusted by local homeowners.</h2>
          <p>
            Real feedback from customers who called Billhilly Lawncare for
            dependable, affordable lawn service.
          </p>

          <div className="reviews-actions">
            <Link
              href={site.google}
              target="_blank"
              rel="noopener noreferrer"
              className="review-cta"
            >
              <FaGoogle /> View Google Profile
            </Link>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-top">
                <div>
                  <h3>{review.name}</h3>
                  <Link
                    href={review.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-source-link"
                  >
                    {review.source}
                  </Link>
                </div>

                <Link
                  href={review.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-source"
                  aria-label={review.source}
                >
                  {review.icon}
                </Link>
              </div>

              <div className="review-stars" aria-label="5 star review">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <p className="review-text">“{review.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}