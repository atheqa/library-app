import { createGlobalStyle } from 'styled-components';
import { fonts } from './constants';

const GlobalStyle = createGlobalStyle`
/* sarabun-300 - latin */
@font-face {
  font-family: 'Sarabun';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/sarabun-v8-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/sarabun-v8-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/sarabun-v8-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/sarabun-v8-latin-300.woff') format('woff'), /* Modern Browsers */
       url('/fonts/sarabun-v8-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/sarabun-v8-latin-300.svg#Sarabun') format('svg'); /* Legacy iOS */
}
/* sarabun-regular - latin */
@font-face {
  font-family: 'Sarabun';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/sarabun-v8-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/sarabun-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/sarabun-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/sarabun-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/sarabun-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/sarabun-v8-latin-regular.svg#Sarabun') format('svg'); /* Legacy iOS */
}
/* sarabun-600 - latin */
@font-face {
  font-family: 'Sarabun';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/sarabun-v8-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/sarabun-v8-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/sarabun-v8-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/sarabun-v8-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/sarabun-v8-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/sarabun-v8-latin-600.svg#Sarabun') format('svg'); /* Legacy iOS */
}

/* vollkorn-regular - latin */
@font-face {
  font-family: 'Vollkorn';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/vollkorn-v13-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/vollkorn-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/vollkorn-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/vollkorn-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/vollkorn-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/vollkorn-v13-latin-regular.svg#Vollkorn') format('svg'); /* Legacy iOS */
}
/* vollkorn-600 - latin */
@font-face {
  font-family: 'Vollkorn';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/vollkorn-v13-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/vollkorn-v13-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/vollkorn-v13-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/vollkorn-v13-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/vollkorn-v13-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/vollkorn-v13-latin-600.svg#Vollkorn') format('svg'); /* Legacy iOS */
}

/* global stylesheets */

html {
    box-sizing: border-box;
    font-size: 16px !important;
}

*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    font-family: ${fonts.primary}, Arial, Georgia, Serif;
}

textarea, input, button {
    font-family: ${fonts.primary}, Arial, Georgia, Serif;
}

textarea: focus, input:focus, button {
    outline: none;
}

a {
    color: #259DFF;
    text-decoration: none;
}

h1 {
    font-family: ${fonts.headers}, Arial, Georgia, Serif;
}
`;

export default GlobalStyle;
