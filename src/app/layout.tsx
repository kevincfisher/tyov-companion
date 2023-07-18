import '~/styles/globals.css'
import Navigation from './_components/navigation'

export default function RootLayout({ children}: { children: React.ReactNode}) {
  return <html lang="en">
    <body>
      <Navigation />
      {children}
      </body>
  </html>
}