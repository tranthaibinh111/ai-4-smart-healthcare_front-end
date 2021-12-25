// #region React
import React, { useState, useEffect } from 'react';
// #endregion

// #region AI 4 Smart Healthcare
import { appSettingsData } from '../../data';
// #endregion

const ContactAddress = () => {
  // #region Parameters
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  // #endregion

  useEffect(() => {
    if (appSettingsData.address) {
      const address = appSettingsData.address.split(',').map((item) => item.trim());

      if (address.length >= 2) {
        setCity(address[address.length - 2]);
        setCountry(address[address.length - 1]);
      }
    }
  }, []);

  return (
    <div className="contact-info-content">
      <div className="info-address">
        <h2 className="title">
          {city && (`${city},`)}
          {city && country && (' ')}
          {country && (<span>{country}</span>)}
        </h2>
        <p>
          {appSettingsData.address}
        </p>
        <a href={`mailto://${appSettingsData.email}`}>
          <span>Email:</span>
          {` ${appSettingsData.email}`}
        </a>
      </div>
      <div className="brand-office">
        <div className="info-tem style-two">
          <h6>SĐT:</h6>
          <p>
            <a href={`tel://${appSettingsData.hotline.replaceAll('.', '')}`}>
              {appSettingsData.hotline}
            </a>
          </p>
        </div>
        <div className="info-tem mb-0">
          <h6>Giờ làm việc:</h6>
          <p>{appSettingsData.workingHours}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
