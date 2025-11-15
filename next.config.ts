import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          new URL("https://cdn.discordapp.com/avatars/*/*.png"),
          new URL("https://cdn.discordapp.com/banners/*/*.png"),
          new URL("https://cdn.bsky.app/img/avatar/plain/*/*"),
          new URL("https://cdn.bsky.app/img/banner/plain/*/*"),
          new URL("https://github.com/giftedl.png"),
          { protocol: "https", hostname: "lastfm.freetls.fastly.net", port: "" },
          { protocol: "https", hostname: "i.scdn.co", port: "" },
      ]
  }
};

export default nextConfig;
