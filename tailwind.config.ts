import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const svgToDataUri = require("mini-svg-data-uri");
const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ["var(--font-geist-sans)"],
			mono: ["var(--font-geist-mono)"],
			berenikaBold: ["var(--font-berenika-bold)"],
			loubag: ["Loubag Medium"],
			loubagSemiBold: ["Loubag Semi Bold"],
		},
  		colors: {
			'brown': '#a57e42',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
			scroll:
			"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			scale: "scale 2s ease-in-out infinite",
			"pulse-glow": "pulse-glow 2s ease-in-out infinite",
			"pulse-ring": "pulse-ring 2s ease-in-out infinite",
		},
		keyframes: {
			scroll: {
				to: {
					transform: "translate(calc(-50% - 0.5rem))",
				},
			},
			scale: {
				"0%, 100%": { transform: "scale(1)" },
				"50%": { transform: "scale(1.1)" },
			},
			"pulse-glow": {
				"0%, 100%": { 
					boxShadow: "0 0 5px rgba(249, 115, 22, 0.5), 0 0 20px rgba(249, 115, 22, 0.3)",
					transform: "scale(1)"
				},
				"50%": { 
					boxShadow: "0 0 20px rgba(249, 115, 22, 0.8), 0 0 40px rgba(249, 115, 22, 0.5)",
					transform: "scale(1.02)"
				},
			},
			"pulse-ring": {
				"0%, 100%": { 
					opacity: "0.5",
					transform: "scale(1)"
				},
				"50%": { 
					opacity: "0.8",
					transform: "scale(1.1)"
				},
			},
		},
  	}
  },
  plugins: [addVariablesForColors,     function ({ matchUtilities, theme }: any) {
	matchUtilities(
	  {
		"bg-dot-thick": (value: any) => ({
		  backgroundImage: `url("${svgToDataUri(
			`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
		  )}")`,
		}),
	  },
	  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
  },
],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }

export default config;
