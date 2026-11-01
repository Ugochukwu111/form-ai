import "./globals.css";

// Required by Next.js for document metadata.
// oxlint-disable-next-line react/only-export-components
export const metadata = {
  title: "FormAi",
  description: "Less typing. More getting things done.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
