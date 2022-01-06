function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
}

const slugify = (text) => text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w-]+/g, '') // Remove all non-word chars
  .replace(/--+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, ''); // Trim - from end of text

const getSiblings = (elem) => {
  // eslint-disable-next-line prefer-const
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem)
      siblings.push(sibling);

    sibling = sibling.nextSibling;
  }
  return siblings;
};

const getClosest = (elem, selector) => {
  // eslint-disable-next-line no-param-reassign
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector))
      return elem;
  }

  return null;
};

const slideUp = (element, duration = 500) => new Promise((resolve) => {
  element.style.height = `${element.offsetHeight}px`;
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = `${duration}ms`;
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  window.setTimeout(() => {
    element.style.display = 'none';
    element.style.removeProperty('height');
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
    resolve(false);
  }, duration);
});

const slideDown = (element, duration = 500) => new Promise(() => {
  element.style.removeProperty('display');
  let { display } = window.getComputedStyle(element);

  if (display === 'none')
    display = 'block';

  element.style.display = display;
  const height = element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = `${duration}ms`;
  element.style.height = `${height}px`;
  element.style.removeProperty('padding-top');
  element.style.removeProperty('padding-bottom');
  element.style.removeProperty('margin-top');
  element.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    element.style.removeProperty('height');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
  }, duration);
});

const slideToggle = (element, duration = 500) => (window.getComputedStyle(element).display === 'none'
  ? slideDown(element, duration)
  : slideUp(element, duration));

const containsObject = (obj, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].slug === obj.slug)
      return i;
  }

  return -1;
};

/**
 * Short title
 * @param {string} title
 * @param {number} maxlength
 * @returns Short title
 */
const shortTitle = (title, maxlength = 40) => {
  if (!title)
    return '';

  if (title.length <= maxlength)
    return title;

  // #region Thực hiện rút ngắn title
  const words = title.split(' ').filter((x) => x);
  let idx = 0;

  for (idx; idx < words.length; idx++) {
    if (words.slice(0, idx).join(' ').length > maxlength)
      break;
  }

  return `${words.slice(0, idx).join(' ')}...`;
  // #endregion
};

/**
 * Tạo ra url tới search tìm kiếm keyword
 * @param {string} keyword
 * @param {string} search Thể loại tìm kiếm
 * @returns Url tới search tìm kiếm keyword
 */
const keywordUrl = (keyword, search = 'IEE') => {
  let url = `https://scholar.google.com.vn/scholar?q=${keyword}`;

  if (search === 'IEEE')
    url = `https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=${keyword}`;
  else if (search === 'Springer')
    url = `https://link.springer.com/search?query=${keyword}`;

  return encodeURI(url);
};

export {
  containsObject,
  flatDeep,
  slugify,
  getSiblings,
  getClosest,
  slideUp,
  slideDown,
  slideToggle,
  shortTitle,
  keywordUrl,
};
