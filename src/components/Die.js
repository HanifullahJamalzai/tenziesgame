import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiceOne,
	faDiceTwo,
	faDiceThree,
	faDiceFour,
	faDiceFive,
	faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
export default function Die(props) {
	const styles = {
		backgroundColor: props.isHeld ? "#59E391" : "white",
	};

	// console.log(props.value);
	let faDice;
	function showFace(value = props.value) {
		console.log(faDice);
		if (props.value === 1) {
			return (faDice = "faDiceOne");
		} else if (value === 2) {
			return (faDice = "faDiceTwo");
		} else if (value === 3) {
			return (faDice = "faDiceThree");
		} else if (value === 4) {
			return (faDice = "faDiceFour");
		} else if (value === 5) {
			return (faDice = "faDiceFive");
		} else if (value === 6) {
			return (faDice = "faDiceSix");
		}
	}
	let icons = showFace(props.value);

	// console.log(face);
	return (
		<div className="die-face" style={styles} onClick={props.holdDice}>
			{/* <h2 className="die-num">{props.value}</h2> */}
			{/* <FontAwesomeIcon icon= className={`fas fa-dice-one`} /> */}
			<FontAwesomeIcon
				icon={icons}
				className="dice--icon"
				color={"#5035ff"}
				fixedWidth={"0px"}
			/>
		</div>
	);
}
