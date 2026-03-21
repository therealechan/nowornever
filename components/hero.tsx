'use client'

import { useEffect, useState } from 'react'

export function Hero() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 80)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="mx-auto max-w-[960px] px-6 pt-28 sm:pt-36 pb-24">
            {/* Eyebrow */}
            <div
                className="transition-all duration-500 ease-out"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(10px)',
                    transitionDelay: '0ms',
                }}>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-fg-muted select-none">
                    Trade what you see, be open-minded.
                </span>
            </div>

            {/* Main headline */}
            <div
                className="mt-5 transition-all duration-600 ease-out"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(14px)',
                    transitionDelay: '80ms',
                }}>
                <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-[-0.04em] leading-[1.05] text-fg">
                    Now or Never.
                </h1>
                <p className="mt-3 text-[15px] sm:text-[16px] font-mono text-fg-muted tracking-[-0.01em]">
                    要麼現在做，要麼別做
                </p>
            </div>

            {/* Description */}
            <div
                className="mt-7 transition-all duration-600 ease-out"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(14px)',
                    transitionDelay: '160ms',
                }}>
                <p className="max-w-[420px] text-[15px] leading-[1.75] text-fg-muted">
                    Small tools, built fast, shipped now. Crafting fast, native apps for developers and power users — by{' '}
                    <a
                        href="https://0xechan.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg/80 hover:text-fg underline underline-offset-3 decoration-fg/20 hover:decoration-fg/60 transition-all">
                        echanxyz
                    </a>
                    .
                </p>
            </div>

            {/* Divider */}
            <div
                className="mt-14 h-px bg-surface-border transition-all duration-1000 ease-out"
                style={{
                    opacity: visible ? 1 : 0,
                    width: visible ? '100%' : '0%',
                    transitionDelay: '300ms',
                }}
            />
        </section>
    )
}
