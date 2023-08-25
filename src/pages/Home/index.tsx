import { FetchData } from '@/hook/useGetData';

import { UserInfosFactory } from '@/factories/UserInfosFactory';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Loader } from '@/components/utils/Loader';
import { Error } from '@/components/utils/Error';
import { CardInfo } from '@/components/user/CardInfo';
import { Title } from '@/components/user/Title';
import { ChartBar } from '@/components/charts/Bar';
import { ChartLine } from '@/components/charts/Line';
import { ChartRadar } from '@/components/charts/Radar';
import { ChartRadial } from '@/components/charts/Radial';
import { ErrorFormat } from '@/utils/models/ErrorFormat';

import "./style.scss";

export const Home = () => {
  const userId = import.meta.env.VITE_USER_ID;

  const url = `${import.meta.env.VITE_URL}/userInfos.json`
  // const url = `${import.meta.env.VITE_API_URL}/${userId}`;

  const [data, isLoading, isError, error] = FetchData(
    url,
    2000,
    UserInfosFactory,
    'api'
  ) as [any, boolean, boolean, ErrorFormat]

  if (isLoading)
    return (
      <Loader />
    );

  if (isError)
    return (
      <Error name={error.name} message={error.message} />
    )
    

  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">

        <Title name={data.firstName} />

        <div className="content">
          <div className="left-content">
            <ChartBar userId={userId} />

            <div className='charts'>
              <ChartLine userId={userId} />
              <ChartRadar userId={userId} />
              <ChartRadial score={data.todayScore} />
            </div>
          </div>

          <div className="right-content">
            <CardInfo type="Calories" nbGramme={data.calorieCount} />
            <CardInfo type="Proteines" nbGramme={data.proteinCount} />
            <CardInfo type="Glucides" nbGramme={data.carbohydrateCount} />
            <CardInfo type="Lipides" nbGramme={data.lipidCount} />
          </div>
        </div>
      </div>
    </>
  );
};
