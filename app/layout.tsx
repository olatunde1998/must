import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   return children
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
