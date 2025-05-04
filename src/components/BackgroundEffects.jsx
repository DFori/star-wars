import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const generateStars = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 1 + Math.random() * 3
  }));
};

const BackgroundEffects = () => {
  const { isSith } = useTheme();
  const stars = generateStars(100);
  const energyCircles = Array.from({ length: 5 });

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animation: `twinkle ${star.duration}s infinite`
          }}
        />
      ))}

      {/* Theme-specific effects */}
      <AnimatePresence>
        {isSith ? (
          <motion.div
            key="sith-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {energyCircles.map((_, i) => (
              <div
                key={`sith-${i}`}
                className="absolute sith-energy rounded-full blur-md"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="jedi-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {energyCircles.map((_, i) => (
              <div
                key={`jedi-${i}`}
                className="absolute jedi-energy rounded-full blur-md"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated grid lines */}
      <div className={`absolute inset-0 opacity-10 bg-[length:40px_40px] ${
        isSith ? 'bg-red-grid' : 'bg-blue-grid'
      }`}></div>
    </div>
  );
};
export default BackgroundEffects;
