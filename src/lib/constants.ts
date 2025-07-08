export const HOMESTAY_INFO = {
  name: "BeTu Homestay",
  address: "357/10/13 Nguyễn Thị Thập, Phường 6, Mỹ Tho",
  phone: "+84 xxx xxx xxx",
  email: "contact@betuhomestay.com",
  description:
    "Trải nghiệm không gian ấm cúng và hiện đại tại BeTu Homestay - nơi mang đến cho bạn cảm giác như ở nhà giữa lòng Mỹ Tho.",
  features: [
    "Phòng nghỉ tiện nghi",
    "Wi-Fi miễn phí",
    "Bãi đậu xe",
    "Hỗ trợ 24/7",
  ],
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Trang Chủ", href: "home", id: "home" },
  { name: "Liên Hệ", href: "contact", id: "contact" },
] as const;

export const ROOMS = [
  {
    id: 1,
    name: "Phòng DELUXE Ban Công",
    priceNight: "500.000",
    priceDayNight: "550.000",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Nhà tắm riêng",
      "Bếp chung",
      "Bàn trang điểm",
      "Tủ quần áo",
      "Máy sấy, bàn ủi",
      "Máy chiếu",
      "Ghế bập bênh đôi",
      "Ban công",
    ],
    description:
      "Phòng deluxe với ban công thoáng mát, tầm nhìn đẹp và đầy đủ tiện nghi cao cấp",
  },
  {
    id: 2,
    name: "Phòng Standard Plus Máy chiếu",
    priceNight: "450.000",
    priceDayNight: "500.000",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Nhà tắm riêng",
      "Bếp chung",
      "Bàn trang điểm",
      "Tủ quần áo",
      "Máy sấy, bàn ủi",
      "Máy chiếu",
      "Điều hòa",
    ],
    description:
      "Phòng standard plus với máy chiếu hiện đại, phù hợp cho giải trí và thư giãn",
  },
  {
    id: 3,
    name: "Phòng DELUXE Máy chiếu",
    priceNight: "500.000",
    priceDayNight: "550.000",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Nhà tắm riêng",
      "Bếp riêng",
      "Bàn trang điểm",
      "Tủ quần áo",
      "Máy sấy, bàn ủi",
      "Máy chiếu",
      "Sofa đôi, bàn trà",
      "Ban công",
    ],
    description:
      "Phòng deluxe cao cấp với máy chiếu 4K và không gian rộng rãi, sang trọng",
  },
] as const;
