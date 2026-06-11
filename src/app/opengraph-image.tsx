import { ImageResponse } from "next/og";

export const alt = "Gerar Arévalo — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #12121c 60%, #1a1030 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a78bfa", marginBottom: 16 }}>
          {"</> Full-Stack Developer"}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginBottom: 24 }}>
          Gerar Arévalo
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9ca3af", maxWidth: 900 }}>
          SaaS · ERP · Apps móviles y de escritorio — 9 productos en producción
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 48 }}>
          {["Next.js", "React", "NestJS", "React Native", "Tauri / Rust", "PostgreSQL"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "10px 22px",
                  borderRadius: 100,
                  border: "1px solid rgba(167, 139, 250, 0.4)",
                  background: "rgba(167, 139, 250, 0.1)",
                  fontSize: 22,
                  color: "#c4b5fd",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
