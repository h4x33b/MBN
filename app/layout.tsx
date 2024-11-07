import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from '@/lib/utils';
import { MoonIcon, SearchIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muslim Baby Names - Meanings, Origins & Cultural Significance',
  description: 'Discover beautiful Muslim baby names with their meanings, origins, and cultural significance. Find the perfect name for your baby boy or girl.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        "min-h-screen bg-background antialiased"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <div className="mr-4 flex">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <span className="font-bold">Muslim Baby Names</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link href="/names/boy" className="transition-colors hover:text-foreground/80">Boy Names</Link>
                  <Link href="/names/girl" className="transition-colors hover:text-foreground/80">Girl Names</Link>
                  <Link href="/popular" className="transition-colors hover:text-foreground/80">Popular</Link>
                </nav>
              </div>
              <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                  <Button variant="outline" className="w-full justify-start text-sm font-normal md:w-[260px]">
                    <SearchIcon className="mr-2 h-4 w-4" />
                    Search names...
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="container py-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <h3 className="text-sm font-semibold">Browse Names</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li><Link href="/names/boy">Boy Names</Link></li>
                    <li><Link href="/names/girl">Girl Names</Link></li>
                    <li><Link href="/popular">Popular Names</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Resources</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t pt-8 text-center text-sm">
                <p>© {new Date().getFullYear()} Muslim Baby Names. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}