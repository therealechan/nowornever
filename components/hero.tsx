'use client'

import { useEffect, useState } from 'react'

export function Hero() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="mx-auto max-w-[960px] px-6 pt-24 sm:pt-32 pb-20">
            <div
                className="transition-all duration-700 ease-out"
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(16px)',
                }}>
                <h1 className="text-[32px] sm:text-[42px] font-semibold tracking-[-0.04em] leading-[1.1] text-fg max-w-[560px]">
                    Now or Never.
                </h1>
                <p className="mt-5 max-w-[480px] text-[15px] leading-[1.7] text-fg-muted">
                    Small tools, built fast, shipped now.
                    <br />
                    Independent software by{' '}
                    <a
                        href="https://0xechan.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg hover:underline underline-offset-4 transition-colors">
                        echanxyz
                    </a>
                    .
                </p>
            </div>

            <div
                className="mt-8 h-px bg-surface-border transition-all duration-1000 ease-out"
                style={{
                    opacity: visible ? 1 : 0,
                    width: visible ? '100%' : '0%',
                }}
            />
        </section>
    )
}
