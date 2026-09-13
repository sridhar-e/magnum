import React from 'react';

const faqs = [
  {
    question: 'Are the parts genuine?',
    answer:
      'Yes. We specialise in genuine vehicle-manufacturer branded spare parts and lubricants sourced through established international supply networks.',
  },
  {
    question: 'Can you supply parts that are not in stock?',
    answer:
      'Yes. We handle stock requirements and forward sourcing. Availability and expected lead time are confirmed against your RFQ.',
  },
  {
    question: 'What is the minimum order?',
    answer:
      'Our standard minimum order value is USD 20,000. Magnum Auto is structured for wholesale and commercial supply rather than retail orders.',
  },
  {
    question: 'How should I send an enquiry?',
    answer:
      'Upload an Excel, CSV or PDF part-number list. Our team will review brands, quantities, pricing, availability and lead times.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full bg-shell py-14 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              FAQ
            </p>
            <h2 className="mt-6 max-w-sm font-medium text-4xl sm:text-5xl leading-[1.1] tracking-[-0.01em] text-charcoal">
              Before you send your enquiry.
            </h2>
          </div>

          {/* Right — native disclosure list, no JS needed */}
          <div className="lg:col-span-7 border-b border-charcoal/15">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group border-t border-charcoal/15 py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-medium text-xl sm:text-[1.375rem] leading-snug text-charcoal">
                    {item.question}
                  </h3>
                  {/* The plus rotates into a cross when the item is open. */}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl leading-none text-charcoal transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-2xl pr-10 text-[14px] leading-[1.7] text-ink">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
