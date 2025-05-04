import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/NavBar';
import useSound from 'use-sound';
// import openingCrawlSound from '../assets/opening-crawl.mp3';

const LandingPage = () => {
  const { isSith } = useTheme();
  const [crawlFinished, setCrawlFinished] = useState(false);
  const navigate = useNavigate();
  // const [play, { stop }] = useSound(openingCrawlSound);
  
  const crawlContent = `
    It is a period of civil war.
    Rebel spaceships, striking
    from a hidden base, have won
    their first victory against
    the evil Galactic Empire.
    
    During the battle, Rebel
    spies managed to steal secret
    plans to the Empire's
    ultimate weapon, the DEATH
    STAR, an armored space
    station with enough power to
    destroy an entire planet.
    
    Pursued by the Empire's
    sinister agents, Princess
    Leia races home aboard her
    starship, custodian of the
    stolen plans that can save
    her people and restore
    freedom to the galaxy....
  `;

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Starfield Background */}
      <div className="absolute inset-0 star-field"></div>

      

      {/* Opening Crawl Container */}
      <div className="perspective-250 overflow-hidden h-screen">
        <motion.div
          className="relative transform-style-preserve-3d origin-center mx-auto"
          animate={{ 
            transform: [
              'rotateX(20deg) translateY(100%)',
              'rotateX(20deg) translateY(-200%)'
            ]
          }}
          transition={{ 
            duration: 30,
            ease: "linear"
          }}
          // onAnimationStart={() => play()}
        >
          {/* Fade-in Text */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center mb-8"
            >
              <div className="text-yellow-400 font-star-wars text-xl mb-4">
                A long time ago in a galaxy far,<br />far away....
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Star Wars Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            className="star-wars-logo absolute left-1/2 -translate-x-1/2"
          />

          {/* Crawl Text */}
          <div className="text-yellow-400 text-center text-3xl leading-relaxed font-star-wars max-w-2xl mx-auto">
            {crawlContent.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-8">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Music Controls */}
      <button 
        onClick={() => stop()}
        className="fixed bottom-8 right-8 text-yellow-400 hover:text-yellow-300"
      >
        ⏹ Stop Music
      </button>
    </div>
  );
};
export default LandingPage;