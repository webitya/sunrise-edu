import { teamData } from "../../../data/team/team"
import TeamMemberClientPage from "./TeamMemberClientPage"

export async function generateStaticParams() {
  return teamData.map((member) => ({
    id: member.id.toString(),
  }))
}

export async function generateMetadata({ params }) {
  const member = teamData.find((m) => m.id.toString() === params.id)

  if (!member) {
    return {
      title: "Team Member Not Found - The Sunrise Education",
    }
  }

  return {
    title: `${member.name} - ${member.position} | The Sunrise Education`,
    description: `Meet ${member.name}, ${member.position} at The Sunrise Education. ${member.bio} Specialization: ${member.specialization}`,
    keywords: `${member.name}, ${member.position}, education consultant, ${member.specialization}`,
  }
}

export default function TeamMemberPage({ params }) {
  return <TeamMemberClientPage params={params} />
}
