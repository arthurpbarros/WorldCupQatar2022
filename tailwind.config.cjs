module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Segoe UI','Roboto'],
      'local': ['Poppins']
    },
    extend: {
      colors: {
        'primary': '#7f1d1d',
      },
      screens: {
        'lg': '1200px',
        'tall': {'raw': '(max-height: 900px)'},
        'to_align_round': {'max': '800px'}
      },
      width: {
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%'
      }
    },
    // screens: {
    //   'tablet': '1174px',
    // }
  },
  plugins: [],
}
