import { motion } from 'framer-motion';
import { Card, CardContent, Chip, Typography, Button } from '@mui/material';
import { useState } from 'react';

const CharacterCard = ({ character, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const funFacts = {
    1: "Luke's original last name was 'Starkiller' in early scripts",
    5: "Obi-Wan's lightsaber stance is based on traditional Japanese swordsmanship",
    // Add more fun facts for other characters
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-4 relative group h-full"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="h-full rounded-xl overflow-hidden bg-gray-900/90 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/50 transition-all relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div className="h-full" style={{ backfaceVisibility: 'hidden' }}>
          <div className="relative h-full">
            <img 
              src={character.image} 
              alt={character.name}
              className="w-full h-48 object-cover border-b border-yellow-500/30"
            />
            <CardContent className="pt-4">
              <Typography 
                variant="h5" 
                className="font-star-wars text-yellow-500 mb-2 text-2xl tracking-wider"
              >
                {character.name}
              </Typography>
              
              <Typography className="text-gray-300 text-sm mb-4 leading-relaxed">
                {character.description}
              </Typography>
              
              <div className="flex flex-wrap gap-2 ">
                <Chip
                  label={character.affiliation}
                  variant="outlined"
                  sx={{ borderColor: '#FFD700', color: '#FFD700' }}
                />
                <div className="ml-auto flex items-center space-x-2">
                  <div className={`h-3 w-3 rounded-full animate-pulse ${
                    character.side === 'light' ? 'bg-yellow-500' : 'bg-red-500'
                  }`} />
                  <span className="text-sm text-yellow-500/80">
                    {character.side === 'light' ? 'LIGHT' : 'DARK'}
                  </span>
                </div>
              </div>
            </CardContent>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 h-full p-6 bg-gray-900 backdrop-blur-lg flex flex-col justify-center items-center text-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            zIndex: 2
          }}
        >
          <Typography 
            variant="h6" 
            className="font-star-wars text-yellow-500 mb-4 text-xl"
          >
            HOLOCRON ENTRY
          </Typography>
          
          <Typography className="text-gray-300 text-sm mb-6 px-4">
            {funFacts[character.id] || "Classified information unavailable..."}
          </Typography>

          <Button
            variant="outlined"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(false);
            }}
          >
            <span className="font-star-wars text-sm">RETURN</span>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CharacterCard;