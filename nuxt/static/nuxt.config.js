import pkg from "./package";

export default {
  ssr: false,
  target: "static",
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  plugins: [{ src: "~/plugins/lyticus.js", mode: "client" }],
};
