import { useEffect } from "react";
import { usePuzzleStore } from "../data/Store";

const unlockers = ["1", "2", "3", "4"];
const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

const animateAnswer = async (secret: string) => {
	resetUnlockers("disabled");
	await timer(1000);
	// Fill the unlocker items in sequence of the secret:
	for (const c of secret) {
		const unlockerElement = document.getElementById("unlocker" + c);
		if (unlockerElement) {
			unlockerElement.className = "unlocker-item-filled";
			await timer(1000);
		}
	}
	resetUnlockers("enabled");
};

const resetUnlockers = (status: string) => {
	// Un-fill the unlocker items
	for (const c of unlockers) {
		const unlockerElement = document.getElementById("unlocker" + c);
		if (unlockerElement) {
			unlockerElement.className = "unlocker-item " + status;
		}
	}
};

const fillUnlockers = () => {
	for (const c of unlockers) {
		const unlockerElement = document.getElementById("unlocker" + c);
		if (unlockerElement) {
			unlockerElement.className = "unlocker-item-filled";
		}
	}
};

export default function Unlocker() {
	const lockStatus = usePuzzleStore((state) => state.lockStatus);
	const secret = usePuzzleStore((state) => state.secret);
	const input = usePuzzleStore((state) => state.input);
	const setInput = usePuzzleStore((state) => state.setInput);

	useEffect(() => {
		if (lockStatus === 'error') {
			fillUnlockers();
		}
		if (lockStatus === "default" && input.length < 4) {
			animateAnswer(secret);
		}
	}, [secret]);

	const onClickHandler = (id: string) => {
		const unlockerElement = document.getElementById("unlocker" + id);
		if (unlockerElement) {
			if (
				unlockerElement.className === "unlocker-item-filled" ||
				unlockerElement.className === "unlocker-item disabled"
			) {
				return;
			}
			unlockerElement.className = "unlocker-item-filled";
			setInput(input + id)
		}
	};

	return (
		<div
			id="unlocker"
			key={secret}
			className={
				lockStatus === "open"
					? "unlocker-container-exit"
					: "unlocker-container"
			}
		>
			{unlockers.map((item) => {
				return (
					<div
						id={"unlocker" + item}
						key={item}
						className="unlocker-item disabled"
						onClick={() => onClickHandler(item)}
					></div>
				);
			})}
		</div>
	);
}
