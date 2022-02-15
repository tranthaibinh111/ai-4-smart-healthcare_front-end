// #region React
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
// Axios
import axios from 'axios';
// #endregion

// #region AI 4 Smart Healthcare
// #region Service
import { SubjectService } from '../../shared/services';
// #endregion
// #endregion

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

    this.state = {
      ready: false,
      timerange: initialRange,
    };
  }

  async initialChart(slug) {
    // #region API
    const subjectService = SubjectService();
    const { data } = await subjectService.getEeg(slug);
    // #endregion

    // Channel names list, in order we want them shown
    const channelNames = data.channels;
    // Channels we'll actually display on our charts
    const displayChannels = data.channels;
    // Storage for all the data channels
    let channels = {};

    _.forEach(data.channels, (item) => {
      channels[item] = {
        units: '𝜇V',
        label: item,
        format: ',.1f',
        series: null,
        show: true,
      };
    });

    //
    // Process the data file into channels
    //

    const points = {};

    channelNames.forEach((channel) => {
      points[channel] = [];
    });

    _.forEach(data.signals, (signal) => {
      const { channel, sampleRate } = signal;

      _.forEach(signal.data, (item, idx) => {
        const seconds = parseInt(idx / (sampleRate - 1), 10);
        const milliseconds = parseInt(((idx % (sampleRate - 1)) * 1e3) / (sampleRate - 1), 10);
        const time = seconds * 1e3 + milliseconds;

        points[channel].push([time, item]);
      });
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

    this.setState({
      ready: true,
      channels,
      channelNames,
      displayChannels,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      const { slug } = this.props;

      this.initialChart(slug);
    }, 0);
  }

  componentDidUpdate(prevProps) {
    const { slug } = this.props;

    if (prevProps.slug !== slug) {
      this.setState({ ready: false });
      this.initialChart(slug);
    }
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
            width={70}
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

    if (!ready) return <div>Đang xử lý...</div>;

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
      <>
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
      </>
    );
  }
}

// #region Khai báo Props
TimeSeriesChart.propTypes = {
  slug: PropTypes.string,
};

TimeSeriesChart.defaultProps = {
  slug: '',
};
// #endregion

export default TimeSeriesChart;
