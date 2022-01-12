const RootService = () => {
  const path = process.env.PUBLIC_URL

  // #region Public
  const img = (url) => (url ? `${path}${url}` : null)
  const pdf = (slug) => (slug ? `${path}/pdf/${slug}.pdf` : null)
  // #endregion

  // #region Routes
  const home = path

  const references = (page = 1) => {
    let url = `${path}/tai-lieu-tham-khao`

    if (page > 1) url += `?page=${page}`

    return url
  }

  const referenceDetails = (slug) =>
    slug ? `${path}/tai-lieu-tham-khao/${slug}` : null
  // #endregion

  return {
    // Public
    img,
    pdf,
    // Routes
    home,
    references,
    referenceDetails,
  }
}

export default RootService
