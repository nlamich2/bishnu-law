// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Advocate Bishnu Rishi Koirala | Mahabai Kanooni Sewa Kendra";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
          padding: 64,
          fontFamily: "system-ui, Segoe UI, Arial",
          color: "#0f172a",
        }}
      >
        <div style={{ fontSize: 52, fontWeight: 800, marginBottom: 8 }}>
          Advocate Bishnu Rishi Koirala
        </div>
        <div style={{ fontSize: 28, color: "#334155", marginBottom: 28 }}>
          Mahabai Kanooni Sewa Kendra · Anamnagar, Kathmandu
        </div>
        <div
          style={{
            display: "inline-flex",
            gap: 16,
            fontSize: 24,
            color: "#0369a1",
            marginTop: "auto",
          }}
        >
          <div>27+ Years Experience</div>
          <div>Bar License: 7289</div>
          <div>+977 9851150766</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
