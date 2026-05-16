import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freelancer Project Profitability Tracker",
  description: "Track real profit margins on freelance projects. Monitor time spent vs. quoted price and calculate your true hourly rate."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c5f99bec-e0df-4a51-a14d-31ce104f43f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
