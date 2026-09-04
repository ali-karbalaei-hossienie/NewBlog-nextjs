// src/app/layout.tsx
import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry";

export const metadata: Metadata = {
  title: "Next.js + MUI App",
  description: "Application with custom MUI Theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
