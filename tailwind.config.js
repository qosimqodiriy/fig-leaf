/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      'white': {
        'primary': '#ffffff',
        'secondary': '#F5F5F7',
      },
      'black': {
        'dark': '#020105',
        'primary': '#1D2B1E',
        'secondary': '#5D5D5F',
      },
      'gray': {
        'text': '#9A999B',
        'primary': '#4D5674',
        'secondary': '#EBEBEB',
      },
      'red': {
        'primary': '#f00',
        'secondary': '#FFEBEB',
      },
      'blue': {
        'primary': '#1363F3',
        'secondary': '#87C2FF',
        'back': '#DDE9FD'
      },
      'green': {
        'dark': '#1D2B1E',
        'primary': '#009A10',
        'secondary': '#CDF8CF',
      },
      'yellow': {
        'primary': '#433D0B',
        'secondary': '#FBF8DE',
        'badge': '#FFE55B'
      },
      'orange': {
        'primary': '#ff6300',
        'secondary': '#EE3838',
      },
      'colour': {
        'red': '#FF0000',
        'blue': '#0000FF',
        'green': '#00ff00',
        'indigo': '#6F00FF',
        'orange': '#FEBE10',
      },
      'transparent': 'transparent'
    },
    fontFamily: {
      babesNeue: ['Bebas Neue', 'serif'],
      interfaces: ['TT Interfaces', 'serif'],
      firsNeue: ['TT Firs Neue', 'sans-serif'],
    },
    spacing: {
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      '110%': '110%',
      '120%': '120%',
      '130%': '130%',
      '140%': '140%',
      '150%': '150%',

      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '36': '36px',
      '38': '38px',
      '40': '40px',
      '42': '42px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '48': '48px',
      '50': '50px',
      '51': '51px',
      '52': '52px',
      '54': '54px',
      '56': '56px',
      '58': '58px',
      '60': '60px',
      '62': '62px',
      '64': '64px',
      '68': '68px',
      '72': '72px',
      '75': '75px',
      '76': '76px',
      '80': '80px',
      '82': '82px',
      '84': '84px',
      '85': '85px',
      '88': '88px',
      '90': '90px',
      '95': '95px',
      '100': '100px',
      '104': '104px',
      '105': '105px',
      '110': '110px',
      '112': '112px',
      '115': '115px',
      '120': '120px',
      '126': '126px',
      '130': '130px',
      '140': '140px',
      '150': '150px',
      '154': '154px',
      '156': '156px',
      '160': '160px',
      '165': '165px',
      '172': '172px',
      '175': '175px',
      '180': '180px',
      '185': '185px',
      '200': '200px',
      '205': '205px',
      '210': '210px',
      '220': '220px',
      '235': '235px',
      '240': '240px',
      '245': '245px',
      '250': '250px',
      '270': '270px',
      '276': '276px',
      '285': '285px',
      '292': '292px',
      '300': '300px',
      '310': '310px',
      '322': '322px',
      '335': '335px',
      '350': '350px',
      '357': '357px',
      '381': '381px',
      '390': '390px',
      '400': '400px',
      '463': '463px',
      '480': '480px',
      '483': '483px',
      '500': '500px',
      '550': '550px',
      '600': '600px',
      '630': '630px',
      '700': '700px',
      '800': '800px',
      'full': '100%',
      '1366': '1366px',
    },
    borderRadius: {
      '0': '0px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '30': '30px',
      'full': '50%',
      'none': '0px',
      DEFAULT: '5px'
    },
    fontSize: {

      sm: '14px',
      sm2: '15px',
      base: '16px',
      base2: '17px',
      lg: '20px',
      xl: '24px',
      xxl: '32px',
      xxxl: '35px',

      8: '8px',
      9: '9px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      38: '38px',
      42: '42px',
      46: '46px',
      50: '50px',
      56: '56px',
      60: '60px',
      64: '64px',
    },
    lineHeight: {
      '12': '12px',
      '15': '15px',
      '17': '17px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '24': '24px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '32': '32px',
      '38': '38px',
      '48': '48px',
      '100': '100%',
      '110': '110%',
      '120': '120%',
      '130': '130%',
      '140': '140%',
      '150': '150%',
    },
    maxWidth: {
      '0': '0px',
      '20': '20px',
      '50': '50px',
      '72': '72px',
      '80': '80px',
      '82': '82px',
      '85': '85px',
      '90': '90px',
      '150': '150px',
      '120': '120px',
      '170': '170px',
      '196': '196px',
      '202': '202px',
      '245': '245px',
      '300': '300px',
      '350': '350px',
      '370': '370px',
      '364': '364px',
      '400': '400px',
      '500': '500px',
      '600': '600px',
      '670': '670px',
      '700': '700px',
      '762': '762px',
      '800': '800px',
      '850': '850px',
      '900': '900px',
      '950': '950px',
      '1000': '1000px',
      '1100': '1100px',
      '1200': '1200px',
      '1366': '1366px',
      '1400': '1400px',
      '1520': '1520px',
      '1920': '1920px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
      'auto': 'auto',
    },
    maxHeight: {
      '0': '0px',
      '14': '14px',
      '50': '50px',
      '20': '20px',
      '25': '25px',
      '45': '45px',
      '58': '58px',
      '72': '72px',
      '200': '200px',
      '222': '222px',
      '254': '254px',
      '285': '285px',
      '350': '350px',
      '335': '335px',
      '370': '370px',
      '513': '513px',
      '550': '550px',
      '1366': '1366px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
    },
    minHeight: {
      '20': '20px',
      '72': '72px',
      '180': '180px',
      '200': '200px',
      '220': '220px',
      '235': '235px',
      '270': '270px',
      '300': '300px',
      '350': '350px',
      '370': '370px',
      '400': '400px',
      '450': '450px',
      '480': '480px',
      '500': '500px',
      '550': '550px',
      '570': '570px',
      '600': '600px',
      '700': '700px',
      '800': '800px',
      '900': '900px',
      '1366': '1366px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
      'screen': '100vh',
    },
    minWidth: {
      '20': '20px',
      '72': '72px',
      '80': '80px',
      '85': '85px',
      '90': '90px',
      '100': '100px',
      '150': '150px',
      '180': '180px',
      '200': '200px',
      '220': '220px',
      '235': '235px',
      '270': '270px',
      '280': '280px',
      '300': '300px',
      '350': '350px',
      '370': '370px',
      '450': '450px',
      '480': '480px',
      '570': '570px',
      '700': '700px',
      '800': '800px',
      '850': '850px',
      '900': '900px',
      '950': '950px',
      '980': '980px',
      '990': '990px',
      '1000': '1000px',
      '1100': '1100px',
      '1150': '1150px',
      '1200': '1200px',
      '1250': '1250px',
      '1300': '1300px',
      '1366': '1366px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
      'screen': '100vh',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1350px',
      '2xl': '1536px',
    },
    inset: {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '25': '25px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '50': '50px',
      '60': '60px',
      '70': '70px',
      '80': '80px',
      '90': '90px',
      '100': '100px',
      '110': '110px',
      '120': '120px',
      '150': '150px',
      '160': '160px',
      '200': '200px',
      '220': '220px',
      '245': '245px',
      '250': '250px',
      '260': '260px',
      '270': '270px',
      '280': '280px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
    },
    extend: {
      keyframes: {
        blowUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        blowDown: {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0)',
          },
        }
      },
      animation: {
        blowUp: 'blowUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
        blowDown: 'blowDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards',
      }
    },
  },

  plugins: [],
}

