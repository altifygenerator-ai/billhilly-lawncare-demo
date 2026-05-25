import {
  FaLeaf,
  FaScissors,
  FaSeedling,
  FaTruckRampBox,
} from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
const services = [
  {
    icon: <FaScissors />,
    title: "Lawn Mowing",
    text: "Professional lawn mowing service to keep your yard looking clean and healthy.",
  },
  {
    icon: <FaLeaf />,
    title: "Weed Control",
    text: "Weedeating and weed removal around fences, sidewalks, and landscaping.",
  },
  {
    icon: <FaSeedling />,
    title: "Fertilization",
    text: "Lawn fertilization to promote thick, green grass throughout the season.",
  },
  {
    icon: <FaTruckRampBox />,
    title: "Spring & Fall Cleanup",
    text: "Leaf removal, debris cleanup, and seasonal yard maintenance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section section-light" id="services">
      <div className="container">
<FadeIn>
  <SectionHeading
    kicker="Lawn Care Services"
    title="Lawn care services in Northwest Arkansas."
    text="Billhilly Lawncare provides reliable lawn care services for homeowners in Bentonville, Rogers, Bella Vista, and Centerton, Arkansas."
  />
</FadeIn>

        <div className="services-grid">
          {services.map((service, index) => (
            <FadeIn delay={index * 0.08} key={service.title}>
              <article className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}