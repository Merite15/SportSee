import { NavLink } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="notFound">
            <div className="mars"></div>
            <img title="image" src="https://assets.codepen.io/1538474/404.svg" className="logo-404" />
            <img title="image" src="https://assets.codepen.io/1538474/meteor.svg" className="meteor" />
            <p className="title">Oh no!!</p>
            <p className="subtitle">
                You’re either misspelling the URL <br /> or requesting a page that's no longer here.
            </p>
            <div className="back-btn">
                <NavLink className="btn-back" to="/">Retourner sur la page
                        d’accueil</NavLink>
            </div>
            <img title="image" src="https://assets.codepen.io/1538474/astronaut.svg" className="astronaut" />
            <img title="image" src="https://assets.codepen.io/1538474/spaceship.svg" className="spaceship" />
        </div>
    )
}