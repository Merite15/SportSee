import { useParams } from 'react-router-dom';
import { useGetUserData } from '../hook/useGetUserData';
import { Sidebar } from '../components/navigation/Sidebar';
import { Header } from '../components/navigation/Header';
import { Loader } from '../components/utils/Loader';
import { Error } from '../components/utils/Error';
import { Title } from '../components/user/Title';
import { ChartBar } from '../components/charts/Bar';
import { ChartLine } from '../components/charts/Line';
import { ChartRadar } from '../components/charts/Radar';
import { ChartRadial } from '../components/charts/Radial';
import { Card as CardStat } from '../components/user/Card';

export const Profile = () => {
    const { id } = useParams();

    const [data, loading, error] = useGetUserData(Number(id));

    return (
        <>
            <Header />
            <Sidebar />

            {loading ?

                <Loader /> : error ? <Error /> :
                    <div className="container">
                        <Title data={data.user} />

                        <div className="content">
                            <div className="left-content">
                                <ChartBar data={data.activity} />

                                <div>
                                    <ChartLine data={data.average} />
                                    <ChartRadar data={data.performance} />
                                    <ChartRadial score={data.score} />
                                </div>
                            </div>

                            <div className="right-content">
                                <CardStat type="Calories" nbGramme={data.userInfos?.calorie} />
                                <CardStat type="Proteines" nbGramme={data.userInfos?.protein} />
                                <CardStat type="Glucides" nbGramme={data.userInfos?.glucide} />
                                <CardStat type="Lipides" nbGramme={data.userInfos?.lipid} />
                            </div>
                        </div>

                    </div>}
        </>
    )
}