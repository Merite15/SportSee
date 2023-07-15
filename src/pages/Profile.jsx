import { useParams } from 'react-router-dom';
import { useGetUserData } from '../hook/useGetUserData';
import { Sidebar } from '../components/navigation/Sidebar';
import { Header } from '../components/navigation/Header';
import { Loader } from '../components/utils/Loader';
import { Error } from '../components/utils/Error';
import { Title } from '../components/user/Title';

export const Profile = () => {
    const { id } = useParams();

    const [data, loading, error] = useGetUserData(Number(id));
    
    return (
        <>
            <Header />
            <Sidebar />

            {loading ?

                <Loader /> : error ? <Error /> :
                    <div className="main-container">
                        <Title data={data.user} />
                    </div>}
        </>
    )
}