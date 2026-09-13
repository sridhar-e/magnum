import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadyToSource from '@/components/ReadyToSource';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Resources | MAGNUM AUTO',
  description:
    'Notes on sourcing, consolidation and export from the Magnum Auto trade desk in Dubai.',
};

export default function Resources() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Dark band keeps the fixed header legible */}
        <section
          className="relative w-full bg-bark bg-cover bg-center px-6 pb-14 pt-32 sm:pb-16 sm:pt-36"
          style={{ backgroundImage: 'url(/about/gallery4.webp)' }}
        >
          {/* Tint keeps the band on-palette and the copy readable */}
          <div className="absolute inset-0 bg-bark/85"></div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Resources
            </p>

            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
              <h1 className="lg:col-span-7 font-medium text-4xl leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl">
                Lorem ipsum dolor sit amet.
              </h1>

              <p className="lg:col-span-5 lg:self-end max-w-md text-[15px] leading-[1.8] text-white/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="flex flex-col">
                  <Link href={`/resources/${post.slug}`} className="group">
                    <div
                      role="img"
                      aria-label={post.alt}
                      className="aspect-[4/3] w-full bg-sand bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                  </Link>

                  <p className="mt-6 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso">
                    <span>{post.category}</span>
                    <span className="text-charcoal/55">{post.date}</span>
                  </p>

                  <h2 className="mt-4 font-medium text-2xl leading-[1.25] text-charcoal">
                    <Link
                      href={`/resources/${post.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-[15px] leading-[1.7] text-ink">
                    {post.excerpt}
                  </p>

                  {/* mt-auto keeps the buttons aligned across cards of unequal height */}
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/resources/${post.slug}`}
                      className="inline-flex items-center justify-between gap-8 min-w-[12rem] border border-espresso px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-espresso transition duration-300 hover:bg-espresso hover:text-white"
                    >
                      Read more
                      <span aria-hidden="true">→︎</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ReadyToSource />
      </main>

      <Footer />
    </div>
  );
}
