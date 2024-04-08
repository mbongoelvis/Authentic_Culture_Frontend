/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
		boxShadow:{
			"3xl":"-20px -20px #ff9900"
		}
	},
  },
  plugins: [],
};

