import { ImageResponse } from "next/og";
import { person } from "@/lib/data";

export const runtime = "edge";
export const alt = `${person.name} — Software Engineer & AI Researcher`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1000px 500px at 20% -10%, #123, #050914)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(37,120,255,0.2)",
              border: "1px solid rgba(37,120,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4ea1ff",
              fontSize: 30,
            }}
          >
            {"</>"}
          </div>
          <div style={{ fontSize: 26, color: "#94a3b8" }}>
            {person.firstName}.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            {person.name}
          </div>
          <div style={{ fontSize: 34, color: "#4ea1ff", fontWeight: 600 }}>
            Software Engineer · AI Researcher · Founder
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#94a3b8", maxWidth: 900 }}>
          Building intelligent, secure, and human-centered software.
        </div>
      </div>
    ),
    size
  );
}
