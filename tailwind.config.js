module.exports = {
  purge: ["./index.html", "./src/**/*"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      fontSize: {
        "8.5xl": "7rem",
        "17xl": "14rem"
      },
      zIndex: {
        "-1": "-1"
      },
      spacing: {
        128: "32rem"
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".25em"
      },
      boxShadow: {
        lavendel: "0 4px 10px -1px rgba(177, 160, 248, 0.15)",
      },
      keyframes: {
        flash: {
          "0%, 100%": {
            opacity: 0
          },
          "50%": {
            opacity: 1
          }
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 5px, 0)"
          },
          "20%, 80%": {
            transform: "translate3d(2px, -2px, 0)"
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-3px, 6px, 0)"
          },
          "40%, 60%": {
            transform: "translate3d(5px, -4px, 0)"
          },
        }
      },
      animation: {
        flash: "flash 1000ms steps(1) infinite",
        shake: "shake 1s steps(8) infinite"
      }
    },
    colors: {
      lavendel: {
        400: "rgba(138, 115, 231, 1.0)", // #8A73E7
        DEFAULT: "rgba(159, 137, 246, 1.0)", // #9F89F6
        600: "rgba(177, 160, 248, 1.0)", // #B1A0F8
        700: "rgba(211, 202, 245, 1.0)", // #D3CAF5
        800: "rgba(230, 226, 248, 1.0)", // #E6E2F8
        900: "rgba(237, 235, 247, 1.0)" // #EDEBF7
      },
      black: {
        DEFAULT: "rgba(19, 19, 19, 1.0)", // #131313
        700: "rgba(133, 133, 133, 1.0)" // #858585
      },
      white: {
        DEFAULT: "rgba(246, 246, 249, 1.0)" // #F6F6F9
      }
    },
    fontFamily: {
      DEFAULT: ["Poppins", "sans-serif"],
      sans: ["Poppins", "sans-serif"],
      brand: ["Lexend Zetta"]
    },
    fontWeight: {
      regular: "400",
      normal: "400",
      semibold: "600"
    }
  },
  variants: {
    extend: {
      animation: ["before"],
      borderColor: ["hover"]
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio")
  ]
};
