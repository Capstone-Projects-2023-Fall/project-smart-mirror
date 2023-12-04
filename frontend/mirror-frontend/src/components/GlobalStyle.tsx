import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* Include the Exo font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Exo:wght@400;700&display=swap');

  body {
    font-family: 'Exo', sans-serif;
    font-weight: 200; 
  }

  /* Add other global styles as needed */
`
;

export default GlobalStyle;
