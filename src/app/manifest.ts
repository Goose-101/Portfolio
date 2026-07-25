import type { MetadataRoute } from "next";
import { person } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${person.name} — Portfolio`,
    short_name: `${person.firstName}.dev`,
    description:
      "Software Engineer, AI Researcher, Full Stack Developer & Founder.",
    start_url: "/",
    display: "standalone",
    background_color: "#050914",
    theme_color: "#050914",
  };
}
