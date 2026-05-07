import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Slack Focus Time Blocker — Block Slack During Deep Work",
  description: "Automatically set Slack DND during calendar focus blocks. Stay in flow, auto-reply to teammates, and protect your deep work time."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7fdbe4c-224c-4435-b1c9-6eaca56c7e18"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
