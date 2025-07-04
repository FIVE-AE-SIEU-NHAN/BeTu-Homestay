import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  ChevronRight,
} from "lucide-react";
import { HOMESTAY_INFO, ROOMS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface HomeProps {
  onSectionChange: (section: string) => void;
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
      title: "WiFi Tốc Độ Cao",
      description: "Kết nối internet ổn định 24/7 cho công việc và giải trí",
    },
    {
      title: "Bãi Đậu Xe An Toàn",
      description: "Chỗ đậu xe riêng biệt, có camera giám sát",
    },
    {
      title: "Ăn Sáng Miễn Phí",
      description: "Buffet sáng phong phú với đặc sản địa phương",
    },
    {
      title: "Bảo Mật 24/7",
      description: "Hệ thống an ninh hiện đại, lễ tân 24h",
    },
    {
      title: "Dịch Vụ Linh Hoạt",
      description: "Check-in/out mọi thời gian, hỗ trợ tận tình",
    },
    {
      title: "Đánh Giá Xuất Sắc",
      description: "Được khách hàng tin tưởng và đánh giá cao",
    },
  ];

  const stats = [
    { number: "5000+", label: "Khách Hài Lòng" },
    { number: "4.9/5", label: "Đánh Giá Trung Bình" },
    { number: "98%", label: "Tỷ Lệ Quay Lại" },
    { number: "24/7", label: "Hỗ Trợ Khách Hàng" },
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
        {/* Background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900/70 to-blue-800/80 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            }}
          />
        </motion.div>

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
              className="inline-flex items-center space-x-2 bg-white/90 rounded-full px-6 py-3 mb-6 border border-white"
            >
              <span className="text-blue-800 font-semibold">
                Homestay Cao Cấp #1 Mỹ Tho
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-white drop-shadow-2xl">Chào Mừng Đến</span>
            <br />
            <span className="text-white drop-shadow-2xl">
              {HOMESTAY_INFO.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl mb-12 text-white drop-shadow-lg max-w-4xl mx-auto leading-relaxed font-light"
          >
            Trải nghiệm không gian sống sang trọng, hiện đại với dịch vụ chuyên
            nghiệp giữa lòng thành phố Mỹ Tho
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
              onClick={() => onSectionChange("rooms")}
              className="group relative px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-blue-700 transition-colors duration-300 flex items-center space-x-2">
                <span>Khám Phá Phòng</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange("contact")}
              className="group px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Liên Hệ Ngay</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gray-50" />
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
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-4 shadow-glow group-hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </motion.div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <AnimatedCounter end={stat.number} />
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden bg-white">
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
              <span className="font-semibold">Tiện Nghi Đẳng Cấp</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Tại Sao Chọn <span className="text-blue-600">BeTu?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                <Card className="h-full text-center p-8 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-20 h-20 gradient-primary rounded-3xl mb-6 shadow-glow group-hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-white/30 rounded-lg"></div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Vị Trí <span className="text-blue-600">Thuận Lợi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tọa lạc tại vị trí đắc địa, dễ dàng di chuyển đến các điểm tham
              quan nổi tiếng
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Map */}
            <Card className="overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500">
              <div className="relative h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.048865874894!2d106.35851461458443!3d10.345869292618374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab2d97e8f5a1f%3A0x4b4b4b4b4b4b4b4b!2zTmd1eeG7hW4gVGjhu4sgVGjhuq1wLCBQaMaw4budbmcgNiwgTXkgVGhvLCBUacOqbiBHaWFuZywgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1642071234567!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="BeTu Homestay Location"
                />
              </div>
            </Card>

            {/* Location Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Địa Chỉ Homestay
                </h3>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {HOMESTAY_INFO.address}
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Trung tâm thành phố", distance: "5 phút đi xe" },
                  { label: "Chợ Mỹ Tho", distance: "3 phút đi bộ" },
                  { label: "Bến xe khách", distance: "10 phút đi xe" },
                  { label: "Sông Tiền", distance: "15 phút đi xe" },
                ].map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                  >
                    <span className="font-semibold text-gray-800">
                      {location.label}
                    </span>
                    <span className="text-blue-600 font-medium">
                      {location.distance}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="gradient-primary text-white px-8 py-4 text-lg font-bold shadow-glow hover:shadow-xl">
                  Chỉ Đường Google Maps
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Phòng Nghỉ <span className="text-blue-600">Sang Trọng</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá các phòng nghỉ được thiết kế tinh tế với đầy đủ tiện nghi
              hiện đại
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {ROOMS.slice(0, 3).map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 right-4 gradient-primary text-white px-4 py-2 rounded-full font-bold shadow-glow">
                      {room.price}₫/đêm
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{room.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={() => onSectionChange("rooms")}
              className="gradient-primary text-white px-8 py-4 text-lg font-bold shadow-glow hover:shadow-xl"
            >
              Xem Tất Cả Phòng
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-gray-700 to-blue-700" />

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sẵn Sàng Trải Nghiệm?
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              Đặt phòng ngay hôm nay để nhận ưu đãi đặc biệt lên đến
              <span className="text-white font-bold"> 30%</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange("contact")}
                className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Đặt Phòng Ngay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange("rooms")}
                className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
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
