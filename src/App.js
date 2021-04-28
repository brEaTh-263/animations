import styled, { keyframes } from "styled-components";
import React from "react";
import { motion } from "framer-motion";

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

const Bird = styled(motion.div)`
	background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg");
	background-size: auto 100%;
	width: 88px;
	height: 125px;
	will-change: background-position;
	animation-name: ${birdAnimation};
	animation-iteration-count: infinite;
	animation-timing-function: steps(10);
	animation-duration: 1s;
`;

const BirdContainer = styled(motion.div)`
	position: absolute;
	top: 20%;
	left: -10%;
	will-change: transform;
	transform: scale(0) translateX(-10vw);
`;

function App() {
	const x = ["-10vw", "10vw", "30vw", "50vw", "70vw", "90vw", "110vw", "110vw"];
	const y = ["2vh", "2vh", "0vh", "4vh", "2vh", "0vh", "0vh", "0vh"];
	const scale = [0.3, 0.4, 0.5, 0.6, 0.6, 0.6, 0.6, 0.6];

	return (
		<Container>
			<BirdContainer
				animate={{
					x: x,
					y: y,
					scale: scale,
					transition: {
						duration: 15,
						ease: "linear",
						repeat: Infinity,
						repeatType: "loop",
					},
				}}
			>
				<Bird></Bird>
			</BirdContainer>
			<BirdContainer
				animate={{
					x: x,
					y: y,
					scale: scale,
					transition: {
						duration: 16,
						delay: 1,
						ease: "linear",
						repeat: Infinity,
						repeatType: "loop",
					},
				}}
			>
				<Bird
					style={{ animationDuration: "0.9s", animationDelay: "-0.75s" }}
				></Bird>
			</BirdContainer>
		</Container>
	);
}

export default App;
