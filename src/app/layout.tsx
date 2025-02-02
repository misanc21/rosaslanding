import type { Metadata } from "next";
import { Inter, Raleway, Charm } from "next/font/google";
import "./globals.css";
import { Header } from "../components/HeaderComponent";


const interFont = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-raleway',
});

const charm = Charm({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-charm',
});

export const metadata: Metadata = {
  title: "Colegio Las Rosas",
  description: "Comunidad Educativa Las Rosas",
  openGraph: {
    title: "Colegio Las Rosas",
    description: "Comunidad Educativa",
  },
  icons: {
    icon: "/public/las-rosas-logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${interFont.variable} ${raleway.variable} ${charm.variable} antialiased`}
      >
        <Header />
        <main className="z-10 mt-14 sm:mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
