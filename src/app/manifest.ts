import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Common Elements Insurance",
    short_name: "CEI",
    description:
      "Specialty insurance solutions for Florida community associations.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#0063CE",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
