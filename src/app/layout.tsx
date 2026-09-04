// src/app/layout.tsx
import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry";
import vazirFont from "@/constants/localFont";

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
      <body className={`${vazirFont.variable} font-sans`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
