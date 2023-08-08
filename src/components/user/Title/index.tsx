import { Title as TextProps } from "../../../types/Title";

import "./style.scss";

export const Title = (data: TextProps) => {
	return (
		<div className="user-infos">
			<h1>Bonjour <span>{data?.data?.userInfos?.firstName}</span></h1>

			<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	);
}