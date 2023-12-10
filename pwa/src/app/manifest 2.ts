import { Metadata, MetadataRoute } from "next";
import { ManifestDataRoute } from "next/dist/build";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#43577A",
    background_color: "#EFEFEF",
    display: "standalone",
    scope: "/",
    start_url: "/",
    name: "Project Lumina",
    short_name: "Lumina",
    description: "The Interactive Mirror",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
