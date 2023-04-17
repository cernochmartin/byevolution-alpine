tailwind.config = {
  content: [
    './views/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: '3px',
      'lg': '3rem',
      'full': '9999px'
    },
    fontSize: {
      'xs': '12px',
      'sm': '13px',
      'base': '14px',
      'lg': '16px',
      'xl': '18px',
      '2xl': '20px',
      '3xl': '25px',
      '4xl': '30px',
    },
    extend: {
      colors: {
        bye: {
          blue: '#345D9D',
          orange: '#FF671D'
        },
        primary: {
          DEFAULT: '#7a8294', //#939CB2
          light: '#E7EAF0',
          lighter: '#E9EDF6',
          dark: '#6A6F7B'
        },
        secondary: {
          DEFAULT: '#9DBADB',
          lighter: '#BCE0FD',
          light: '#E2EAF0',
          dark: '#5d9ae0',
        },
        success: {
          DEFAULT: '#49a76d'
        },
        warning: {
          DEFAULT: '#e98c35'
        },
        danger: {
          DEFAULT: '#e55959'
        },
        gray: {
          DEFAULT: '#C3C3C3',
          light: '#F7F7F7',
          dark: '#333',
          darker: '#7A7A7A'
        },
        input: {
          light: '#E1EAF4',
          dark: '#5da2f0'
        }
      }
    }
  }
}