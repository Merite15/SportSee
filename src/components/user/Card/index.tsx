import calories from "./assets/calories.svg";
import proteines from "./assets/protein.svg";
import glucides from "./assets/carbs.svg";
import lipides from "./assets/fat.svg";
import { Card as CardType } from "../../../types/Card";

import "./style.scss";

export const Card = ({ nbGramme, type }: CardType) => {

	let svg: string = "";

	switch (type) {
		case 'Calories':
			svg = calories;
			break;
		case 'Proteines':
			svg = proteines;
			break;
		case 'Glucides':
			svg = glucides;
			break;
		case 'Lipides':
			svg = lipides;
			break;
	}

	return (
		<div className="cardStat">
			<div className="card-details">
				<img title="img" src={svg}></img>
				<div className="card-description">
					<h3>
						{nbGramme}
						{type === 'Calories' ? "kCal" : "g"}
					</h3>
					<h4>{type}</h4>
				</div>
			</div>
		</div>
	)
}
