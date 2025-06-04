/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "580px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        Space: ["var(--font-space)"],
        Dm: ["var(--font-dm)"],
      },
      colors: {
        primary: "var(--primary)",
        bg: " var(--bg)",
        text: "var(--text)",
        mainTitle: "var(--main-title)",
        sectionTitle: "var(--section-title)",
        sectionBg: "var(--section-bg)",
        cardBg: "var(--card-bg)",
        border: "var(--border)",
        shadow: "var(--shadow)",
        buttonText: "var(--button-text)",
        specialText: "var(--special-text)",
        contactHighlight: "var(--contact-highlight)",
        link: "var(--link)",
        linkHover: "var(--link-hover)",
        linkActive: "var(--link-active)",
        cardBorder: "var(--card-border)",
        ring: "var(--ring)",
      },
      backgroundImage: {
        heroGradient: "var(--hero-gradient)",
        buttonBg: "var(--button-bg)",
        buttonHover: "var(--button-hover)",
      },
      blur: {
        cardBlur: "var(--card-blur)",
      },
      animation: {
        fadeTop: "var(--fade-top)",
        fadeBottom: "var(--fade-bottom)",
        fadeRight: "var(--fade-right)",
        fadeLeft: "var(--fade-left)",
      },
    },
  },
  plugins: [],
};
