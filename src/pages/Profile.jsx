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
                        </div>

                    </div>}
        </>
    )
}