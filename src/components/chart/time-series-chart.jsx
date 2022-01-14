// #region React
import React, { Component } from 'react';
// #endregion

// #region Package (third-party)
// D3
// eslint-disable-next-line import/no-extraneous-dependencies
import { format as D3Format } from 'd3-format';
// Moment
import 'moment-duration-format';
import moment from 'moment';
// Underscore
import _ from 'underscore';
// Pond
import { TimeSeries, TimeRange, avg } from 'pondjs';
// React Timeseries Chart
import {
  AreaChart,
  Baseline,
  Brush,
  ChartContainer,
  ChartRow,
  Charts,
  LabelAxis,
  LineChart,
  Resizable,
  ValueAxis,
  YAxis,
  styler,
  Legend,
} from 'react-timeseries-charts';
// #endregion

import data from '../../assets/bike.json';

// Styling relates a channel to its rendering properties. In this way you
// can achieve consistent styles across different charts and labels by supplying
// the components with this styler object
const style = styler([
  { key: 'distance', color: '#e2e2e2' },
  { key: 'altitude', color: '#e2e2e2' },
  { key: 'cadence', color: '#ff47ff' },
  { key: 'power', color: 'green', width: 1, opacity: 0.5 },
  { key: 'temperature', color: '#cfc793' },
  { key: 'speed', color: 'steelblue', width: 1, opacity: 0.5 },
]);

// Baselines are the dotted average lines displayed on the chart
// In this case these are separately styled
const baselineStyles = {
  speed: {
    stroke: 'steelblue',
    opacity: 0.5,
    width: 0.25,
  },
  power: {
    stroke: 'green',
    opacity: 0.5,
    width: 0.25,
  },
};

// d3 formatter to display the speed with one decimal place
const speedFormat = D3Format('.1f');

