import { createGlobalStyle } from "styled-components";
import { extendTheme } from "@chakra-ui/react";

export const StyleGlobal = createGlobalStyle`



:root{
    --color-black:#242222;
    --color-blue: #4f67d8;
    --color-blue2: #203F81;
    --color-blue3: #2B6CB0;
    --color-white: #fff;
    --color-placeholder: #8A8787;

	--color-text1: #fff;
	

}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, p, blockquote, pre,
a, em, img,  samp,
small, strike, b, sub, sup, var,
b, u, i, center,  ol, ul, li,
fieldset, form, label,
table, caption, article, aside,
figure, figcaption, footer, header,
nav, output, section, time, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	vertical-align: baseline;
	font-family: 'Inter', sans-serif;
	text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, figcaption, figure,
footer, header, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

img{
	max-width: 100%;
}

input{
	outline: none;
}

::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}

::-webkit-scrollbar-track {
    background-color: var(--color-placeholder);
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-salmon);
}


#root {
	width: 100%;
	max-width: 100%;
}html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, p, blockquote, pre,
a, em, img,  samp,
small, strike, b, sub, sup, var,
b, u, i, center,  ol, ul, li,
fieldset, form, label,
table, caption, article, aside,
figure, figcaption, footer, header,
nav, output, section, time, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	vertical-align: baseline;
	font-family: 'Inter', sans-serif;
	text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, figcaption, figure,
footer, header, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
    background-color: #242222;
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

img{
	max-width: 100%;
}

input{
	outline: none;
}

::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}

::-webkit-scrollbar-track {
    background-color: var(--color-placeholder);
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-salmon);
}

#root {
	width: 100%;
	max-width: 100%;
}
.title{
	text-align: center;
	color: var(--color-text1);
	margin-top: 5px;
	font-weight: 600;
	letter-spacing: 1px;
}
.container_modal{
	padding: 1rem;
	.register_modal{
		border-radius: 5px;
		background-color: var(--color-blue3);
		input{
			
		}

		.btnEya{
			height: auto;
		}
		.container_links{
			margin-top: 1rem;
			text-align: center;
		}

	}

	
}


`;
