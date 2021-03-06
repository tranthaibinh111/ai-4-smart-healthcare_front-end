const RootService = () => {
  // #region Public
  const img = (imgPath) => (imgPath ? `${process.env.REACT_APP_IMAGE_URL}${imgPath}` : null);
  const pdf = (slug) => (slug ? `${process.env.REACT_APP_PDF_URL}/${slug}.pdf` : null);
  // #endregion

  // #region Routes
  const home = '/';

  // #region Services
  const services = `/chan-doan`;
  const serviceDetails = (subject = 's11') => `${services}/${subject}`;
  // #endregion

  // #region References
  const references = (page = 1) => {
    let url = `/tai-lieu-tham-khao`;

    if (page > 1) url += `?page=${page}`;

    return url;
  };

  const referenceDetails = (slug) => (slug ? `/tai-lieu-tham-khao/${slug}` : null);
  // #endregion
  // #endregion

  return {
    // Public
    img,
    pdf,
    // Routes
    home,
    // Services
    services,
    serviceDetails,
    // References
    references,
    referenceDetails,
  };
};

export default RootService;
