import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(37, 99, 235)", // blue-600
        "primary-foreground": "#ffffff",
        secondary: "#64748b",
        "secondary-foreground": "#ffffff",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        accent: "#f3f4f6",
        "accent-foreground": "#111827",
      },
    },
  },
  plugins: [],
};
export default config;
