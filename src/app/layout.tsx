import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Nadia Elmagrabi - Transformational Guide | Intuitive Psychotherapist',
  description: 'Break free from invisible patterns with Nadia Elmagrabi. Specialist in Past Life Healing, Ancestral Work & Human Design. Nearly 25 years of experience in transformational guidance.',
  keywords: 'nadia elmagrabi, past life therapy, human design, ancestral healing, transformational guide, intuitive psychotherapist, carol bowman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function enableAnimations() {
                  document.body.classList.remove('no-animations');
                  document.body.style.opacity = '1';
                }
                
                if (document.readyState === 'complete') {
                  setTimeout(enableAnimations, 50);
                } else if (document.readyState === 'interactive') {
                  setTimeout(enableAnimations, 100);
                } else {
                  document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(enableAnimations, 150);
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col no-animations">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
