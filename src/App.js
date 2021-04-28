import styled, { keyframes } from "styled-components";
import React from "react";
// import { motion } from "framer-motion";

const Container = styled.div`
	background-image: linear-gradient(
			to bottom,
			rgba(255, 168, 76, 0.6) 0%,
			rgba(255, 123, 13, 0.6) 100%
		),
		url("https://images.unsplash.com/photo-1446824505046-e43605ffb17f");
	background-position: center center;
	height: 100vh;
	background-blend-mode: soft-light;
	background-size: cover;
`;

const birdAnimation = keyframes`
    100%{
        background-position: -900px 0;
    }
`;

const birdContainerAnim = keyframes`
  0% {
		transform: scale(0.3) translateX(-10vw);
	}
	
	10% {
		transform: translateY(2vh) translateX(10vw) scale(0.4);
	}
	
	20% {
		transform: translateY(0vh) translateX(30vw) scale(0.5);
	}
	
	30% {
		transform: translateY(4vh) translateX(50vw) scale(0.6);
	}
	
	40% {
		transform: translateY(2vh) translateX(70vw) scale(0.6);
	}
	
	50% {
		transform: translateY(0vh) translateX(90vw) scale(0.6);
	}
	
	60% {
		transform: translateY(0vh) translateX(110vw) scale(0.6);
	}
	
	100% {
		transform: translateY(0vh) translateX(110vw) scale(0.6);
	}
	
}

`;

const Bird = styled.div`
	background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg");
	background-size: auto 100%;
	width: 88px;
	height: 125px;
	will-change: background-position;
	animation-name: ${birdAnimation};
	animation-timing-function: steps(10);
	animation-iteration-count: infinite;
	animation-duration: 1s;
	animation-delay: -0.5s;
`;

const BirdContainer = styled.div`
	position: absolute;
	top: 20%;
	left: -10%;
	will-change: transform;
	animation-name: ${birdContainerAnim};
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	transform: scale(0) translateX(-10vw);
	animation-duration: 15s;
	animation-delay: 0;
`;

function App() {
	return (
		<Container>
			<BirdContainer>
				<Bird></Bird>
			</BirdContainer>
			<BirdContainer>
				<Bird></Bird>
			</BirdContainer>
			<BirdContainer>
				<Bird></Bird>
			</BirdContainer>
			<BirdContainer>
				<Bird></Bird>
			</BirdContainer>
		</Container>
	);
}

export default App;
