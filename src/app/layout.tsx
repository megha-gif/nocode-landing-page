import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoCode Website Builder",
  description: "Build and launch websites with ease, no coding required!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700&family=Bricolage+Grotesque:wght@100;300;400;600&family=Tektur:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
