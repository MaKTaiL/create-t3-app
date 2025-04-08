import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookie = (await headers()).get("Cookie") ?? undefined;

  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Providers cookie={cookie}>{children}</Providers>
      </body>
    </html>
  );
}
