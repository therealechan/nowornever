import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t border-surface-border">
            <div className="mx-auto flex flex-col sm:flex-row max-w-[960px] items-center sm:justify-between gap-4 sm:gap-0 px-6 py-6 text-[13px] text-fg-muted">
                <span>
                    © {new Date().getFullYear()}{' '}
                    <Link
                        href="https://0xechan.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fg transition-colors">
                        echanxyz
                    </Link>
                </span>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/therealechan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fg transition-colors">
                        GitHub
                    </Link>
                    <Link
                        href="https://x.com/0xechan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fg transition-colors">
                        Twitter
                    </Link>
                </div>
            </div>
        </footer>
    )
}
