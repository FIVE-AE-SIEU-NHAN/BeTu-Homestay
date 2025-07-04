import { motion } from "motion/react";
import { MapPin, Phone, Mail, Heart, Star, Award, Shield } from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📸", url: "#" },
    { name: "Zalo", icon: "💬", url: "#" },
    { name: "Google", icon: "🌐", url: "#" },
  ];

  const quickLinks = [
    { name: "Về Chúng Tôi", href: "#" },
    { name: "Chính Sách", href: "#" },
    { name: "Điều Khoản", href: "#" },
    { name: "Bảo Mật", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900" />

      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-slate-400/15 rounded-full blur-xl"
      />

      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="relative">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-2xl transition-all duration-300">
                    <span className="text-white font-bold text-xl">BT</span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-1 gradient-secondary rounded-2xl opacity-20 blur-sm"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">
                    {HOMESTAY_INFO.name}
                  </span>
                  <span className="text-blue-300 font-medium">
                    Premium Homestay Experience
                  </span>
                </div>
              </motion.div>

              <p className="text-blue-200 text-lg leading-relaxed max-w-md">
                {HOMESTAY_INFO.description} Trải nghiệm những khoảnh khắc tuyệt
                vời nhất tại Mỹ Tho.
              </p>

              {/* Awards */}
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <Award className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-200 text-sm font-medium">
                    Top 1 Homestay
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <Star className="w-5 h-5 text-blue-300 fill-current" />
                  <span className="text-blue-200 text-sm font-medium">
                    4.9/5 Sao
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                <Phone className="w-6 h-6 text-blue-300" />
                <span>Liên Hệ</span>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    text: HOMESTAY_INFO.address,
                    color: "text-red-300",
                  },
                  {
                    icon: Phone,
                    text: HOMESTAY_INFO.phone,
                    color: "text-green-300",
                  },
                  {
                    icon: Mail,
                    text: HOMESTAY_INFO.email,
                    color: "text-blue-300",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-start space-x-3 group cursor-pointer"
                  >
                    <div className={`${item.color} mt-1`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-blue-200 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services & Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                <span>Dịch Vụ</span>
              </h3>
              <div className="space-y-3">
                {HOMESTAY_INFO.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Liên Kết
                </h4>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="block text-blue-200 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-t border-blue-700/50 pt-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 font-medium">
                  Kết nối với chúng tôi:
                </span>
              </div>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl hover:bg-white/20 transition-all duration-300 shadow-glow hover:shadow-2xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="border-t border-blue-700/50 pt-8 text-center"
          >
            <p className="text-blue-300 text-lg flex items-center justify-center space-x-2 mb-4">
              <span>© 2024 {HOMESTAY_INFO.name}. Được thiết kế với</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-flex"
              >
                <Heart className="w-5 h-5 text-red-400 fill-current" />
              </motion.span>
              <span>bởi AI tại Mỹ Tho</span>
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-blue-400">
              <span>Giấy phép kinh doanh: 123456789</span>
              <span>•</span>
              <span>Hotline: {HOMESTAY_INFO.phone}</span>
              <span>•</span>
              <span>Email: {HOMESTAY_INFO.email}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
