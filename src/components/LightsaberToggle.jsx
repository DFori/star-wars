import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from '@mui/material';
import { LightsaberUp, LightsaberDown } from './LightSabericons.jsx';
import useSound from 'use-sound';
import saberSound from '../assets/saber.mp3';
import { useTheme } from '../context/ThemeContext';

const LightsaberToggle = () => {
  const { isSith, toggleTheme } = useTheme();
  const [playSaberSound] = useSound(saberSound);

  const handleToggle = () => {
    toggleTheme();
    playSaberSound();
  };

  return (
    <div className="relative h-16 w-32 flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={isSith ? 'sith' : 'jedi'}
          initial={{ opacity: 0, x: isSith ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isSith ? 50 : -50 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {isSith ? <LightsaberUp /> : <LightsaberDown />}
        </motion.div>
      </AnimatePresence>

      <Switch
        checked={isSith}
        onChange={handleToggle}
        sx={{
          '& .MuiSwitch-switchBase': {
            color: 'transparent',
          },
          '& .MuiSwitch-track': {
            backgroundColor: isSith ? '#b91c1c' : '#60a5fa',
            borderRadius: '9999px'
          },
          position: 'absolute',
          opacity: 0,
          zIndex: 10,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};
export default LightsaberToggle;
