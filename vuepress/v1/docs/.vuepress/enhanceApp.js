import Lyticus from "lyticus";

export default ({ router }) => {
  if (typeof window !== "undefined") {
    const lyticus = new Lyticus("your-website-id", {
      development: process.env.NODE_ENV === "development",
    });
    lyticus.trackNavigator();
    router.afterEach((to) => {
      lyticus.trackPage(to.fullPath);
    });
  }
};
