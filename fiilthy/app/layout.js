export const metadata = {
  title: 'Firebase Test App',
  description: 'Firebase authentication and storage test application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
