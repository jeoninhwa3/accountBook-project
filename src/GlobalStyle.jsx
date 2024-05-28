import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
	${reset}
	body {
		font-family: "Noto Sans", sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		/* background-color: #05B38F; */
		background: url(https://img.freepik.com/free-photo/wallpaper-background-several-transparent-circles_58702-7112.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716076800&semt=ais_user) no-repeat center / cover;
	}
`;
export default GlobalStyle;
