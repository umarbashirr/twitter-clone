import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "rgb(29, 155, 240)",
        "primary-color-10": "rgba(29, 155, 240,0.1)",
        "white-color": "rgb(247, 249, 249)",
        "gray-rgba": "rgba(239, 243, 244, 0.1)",
        "light-gray": "rgb(56,68,77)",
      },
    },
  },
  plugins: [],
};
export default config;
