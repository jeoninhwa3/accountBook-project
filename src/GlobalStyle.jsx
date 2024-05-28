import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		max-width: 1200px;
		padding: 30px 0;
		margin: 0 auto;
		background-color: pink;
	}
`;
export default GlobalStyle;
