import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Bullet,
  LegalBanner,
  LegalContact,
  LegalUpdated,
  headingClass,
  leadClass,
  listClass,
  paraClass,
  subHeadingClass,
} from '@/components/Legal';

export const metadata: Metadata = {
  title: 'Cookie Policy | MAGNUM AUTO',
  description:
    'How Magnum Auto FZE uses cookies and similar technologies on magnumautofz.com, what they do, and how to manage them.',
};

export default function CookiePolicy() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        <LegalBanner title="Cookie Policy" />

        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className={leadClass}>What we store on your device, and why.</h2>

            <p className={paraClass}>
              This policy covers how Magnum Auto FZE (&ldquo;Magnum Auto&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and
              similar technologies on magnumautofz.com (the &ldquo;Website&rdquo;).
            </p>
            <p className={paraClass}>
              Read it alongside our{' '}
              <a
                href="/privacy-policy"
                className="text-charcoal underline underline-offset-4 hover:text-bark"
              >
                Privacy policy
              </a>
              , which explains what we do with personal information more broadly.
            </p>

            <h2 className={headingClass}>1. What are cookies?</h2>
            <p className={paraClass}>
              A cookie is a small text file that a website drops on your device when you
              visit. It lets the site remember something about your visit, so the next
              page you open behaves the way you would expect rather than starting from
              nothing.
            </p>
            <p className={paraClass}>
              Cookies are also how a site can tell that a hundred people read a page,
              which parts of it they used, and whether anything broke along the way.
            </p>

            <h2 className={headingClass}>2. Why we use cookies</h2>
            <p className={paraClass}>
              On our site, cookies and similar technologies do the following jobs:
            </p>
            <ul className={listClass}>
              <Bullet>Keep essential parts of the Website working</Bullet>
              <Bullet>Support site security</Bullet>
              <Bullet>Remember preferences you have set</Bullet>
              <Bullet>Show us how visitors actually use the Website</Bullet>
              <Bullet>Measure how the Website performs</Bullet>
              <Bullet>Point us at things worth improving</Bullet>
              <Bullet>Surface technical faults</Bullet>
              <Bullet>Feed analytics and site optimisation</Bullet>
            </ul>
            <p className={paraClass}>
              The exact set of cookies shifts over time, as we add features, retire them,
              or change the third-party services behind the site.
            </p>

            <h2 className={headingClass}>3. Types of cookies</h2>
            <p className={paraClass}>
              The cookies on our Website fall into four broad groups.
            </p>

            <h3 className={subHeadingClass}>Essential cookies</h3>
            <p className={paraClass}>
              These keep the Website running: security, navigation, forms, and the basic
              plumbing behind them. Turn them off and parts of the site stop working,
              which is why they are treated separately from the rest.
            </p>

            <h3 className={subHeadingClass}>Preference cookies</h3>
            <p className={paraClass}>
              These remember choices you have made, so a setting you picked earlier in
              your visit is still there later on.
            </p>

            <h3 className={subHeadingClass}>Analytics cookies</h3>
            <p className={paraClass}>
              These tell us which pages get read, how people move between them, and where
              something is going wrong. It is aggregate insight, and it is the main reason
              the site gets better rather than staying the same.
            </p>

            <h3 className={subHeadingClass}>Marketing or advertising cookies</h3>
            <p className={paraClass}>
              If we run marketing, advertising, or remarketing services on the site, these
              technologies help us understand how people interact with it and reach the
              right audience with the right message. We only use them where the law
              allows, and where the relevant consent rules have been met.
            </p>

            <h2 className={headingClass}>4. Third-party cookies</h2>
            <p className={paraClass}>
              Not every cookie on the site comes from us. Some are set by the outside
              services built into the Website, covering things like:
            </p>
            <ul className={listClass}>
              <Bullet>Website analytics</Bullet>
              <Bullet>Maps and location features</Bullet>
              <Bullet>Hosting and security</Bullet>
              <Bullet>Communication tools</Bullet>
              <Bullet>Embedded content</Bullet>
              <Bullet>Performance monitoring</Bullet>
            </ul>
            <p className={paraClass}>
              Those providers handle information under their own privacy policies and
              terms, not ours. If you want to know exactly what they do with it, their own
              policies are the place to look.
            </p>

            <h2 className={headingClass}>5. Managing cookies</h2>
            <p className={paraClass}>
              Your browser gives you the controls. In most browsers you can:
            </p>
            <ul className={listClass}>
              <Bullet>See which cookies are stored</Bullet>
              <Bullet>Delete the ones already there</Bullet>
              <Bullet>Block cookies outright</Bullet>
              <Bullet>Allow cookies only from sites you choose</Bullet>
              <Bullet>Ask to be warned before a cookie is stored</Bullet>
            </ul>
            <p className={paraClass}>
              Worth knowing: block enough of them and parts of this site will not behave
              properly. That is a trade-off you get to make, but it is better made
              knowingly.
            </p>

            <h2 className={headingClass}>6. Cookie consent</h2>
            <p className={paraClass}>
              Where the law requires it, we ask for your consent before setting
              non-essential cookies on your device.
            </p>
            <p className={paraClass}>
              You can change or withdraw those preferences whenever the Website offers a
              cookie-management control. Essential cookies, the ones the site needs to run
              securely, may keep working where the law permits.
            </p>

            <h2 className={headingClass}>7. Changes to this cookie policy</h2>
            <p className={paraClass}>
              We update this policy when the cookies, technologies, services, or legal
              requirements behind our Website change.
            </p>
            <p className={paraClass}>
              Whatever is current sits on this page, with its effective date at the top.
            </p>

            <h2 className={headingClass}>8. Contact us</h2>
            <p className={paraClass}>
              Questions about the cookies we use, or about this policy? Get in touch and a
              person will answer.
            </p>

            <LegalContact />
            <LegalUpdated />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
