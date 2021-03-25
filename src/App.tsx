import React from 'react';
import { Typography } from '@material-ui/core';
import ChartCard from "./ChartCard";
import ChartDisplay from "./ChartDisplay";
import './App.css';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import dayjs from "dayjs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blankContent: {
      marginTop: 40,
      marginBottom: 40,
      fontSize: 30,
      fontWeight: 300,
      letterSpacing: -2,
      wordSpacing: 2,
    }
  }),
);

type SelectedValue = 'Today' | 'This Week'

const App = () => {
  const classes = useStyles();
  let selectedValue: SelectedValue;
  const data: any[] = [];

  const formatTime = (time: string) => {
    switch (selectedValue) {
      case 'Today':
        return dayjs(time).format('H');
      case 'This Week':
        return dayjs(time).format('ddd');
    }
  };
  const labels = data.map((element) => formatTime(element.time));
  const chartData = data.map((element) => Number(element.mean));

  return (
    <div className="App">
      <ChartCard
        heading="Time Series Chart"
        body={
        data.length !== 0 ? (
          <ChartDisplay
            chartData={chartData}
            chartColor="#1967D2"
            backgroundColor="rgba(25, 103, 210, 0.2)"
            labels={labels}
          />
        ) : (
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.blankContent}
        >
        No data to display!
        </Typography>
        )
      }
     />
    </div>
  );
}

export default App;
