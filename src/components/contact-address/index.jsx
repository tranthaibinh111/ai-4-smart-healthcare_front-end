// #region React
import React, { useState, useEffect } from 'react';
// #endregion

// #region AI 4 Smart Healthcare
import AppSettings from '../../data/appsettings.json';
// #endregion

const ContactAddress = () => {
  // #region Parameters
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  // #endregion

  useEffect(() => {
    if (AppSettings.address) {
      const address = AppSettings.address.split(',').map((item) => item.trim());

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
          {AppSettings.address}
        </p>
        <a href={`mailto://${AppSettings.email}`}>
          <span>Email:</span>
          {` ${AppSettings.email}`}
        </a>
      </div>
      <div className="brand-office">
        <div className="info-tem style-two">
          <h6>SĐT:</h6>
          <p>
            <a href={`tel://${AppSettings.hotline.replaceAll('.', '')}`}>
              {AppSettings.hotline}
            </a>
          </p>
        </div>
        <div className="info-tem mb-0">
          <h6>Giờ làm việc:</h6>
          <p>{AppSettings.workingHours}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
