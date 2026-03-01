import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { Footer } from '@/components/footer'

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">
                <Hero />
                <Products />
            </main>
            <Footer />
        </div>
    )
}
