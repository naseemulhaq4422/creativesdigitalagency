import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Creatives Digital Agency & Institute | High-Impact Digital Solutions & Tech Training",
  description: "Partner with our premium agency for high-end digital marketing, web dev & 3D branding, or join our institute to learn in-demand tech skills from absolute scratch.",
  keywords: ["Creatives Digital Agency", "Tech Institute", "Web Development", "Digital Marketing", "SEO", "3D Logo Design", "Beginner Tech Courses", "Commercial Vehicle Marketing"],
  openGraph: {
    title: "Creatives Digital Agency & Institute",
    description: "Build Your Brand. Start Your Career from Zero. High-end digital solutions and beginner-friendly tech institute.",
    url: "https://creativesdigitalagency.com",
    siteName: "Creatives Digital Agency & Institute",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-slate-100 antialiased selection:bg-brand-purple/30 selection:text-brand-purple-light">
        <Navbar />
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