class TimeSeriesChart extends Component {
  constructor(props) {
    super(props);
    const initialRange = new TimeRange([75 * 60 * 1000, 125 * 60 * 1000]);

    // Storage for all the data channels
    const channels = {
      distance: {
        units: 'miles',
        label: 'Distance',
        format: ',.1f',
        series: null,
        show: false,
      },
      altitude: {
        units: 'feet',
        label: 'Altitude',
        format: 'd',
        series: null,
        show: false,
      },
      cadence: {
        units: 'rpm',
        label: 'Cadence',
        format: 'd',
        series: null,
        show: true,
      },
      power: {
        units: 'watts',
        label: 'Power',
        format: ',.1f',
        series: null,
        show: true,
      },
      temperature: {
        units: 'deg F',
        label: 'Temp',
        format: 'd',
        series: null,
        show: false,
      },
      speed: {
        units: 'mph',
        label: 'Speed',
        format: ',.1f',
        series: null,
        show: true,
      },
    };

    // Channel names list, in order we want them shown
    const channelNames = ['speed', 'power', 'cadence', 'temperature', 'distance', 'altitude'];

    // Channels we'll actually display on our charts
    const displayChannels = ['speed', 'power', 'cadence'];

    // Rollups we'll generate to reduce data for the screen
    const rollupLevels = ['1s', '5s', '15s', '25s'];

    this.state = {
      ready: false,
      channels,
      channelNames,
      displayChannels,
      rollupLevels,
      tracker: null,
      timerange: initialRange,
      brushrange: initialRange,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const { channelNames, channels, displayChannels, rollupLevels } = this.state;

      //
      // Process the data file into channels
      //

      const points = {};
      channelNames.forEach((channel) => {
        points[channel] = [];
      });

      for (let i = 0; i < data.time.length; i += 1) {
        if (i > 0) {
          const deltaTime = data.time[i] - data.time[i - 1];
          const time = data.time[i] * 1000;

          points.distance.push([time, data.distance[i]]);
          points.altitude.push([time, data.altitude[i] * 3.28084]); // convert m to ft
          points.cadence.push([time, data.cadence[i]]);
          points.power.push([time, data.watts[i]]);
          points.temperature.push([time, data.temp[i]]);

          // insert a null into the speed data to put breaks in the data where
          // the rider was stationary
          if (deltaTime > 10) points.speed.push([time - 1000, null]);

          // eslint-disable-next-line max-len
          const speed =
            (data.distance[i] - data.distance[i - 1]) / (data.time[i] - data.time[i - 1]); // meters/sec
          // convert m/s to miles/hr
          points.speed.push([time, 2.236941 * speed]);
        }
      }

      // Make the TimeSeries here from the points collected above
      channelNames.forEach((channelName) => {
        // The TimeSeries itself, for this channel
        const series = new TimeSeries({
          name: channels[channelName].name,
          columns: ['time', channelName],
          points: points[channelName],
        });

        if (_.contains(displayChannels, channelName)) {
          const rollups = _.map(rollupLevels, (rollupLevel) => ({
            duration: parseInt(rollupLevel.split('s')[0], 10),
            series: series.fixedWindowRollup({
              windowSize: rollupLevel,
              aggregation: { [channelName]: { [channelName]: avg() } },
            }),
          }));

          // Rollup series levels
          channels[channelName].rollups = rollups;
        }

        // Raw series
        channels[channelName].series = series;

        // Some simple statistics for each channel
        channels[channelName].avg = parseInt(series.avg(channelName), 10);
        channels[channelName].max = parseInt(series.max(channelName), 10);
      });

      // Min and max time constraints for pan/zoom, along with the smallest timerange
      // the user can zoom into. These are passed into the ChartContainers when we come to
      // rendering.

      const minTime = channels.altitude.series.range().begin();
      const maxTime = channels.altitude.series.range().end();
      const minDuration = 10 * 60 * 1000;

      this.setState({ ready: true, channels, minTime, maxTime, minDuration });
    }, 0);
  }

  // #region Events
  handleTrackerChanged = (t) => {
    this.setState({ tracker: t });
  };

  // Handles when the brush changes the timerange
  handleTimeRangeChange = (timerange) => {
    const { channels } = this.state;

    if (timerange) this.setState({ timerange, brushrange: timerange });
    else
      this.setState({
        timerange: channels['altitude'].range(),
        brushrange: null,
      });
  };

  handleActiveChange = (channelName) => {
    const { channels } = this.state;

    channels[channelName].show = !channels[channelName].show;
    this.setState({ channels });
  };
  // #endregion

  // #region Render
  renderChannelsChart = () => {
    const { timerange, displayChannels, channels, maxTime, minTime, minDuration } = this.state;

    const durationPerPixel = timerange.duration() / 800 / 1000;
    const rows = [];

    displayChannels.forEach((channelName) => {
      const charts = [];
      let { series } = channels[channelName];

      _.forEach(channels[channelName].rollups, (item) => {
        if (item.duration < durationPerPixel * 2) series = item.series.crop(timerange);
      });

      charts.push(
        <LineChart
          key={`line-${channelName}`}
          axis={`${channelName}_axis`}
          series={series}
          columns={[channelName]}
          style={style}
          breakLine
        />
      );
      charts.push(
        <Baseline
          key={`baseline-${channelName}`}
          axis={`${channelName}_axis`}
          style={baselineStyles.speed}
          value={channels[channelName].avg}
        />
      );

      // Get the value at the current tracker position for the ValueAxis
      let value = '--';

      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.tracker) {
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line max-len
        const approx =
          (+this.state.tracker - +timerange.begin()) / (+timerange.end() - +timerange.begin());
        const ii = Math.floor(approx * series.size());
        const i = series.bisect(new Date(this.state.tracker), ii);
        const v = i < series.size() ? series.at(i).get(channelName) : null;

        if (v) value = parseInt(v, 10);
      }

      // Get the summary values for the LabelAxis
      const summary = [
        { label: 'Max', value: speedFormat(channels[channelName].max) },
        { label: 'Avg', value: speedFormat(channels[channelName].avg) },
      ];

      rows.push(
        <ChartRow height='100' visible={channels[channelName].show} key={`row-${channelName}`}>
          <LabelAxis
            id={`${channelName}_axis`}
            label={channels[channelName].label}
            values={summary}
            min={0}
            max={channels[channelName].max}
            width={140}
            type='linear'
            format=',.1f'
          />
          <Charts>{charts}</Charts>
          <ValueAxis
            id={`${channelName}_valueaxis`}
            value={value}
            detail={channels[channelName].units}
            width={80}
            min={0}
            max={35}
          />
        </ChartRow>
      );
    });

    return (
      <ChartContainer
        timeRange={this.state.timerange}
        format='relative'
        showGrid={false}
        enablePanZoom
        maxTime={maxTime}
        minTime={minTime}
        minDuration={minDuration}
        trackerPosition={this.state.tracker}
        onTimeRangeChanged={this.handleTimeRangeChange}
        onTrackerChanged={this.handleTrackerChanged}
      >
        {rows}
      </ChartContainer>
    );
  };

  renderBrush = () => {
    const { channels } = this.state;

    return (
      <ChartContainer
        timeRange={channels.altitude.series.range()}
        format='relative'
        trackerPosition={this.state.tracker}
      >
        <ChartRow height='100' debug={false}>
          <Brush
            timeRange={this.state.brushrange}
            allowSelectionClear
            onTimeRangeChanged={this.handleTimeRangeChange}
          />
          <YAxis
            id='axis1'
            label='Altitude (ft)'
            min={0}
            max={channels.altitude.max}
            width={70}
            type='linear'
            format='d'
          />
          <Charts>
            <AreaChart
              axis='axis1'
              style={style.areaChartStyle()}
              columns={{ up: ['altitude'], down: [] }}
              series={channels.altitude.series}
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    );
  };
  // #endregion

  render() {
    const { ready, channels, displayChannels } = this.state;

    if (!ready) return <div>Building rollups...</div>;

    const chartStyle = {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#DDD',
      paddingTop: 10,
      marginBottom: 10,
    };

    const brushStyle = {
      boxShadow: 'inset 0px 2px 5px -2px rgba(189, 189, 189, 0.75)',
      background: '#FEFEFE',
      paddingTop: 10,
    };

    // Generate the legend
    const legend = displayChannels.map((channelName) => ({
      key: channelName,
      label: channels[channelName].label,
      disabled: !channels[channelName].show,
    }));

    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Legend
              type='line'
              style={style}
              categories={legend}
              onSelectionChange={this.handleActiveChange}
            />
          </div>

          <div className='col-md-6'>
            {this.state.tracker ? `${moment.duration(+this.state.tracker).format()}` : '-:--:--'}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12' style={chartStyle}>
            <Resizable>{ready ? this.renderChannelsChart() : <div>Loading.....</div>}</Resizable>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12' style={brushStyle}>
            <Resizable>{ready ? this.renderBrush() : <div />}</Resizable>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSeriesChart;
