import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import openingCrawlSound from '../assets/opening-crawl.mp3';

const LandingPage = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [manualPlay, setManualPlay] = useState(false);
  const navigate = useNavigate();
  const [play, { stop }] = useSound(openingCrawlSound);

  const crawlContent = [
    "It is a period of civil war.",
    "Rebel spaceships, striking",
    "from a hidden base, have won",
    "their first victory against",
    "the evil Galactic Empire.",
    "During the battle, Rebel",
    "spies managed to steal secret",
    "plans to the Empire's",
    "ultimate weapon, the DEATH",
    "STAR, an armored space",
    "station with enough power to",
    "destroy an entire planet.",
    "Pursued by the Empire's",
    "sinister agents, Princess",
    "Leia races home aboard her",
    "starship, custodian of the",
    "stolen plans that can save",
    "her people and restore",
    "freedom to the galaxy...."
  ];

  useEffect(() => {
    if (manualPlay && currentParagraph < crawlContent.length - 1) {
      const timer = setTimeout(() => {
        setCurrentParagraph(prev => prev + 1);
      }, 2000); // 2 seconds between paragraphs
      return () => clearTimeout(timer);
    }
  }, [currentParagraph, manualPlay]);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div className="absolute inset-0 star-field"></div>

      {/* Manual Play Button */}
      {!manualPlay && (
        <button
          onClick={() => {
            setManualPlay(true);
            play();
          }}
          className="fixed bottom-8 left-8 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 z-50 font-star-wars"
        >
          ▶ INITIALIZE HOLOCRON
        </button>
      )}

      {/* Opening Crawl Container */}
      <div className="perspective-250 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-2xl mx-auto">
          <AnimatePresence>
            <motion.div
              key={currentParagraph}
              initial={{ opacity: 0, y: 100, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 20 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className="text-yellow-400 text-center text-3xl font-star-wars absolute w-full"
            >
              {crawlContent[currentParagraph]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Action Buttons */}
      <AnimatePresence>
        {currentParagraph === crawlContent.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 flex gap-8 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-4 border-2 border-yellow-400 rounded-lg bg-black/80 backdrop-blur-sm"
              onClick={() => navigate('/characters')}
            >
              <span className="text-yellow-400 font-star-wars text-2xl">
                EXPLORE ARCHIVES
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-4 border-2 border-yellow-400 rounded-lg bg-black/80 backdrop-blur-sm"
              onClick={() => navigate('/quiz')}
            >
              <span className="text-yellow-400 font-star-wars text-2xl">
                BEGIN TRAINING
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Controls */}
      <button 
        onClick={() => stop()}
        className="fixed bottom-8 right-8 text-yellow-400 hover:text-yellow-300 z-50 font-star-wars"
      >
        ⏹ TERMINATE FEED
      </button>
    </div>
  );
};

export default LandingPage;