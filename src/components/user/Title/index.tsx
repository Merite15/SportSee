import "./style.scss";

export const Title = ({ name }: { name: string }) => {
    return (
        <div className="user-infos">
            <h1>
                Bonjour <span>{name}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};