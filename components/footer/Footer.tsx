export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Investors</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>Customer Support</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="font-semibold mb-3">Policy</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Refund Policy</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Contact / Office */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <li>Email: support@eromamart.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Registered Office:</li>
            <li>
              Sonipat, Haryana, India
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)] py-4 text-center text-sm text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} EromaMart. All rights reserved.
      </div>

    </footer>
  );
};