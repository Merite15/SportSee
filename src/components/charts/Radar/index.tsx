import { useEffect, useState } from 'react';

import { FetchData } from '@/hook/useGetData';

import { UserPerformanceFactory } from '@/factories/UserPerformanceFactory';

import "./style.scss";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

import { Skeleton } from '../../utils/Skeleton'
import { Error } from '../../utils/Error'

import { ErrorFormat } from '@/utils/models/ErrorFormat';
import { Performance } from '@/utils/types/Performance';

export const ChartRadar = ({ userId }: { userId: number }) => {
  const url = `${import.meta.env.VITE_URL}/performance.json`
  // const url = `${import.meta.env.VITE_API_URL}/${userId}/performance`;

  const [performances, SetPerformances] = useState([]);

  const [data, isLoading, isError, error] = FetchData(
    url,
    3000,
    UserPerformanceFactory,
    'api'
  ) as [any, boolean, boolean, ErrorFormat]

  useEffect(() => {
    if (!isNaN(userId) && data) {
      const sortList = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio',
      ];
      const sortedPerf = data.data.sort((a: Performance, b: Performance) => {
        return sortList.indexOf(a.kind) - sortList.indexOf(b.kind);
      });
      SetPerformances(sortedPerf);
    }
  }, [userId, data]);

  if (isLoading)
    return (
      <Skeleton />
    );

  if (isError)
    return (
      <Error name={error.name} message={error.message} />
    );

  return (
    <>
      <div className='chartRadar'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="66%" data={performances}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="kind" dy={4} tickSize={15} />

            <Radar name="performance" dataKey="value" fill="red" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
