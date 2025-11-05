import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-10 text-gray-700">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">BuildPro</h3>
            <p className="text-sm leading-relaxed">
              We bring your construction dreams to life — from design to
              completion. Reliable, professional, and on time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <p className="text-sm">📍 25 Adeola Street, Lagos, Nigeria</p>
            <p className="text-sm">📞 +234 801 234 5678</p>
            <p className="text-sm">✉️ info@buildpro.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BuildPro Construction. All rights reserved.
      </div>
    </footer>
  );
}
