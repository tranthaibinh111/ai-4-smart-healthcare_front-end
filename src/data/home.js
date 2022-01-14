import referenceData from './reference';

const slider = [
  {
    id: 1,
    backgroundImage: '/slider/slide1.jpg',
    subTitle: 'Nghiên cứu khoa học',
    title: "AI<span class='d-block'>Y tế thông minh</span>",
  },
  {
    id: 2,
    backgroundImage: '/slider/slide2.jpg',
    subTitle: 'Nghiên cứu khoa học',
    title: "AI<span class='d-block'>Y tế thông minh</span>",
  },
];

const healthFeature = [
  {
    id: 1,
    icon: 'icon icofont-brain-alt',
    title: 'Dữ liệu',
    subTitle: 'EEG - Colorado State University',
  },
  {
    id: 2,
    icon: 'icon icofont-file-wave',
    title: 'Fourier vs Wavelet',
    subTitle: 'Chuyển đổi tín hiệu sang miền tần số',
  },
  {
    id: 3,
    icon: 'icon icofont-stethoscope-alt',
    title: 'Chẩn đoán',
    subTitle: 'Chạy mô hình chẩn đoán',
  },
];

const team = [
  {
    id: 1,
    image: '/team/01.jpg',
    name: 'Binh Tran',
    excerpt: 'Nghiên cứu AI ứng dụng trong Y tế thông minh',
  },
];

const startSlice = Math.floor(Math.random() * (referenceData.length - 4));
const refreences = referenceData.slice(startSlice, startSlice + 5);

const homeData = {
  slider,
  healthFeature,
  team,
  refreences,
};

export default homeData;
