import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadyToSource from '@/components/ReadyToSource';
import { getPost, posts } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<'/resources/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);

  if (!post) return { title: 'Resources | MAGNUM AUTO' };

  return {
    title: `${post.title} | MAGNUM AUTO`,
    description: post.excerpt,
  };
}

export default async function ResourcePost(props: PageProps<'/resources/[slug]'>) {
  const { slug } = await props.params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug);

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />

      <main className="flex-1">
        {/* Dark band keeps the fixed header legible */}
        <section className="w-full bg-bark px-6 pb-14 pt-32 sm:pb-16 sm:pt-36">
          <div className="mx-auto w-full max-w-3xl">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white"
            >
              <span aria-hidden="true">←︎</span>
              All resources
            </Link>

            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
              <span className="text-clay">{post.category}</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span>{post.date}</span>
            </p>

            <h1 className="mt-5 font-medium text-4xl leading-[1.12] tracking-[-0.01em] text-white sm:text-5xl">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Hero image */}
        <div
          role="img"
          aria-label={post.alt}
          className="aspect-[16/9] w-full bg-sand bg-cover bg-center sm:aspect-[16/7]"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>

        {/* Body */}
        <section className="w-full bg-shell px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-3xl">
            <p className="text-[17px] leading-[1.75] text-charcoal">{post.excerpt}</p>

            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-6 text-[15px] leading-[1.8] text-ink">
                {paragraph}
              </p>
            ))}

            <div className="mt-12 border-t border-charcoal/15 pt-8">
              <Link
                href="/resources"
                className="inline-flex items-center justify-between gap-8 min-w-[15.5rem] border border-espresso bg-espresso px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-transparent hover:text-espresso"
              >
                Back to resources
                <span aria-hidden="true">←︎</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="w-full bg-sand px-6 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso">
              Keep reading
            </p>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-8">
              {related.map((item) => (
                <article key={item.slug} className="flex flex-col">
                  <Link href={`/resources/${item.slug}`} className="group">
                    <div
                      role="img"
                      aria-label={item.alt}
                      className="aspect-[16/9] w-full bg-shell bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>

                    <h2 className="mt-6 font-medium text-2xl leading-[1.25] text-charcoal group-hover:underline underline-offset-4">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-[15px] leading-[1.7] text-ink">{item.excerpt}</p>
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
