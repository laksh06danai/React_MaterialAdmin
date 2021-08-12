import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Dot from '../Dot';

const useStyles = makeStyles((theme) => ({
  mainChartHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      flexWrap: "wrap",
    },
  },
  mainChartHeaderLabels: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      order: 3,
      width: "100%",
      justifyContent: "center",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  mainChartHeaderLabel: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
  },
  mainChartSelectRoot: {
    borderColor: theme.palette.text.hint + "80 !important",
  },
  mainChartSelect: {
    padding: 10,
    paddingRight: 25,
  },
  mainChartLegentElement: {
    fontSize: "18px !important",
    marginLeft: theme.spacing(1),
  },
}));

const MainChartHeader = ({ mainChartState, setMainChartState }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainChartHeader}>
      <Typography
        variant="h5"
        color="text"
        colorBrightness="secondary"
      >
        Daily Line Chart
      </Typography>
      <div className={classes.mainChartHeaderLabels}>
        <div className={classes.mainChartHeaderLabel}>
          <Dot color="warning" />
          <Typography className={classes.mainChartLegentElement}>
            Tablet
          </Typography>
        </div>
        <div className={classes.mainChartHeaderLabel}>
          <Dot color="primary" />
          <Typography className={classes.mainChartLegentElement}>
            Mobile
          </Typography>
        </div>
        <div className={classes.mainChartHeaderLabel}>
          <Dot color="secondary" />
          <Typography className={classes.mainChartLegentElement}>
            Desktop
          </Typography>
        </div>
      </div>
      <Select
        value={mainChartState}
        onChange={e => setMainChartState(e.target.value)}
        input={
          <OutlinedInput
            labelWidth={0}
            classes={{
              notchedOutline: classes.mainChartSelectRoot,
              input: classes.mainChartSelect,
            }}
          />
        }
        autoWidth
      >
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
      </Select>
    </div>
  )
}

export default MainChartHeader;