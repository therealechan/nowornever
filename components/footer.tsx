import Link from 'next/link'

export function Footer() {
    return (
        <footer className="border-t border-surface-border">
            <div className="mx-auto flex flex-col sm:flex-row max-w-[960px] items-center sm:justify-between gap-4 sm:gap-0 px-6 py-5">
                <span className="font-mono text-[12px] text-fg-muted/60">
                    © {new Date().getFullYear()}{' '}
                    <Link
                        href="https://0xechan.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fg-muted transition-colors">
                        echanxyz
                    </Link>
                    {' '}— nowornever.work
                </span>
                <div className="flex items-center gap-5">
                    <Link
                        href="https://github.com/therealechan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[12px] text-fg-muted/60 hover:text-fg-muted transition-colors">
                        GitHub
                    </Link>
                    <Link
                        href="https://x.com/0xechan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[12px] text-fg-muted/60 hover:text-fg-muted transition-colors">
                        Twitter / X
                    </Link>
                </div>
            </div>
        </footer>
    )
}
