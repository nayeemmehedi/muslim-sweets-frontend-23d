import type { Config } from 'tailwindcss'



const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	},
  	fontWeight: {
  		thin: '100',
  		hairline: '100',
  		extralight: '200',
  		light: '300',
  		normal: '400',
  		medium: '500',
  		semibold: '600',
  		bold: '700',
  		extrabold: '800',
  		'extra-bold': '800',
  		black: '900'
  	}
  },
    plugins: [require("tailwindcss-animate")]
}
export default config
