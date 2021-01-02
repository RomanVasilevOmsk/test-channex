// eslint-disable-next-line import/no-anonymous-default-export
export default `
:root {
  --black: #122434;
  --darkGray: #737373;
  --gray: #BFBFBF;
  --red: #F05658;
  --blue: #2BAEE0;
  --secondaryBlue: #CAF0FF;
}


// reset some default styles
html,
body,
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  outline: none;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
strong {
  font-weight: bold;
}
input {
  outline: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  padding: 0;
  border: 0;
  background: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
}
picture {
  display: block;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
svg {
  display: block;
}


html{
  height: 100%;
}

body{
  height: 100%;
}


#root{
  height: 100%;
}

`;
