import { motion } from "motion/react";
import {
  Wifi,
  Bath,
  Car,
  Star,
  Crown,
  Award,
  Shield,
  Heart,
  Calendar,
  Clock,
  Film,
  ChefHat,
  Shirt,
  Wind,
  Sofa,
  PictureInPicture,
  Home,
  Eye,
  SunSnow,
} from "lucide-react";
import { useState } from "react";
import { ROOMS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface RoomsProps {
  onSectionChange: (section: string, scrollToElement?: string) => void;
}

export default function Rooms({ onSectionChange }: RoomsProps) {
  const [selectedRoom, setSelectedRoom] = useState<null | (typeof ROOMS)[number]>(
    null,
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("tắm")) return <Bath className="w-4 h-4" />;
    if (feature.includes("Bếp")) return <ChefHat className="w-4 h-4" />;
    if (feature.includes("trang điểm")) return <Award className="w-4 h-4" />;
    if (feature.includes("quần áo")) return <Shirt className="w-4 h-4" />;
    if (feature.includes("sấy") || feature.includes("ủi"))
      return <Wind className="w-4 h-4" />;
    if (feature.includes("chiếu")) return <Film className="w-4 h-4" />;
    if (feature.includes("Sofa") || feature.includes("Ghế"))
      return <Sofa className="w-4 h-4" />;
    if (feature.includes("Ban công")) return <Home className="w-4 h-4" />;
    if (feature.includes("Điều hòa")) return <SunSnow className="w-4 h-4" />;
    return <Award className="w-4 h-4" />;
  };

  const roomFeatures = [
    {
      icon: Wifi,
      title: "WiFi Tốc Độ Cao",
      description: "Kết nối internet ổn định 24/7",
    },
    {
      icon: Shield,
      title: "An Toàn Tuyệt Đối",
      description: "Hệ thống bảo mật hiện đại",
    },
    {
      icon: Film,
      title: "Máy Chiếu",
      description: "Trải nghiệm xem phim tại phòng",
    },
    {
      icon: Car,
      title: "Bãi Đậu Xe",
      description: "Chỗ đậu xe an toàn, thuận tiện",
    },
  ];

  const policies = [
    {
      icon: Calendar,
      title: "Check-in",
      time: "14:00 - 22:00",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Check-out",
      time: "07:00 - 12:00",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Ưu Đãi",
      time: "Giảm 15% từ 3 đêm",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Award,
      title: "Dịch Vụ",
      time: "Hỗ trợ 24/7",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <div className="pt-20 pb-20 relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-32 h-32 bg-amber-300/20 rounded-full blur-xl"
        />

        <div className="relative max-w-6xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Crown className="w-5 h-5 text-amber-200" />
              <span className="text-white font-semibold">
                Phòng Nghỉ Cao Cấp
              </span>
              <Crown className="w-5 h-5 text-amber-200" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="drop-shadow-xl/30">Phòng Nghỉ Tại</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200 drop-shadow-lg/30">
                BeTu Homestay
              </span>
            </h1>
            <p className="text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg/70 xl:max-w-3xl">
              Khám phá các phòng nghỉ được thiết kế tinh tế với đầy đủ tiện nghi
              hiện đại và dịch vụ 5 sao
            </p>
          </motion.div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6 pb-3 drop-shadow-md/15">
              Tiện Nghi Trong Mọi Phòng
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Tất cả phòng nghỉ đều được trang bị đầy đủ tiện nghi cao cấp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {roomFeatures.map((feature, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 0.3 }}
                // transition={{ delay: index * 0.1, duration: 0.6 }}
                // whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center p-6 h-full glass-effect border-orange-200/50 hover:border-orange-300/70 hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-4 shadow-glow group-hover:shadow-2xl transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-orange-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-orange-600 text-sm">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section id="room-selection" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6 pb-3 drop-shadow-md/15">
              Lựa Chọn Phòng Nghỉ
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Tìm phòng nghỉ phù hợp với nhu cầu và ngân sách của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ROOMS.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden glass-effect border-orange-200/50 hover:border-orange-300/70 hover:shadow-2xl transition-all duration-500 relative">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-72 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 space-y-1">
                      <div className="gradient-primary text-white px-3 py-1 rounded-full font-semibold text-sm shadow-glow">
                        {room.priceNight}₫/đêm
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full font-semibold text-xs">
                        {room.priceDayNight}₫/ngày đêm
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 flex items-center justify-center">
                      <Button
                        onClick={() => setSelectedRoom(room)}
                        className="gradient-primary text-white hover:shadow-glow shadow-soft font-semibold px-6 py-3"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Xem Chi Tiết</span>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-800 drop-shadow-sm/30">
                        {room.name}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 gradient-secondary rounded-full flex items-center justify-center"
                      >
                        <Crown className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>

                    <p className="text-orange-600 mb-6 leading-relaxed drop-shadow-sm/20">
                      {room.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-orange-800 flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>Tiện nghi đẳng cấp:</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2 text-sm text-orange-700 bg-orange-50 rounded-lg px-3 py-2"
                          >
                            <div className="text-orange-500">
                              {getFeatureIcon(feature)}
                            </div>
                            <span className="font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => onSectionChange("contact")}
                        className="w-full gradient-primary text-white shadow-glow hover:shadow-2xl"
                      >
                        Đặt Phòng Ngay
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6 drop-shadow-md/15 pb-3">
              Chính Sách & Ưu Đãi
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto drop-shadow-sm/30">
              Thông tin quan trọng về thời gian và các chính sách của homestay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="text-center p-8 h-full glass-effect border-orange-200/50 hover:border-orange-300/70 hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${policy.color} rounded-3xl mb-6 shadow-glow group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <policy.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-orange-800 mb-3">
                    {policy.title}
                  </h3>
                  <p className="text-orange-600 font-semibold text-lg">
                    {policy.time}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="max-w-4xl mx-auto glass-effect border-orange-200/50 shadow-soft">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">
                  Thông Tin Bổ Sung
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-orange-800">Hủy Phòng</h4>
                    <p className="text-orange-600 text-sm">
                      Miễn phí hủy trước 24h
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-orange-800">
                      Thanh Toán
                    </h4>
                    <p className="text-orange-600 text-sm">
                      Chấp nhận mọi hình thức
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-orange-800">Bảo Đảm</h4>
                    <p className="text-orange-600 text-sm">
                      Giá tốt nhất thị trường
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden -mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-amber-300/20 rounded-full blur-lg"
        />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl/30">
              Cần Hỗ Trợ Đặt Phòng?
            </h2>
            <p className="text-xl text-orange-50 mb-8 leading-relaxed drop-shadow-lg/30">
              Liên hệ với chúng tôi để được tư vấn chi tiết và nhận ưu đãi đặc
              biệt
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => onSectionChange("contact")}
                  className="px-10 py-5 shadow-2xl text-lg font-bold"
                >
                  Liên Hệ Tư Vấn
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => onSectionChange("contact")}
                  variant="outline"
                  className="px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-orange-600 bg-transparent shadow-2xl text-lg font-bold"
                >
                  Đặt Phòng Ngay
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Details Modal */}
      {selectedRoom && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedRoom(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {selectedRoom.name}
                  </h3>
                  <div className="flex space-x-2">
                    <div className="gradient-primary text-white px-3 py-1 rounded-full font-semibold text-sm shadow-glow">
                      {selectedRoom.priceNight}₫/đêm
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full font-semibold text-sm">
                      {selectedRoom.priceDayNight}₫/ngày đêm
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-orange-700 text-lg mb-6 leading-relaxed">
                {selectedRoom.description}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-orange-800 text-lg mb-4 flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Tiện nghi đầy đủ:</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedRoom.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-orange-700 bg-orange-50 rounded-lg px-3 py-2 border border-orange-100"
                    >
                      <div className="text-orange-500">
                        {getFeatureIcon(feature)}
                      </div>
                      <span className="font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery Placeholder */}
              <div className="mb-6">
                <h4 className="font-bold text-orange-800 text-lg mb-4 flex items-center space-x-2">
                  <PictureInPicture className="w-5 h-5" />
                  <span>Hình ảnh phòng:</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-orange-100 rounded-lg overflow-hidden group relative"
                    >
                      <img
                        src={selectedRoom.image}
                        alt={`${selectedRoom.name} view ${i}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(selectedRoom.image);
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    setSelectedRoom(null);
                    onSectionChange("contact");
                  }}
                  className="flex-1 gradient-primary text-white shadow-glow hover:shadow-2xl"
                >
                  Đặt Phòng Ngay
                </Button>
                <Button
                  onClick={() => setSelectedRoom(null)}
                  variant="outline"
                  className="flex-1"
                >
                  Đóng
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-[9999]">
          <motion.div
            initial={{ scale: 0.3, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.3, opacity: 0, rotateY: 180 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="relative max-w-6xl max-h-[95vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-6 z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-xl font-bold drop-shadow-lg">
                  Hình Ảnh Phòng Nghỉ
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white hover:text-gray-800 group"
                >
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✕
                  </motion.div>
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                src={selectedImage}
                alt="Room view"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <div className="flex justify-center">
                <Button
                  onClick={() => setSelectedImage(null)}
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-800"
                >
                  <Eye className="w-4 h-4" />
                  <span>Đóng</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedImage(null)}
          ></div>
        </div>
      )}
    </div>
  );
}
