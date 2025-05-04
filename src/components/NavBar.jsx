import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-yellow-500/30"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <NavLink to="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <span className="text-xl font-star-wars text-yellow-500 hover:text-yellow-400 transition-colors">
                STAR WARS ARCHIVES
              </span>
            </motion.div>
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={({ isActive }) => 
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400'
              }`
            }>
              <motion.span whileHover={{ scale: 1.05 }}>
                Home
              </motion.span>
            </NavLink>
            
            <NavLink to="/characters" className={({ isActive }) => 
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400'
              }`
            }>
              <motion.span whileHover={{ scale: 1.05 }}>
                Characters
              </motion.span>
            </NavLink>
            
            <NavLink to="/quiz" className={({ isActive }) => 
              `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400'
              }`
            }>
              <motion.span whileHover={{ scale: 1.05 }}>
                Jedi Trials
              </motion.span>
            </NavLink>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.div 
            className="h-8 w-1 bg-yellow-500/50"
            animate={{ height: ['20%', '80%', '20%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-yellow-500/70 text-sm">|</span>
          <motion.div 
            className="h-8 w-1 bg-yellow-500/50"
            animate={{ height: ['80%', '20%', '80%'] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;