'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Zap } from 'lucide-react'

export function Nav() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/90 backdrop-blur-xl">
            <div className="mx-auto flex h-12 max-w-[960px] items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2 text-fg group">
                    <Zap className="size-[14px] fill-current" />
                    <span className="text-[13px] font-semibold tracking-tight">Now or Never</span>
                </Link>
                <div className="flex items-center gap-0.5">
                    <Link
                        href="https://0xechan.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-fg-muted hover:text-fg transition-colors px-3 py-1.5 rounded-md hover:bg-surface">
                        About
                    </Link>
                    <Link
                        href="https://github.com/therealechan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-fg-muted hover:text-fg transition-colors px-3 py-1.5 rounded-md hover:bg-surface">
                        GitHub
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
