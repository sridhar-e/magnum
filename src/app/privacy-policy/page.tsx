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
} from '@/components/Legal';

export const metadata: Metadata = {
  title: 'Privacy Policy | MAGNUM AUTO',
  description:
    'How Magnum Auto FZE collects, uses, stores and shares personal information from magnumautofz.com and from enquiries about parts and shipments.',
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        <LegalBanner title="Privacy Policy" />

        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className={leadClass}>
              Your information, and what we do with it.
            </h2>

            <p className={paraClass}>
              Magnum Auto FZE (&ldquo;Magnum Auto&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;) takes privacy seriously, and treats
              the information you share with us as something we have been trusted with.
            </p>
            <p className={paraClass}>
              This policy sets out what we collect, why we collect it, how we store and
              protect it, and who we share it with, whether you are browsing
              magnumautofz.com (the &ldquo;Website&rdquo;) or talking to our team about
              parts and shipments.
            </p>
            <p className={paraClass}>
              By using the Website or sending us your details, you accept the practices
              described here.
            </p>

            <h2 className={headingClass}>1. About Magnum Auto</h2>
            <p className={paraClass}>
              Magnum Auto FZE is an importer and exporter of genuine automobile spare
              parts, based in Dubai, UAE. We work with customers around the world on
              sourcing, supplier coordination, warehousing and consolidation, packing and
              repacking, and delivery.
            </p>
            <p className={paraClass}>
              The business runs on reliability, accurate paperwork, straight
              communication, and relationships that last longer than a single order.
            </p>

            <h2 className={headingClass}>2. Information we collect</h2>
            <p className={paraClass}>
              Most of what we hold is information you give us yourself, when you fill in a
              form or write to our team. That usually means:
            </p>
            <ul className={listClass}>
              <Bullet>Your name</Bullet>
              <Bullet>Your company or organisation</Bullet>
              <Bullet>Email address</Bullet>
              <Bullet>Phone number</Bullet>
              <Bullet>Country or location</Bullet>
              <Bullet>Details of your business or enquiry</Bullet>
              <Bullet>Product and sourcing requirements</Bullet>
              <Bullet>Anything else you choose to include in a message to us</Bullet>
            </ul>
            <p className={paraClass}>
              Our website also records a small amount of technical information
              automatically: IP address, browser and version, device type, operating
              system, the pages you looked at, the site you arrived from, the date and
              time of your visit, and how you moved around the site. This is collected
              through cookies and similar standard web technologies.
            </p>

            <h2 className={headingClass}>3. How we use your information</h2>
            <p className={paraClass}>We use what we collect to:</p>
            <ul className={listClass}>
              <Bullet>Answer enquiries and requests</Bullet>
              <Bullet>Share information about parts and services</Bullet>
              <Bullet>Prepare quotations and commercial proposals</Bullet>
              <Bullet>Understand and fulfil sourcing requirements</Bullet>
              <Bullet>Stay in touch with customers, suppliers, and partners</Bullet>
              <Bullet>Process and coordinate orders</Bullet>
              <Bullet>
                Arrange shipping, warehousing, and consolidation where relevant
              </Bullet>
              <Bullet>Improve the website and the experience of dealing with us</Bullet>
              <Bullet>Keep the website secure and working properly</Bullet>
              <Bullet>Guard against misuse, fraud, and unauthorised activity</Bullet>
              <Bullet>Meet our legal, regulatory, and contractual obligations</Bullet>
            </ul>
            <p className={paraClass}>
              We do not repurpose personal information for something unrelated to why it
              was collected, unless the law permits or requires it.
            </p>

            <h2 className={headingClass}>4. Business communications</h2>
            <p className={paraClass}>
              When you contact us, we use your details to reply and to carry the
              conversation forward, whether that is about a quotation, a sourcing
              requirement, an order, or a shipment.
            </p>
            <p className={paraClass}>
              If you would rather not receive marketing or promotional messages from us,
              tell us and we will stop sending them. Messages tied to an active enquiry or
              order will continue.
            </p>

            <h2 className={headingClass}>5. Sharing of information</h2>
            <p className={paraClass}>
              Some information has to move beyond our own team for the work to get done.
              Depending on your enquiry or order, that can include:
            </p>
            <ul className={listClass}>
              <Bullet>Providers who support our website and IT systems</Bullet>
              <Bullet>Logistics and shipping companies</Bullet>
              <Bullet>Warehousing and fulfilment partners</Bullet>
              <Bullet>
                Suppliers, manufacturers, or authorised distributors, where a sourcing
                request requires it
              </Bullet>
              <Bullet>Professional advisers and business service providers</Bullet>
              <Bullet>
                Government bodies, regulators, or law enforcement, where the law requires
                it
              </Bullet>
            </ul>
            <p className={paraClass}>
              We do not sell personal information. Where we pass information to a partner
              or provider, we expect it to be handled properly and used only for the
              purpose it was shared for.
            </p>

            <h2 className={headingClass}>6. International data transfers</h2>
            <p className={paraClass}>
              Sourcing and distribution is international work. Our customers, suppliers,
              logistics partners, and service providers sit in different countries, so
              information sometimes crosses borders.
            </p>
            <p className={paraClass}>
              When it does, we take reasonable steps to see that the transfer is handled
              in line with the privacy and data-protection rules that apply.
            </p>

            <h2 className={headingClass}>7. Data security</h2>
            <p className={paraClass}>
              We apply reasonable technical and organisational measures to protect
              personal information against unauthorised access, alteration, disclosure,
              loss, or misuse.
            </p>
            <p className={paraClass}>
              That said, no electronic transmission or storage is completely secure.
              Anything sent over the internet carries some inherent risk, and we would
              rather be plain about that than promise otherwise.
            </p>

            <h2 className={headingClass}>8. Data retention</h2>
            <p className={paraClass}>
              We keep personal information only as long as we genuinely need it: to do
              what this policy describes, to maintain business and transaction records, to
              settle disputes, to enforce agreements, or to satisfy legal and regulatory
              requirements.
            </p>
            <p className={paraClass}>
              Once it is no longer needed, we delete it securely or anonymise it where
              that makes sense.
            </p>

            <h2 className={headingClass}>9. Third-party websites</h2>
            <p className={paraClass}>
              Our website links out to other sites and services from time to time. We do
              not control them, and we are not responsible for their content, security, or
              privacy practices.
            </p>
            <p className={paraClass}>
              Before handing over personal information on any of those sites, read their
              privacy policy.
            </p>

            <h2 className={headingClass}>10. Your privacy rights</h2>
            <p className={paraClass}>
              Depending on where you are and which laws apply, you may be able to:
            </p>
            <ul className={listClass}>
              <Bullet>Ask what personal information we hold about you</Bullet>
              <Bullet>Ask us to correct anything inaccurate or incomplete</Bullet>
              <Bullet>Ask us to delete information, where the law allows it</Bullet>
              <Bullet>Ask us to restrict how we process it</Bullet>
              <Bullet>Object to a particular use of your information</Bullet>
              <Bullet>Withdraw consent, where the processing rests on consent</Bullet>
              <Bullet>Ask how your information is being processed</Bullet>
            </ul>
            <p className={paraClass}>
              Some of these rights come with legal or regulatory limits. To make a
              request, contact us using the details below and we will take it from there.
            </p>

            <h2 className={headingClass}>11. Children&rsquo;s privacy</h2>
            <p className={paraClass}>
              This website and our services are meant for businesses and professional
              buyers. We do not knowingly collect personal information from children.
            </p>
            <p className={paraClass}>
              If you believe a child has sent us personal information, contact us and we
              will deal with it.
            </p>

            <h2 className={headingClass}>12. Changes to this privacy policy</h2>
            <p className={paraClass}>
              We update this policy when our business, website, services, technology, or
              legal obligations change.
            </p>
            <p className={paraClass}>
              The current version always sits on this page with its effective date at the
              top. It is worth checking back now and then.
            </p>

            <h2 className={headingClass}>13. Contact us</h2>
            <p className={paraClass}>
              Questions about this policy, or a privacy request you would like us to act
              on? Write to us and a person will answer.
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
