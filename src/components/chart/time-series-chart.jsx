// #region React
import React, { Component } from 'react';
// #endregion

// #region Package (third-party)
// Underscore
import _ from 'underscore';
// Pond
import { TimeSeries, TimeRange } from 'pondjs';
// React Timeseries Chart
import {
  Baseline,
  ChartContainer,
  ChartRow,
  Charts,
  LabelAxis,
  LineChart,
  Resizable,
  styler,
  Legend,
} from 'react-timeseries-charts';
// #endregion

import data from '../../assets/bike.json';
import C3Data from '../../assets/C3.json';
import C4Data from '../../assets/C4.json';
import F3Data from '../../assets/F3.json';
import F4Data from '../../assets/F4.json';
import O1Data from '../../assets/O1.json';
import O2Data from '../../assets/O2.json';
import P3Data from '../../assets/P3.json';
import P4Data from '../../assets/P4.json';

const style = styler([
  { key: 'C3', color: '#FF0000' },
  { key: 'C4', color: '#00FF00' },
  { key: 'F3', color: '#0000FF' },
  { key: 'F4', color: '#ff47ff' },
  { key: 'O1', color: '#CCEEFF' },
  { key: 'O2', color: '#e2e2e2' },
  { key: 'P3', color: '#FF5733' },
  { key: 'P4', color: '#DAF7A6' },
]);

const baselineStyles = {
  stroke: 'steelblue',
  opacity: 0.5,
  width: 0.25,
};

class TimeSeriesChart extends Component {
  constructor(props) {
    super(props);
    const initialRange = new TimeRange([0, 3.1 * 60 * 1e3]);

    // Storage for all the data channels
    const channels = {
      C3: {
        units: '𝜇V',
        label: 'C3',
        format: ',.1f',
        series: null,
        show: true,
      },
      C4: {
        units: '𝜇V',
        label: 'C4',
        format: ',.1f',
        series: null,
        show: true,
      },
      F3: {
        units: '𝜇V',
        label: 'F3',
        format: ',.1f',
        series: null,
        show: true,
      },
      F4: {
        units: '𝜇V',
        label: 'F4',
        format: ',.1f',
        series: null,
        show: true,
      },
      O1: {
        units: '𝜇V',
        label: 'O1',
        format: ',.1f',
        series: null,
        show: true,
      },
      O2: {
        units: '𝜇V',
        label: 'O2',
        format: ',.1f',
        series: null,
        show: true,
      },
      P3: {
        units: '𝜇V',
        label: 'P3',
        format: ',.1f',
        series: null,
        show: true,
      },
      P4: {
        units: '𝜇V',
        label: 'P4',
        format: ',.1f',
        series: null,
        show: true,
      },
    };

    // Channel names list, in order we want them shown
    const channelNames = ['C3', 'C4', 'F3', 'F4', 'O1', 'O2', 'P3', 'P4'];

    // Channels we'll actually display on our charts
    const displayChannels = ['C3', 'C4', 'F3', 'F4', 'O1', 'O2', 'P3', 'P4'];

    this.state = {
      ready: false,
      channels,
      channelNames,
      displayChannels,
      tracker: null,
      timerange: initialRange,
      brushrange: initialRange,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const { channelNames, channels } = this.state;

      //
      // Process the data file into channels
      //

      const points = {};

      channelNames.forEach((channel) => {
        points[channel] = [];
      });

      _.forEach(C3Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.C3.push([time, item]);
      });
      _.forEach(C4Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.C4.push([time, item]);
      });
      _.forEach(F3Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.F3.push([time, item]);
      });
      _.forEach(F4Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.F4.push([time, item]);
      });
      _.forEach(O1Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.O1.push([time, item]);
      });
      _.forEach(O2Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.O2.push([time, item]);
      });
      _.forEach(P3Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.P3.push([time, item]);
      });
      _.forEach(P4Data, (item, idx) => {
        const seconds = parseInt(idx / 255, 10);
        const milliseconds = parseInt(((idx % 255) * 1e3) / 255, 10);
        const time = seconds * 1e3 + milliseconds;

        points.P4.push([time, item]);
      });

      // Make the TimeSeries here from the points collected above
      channelNames.forEach((channelName) => {
        // The TimeSeries itself, for this channel
        const series = new TimeSeries({
          name: channels[channelName].label,
          columns: ['time', channelName],
          points: points[channelName],
        });

        // Raw series
        channels[channelName].series = series;

        // Some simple statistics for each channel
        channels[channelName].avg = parseInt(series.avg(channelName), 10);
        channels[channelName].min = parseInt(series.min(channelName), 10);
        channels[channelName].max = parseInt(series.max(channelName), 10);
      });

      this.setState({ ready: true, channels });
    }, 0);
  }

  // #region Events
  handleActiveChange = (channelName) => {
    const { channels } = this.state;

    channels[channelName].show = !channels[channelName].show;
    this.setState({ channels });
  };
  // #endregion

  // #region Render
  renderChannelsChart = () => {
    const { displayChannels, channels } = this.state;

    const rows = [];

    displayChannels.forEach((channelName) => {
      const charts = [];
      let { series } = channels[channelName];

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
          style={baselineStyles}
          value={channels[channelName].avg}
        />
      );

      rows.push(
        <ChartRow height='100' visible={channels[channelName].show} key={`row-${channelName}`}>
          <LabelAxis
            id={`${channelName}_axis`}
            label={channels[channelName].label}
            min={channels[channelName].min}
            max={channels[channelName].max}
            width={100}
            type='linear'
            format=',.1f'
          />
          <Charts>{charts}</Charts>
        </ChartRow>
      );
    });

    return (
      <ChartContainer timeRange={this.state.timerange} format='relative' showGrid={false}>
        {rows}
      </ChartContainer>
    );
  };
  // #endregion

  render() {
    const { ready, channels, displayChannels } = this.state;

    if (!ready) return <div>Đang xử lý đồ thị...</div>;

    const chartStyle = {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#DDD',
      paddingTop: 10,
      marginBottom: 10,
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
        </div>
        <div className='row'>
          <div className='col-md-12' style={chartStyle}>
            <Resizable>{ready ? this.renderChannelsChart() : <div>Loading.....</div>}</Resizable>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeSeriesChart;
