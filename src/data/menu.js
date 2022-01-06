const menuData = [
  {
    label: 'Trang chủ', exact: true, url: '', active: true,
  },
  {
    label: 'Chức năng',
    url: '/chuc-nang',
    children: [
      { label: 'Danh sách dịch vụ', url: '/chuc-nang' },
      { label: 'Chi tiết dịch vụ', url: '/chuc-nang/1' },
    ],
  },
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
