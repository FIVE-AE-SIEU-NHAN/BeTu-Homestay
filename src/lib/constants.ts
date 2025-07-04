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
    "Ăn sáng tự chọn",
    "Dịch vụ giặt ủi",
    "Bãi đậu xe",
    "Hỗ trợ 24/7",
  ],
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Trang Chủ", href: "home", id: "home" },
  { name: "Phòng", href: "rooms", id: "rooms" },
  { name: "Liên Hệ", href: "contact", id: "contact" },
] as const;

export const ROOMS = [
  {
    id: 1,
    name: "Phòng Deluxe",
    price: "800.000",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Giường đôi", "Phòng tắm riêng", "Điều hòa", "TV thông minh"],
    description: "Phòng rộng rãi với thiết kế hiện đại và đầy đủ tiện nghi",
  },
  {
    id: 2,
    name: "Phòng Standard",
    price: "600.000",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Giường đơn", "Phòng tắm chung", "Điều hòa", "WiFi"],
    description:
      "Phòng tiện nghi với không gian ấm cúng, phù hợp cho người đi công tác",
  },
  {
    id: 3,
    name: "Phòng Gia Đình",
    price: "1.200.000",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: [
      "2 giường đôi",
      "Phòng tắm riêng",
      "Khu vực sinh hoạt",
      "Tủ lạnh",
    ],
    description:
      "Không gian rộng rãi dành cho gia đình, có thể ở tối đa 6 người",
  },
] as const;
