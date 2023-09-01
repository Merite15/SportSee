import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Loader } from '@/components/utils/Loader';
import { CardInfo } from '@/components/user/CardInfo';
import { Title } from '@/components/user/Title';
import { ChartBar } from '@/components/charts/Bar';
import { ChartLine } from '@/components/charts/Line';
import { ChartRadar } from '@/components/charts/Radar';
import { ChartRadial } from '@/components/charts/Radial';
import { useGetUserData } from '@/hook/useGetUserData';

import "./style.scss";

type ApiData = {
  userInfosData: any;
  loading: boolean;
};

export const Home = () => {
  const { userInfosData, loading }: ApiData = useGetUserData()

  if (loading)
    return (
      <Loader />
    );

  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">

        <Title name={userInfosData.firstName} />

        <div className="content">
          <div className="left-content">
            <ChartBar />

            <div className='charts'>
              <ChartLine />
              <ChartRadar />
              <ChartRadial score={userInfosData.todayScore} />
            </div>
          </div>

          <div className="right-content">
            <CardInfo type="Calories" nbGramme={userInfosData.calorieCount} />
            <CardInfo type="Proteines" nbGramme={userInfosData.proteinCount} />
            <CardInfo type="Glucides" nbGramme={userInfosData.carbohydrateCount} />
            <CardInfo type="Lipides" nbGramme={userInfosData.lipidCount} />
          </div>
        </div>
      </div>
    </>
  );
};
