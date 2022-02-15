// #region React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
// React Heatmap Grid
import HeatMap from 'react-heatmap-grid';

// Underscore
import _ from 'underscore';
// #endregion

// #region AI 4 Smart Healthcare
import { SubjectService } from '../shared/services';
// #endregion

const Diagnose = ({ slug }) => {
  // #region Parameters
  const xLabels = ['C3', 'C4', 'F3', 'F4', 'O1', 'O2', 'P3', 'P4'];
  const yLabels = ['MS', 'Normal', 'Spinal'];

  // useState
  const [diagnose, setDiagnose] = useState('');
  const [processed, setProcessed] = useState(false);
  const [data, setData] = useState([]);

  // AI 4 Smart Healthcare
  const subjectService = SubjectService();
  // #endregion

  // #region API
  const getDiagnose = async (slug) => {
    const response = await subjectService.getDiagnoses(slug);

    if (!response.success) return;

    _.forEach(
      yLabels.map((x) => x.toLowerCase()),
      (diagnose) => {
        let item = [];

        _.forEach(xLabels, (channel) => {
          const pred = response.data.channels.find((x) => x.channel == channel);

          item.push(pred[diagnose.toLowerCase()]);
        });

        data.push(item);
      }
    );

    console.log(data);

    setDiagnose(response.data.diagnose);
    setData(data);
    setProcessed(false);
  };
  // #endregion

  // #region Event
  const handleDiagnose = (slug) => {
    setProcessed(true);
    setDiagnose('');
    setData([]);

    getDiagnose(slug);
  };
  // #endregion

  useEffect(() => {
    setProcessed(false);
    setDiagnose('');
    setData([]);
  }, [slug]);

  // #region Render
  const renderDiagnoseBtn = (slug) => (
    <div className='row'>
      <div className='col-6 col-md-2 pb-2'>
        <button
          type='button'
          className={`form-control ${processed ? 'btn-secondary' : 'btn-success'}`}
          onClick={() => handleDiagnose(slug)}
          disabled={processed}
        >
          {!processed && `Chân đoán`}
          {processed && `Chẩn đoán...`}
        </button>
      </div>
    </div>
  );

  const renderDiagnose = (xLabels, yLabels, data) => (
    <>
      <div className='form-group'>
        <div className='col-6 col-md-6'>
          <h4>
            Kết quả: <span className='text-danger'>{diagnose}</span>
          </h4>
        </div>
      </div>
      <div className='row'>
        {data.length > 0 && (
          <HeatMap
            xLabels={xLabels}
            yLabels={yLabels}
            xLabelsLocation='bottom'
            xLabelWidth={100}
            yLabelWidth={60}
            data={data}
            squares
            height={45}
            cellStyle={(_, value, min, max) => ({
              background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
              fontSize: '11.5px',
              color: '#444',
            })}
            cellRender={(value) => value && <div>{value}</div>}
          />
        )}
      </div>
    </>
  );
  // #endregion

  return (
    <div className='faq-area'>
      <h2 className='title'>
        <span>Chẩn đoán</span>
      </h2>
      <div className='accordian-content'>
        <div className='row pb-24'>
          {renderDiagnoseBtn(slug)}
          {!processed && data.length > 0 && renderDiagnose(xLabels, yLabels, data)}
        </div>
      </div>
    </div>
  );
};

// #region Khai báo Props
Diagnose.propTypes = {
  slug: PropTypes.string,
};

Diagnose.defaultProps = {
  slug: '',
};
// #endregion

export default Diagnose;
