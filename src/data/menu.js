const menuData = [
  {
    label: 'Trang chủ', exact: true, url: '', active: true,
  },
  {
    label: 'Dịch vụ',
    url: '/services',
    children: [
      { label: 'Danh sách dịch vụ', url: '/services' },
      { label: 'Chi tiết dịch vụ', url: '/services/1' },
    ],
  },
  {
    label: 'Blog',
    url: '/blog',
    children: [
      { label: 'Danh sách Blog', url: '/blog' },
      { label: 'Chi tiết Blog', url: '/blog/1' },
    ],
  },
  { label: 'Giới thiệu', url: '/about' },
  { label: 'Liên hệ', url: '/contact' },
];

export default menuData;
