module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"','Confortaa'],
    },
    extend: {
      colors: {
        'primary': '#7f1d1d',
      },
      screens: {
        'lg': '1200px',
      }
    },
    // screens: {
    //   'tablet': '1174px',
    // }
  },
  plugins: [],
}
