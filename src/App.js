import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Die from "./components/Die";
import "./components/style.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);
		if (allHeld && allSameValue) {
			setTenzies(true);
			console.log("Congrat's You Won");
		}
	}, [dice]);
	function generateNewDie() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid(),
		};
	}

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie());
		}
		return newDice;
	}

	function rollDice() {
		if (!tenzies) {
			setDice((oldDice) =>
				oldDice.map((die) => {
					return die.isHeld ? die : generateNewDie();
				})
			);
		} else {
			setTenzies(false);
			setDice(allNewDice());
		}
	}

	function holdDice(id) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}

	const diceElements = dice.map((die) => (
		<Die
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			holdDice={() => holdDice(die.id)}
		/>
	));

	return (
		<main>
			{tenzies && <Confetti />}

			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			<div className="dice-container">{diceElements}</div>
			<button className="roll-dice" onClick={rollDice}>
				{tenzies ? "New Game" : "Roll"}
			</button>
			<div className="head--history">
				<p>Rolls: 0</p>
				<p>Best time: 00:22</p>
				<p>Time: 00:00</p>
			</div>
		</main>
	);
}
export default App;
