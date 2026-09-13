import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const contact = [
  { icon: 'mail', label: 'trade@magnumautofz.com', href: 'mailto:trade@magnumautofz.com' },
  { icon: 'mail', label: 'prosupply@magnumautofz.com', href: 'mailto:prosupply@magnumautofz.com' },
  { icon: 'phone', label: '+971 56 900 9877', href: 'tel:+971569009877' },
  {
    icon: 'pin',
    label: '4203E, 42nd floor, Aspin commercial tower, Sheikh Zayed Road, Dubai, UAE',
  },
];

/* Mirrors the header: one-page anchors into the homepage sections. */
const exploreLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'What We Do', href: '/#capabilities' },
  { label: 'Brands', href: '/#brands' },
  { label: 'Contact Us', href: '/#send-rfq' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

const iconProps = {
  width: 15,
  height: 15,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'shrink-0 text-[#C9A961]',
  'aria-hidden': true,
};

function Icon({ name }: { name: string }) {
  if (name === 'phone') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    );
  }

  if (name === 'pin') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...iconProps}>
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bark px-4 py-16 text-[#F5F3EE] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        {/* Brand */}
        <div>
          <Link href="/" aria-label="Magnum Auto — home" className="mb-3 inline-block">
            <Image
              src="/magnum.svg"
              alt="Magnum Auto FZE"
              width={169}
              height={44}
              /* The footer sits on bark, so the brand mark is flattened to
                 white — brightness-0 takes every fill to black, invert takes
                 it to white, and the knockouts stay transparent. */
              className="h-11 w-auto max-w-[160px] object-contain brightness-0 invert"
            />
          </Link>
          <h2 className="text-2xl font-semibold">
            Genuine automotive spare parts, trusted by buyers worldwide.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#F5F3EE]/80">
            Genuine automotive spare parts and lubricants for international wholesale
            supply, consolidated and exported from Dubai.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A961]">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#F5F3EE]/80">
            {contact.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <Icon name={item.icon} />
                {item.href ? (
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A961]">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#F5F3EE]/80">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A961]">
            Legal
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-[#F5F3EE]/80">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-[#F5F3EE]/70">
        <p>© 2026 Magnum Auto. All rights reserved.</p>
      </div>
    </footer>
  );
}
