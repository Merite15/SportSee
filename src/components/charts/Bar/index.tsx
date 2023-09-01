import { useEffect, useState } from 'react';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, } from 'recharts';

import { useFetchData } from '@/hook/useGetData';

import { UserActivitiesFactory } from '@/factories/UserActivitiesFactory';

import { Error } from '../../utils/Error'
import { ErrorFormat } from '@/utils/models/ErrorFormat';
import { Skeleton } from '../../utils/Skeleton';

import { ChartsProps } from '@/utils/models/ChartsProps';

import "./style.scss";

export const ChartBar = ({ userId }: ChartsProps) => {

  const app_mode = import.meta.env.VITE_APP_ENV;

  const url = app_mode === "local" ? `${import.meta.env.VITE_PUBLIC_URL}/activity.json` : `${import.meta.env.VITE_API_URL}/${userId}/activity`

  const [activities, setActivities] = useState([]);

  const [data, isLoading, isError, error] = useFetchData(
    url,
    2000,
    UserActivitiesFactory,
    'api'
  ) as [any, boolean, boolean, ErrorFormat]

  const formatXAxis = (tick: string) => {
    const date = new Date(tick);
    return date.getDate().toString();
  };

  useEffect(() => {
    if (!isNaN(userId) && data) {
      setActivities(data.sessions);
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
      <div className='chartBar'>
        <div className="chartBar_head">
          <div className="chartBar_text">Activité quotidienne</div>

          <div className="chartBar_text">
            <div className="legend">Poids (kg)</div>
            <div className="legend">Calories brûlées (kCal)</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activities}>
            <CartesianGrid strokeDasharray="2 2" horizontal={true}
              vertical={false} />
            <XAxis dataKey="day" tickFormatter={(tick) => formatXAxis(tick)} axisLine={false} tickLine={false} />
            <YAxis orientation="right" axisLine={false} tickLine={false} />

            <Tooltip
              offset={40}
              wrapperStyle={{ outline: "none", fontWeight: 600 }}
              content={<CustomTooltip />}
            />

            <Bar dataKey="kilogram" name="kg" fill="black" radius={[10, 10, 0, 0]}
              barSize={10} />
            <Bar dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]}
              barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const CustomTooltip = (data: any) => {
  try {
    let kg = data.payload[0]['value'];
    let kCal = data.payload[1]['value'];

    return (
      <div className="custom-tooltip">
        <p className="label">{`${kg}kg`}</p>
        <p className="label">{`${kCal}Kcal`}</p>
      </div>
    );
  }
  catch {
    return null;
  }
};