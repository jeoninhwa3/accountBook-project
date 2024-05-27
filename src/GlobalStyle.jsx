import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		max-width: 1200px;
		max-height: 800px;
		margin: 0 auto;
		background-color: pink;
	}
`;
export default GlobalStyle;
