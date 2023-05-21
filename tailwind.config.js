/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: [],
  theme: {
    extend: {
      colors: {
        //primary
        'primary-tint': 'rgba(227, 250, 252, 0.35)',
        'primary-light': '#e3fafc',
        'primary-default': '#15aabf', //rgb(21, 170, 191)
        'primary-dark': '#1098ad', //rgb(16, 152, 173)
        //Grayscale
        'gray-light': '#f9f9fb',
        'gray-default': 'rgb(237, 240, 243)',
        'gray-dark': 'rgb(145 161 180)', //#91a1b4
        'gray-hover': 'rgba(0, 0, 0, 0.05)',

        'black-light': '#475569',
        'black-default': '#334155',
        'black-dark': '#1e293b',
        //tag&badge 와 같은 point color
        //*red
        'point-red-light': 'rgb(253 164 175)',
        'point-red': 'rgb(244 63 94)',
        'point-red-dark': 'rgb(225 29 72)',
        //*yellow
        'point-yel-light': 'rgb(253 230 138)',
        'point-yel': 'rgb(252 211 77)',
        'point-yel-dark': 'rgb(251 191 36)',
        //*green
        'point-gr-light': '#6ed8cd',
        'point-gr': '#47c6b9',
        'point-gr-dark': '#1eb7a7',
        //*blue
        'point-blue-light': '#7abef5',
        'point-blue': '#2b96ed',
        'point-blue-dark': '#1683db',
        //*indigo
        'point-indigo-light': 'rgb(199 210 254)',
        'point-indigo': 'rgb(165 180 252)',
        'point-indigo-dark': 'rgb(99 102 241)',

        //shadow
        'primary-shadow': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'secondary-shadow': 'rgb(0 0 0 / 20%) 0px 0px 0px 0.5px',
      },
      spacing: {
        0.5: '0.125rem',
        0.75: '0.1875rem',
        1.25: '0.3125rem',
        1.5: '0.375rem',
        1.75: '0.4375rem',
        2.25: '0.5625rem',
        2.75: '0.6875rem',
        3.25: '0.8rem',
      },
    },
  },
  plugins: [],
};
