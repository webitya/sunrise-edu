import Link from "next/link"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function NotFound() {
  return (
    <div>
      <Header />
      <main>
        <section style={{ padding: "100px 0", textAlign: "center" }}>
          <div className="container">
            <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#1f2937", marginBottom: "20px" }}>
              College Not Found
            </h1>
            <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "30px" }}>
              The college you're looking for doesn't exist or has been moved.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/colleges">
                <button className="btn-primary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                  View All Colleges
                </button>
              </Link>
              <Link href="/">
                <button className="btn-secondary" style={{ fontSize: "18px", padding: "15px 30px" }}>
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
