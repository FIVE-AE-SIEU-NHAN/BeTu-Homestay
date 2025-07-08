import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  Star,
  Wifi,
  Car,
  Coffee,
  Shield,
  Clock,
  Award,
  Users,
  MapPin,
  Heart,
  ChevronRight,
  Sparkles,
  Crown,
  Gift,
  Navigation,
  Building2,
  ShoppingBag,
  Bus,
  Waves,
  Trees,
} from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import Rooms from "./Rooms";

interface HomeProps {
  onSectionChange: (section: string, scrollToElement?: string) => void;
}

export default function Home({ onSectionChange }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: Wifi,
      title: "Wi-Fi Tốc Độ Cao",
      description: "Kết nối internet fiber optic 1Gbps",
    },
    {
      icon: Car,
      title: "Bãi Đậu Xe",
      description: "Chỗ đậu xe riêng biệt, an toàn 24/7",
    },
    {
      icon: Coffee,
      title: "Phong cách Sang Trọng",
      description: "Phong cách thiết kế hiện đại, sang trọng",
    },
    {
      icon: Shield,
      title: "Bảo Mật Tuyệt Đối",
      description: "Hệ thống an ninh thông minh 24/7",
    },
    {
      icon: Clock,
      title: "Dịch Vụ Linh Hoạt",
      description: "Check-in/out bất cứ lúc nào",
    },
    {
      icon: Award,
      title: "Chứng Nhận 5 Sao",
      description: "Được đánh giá 5 sao bởi khách hàng",
    },
  ];

  const stats = [
    { number: "1000+", label: "Khách Hài Lòng", icon: Users },
    { number: "5.0/5", label: "Đánh Giá Trung Bình", icon: Star },
    { number: "98%", label: "Tỷ Lệ Quay Lại", icon: Heart },
    { number: "24.7", label: "Hỗ Trợ Khách Hàng", icon: Shield },
  ];

  const AnimatedCounter = ({
    end,
    duration = 2,
  }: {
    end: string;
    duration?: number;
  }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref);

    useEffect(() => {
      if (!isInView) return;

      const hasNumber = /\d/.test(end);
      if (!hasNumber) {
        if (ref.current) ref.current.textContent = end;
        return;
      }

      const number = parseFloat(end.replace(/[^\d.]/g, ""));
      let current = 0;
      const increment = number / (duration * 60);

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(timer);
        }
        if (ref.current) {
          ref.current.textContent = end.replace(
            /[\d.]+/,
            current.toFixed(end.includes(".") ? 1 : 0),
          );
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return <span ref={ref}>0</span>;
  };

  return (
    <div ref={containerRef} className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-amber-300/20 to-orange-500/40 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            }}
          />
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 gradient-primary rounded-full opacity-30 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-24 h-24 gradient-secondary rounded-full opacity-40 blur-lg"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 gradient-accent rounded-full opacity-35 blur-md"
        />

        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30"
            >
              <Crown className="w-5 h-5 text-amber-300 drop-shadow-lg/45" />
              <span className="text-white font-medium text-shadow-lg/25">
                Homestay Hạng Sang tại Mỹ Tho
              </span>
              <Sparkles className="w-5 h-5 text-amber-300 drop-shadow-lg/45" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-white drop-shadow-2xl/110">
              Chào Mừng Đến
            </span>
            <br />
            <span className="text-gradient text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-amber-100 drop-shadow-xl/110">
              {HOMESTAY_INFO.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl mb-12 text-orange-50 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg/200"
          >
            Trải nghiệm không gian sống sang trọng, hiện đại với dịch vụ 5 sao
            giữa lòng thành phố Mỹ Tho
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange("home", "rooms-section")}
              className="group relative px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <span>Khám Phá Phòng</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange("contact")}
              className="group px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Gift className="w-5 h-5" />
              <span>Ưu Đãi Đặc Biệt</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-4 shadow-glow group-hover:shadow-2xl transition-all duration-300"
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.number} />
                </div>
                <p className="text-orange-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/50 to-amber-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 gradient-primary text-white rounded-full px-6 py-3 mb-6"
            >
              <Award className="w-5 h-5" />
              <span className="font-semibold">Tiện Nghi Đẳng Cấp</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 pb-3 relative z-10 drop-shadow-md/35">
              Tại Sao Chọn BeTu?
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed drop-shadow-sm/30">
              Chúng tôi mang đến trải nghiệm lưu trú đẳng cấp với các tiện ích
              hiện đại và dịch vụ chăm sóc tận tâm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full text-center p-8 glass-effect border-orange-200/50 hover:border-orange-300/70 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-6 shadow-glow group-hover:shadow-2xl transition-all duration-300"
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-4 drop-shadow-sm/30">
                    {feature.title}
                  </h3>
                  <p className="text-orange-600 leading-relaxed drop-shadow-sm/20">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section
        id="rooms-section"
        className="py-16 pb-7 bg-gradient-to-r from-orange-100 to-amber-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-gradient mb-6 pb-3 drop-shadow-md/25">
              Phòng Nghỉ Sang Trọng
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto drop-shadow-sm/30">
              Khám phá các phòng nghỉ được thiết kế tinh tế với đầy đủ tiện nghi
              hiện đại
            </p>
          </motion.div>
          <Rooms onSectionChange={onSectionChange} />
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6 pb-3 drop-shadow-md/35">
              Vị Trí Thuận Lợi
            </h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto drop-shadow-sm/30">
              Nằm tại vị trí đắc địa, BeTu Homestay mang đến sự tiện lợi cho mọi
              chuyến đi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden shadow-glow border-orange-200/50">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2089!2d106.3397!3d10.3503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab0d164a9b2c1%3A0x123456789!2s357%2F10%2F13%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Ph%C6%B0%E1%BB%9Dng%206%2C%20M%E1%BB%B9%20Tho%2C%20Ti%E1%BB%81n%20Giang!5e0!3m2!1svi!2s!4v1647856781234!5m2!1svi!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-xl"
                  />
                  <div className="absolute top-4 left-4 right-4">
                    <div className="glass-effect rounded-xl p-3 shadow-soft">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center shadow-glow"
                        >
                          <MapPin className="w-4 h-4 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-orange-800 text-sm">
                            BeTu Homestay
                          </h3>
                          <p className="text-orange-600 text-xs">
                            {HOMESTAY_INFO.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/${encodeURIComponent(HOMESTAY_INFO.address)}`,
                        "_blank",
                      )
                    }
                    className="w-full flex items-center justify-center space-x-2 gradient-primary text-white px-4 py-3 rounded-xl font-semibold shadow-glow hover:shadow-2xl transition-all duration-300"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Xem Chỉ Đường</span>
                  </motion.button>
                </div>
              </Card>
            </motion.div>

            {/* Distance Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {[
                {
                  place: "Trung tâm Mỹ Tho",
                  time: "5 phút",
                  distance: "2.1 km",
                  icon: Building2,
                },
                {
                  place: "Chợ Mỹ Tho",
                  time: "3 phút",
                  distance: "1.5 km",
                  icon: ShoppingBag,
                },
                {
                  place: "Bến xe Mỹ Tho",
                  time: "8 phút",
                  distance: "3.2 km",
                  icon: Bus,
                },
                {
                  place: "Sông Tiền",
                  time: "10 phút",
                  distance: "4.1 km",
                  icon: Waves,
                },
                {
                  place: "Cù lao Thới Sơn",
                  time: "15 phút",
                  distance: "8.3 km",
                  icon: Trees,
                },
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass-effect rounded-xl p-4 shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                        <location.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-orange-800">
                          {location.place}
                        </h3>
                        <p className="text-orange-600 text-sm">
                          {location.distance}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {location.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-amber-300/20 rounded-full blur-lg"
        />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Gift className="w-5 h-5 text-amber-200" />
              <span className="text-white font-semibold">Ưu Đãi Có Hạn</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl/30">
              Sẵn Sàng Trải Nghiệm?
            </h2>
            <p className="text-2xl text-orange-100 mb-12 leading-relaxed drop-shadow-lg/30">
              Đặt phòng ngay hôm nay để nhận ưu đãi đặc biệt lên đến
              <span className="text-amber-200 font-bold drop-shadow-lg/45">
                {" "}
                30%
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange("home", "rooms-section")}
                className="px-10 py-5 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Đặt Phòng Ngay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange("home", "rooms-section")}
                className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Xem Bảng Giá
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
