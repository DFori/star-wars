import { motion } from 'framer-motion';

export const LightsaberUp = () => (
  <motion.svg
    initial={{ rotate: -30 }}
    animate={{ rotate: 0 }}
    className="h-12 w-12 text-red-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    {/* Custom SVG path for lightsaber */}
    <path d="M12 2L14 7H10L12 2Z" />
    <rect x="11" y="7" width="2" height="14" rx="1" />
  </motion.svg>
);

export const LightsaberDown = () => (
  <motion.svg
    initial={{ rotate: 30 }}
    animate={{ rotate: 0 }}
    className="h-12 w-12 text-blue-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 22L10 17H14L12 22Z" />
    <rect x="11" y="1" width="2" height="14" rx="1" />
  </motion.svg>
);