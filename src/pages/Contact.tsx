import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Users,
  Star,
  Award,
  Shield,
  Zap,
  Globe,
  HeartHandshake,
  Car,
} from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa Chỉ Homestay",
      value: HOMESTAY_INFO.address,
      description: "Vị trí thuận tiện, gần trung tâm thành phố",
    },
    {
      icon: Phone,
      title: "Hotline 24/7",
      value: HOMESTAY_INFO.phone,
      description: "Hỗ trợ tư vấn và đặt phòng mọi lúc",
    },
    {
      icon: Mail,
      title: "Email Chính Thức",
      value: HOMESTAY_INFO.email,
      description: "Gửi yêu cầu và nhận phản hồi nhanh chóng",
    },
    {
      icon: Clock,
      title: "Thời Gian Phục Vụ",
      value: "24/7 - Không ngừng nghỉ",
      description: "Luôn sẵn sàng phục vụ quý khách",
    },
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Chat Zalo",
      description: "Nhắn tin trực tiếp qua Zalo để được tư vấn nhanh nhất",
      action: "Mở Zalo Chat",
      color: "from-blue-500 to-cyan-500",
      stats: "Phản hồi trong 30 giây",
    },
    {
      icon: Phone,
      title: "Gọi Điện Tức Thì",
      description: "Liên hệ ngay để được hỗ trợ đặt phòng và tư vấn",
      action: "Gọi Ngay",
      color: "from-green-500 to-emerald-500",
      stats: "Tổng đài miễn phí",
    },
    {
      icon: Navigation,
      title: "Chỉ Đường GPS",
      description: "Xem vị trí chính xác và tìm đường đến homestay",
      action: "Mở Google Maps",
      color: "from-purple-500 to-pink-500",
      stats: "Cách trung tâm 5 phút",
    },
  ];

  const awards = [
    { icon: Award, title: "Top 1 Homestay Mỹ Tho", year: "2024" },
    { icon: Star, title: "Đánh Giá 4.9/5 Sao", year: "2023-2024" },
    { icon: Shield, title: "Chứng Nhận An Toàn", year: "2024" },
    { icon: HeartHandshake, title: "Dịch Vụ Xuất Sắc", year: "2024" },
  ];

  return (
    <div className="pt-20 pb-20 relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-amber-300/20 rounded-full blur-xl"
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
              <Globe className="w-5 h-5 text-amber-200" />
              <span className="text-white font-semibold">
                Liên Hệ Đặt Phòng
              </span>
              <Zap className="w-5 h-5 text-amber-200" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="drop-shadow-xl/30">Kết Nối Với</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200 drop-shadow-lg/30">
                BeTu Homestay
              </span>
            </h1>
            <p className="text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg/70">
              Hãy liên hệ với chúng tôi để được tư vấn và đặt phòng với mức giá
              ưu đãi nhất
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.1 }}
            // transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6 drop-shadow-md/35 pb-3">
              Thông Tin Liên Hệ
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto drop-shadow-sm/30">
              Nhiều cách để kết nối với chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 0.3 }}
                // transition={{ delay: index * 0.1, duration: 0.6 }}
                // whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center p-8 h-full glass-effect border-orange-200/50 hover:border-orange-300/70 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <motion.div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-6 shadow-glow group-hover:shadow-2xl transition-all duration-300"
                  >
                    <info.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-orange-800 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-2">
                    {info.value}
                  </p>
                  <p className="text-orange-500 text-sm">{info.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center p-8 h-full cursor-pointer glass-effect border-orange-200/50 hover:border-orange-300/70 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <motion.div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${action.color} rounded-3xl mb-6 shadow-glow group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <action.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-3">
                    {action.title}
                  </h3>
                  <p className="text-orange-600 mb-4 leading-relaxed">
                    {action.description}
                  </p>
                  <div className="text-sm text-orange-500 mb-6 font-medium">
                    {action.stats}
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${action.color} text-white border-none shadow-glow hover:shadow-2xl`}
                  >
                    {action.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4 drop-shadow-md/35 pb-3">
              Giải Thưởng & Chứng Nhận
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-2xl mb-4 shadow-glow"
                  >
                    <award.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-orange-800 text-sm mb-1">
                    {award.title}
                  </h3>
                  <p className="text-orange-600 text-xs">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Map and Information Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/50 to-amber-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6 drop-shadow-md/35 pb-3">
              Vị Trí & Thông Tin
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto drop-shadow-sm/30">
              Tìm hiểu thêm về vị trí và các dịch vụ tại BeTu Homestay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="overflow-hidden glass-effect border-orange-200/50 shadow-soft">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2089!2d106.3397!3d10.3503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab0d164a9b2c1%3A0x123456789!2s357%2F10%2F13%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Ph%C6%B0%E1%BB%9Dng%206%2C%20M%E1%BB%B9%20Tho%2C%20Ti%E1%BB%81n%20Giang!5e0!3m2!1svi!2s!4v1647856781234!5m2!1svi!2s"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 right-4">
                    <div className="glass-effect rounded-xl p-4 shadow-soft">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-glow"
                        >
                          <MapPin className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-orange-800 text-lg">
                            BeTu Homestay
                          </h3>
                          <p className="text-orange-600 text-sm">
                            {HOMESTAY_INFO.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-orange-700">
                      <Navigation className="w-5 h-5" />
                      <span className="font-medium text-sm">
                        Cách trung tâm Mỹ Tho 5 phút
                      </span>
                    </div>
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/search/${encodeURIComponent(HOMESTAY_INFO.address)}`,
                          "_blank",
                        )
                      }
                      className="gradient-primary text-white text-xs"
                    >
                      Chỉ Đường
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2 text-orange-600">
                      <Car className="w-4 h-4" />
                      <span>Bãi đậu xe miễn phí</span>
                    </div>
                    <div className="flex items-center space-x-2 text-orange-600">
                      <Clock className="w-4 h-4" />
                      <span>Mở cửa 24/7</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Additional Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {/* Location Benefits */}
                <Card className="glass-effect border-orange-200/50 shadow-soft">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-orange-800 mb-3 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Lợi Ích Vị Trí
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-orange-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                        <span>Gần chợ Mỹ Tho (3 phút)</span>
                      </div>
                      <div className="flex items-center text-orange-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                        <span>Cầu Mỹ Thuận (15 phút)</span>
                      </div>
                      <div className="flex items-center text-orange-600">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                        <span>Chùa Vĩnh Tràng (10 phút)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Transportation */}
                <Card className="glass-effect border-orange-200/50 shadow-soft">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-orange-800 mb-3 flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      Phương Tiện
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-orange-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>Xe máy cho thuê</span>
                      </div>
                      <div className="flex items-center text-orange-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>Gọi taxi/Grab dễ dàng</span>
                      </div>
                      <div className="flex items-center text-orange-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span>Bến xe khách (5 phút)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Enhanced Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Why Choose Us */}
              <Card className="glass-effect border-orange-200/50 shadow-soft ">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-6 text-center">
                    Tại Sao Chọn Chúng Tôi?
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Clock,
                        text: "Phản hồi trong 15 phút",
                        color: "text-blue-600",
                      },
                      {
                        icon: Shield,
                        text: "Bảo đảm giá tốt nhất",
                        color: "text-green-600",
                      },
                      {
                        icon: Award,
                        text: "Đánh giá 4.9/5 sao",
                        color: "text-yellow-600",
                      },
                      {
                        icon: Users,
                        text: "Hơn 5000 khách hài lòng",
                        color: "text-purple-600",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-orange-700 font-medium">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Booking Information */}
              <Card className="glass-effect border-orange-200/50 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-6 text-center">
                    Thông Tin Đặt Phòng
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-orange-700 mb-4">
                        Để đặt phòng hoặc tư vấn, vui lòng liên hệ trực tiếp
                        qua:
                      </p>
                      <div className="space-y-3">
                        <Button
                          className="w-full gradient-primary text-white shadow-glow hover:shadow-2xl"
                          onClick={() =>
                            window.open(`tel:${HOMESTAY_INFO.phone}`)
                          }
                        >
                          <Phone className="w-4 h-4" />
                          <span>Gọi Điện Ngay</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() =>
                            window.open(`mailto:${HOMESTAY_INFO.email}`)
                          }
                        >
                          <Mail className="w-4 h-4" />
                          <span>Gửi Email</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
