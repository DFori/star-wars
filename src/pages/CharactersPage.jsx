import { motion } from 'framer-motion';
import { characters } from '../data/characters';
import CharacterCard from '../components/CharacterCard';

const CharactersPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 star-field"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl text-center mb-12 font-star-wars text-yellow-500"
        >
          Character Archive
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CharactersPage;