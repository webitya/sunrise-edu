import "./globals.css"

export const metadata = {
  title: "The Sunrise Education - College Admissions Portal",
  description:
    "Leading education consultancy for college admissions and courses in Jharkhand, Bengal, UP. Contact: thesunriseedu.in@gmail.com",
  keywords: "college admission, education, BSC, MSC, BCA, BBA, Nursing, B.ED, D.El.Ed, Jharkhand University",
  generator: "The Sunrise Education",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Inter, sans-serif" }}>{children}</body>
    </html>
  )
}
