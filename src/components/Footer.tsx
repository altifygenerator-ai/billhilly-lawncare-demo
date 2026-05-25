import Link from "next/link";
import { FaFacebookF, FaPhone } from "react-icons/fa6";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{site.name}</h3>
          <p>
            Veteran Owned & Operated lawn care serving Bentonville, Rogers,
            Bella Vista, and Centerton Arkansas.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link href="#services">Services</Link>
          <Link href="#gallery">Recent Work</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <Link href={site.phoneHref}>
            <FaPhone /> {site.phone}
          </Link>
          <Link href={site.facebook}>
            <FaFacebookF /> Facebook
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>

        <Link href="https://hometownwebservicesar.cc" target="_blank">
          Website by Hometown Web Services
        </Link>
      </div>
    </footer>
  );
}