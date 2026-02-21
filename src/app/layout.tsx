import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gea V. Pernites — Multi-disciplinary Artist",
  description:
    "Filipino fine artist working across coffin painting, murals, canvas, digital illustration, and graphic branding. Transforming every surface into art.",
  keywords: [
    "Gea V. Pernites",
    "fine art",
    "Filipino artist",
    "coffin art",
    "mural artist",
    "canvas painting",
    "digital illustration",
    "graphic design",
    "Manila Philippines",
  ],
  openGraph: {
    title: "Gea V. Pernites — Multi-disciplinary Artist",
    description: "Transforming every surface into art.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-ink"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
