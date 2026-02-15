import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0063CE 0%, #004FA5 100%)",
          borderRadius: "36px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          CEI
        </div>
      </div>
    ),
    { ...size }
  );
}
