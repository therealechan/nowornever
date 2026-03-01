'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Flame } from 'lucide-react'

export function Nav() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-[960px] items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2 text-fg">
                    <Flame className="size-[16px]" />
                    <span className="text-[14px] font-semibold tracking-tight">Now or Never</span>
                </Link>
                <div className="flex items-center gap-1">
                    <Link
                        href="https://0xechan.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-fg-muted hover:text-fg transition-colors px-3 py-1.5">
                        About
                    </Link>
                    <Link
                        href="https://github.com/therealechan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-fg-muted hover:text-fg transition-colors px-3 py-1.5">
                        GitHub
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}
