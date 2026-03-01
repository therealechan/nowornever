'use client'

import { ArrowUpRight } from 'lucide-react'

const products = [
    {
        name: 'Markdown Now',
        tagline: 'A fast, native macOS markdown editor',
        description: 'Built with Rust and GPUI. GPU-accelerated rendering, vim mode, live side-by-side preview, syntax highlighting. 6 MB download.',
        url: 'https://md.nowornever.work',
        badge: 'macOS',
    },
    {
        name: 'Porter',
        tagline: 'Dev servers, one click away',
        description: 'Lives in your menu bar. Automatically finds every local dev server running on your Mac. One click to open.',
        url: 'https://porter.nowornever.work',
        badge: 'macOS',
    },
    {
        name: 'Form Snap',
        tagline: 'Stop re-filling forms',
        description: 'Chrome extension that scans and replays form fills for faster QA testing. AI Fill generates realistic, domain-aware test data.',
        url: 'https://form-snap.nowornever.work',
        badge: 'Chrome',
    },
]

export function Products() {
    return (
        <section className="mx-auto max-w-[960px] px-6 pb-24">
            <div className="mb-10">
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-fg-muted">Products</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                {products.map((product) => (
                    <a
                        key={product.name}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-xl border border-surface-border bg-surface/50 p-6 transition-all hover:bg-surface hover:border-fg-muted/20">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="text-[15px] font-semibold text-fg">{product.name}</h3>
                                <p className="text-[13px] text-fg-muted mt-0.5">{product.tagline}</p>
                            </div>
                            <ArrowUpRight className="size-4 text-fg-muted opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                        </div>
                        <p className="text-[13px] leading-relaxed text-fg-muted/80">{product.description}</p>
                        <div className="mt-4">
                            <span className="inline-block rounded-full border border-surface-border px-2.5 py-0.5 text-[11px] font-mono text-fg-muted">{product.badge}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
