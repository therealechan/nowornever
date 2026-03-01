'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    if (!mounted) {
        return <div className="size-8" />
    }

    const isDark = theme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="size-8 flex items-center justify-center rounded-md hover:bg-surface transition-colors cursor-pointer"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
            {isDark ? (
                <Sun className="size-[14px] text-fg-muted" />
            ) : (
                <Moon className="size-[14px] text-fg-muted" />
            )}
        </button>
    )
}
