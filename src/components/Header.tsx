import Link from "next/link";
import { FaFacebookF, FaPhone } from "react-icons/fa6";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="site-header clean-header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo">
            {site.name}
            <span>{site.tagline}</span>
          </Link>

          <nav className="nav-links">
            {site.nav.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href={site.facebook} className="icon-btn" aria-label="Facebook">
              <FaFacebookF />
            </Link>

            <Link href={site.phoneHref} className="phone-btn">
              <FaPhone />
              {site.phone}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}