/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screen: {
     sm: '375px',
     md: '728px',
     lg: '1440px',
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)',
      },
      backgroundImage:  {
        "hero-desktop": "url(./images/desktop/image-hero.jpg)",
        "interactive-desktop": "url(./images/desktop/image-interactive.jpg)",
        "curiosity-desktop": "url(./images/desktop/image-curiosity.jpg)",
        "deep-desktop": "url(./images/desktop/image-deep-earth.jpg)",
        "fish-desktop": "url(./images/desktop/image-fisheye.jpg)",
        "grid-desktop": "url(./images/desktop/image-grid.jpg)",
        "from-desktop": "url(./images/desktop/image-from-above.jpg)",
        "night-desktop": "url(./images/desktop/image-night-arcade.jpg)",
        "soccer-desktop": "url(./images/desktop/image-soccer-team.jpg)",
        "pocket-desktop": "url(./images/desktop/image-pocket-borealis.jpg)",
        "hero-mobile": "url(./images/mobile/image-hero.jpg)",
        "interactive-mobile": "url(./images/mobile/image-interactive.jpg)",
        "curiosity-mobile": "url(./images/mobile/image-curiosity.jpg)",
        "deep-mobile": "url(./images/mobile/image-deep-earth.jpg)",
        "fish-mobile": "url(./images/mobile/image-fisheye.jpg)",
        "grid-mobile": "url(./images/mobile/image-grid.jpg)",
        "from-mobile": "url(./images/mobile/image-from-above.jpg)",
        "night-mobile": "url(./images/mobile/image-night-arcade.jpg)",
        "soccer-mobile": "url(./images/mobile/image-soccer-team.jpg)",
        "pocket-mobile": "url(./images/mobile/image-pocket-borealis.jpg)",
        "icon-open": "url(./images/icon-hamburger.svg)",
        "icon-close": "url(./images/icon-close.svg)",
      },
    },
    fontFamily: {
      alata: ['Alata', 'sans-serif'],
      'josefin': ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
