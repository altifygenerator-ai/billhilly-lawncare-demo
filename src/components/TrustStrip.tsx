import { FaFlagUsa, FaLeaf, FaLocationDot, FaPhone } from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";

const items = [
  { icon: <FaFlagUsa />, label: "Veteran Owned & Operated" },
  { icon: <FaLocationDot />, label: "Serving Northwest Arkansas" },
  { icon: <FaLeaf />, label: "Mowing, Weed Control & Cleanup" },
  { icon: <FaPhone />, label: "Free Quote by Phone" },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {items.map((item, index) => (
          <FadeIn delay={index * 0.06} key={item.label}>
            <div className="trust-item">
              <span>{item.icon}</span>
              <p>{item.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}