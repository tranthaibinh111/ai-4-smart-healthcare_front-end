// #region React
import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// #endregion

// #region Package (third-party)
// #region React PDF Viewer
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// #endregion
// #endregion

const PdfViewerComponent = ({ fileUrl }) => {
  // #region Parameters
  const workerUrl = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';
  const className = 'pdf-viewer__container';
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      openPlugin: {
        enableShortcuts: false,
      },
    },
  });
  // #endregion

  return (
    <div className={className}>
      <Worker workerUrl={workerUrl}>
        <Viewer
          fileUrl={fileUrl}
          plugins={window.innerWidth >= 576 ? [defaultLayoutPluginInstance] : []}
        />
      </Worker>
    </div>
  );
};

// #region Khai báo Props
PdfViewerComponent.propTypes = {
  fileUrl: PropTypes.string.isRequired,
};
// #endregion

export default PdfViewerComponent;
