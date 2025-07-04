import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Send,
  Award,
} from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
    roomType: "deluxe",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa Chỉ Homestay",
      value: HOMESTAY_INFO.address,
      color: "from-red-400 to-pink-500",
      description: "Vị trí thuận tiện, gần trung tâm thành phố",
    },
    {
      icon: Phone,
      title: "Hotline 24/7",
      value: HOMESTAY_INFO.phone,
      color: "from-green-400 to-emerald-500",
      description: "Hỗ trợ tư vấn và đặt phòng mọi lúc",
    },
    {
      icon: Mail,
      title: "Email Chính Thức",
      value: HOMESTAY_INFO.email,
      color: "from-blue-400 to-cyan-500",
      description: "Gửi yêu cầu và nhận phản hồi nhanh chóng",
    },
    {
      icon: Clock,
      title: "Thời Gian Phục Vụ",
      value: "24/7 - Không ngừng nghỉ",
      color: "from-purple-400 to-violet-500",
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
    { title: "Top 1 Homestay Mỹ Tho", year: "2024" },
    { title: "Đánh Giá 4.9/5 Sao", year: "2023-2024" },
    { title: "Chứng Nhận An Toàn", year: "2024" },
    { title: "Dịch Vụ Xuất Sắc", year: "2024" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 15 phút.");
  };

  return (
    <div className="pt-20 pb-20 relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-slate-600 to-blue-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"
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
                Liên Hệ Đặt Phòng
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Kết Nối Với
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-slate-200">
                BeTu Homestay
              </span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Hãy liên hệ với chúng tôi để được tư vấn và đặt phòng với mức giá
              ưu đãi nhất
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 relative z-10">
              Thông Tin Liên Hệ
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Nhiều cách để kết nối với chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center p-8 h-full glass-effect border-blue-200/50 hover:border-blue-300/70 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <motion.div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${info.color} rounded-3xl mb-6 shadow-glow group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <info.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {info.value}
                  </p>
                  <p className="text-blue-500 text-sm">{info.description}</p>
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
                <Card className="text-center p-8 h-full cursor-pointer glass-effect border-blue-200/50 hover:border-blue-300/70 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <motion.div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${action.color} rounded-3xl mb-6 shadow-glow group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <action.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-3">
                    {action.title}
                  </h3>
                  <p className="text-blue-600 mb-4 leading-relaxed">
                    {action.description}
                  </p>
                  <div className="text-sm text-blue-500 mb-6 font-medium">
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
      <section className="py-16 bg-gradient-to-r from-blue-100 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 relative z-10">
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
                    <Award className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-blue-800 text-sm mb-1">
                    {award.title}
                  </h3>
                  <p className="text-blue-600 text-xs">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-24 relative" ref={formRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-slate-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 relative z-10">
              Đặt Phòng Trực Tuyến
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Điền thông tin đ�� nhận báo giá và tư vấn chi tiết
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-effect border-blue-200/50 shadow-soft">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-blue-800 mb-3">
                          Họ và Tên *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                          placeholder="Nhập họ tên đầy đ���"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-blue-800 mb-3">
                          Số Điện Thoại *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        placeholder="Nhập địa chỉ email"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-blue-800 mb-3">
                          Check-in
                        </label>
                        <input
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-blue-800 mb-3">
                          Check-out
                        </label>
                        <input
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-blue-800 mb-3">
                          Số Khách
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num} người
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-3">
                        Loại Phòng
                      </label>
                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                      >
                        <option value="deluxe">Phòng Deluxe</option>
                        <option value="standard">Phòng Standard</option>
                        <option value="family">Phòng Gia Đình</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-3">
                        Ghi Chú
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-4 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white/80"
                        placeholder="Yêu cầu đặc biệt hoặc câu hỏi..."
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full gradient-primary text-white py-4 text-lg font-bold shadow-glow hover:shadow-2xl flex items-center justify-center space-x-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Gửi Yêu Cầu Đặt Phòng</span>
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map */}
              <Card className="overflow-hidden glass-effect border-blue-200/50 shadow-soft">
                <div className="relative h-80 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-full mb-4 shadow-glow"
                    >
                      <MapPin className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">
                      BeTu Homestay
                    </h3>
                    <p className="text-blue-600 max-w-sm mx-auto mb-4">
                      {HOMESTAY_INFO.address}
                    </p>
                    <Button className="gradient-primary text-white shadow-glow">
                      Mở Google Maps
                    </Button>
                  </div>

                  {/* Animated elements */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 left-10 w-12 h-12 bg-blue-400/40 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-20 right-20 w-8 h-8 bg-slate-400/50 rounded-full"
                  />
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="glass-effect border-blue-200/50 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                    Tại Sao Chọn Chúng Tôi?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { text: "Phản hồi trong 15 phút" },
                      { text: "Bảo đảm giá tốt nhất" },
                      { text: "Đánh giá 4.9/5 sao" },
                      { text: "Hơn 5000 khách hài lòng" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-blue-700 font-medium">
                          {item.text}
                        </span>
                      </motion.div>
                    ))}
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
