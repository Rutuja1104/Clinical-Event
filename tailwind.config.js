/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
				'primary-main' : '#005596',
        'primary-light' : '#E4F3FF',
        'neutral-10':'#F4F4F4',
        'neutral-20':'#E9E9E9',
        'neutral-30':'#D2D2D2',
        'neutral-50':'#979797',
        'neutral-60':'#727272',
        'neutral-70':'#565656',
        'neutral-80':'#393939',
        'neutral-90':'#1D1D1D',
        'body':'#212D30'
			},
    },
  },
  plugins: [],
};
