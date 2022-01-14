const menuData = [
  {
    label: 'Trang chủ',
    exact: true,
    url: '',
    active: true,
  },
  { label: 'Chẩn đoán', url: '/chan-doan' },
  {
    label: 'Tài liệu',
    url: '/tai-lieu-tham-khao',
    children: [
      { label: 'Tài liệu tham khảo', url: '/tai-lieu-tham-khao' },
      { label: 'Công trình nghiên cứu', url: '/cong-trinh-nghien-cuu' },
    ],
  },
  { label: 'Giới thiệu', url: '/gioi-thieu' },
  { label: 'Liên hệ', url: '/lien-he' },
];

export default menuData;
