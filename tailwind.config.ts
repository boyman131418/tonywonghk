import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          50: "hsl(45 100% 96%)",
          100: "hsl(45 95% 88%)",
          200: "hsl(45 90% 78%)",
          300: "hsl(45 85% 68%)",
          400: "hsl(45 80% 58%)",
          500: "hsl(45 80% 55%)",
          600: "hsl(38 85% 48%)",
          700: "hsl(30 80% 40%)",
          800: "hsl(25 75% 32%)",
          900: "hsl(20 70% 25%)",
        },
        navy: {
          50: "hsl(220 30% 96%)",
          100: "hsl(220 28% 90%)",
          200: "hsl(220 26% 80%)",
          300: "hsl(220 24% 65%)",
          400: "hsl(220 30% 45%)",
          500: "hsl(220 40% 30%)",
          600: "hsl(220 45% 22%)",
          700: "hsl(220 45% 18%)",
          800: "hsl(220 45% 14%)",
          900: "hsl(220 50% 10%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsla(45, 80%, 55%, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px hsla(45, 80%, 55%, 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
