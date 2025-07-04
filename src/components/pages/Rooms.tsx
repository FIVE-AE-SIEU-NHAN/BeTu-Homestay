import { motion } from "motion/react";
import {
  Users,
  Wifi,
  Bath,
  Tv,
  Car,
  Coffee,
  Star,
  Award,
  Shield,
  Heart,
  Calendar,
  Clock,
} from "lucide-react";
import { ROOMS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface RoomsProps {
  onSectionChange: (section: string) => void;
}

export default function Rooms({ onSectionChange }: RoomsProps) {
  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Giường")) return <Users className="w-4 h-4" />;
    if (feature.includes("tắm")) return <Bath className="w-4 h-4" />;
    if (feature.includes("TV")) return <Tv className="w-4 h-4" />;
    if (feature.includes("WiFi")) return <Wifi className="w-4 h-4" />;
    if (feature.includes("xe")) return <Car className="w-4 h-4" />;
    if (feature.includes("lạnh")) return <Coffee className="w-4 h-4" />;
    return <Star className="w-4 h-4" />;
  };

  const roomFeatures = [
    { title: "WiFi Tốc Độ Cao", description: "Kết nối internet ổn định 24/7" },
    { title: "An Toàn Tuyệt Đối", description: "Hệ thống bảo mật hiện đại" },
    {
      title: "Minibar Miễn Phí",
      description: "Đồ uống và snack complimentary",
    },
    {
      title: "Bãi Đậu Xe Riêng",
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-slate-600 to-blue-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"
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
              <span className="text-white font-semibold">
                Phòng Nghỉ Cao Cấp
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Phòng Nghỉ Tại
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-slate-200">
                BeTu Homestay
              </span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Khám phá các phòng nghỉ được thiết kế tinh tế với đầy đủ tiện nghi
              hiện đại và dịch vụ chuyên nghiệp
            </p>
          </motion.div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 relative z-10">
              Tiện Nghi Trong Mọi Phòng
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Tất cả phòng nghỉ đều được trang bị đầy đủ tiện nghi cao cấp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {roomFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center p-6 h-full glass-effect border-blue-200/50 hover:border-blue-300/70 hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-4 shadow-glow group-hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-white/30 rounded-lg"></div>
                  </motion.div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 relative z-10">
              Lựa Chọn Phòng Nghỉ
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
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
                <Card className="h-full overflow-hidden glass-effect border-blue-200/50 hover:border-blue-300/70 hover:shadow-2xl transition-all duration-500 relative">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-72 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 gradient-primary text-white px-4 py-2 rounded-full font-bold shadow-glow">
                      {room.price}₫/đêm
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Button
                          onClick={() => onSectionChange("contact")}
                          className="w-full bg-white/90 backdrop-blur-sm text-blue-600 hover:bg-white"
                        >
                          Xem Chi Tiết
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-blue-800">
                        {room.name}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 gradient-secondary rounded-full flex items-center justify-center"
                      >
                        <div className="w-3 h-3 bg-white/70 rounded-sm"></div>
                      </motion.div>
                    </div>

                    <p className="text-blue-600 mb-6 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-blue-800 flex items-center space-x-2">
                        <span>Tiện nghi đẳng cấp:</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2 text-sm text-blue-700 bg-blue-50 rounded-lg px-3 py-2"
                          >
                            <div className="text-blue-500">
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
      <section className="py-20 bg-gradient-to-r from-blue-100 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 relative z-10">
              Chính Sách & Ưu Đãi
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
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
                <Card className="text-center p-8 h-full glass-effect border-blue-200/50 hover:border-blue-300/70 hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${policy.color} rounded-3xl mb-6 shadow-glow group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <policy.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {policy.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg">
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
            <Card className="max-w-4xl mx-auto glass-effect border-blue-200/50 shadow-soft">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Thông Tin Bổ Sung
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-800">Hủy Phòng</h4>
                    <p className="text-blue-600 text-sm">
                      Miễn phí hủy trước 24h
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-800">Thanh Toán</h4>
                    <p className="text-blue-600 text-sm">
                      Chấp nhận mọi hình thức
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-800">Bảo Đảm</h4>
                    <p className="text-blue-600 text-sm">
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-slate-600 to-blue-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cần Hỗ Trợ Đặt Phòng?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
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
                  className="px-10 py-5 bg-white text-blue-600 hover:bg-blue-50 shadow-2xl text-lg font-bold"
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
                  className="px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl text-lg font-bold"
                >
                  Đặt Phòng Ngay
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
