export const metadata = {
  title: 'Davial Game Launcher',
  description: 'Premium gaming platform and launcher',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
