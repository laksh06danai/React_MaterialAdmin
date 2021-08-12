import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Line, XAxis, YAxis, Area, ComposedChart, ResponsiveContainer } from 'recharts';
import { getMainChartData } from '../../helpers/data';

const data = getMainChartData();

const useStyles = makeStyles((theme) => ({
  mainChart: {
    height: '400px'
  },
}));

const MainChart = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.mainChart}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
          data={data}
        >
          <YAxis
            ticks={[0, 2500, 5000, 7500]}
            tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
            stroke={theme.palette.text.hint + "80"}
            tickLine={false}
          />
          <XAxis
            tickFormatter={i => i + 1}
            tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
            stroke={theme.palette.text.hint + "80"}
            tickLine={false}
          />
          <Area
            type="natural"
            dataKey="desktop"
            fill={theme.palette.background.light}
            strokeWidth={0}
            activeDot={false}
          />
          <Line
            type="natural"
            dataKey="mobile"
            stroke={theme.palette.primary.main}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Line
            type="linear"
            dataKey="tablet"
            stroke={theme.palette.warning.main}
            strokeWidth={2}
            dot={{
              stroke: theme.palette.warning.dark,
              strokeWidth: 2,
              fill: theme.palette.warning.main,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MainChart;
