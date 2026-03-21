'use client'

import { ArrowUpRight, Monitor, Chrome, Globe, Terminal } from 'lucide-react'
import { useState } from 'react'

type Category = 'All' | 'macOS' | 'Chrome' | 'Web'

const platformIcons: Record<Category, React.ElementType | null> = {
    All: null,
    macOS: Monitor,
    Chrome: Chrome,
    Web: Globe,
}

const products = [
    {
        name: 'Markdown Now',
        tagline: 'A fast, native macOS Markdown editor',
        description: 'Built with Rust and GPUI. GPU-accelerated rendering, vim mode, live side-by-side preview, syntax highlighting. 6 MB download.',
        url: 'https://md.nowornever.work',
        badge: 'macOS' as Category,
        icon: Terminal,
        status: 'Available',
    },
    {
        name: 'Porter',
        tagline: 'Dev servers, one click away',
        description: 'Lives in your menu bar. Automatically finds every local dev server running on your Mac. One click to open.',
        url: 'https://porter.nowornever.work',
        badge: 'macOS' as Category,
        icon: Monitor,
        status: 'Available',
    },
    {
        name: 'Form Snap',
        tagline: 'Stop re-filling forms',
        description: 'Chrome extension that scans and replays form fills for faster QA testing. AI Fill generates realistic, domain-aware test data.',
        url: 'https://form-snap.nowornever.work',
        badge: 'Chrome' as Category,
        icon: Chrome,
        status: 'Available',
    },
    {
        name: 'LB Liquidator',
        tagline: 'One-click position liquidation for Longbridge',
        description: 'Native macOS app built with Tauri. Liquidate, take-profit, or stop-loss across multiple Longbridge positions in one click. Local-only, open source.',
        url: 'https://liquidator.nowornever.work',
        badge: 'macOS' as Category,
        icon: Monitor,
        status: 'Open Source',
    },
    {
        name: 'GEO Score',
        tagline: 'Is your website visible to AI search engines?',
        description: 'Scan any URL and get a GEO readiness score across structured data, Open Graph, content richness, and knowledge graph dimensions. Free, no account required.',
        url: 'https://geo-score.nowornever.work',
        badge: 'Web' as Category,
        icon: Globe,
        status: 'Free',
    },
]

const categories: Category[] = ['All', 'macOS', 'Chrome', 'Web']

const statusColors: Record<string, string> = {
    Available: 'text-fg-muted',
    'Open Source': 'text-fg-muted',
    Free: 'text-fg-muted',
}

export function Products() {
    const [active, setActive] = useState<Category>('All')

    const filtered = active === 'All' ? products : products.filter(p => p.badge === active)

    return (
        <section className="mx-auto max-w-[960px] px-6 pb-32">
            {/* Section header */}
            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">Products</span>
                    <span className="font-mono text-[11px] text-fg-muted/40">—</span>
                    <span className="font-mono text-[11px] text-fg-muted/40">{filtered.length}</span>
                </div>
                <div className="flex items-center gap-1">
                    {categories.map(cat => {
                        const Icon = platformIcons[cat]
                        return (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-mono transition-all duration-150 ${
                                    active === cat
                                        ? 'bg-fg text-background'
                                        : 'text-fg-muted hover:text-fg hover:bg-surface'
                                }`}
                            >
                                {Icon && <Icon className="size-3" />}
                                {cat}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Product grid */}
            <div className="grid gap-px bg-surface-border rounded-xl overflow-hidden border border-surface-border">
                {filtered.map((product) => {
                    const Icon = product.icon
                    return (
                        <a
                            key={product.name}
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-start gap-5 bg-background hover:bg-surface/60 p-6 transition-colors duration-150">

                            {/* Icon */}
                            <div className="mt-0.5 shrink-0 size-9 rounded-lg border border-surface-border bg-surface flex items-center justify-center group-hover:border-fg-muted/30 transition-colors">
                                <Icon className="size-4 text-fg-muted group-hover:text-fg transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-[14px] font-semibold text-fg leading-tight">{product.name}</h3>
                                        <p className="text-[13px] text-fg-muted mt-0.5">{product.tagline}</p>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0 mt-0.5">
                                        <span className={`font-mono text-[11px] ${statusColors[product.status]}`}>
                                            {product.status}
                                        </span>
                                        <ArrowUpRight className="size-4 text-fg-muted opacity-0 transition-all duration-150 group-hover:opacity-100" />
                                    </div>
                                </div>
                                <p className="mt-2.5 text-[13px] leading-relaxed text-fg-muted/70 max-w-[580px]">
                                    {product.description}
                                </p>
                                <div className="mt-3">
                                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-fg-muted/50">
                                        {(() => {
                                            const BadgeIcon = platformIcons[product.badge]
                                            return BadgeIcon ? <BadgeIcon className="size-3" /> : null
                                        })()}
                                        {product.badge}
                                    </span>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}
