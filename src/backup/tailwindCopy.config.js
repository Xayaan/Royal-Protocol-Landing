module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Helvetica Neue",
          "Oxygen",
          "Cantarell",
          "sans-serif"
        ]
      },
      fontSize: {
        xxs: ".5rem",
        "1x3": "1.3em",
        "1x5": "1.5em"
      },
      height: {
        18: "4.5rem",
        add20px: "calc(100% + 20px)",
        add60px: "calc(100% + 60px)"
      },
      lineHeight: {
        "1x4": "1.4em"
      },
      letterSpacing: {
        "1px": "1px"
      },
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "crown-test": "url('/src/svg/crown.svg')",
        "circle-test": "url('/src/images/circle.png')"
      }),

      dropShadow: {
        g1: "0px 0px 10px rgba(255, 255, 255, 0.4)"
      },

      colors: {
        royalBlue: {
          500: "#0C263E"
        },
        royalDarkBlue: {
          500: "#03101E"
        },
        btnRoyalRed: {
          500: "#ff6978"
        },
        btnHoverRoyalRed: {
          500: "#e8616e"
        },
        btnRoyalDark: {
          900: "#071422"
        },
        royalBlueColumn: {
          500: "#102842"
        },
        leaderBoardName: {
          500: "#9852BB"
        },
        generatedNameBackground: {
          500: "#1a3349"
        },
        generatedName: {
          500: "#699AFF"
        },
        userRank: "#FF6978",
        leaderBoardTimeSliderBackground: "#4f504b",
        leaderBoardTimeSliderForeground: "#FFB669",
        dashboardYellow: "#FFB669",
        dashboardGreen: "#A1FF69",
        royalDarkLightBlue: "#0B2032",
        maxBlue: "#339BD6"
      },
      padding: {
        "80px": "80px"
      },
      width: {
        "170px": "170px"
      },
      maxWidth: {
        600: "600px"
      },
      gridTemplateRows: {
        // Simple 8 row grid
        10: "repeat(10, minmax(0, 1fr))"
        //   // Complex site-specific row configuration
        //  'layout': '200px minmax(900px, 1fr) 100px',
      }
    }
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"]
    }
  },
  plugins: []
};
