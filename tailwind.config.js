/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#4E6F88",
        inputColor: "#7F909C",
        tableBg: "#EFF3F5",
        tableBorder: "#D5DDE3"
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      fontSize: {
        sxs: "10px"
      },
      // Use relative paths so Webpack can resolve these files during build.
      backgroundImage: {
        mainBg1: "url('../public/img/mainBg1.png')",
        cooperationBg: "url('../public/img/cooperationBg.png')",
        features: "url('../public/img/featureBg.png')",
        aboutUsBg: "url('../public/img/about-us/aboutUsBg.png')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
