import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { Github, Database, Lock, Zap, Code, Palette } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

export default function LandingPage() {

  return (
    <div className={`min-h-screen`}>
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">NextPress Starter</h1>
          <div className="flex gap-2">

          <ModeToggle />
          <Link
            href="https://github.com/HasaanAhmad/NextPress-Starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            NextJS AuthJS Postgres Prisma ShadCN Starter
          </h2>
          <p className="text-xl mb-8">
            Get started with a fully configured project in minutes!
          </p>
          <div className="gap-2 flex items-center justify-center">
           
            <Link href="https://github.com/HasaanAhmad/NextPress-Starter" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="default">
                Get Started
              </Button>
            </Link>
            <Link href="/session">
              <Button size="lg" variant="secondary">
                Check Session
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Code className="h-12 w-12 text-blue-400" />}
            title="Next.js 14"
            description="Latest Next.js features including App Router and Server Components"
          />
          <FeatureCard
            icon={<Lock className="h-12 w-12 text-green-400" />}
            title="AuthJS v5"
            description="Secure authentication with AuthJS, supporting various providers"
          />
          <FeatureCard
            icon={<Database className="h-12 w-12 text-purple-400" />}
            title="Postgres & Prisma"
            description="Powerful database setup with Postgres and Prisma ORM"
          />
          <FeatureCard
            icon={<Palette className="h-12 w-12 text-pink-400" />}
            title="ShadCN UI"
            description="Beautiful and customizable UI components with ShadCN"
          />
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-yellow-400" />}
            title="TypeScript"
            description="Full TypeScript support for a robust development experience"
          />
          <FeatureCard
            icon={<Github className="h-12 w-12 text-gray-400" />}
            title="Ready to Clone"
            description="Just clone, install dependencies, and start building your project"
          />
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Supercharge Your Development?
          </h3>
          <p className="text-xl mb-8">
            Clone now and start building your next big project!
          </p>
          <Link
            href="https://github.com/HasaanAhmad/NextPress-Starter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="default">
              Clone Repository
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 mt-16">
        <div className="flex items-center justify-center text-gray-300 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Built with ❤️ by Hasaan Ahmad.
          </p>
          <Link href="https://github.com/HasaanAhmad">
            <Github />
          </Link>
        </div>
      </footer>
    </div>
  );
}
