"use client"

export default function SocialLinks({ social }) {
  const socialPlatforms = [
    {
      name: "Instagram",
      url: social.instagram,
      icon: "📷",
      color: "#E4405F",
    },
    {
      name: "Twitter",
      url: social.twitter,
      icon: "🐦",
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      url: social.linkedin,
      icon: "💼",
      color: "#0077B5",
    },
    {
      name: "WhatsApp",
      url: `https://wa.me/${social.whatsapp.replace(/[^0-9]/g, "")}`,
      icon: "💬",
      color: "#25D366",
    },
    {
      name: "Phone",
      url: `tel:${social.phone}`,
      icon: "📞",
      color: "#3b82f6",
    },
  ]

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
      {socialPlatforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target={platform.name !== "Phone" ? "_blank" : "_self"}
          rel={platform.name !== "Phone" ? "noopener noreferrer" : ""}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            backgroundColor: "#f8fafc",
            border: `2px solid ${platform.color}`,
            textDecoration: "none",
            fontSize: "18px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = platform.color
            e.target.style.transform = "translateY(-2px)"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#f8fafc"
            e.target.style.transform = "translateY(0)"
          }}
          title={`Contact via ${platform.name}`}
        >
          {platform.icon}
        </a>
      ))}
    </div>
  )
}
