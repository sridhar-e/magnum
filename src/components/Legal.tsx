import React from 'react';

/* Shared building blocks for the legal pages (privacy policy, cookie policy). */

export const headingClass = 'mt-12 font-medium text-2xl leading-snug text-charcoal';
export const subHeadingClass = 'mt-8 font-medium text-lg leading-snug text-charcoal';
export const paraClass = 'mt-4 text-[15px] leading-[1.8] text-ink';
export const listClass = 'mt-4 space-y-2 text-[15px] leading-[1.8] text-ink';
export const leadClass =
  'max-w-2xl font-medium text-2xl leading-snug text-charcoal sm:text-3xl';
const linkClass = 'text-charcoal underline underline-offset-4 hover:text-bark';

export function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
      ></span>
      <span>{children}</span>
    </li>
  );
}

export function LegalBanner({ title }: { title: string }) {
  return (
    /* Dark band so the fixed header stays legible above the light content */
    <section className="w-full bg-bark px-6 pb-14 pt-32 sm:pb-16 sm:pt-36">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
          Effective date: 29 August 2026
        </p>
        <h1 className="mt-6 font-medium text-4xl leading-[1.15] tracking-[-0.01em] text-white sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

export function LegalContact() {
  return (
    <address className="mt-6 space-y-2 text-[15px] not-italic leading-[1.8] text-ink">
      <span className="block font-semibold text-charcoal">Magnum Auto FZE</span>
      <span className="block">
        4203E, 42nd Floor, Aspin Commercial Tower
        <br />
        Sheikh Zayed Road, Dubai, UAE
      </span>
      <span className="block">
        Email:{' '}
        <a href="mailto:trade@magnumautofz.com" className={linkClass}>
          trade@magnumautofz.com
        </a>
      </span>
      <span className="block">
        Phone / WhatsApp:{' '}
        <a href="tel:+971569009877" className={linkClass}>
          +971 56 900 9877
        </a>
      </span>
      <span className="block">
        Website:{' '}
        <a href="https://magnumautofz.com" className={linkClass}>
          magnumautofz.com
        </a>
      </span>
    </address>
  );
}

export function LegalUpdated() {
  return (
    <p className="mt-12 border-t border-charcoal/15 pt-6 text-[13px] text-ink/70">
      Last updated: 29 August 2026
    </p>
  );
}
