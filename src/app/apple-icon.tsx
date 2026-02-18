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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Three ascending bars + orange foundation */}
        <svg
          viewBox="0 0 180 180"
          width="180"
          height="180"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Short bar (left) */}
          <rect x="32" y="92" width="28" height="56" rx="4" fill="white" opacity="0.3" />
          {/* Medium bar (center) */}
          <rect x="72" y="62" width="28" height="86" rx="4" fill="white" opacity="0.55" />
          {/* Tall bar (right) */}
          <rect x="112" y="32" width="28" height="116" rx="4" fill="white" opacity="0.9" />

          {/* Orange foundation bar */}
          <rect x="32" y="148" width="108" height="8" rx="3" fill="#FF8A00" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
