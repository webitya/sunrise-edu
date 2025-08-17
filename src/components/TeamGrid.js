import Link from "next/link"
import { teamData } from "../data/team/team"
import SocialLinks from "./SocialLinks"

export default function TeamGrid() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
        {teamData.map((member) => (
          <div key={member.id} className="card" style={{ textAlign: "center" }}>
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto 20px",
                border: "4px solid #e5f3ff",
              }}
            />

            <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937", marginBottom: "8px" }}>
              {member.name}
            </h3>
            <p style={{ fontSize: "16px", fontWeight: "500", color: "#3b82f6", marginBottom: "15px" }}>
              {member.position}
            </p>
            <p style={{ color: "#6b7280", lineHeight: "1.6", marginBottom: "15px", fontSize: "14px" }}>
              {member.specialization}
            </p>
            <p style={{ color: "#6b7280", lineHeight: "1.6", marginBottom: "25px" }}>{member.bio}</p>

            {/* Social Links */}
            <SocialLinks social={member.social} />

            {/* View Profile Button */}
            <div style={{ marginTop: "20px" }}>
              <Link href={`/team/${member.id}`}>
                <button className="btn-secondary" style={{ width: "100%", padding: "12px" }}>
                  View Full Profile
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
