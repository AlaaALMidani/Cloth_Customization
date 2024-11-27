import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
<<<<<<< HEAD
import state from '../store'; // Assuming this is where your state resides
import { useSnapshot } from 'valtio';
=======
import { Link } from 'react-router-dom';
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
<<<<<<< HEAD
  const snap = useSnapshot(state); // To observe state changes
=======
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

<<<<<<< HEAD
  const handleNavClick = () => {
    state.intro = false; // Set intro to false
  };

=======
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full p-2 flex items-center justify-between bg-transparent z-30 mt-10">
<<<<<<< HEAD
        {/* Logo */}
        <div className="flex items-center absolute mb-10 "> 
            <img
              src="./threejs.png"
              alt="Logo"
              className="w-48 h-32 object-contain filter invert" 
            />
        </div>


        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-center items-center space-x-10 text-white w-full">
          <a href="#" className="text-lg cursor-pointer" >Home</a>
          <div className="relative">
            <a
              className="text-lg cursor-pointer flex items-center"
              onClick={() => {
                handleCategoryClick('Girls');
              }}
=======
        <div className="flex items-center absolute left-4 w-24 h-12">
          <img
            src="./threejs.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="hidden lg:flex justify-center items-center space-x-10 text-white w-full">
          <a href="#" className="text-lg">Home</a>
          <div className="relative">
            <a
              href="#about"
              className="text-lg cursor-pointer flex items-center"
              onClick={() => handleCategoryClick('Girls')}
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
            >
              Girls
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Girls' && (
              <div className="absolute left-0 mt-2 w-40 bg-transparent text-white rounded-md shadow-md">
<<<<<<< HEAD
                <a
                  className="block px-4 py-2 hover:bg-gray-300 cursor-pointer"
                  onClick={handleNavClick}
                >
                  Dresses
                </a>
                <a
                  className="block px-4 py-2 hover:bg-gray-300 cursor-pointer"
                  onClick={handleNavClick}
                >
                  Wedding Dresses
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <a
              className="text-lg cursor-pointer flex items-center"
              onClick={() => {
                handleCategoryClick('Boys');
              }}
=======
                <a href="#girl1" className="block px-4 py-2 hover:bg-gray-300">Dresses</a>
                <a href="#girl2" className="block px-4 py-2 hover:bg-gray-300">Wedding Dresses</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#services"
              className="text-lg cursor-pointer flex items-center"
              onClick={() => handleCategoryClick('Boys')}
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
            >
              Boys
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Boys' && (
              <div className="absolute left-0 mt-2 w-40 bg-transparent text-white rounded-md shadow-md">
<<<<<<< HEAD
                <a
                  className="block px-4 py-2 hover:bg-gray-300 cursor-pointer"
                  onClick={handleNavClick}
                >
                  Shirt
                </a>
                <a
                  className="block px-4 py-2 hover:bg-gray-300 cursor-pointer"
                  onClick={handleNavClick}
                >
                  Sweater
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <a
              className="text-lg cursor-pointer flex items-center"
              onClick={() => {
                handleCategoryClick('Childrens');
              }}
=======
                <a href="#boy1" className="block px-4 py-2 hover:bg-gray-300">Shirt</a>
                <a href="#boy2" className="block px-4 py-2 hover:bg-gray-300">Sweater</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#contact"
              className="text-lg cursor-pointer flex items-center"
              onClick={() => handleCategoryClick('Childrens')}
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
            >
              Childrens
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Childrens' && (
              <div className="absolute left-0 mt-2 w-40 bg-transparent text-white rounded-md shadow-md">
<<<<<<< HEAD
                <a
                  className="block px-4 py-2 hover:bg-gray-300 cursor-pointer"
                  onClick={handleNavClick}
                >
                  Girls
                </a>
                <a
                  className="block px-4 py-2 hover:bg-gray-300 cursor-pointer"
                  onClick={handleNavClick}
                >
                  Boys
                </a>
              </div>
            )}
          </div>

          <a className="text-lg cursor-pointer" onClick={handleNavClick}>
            Couples
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
=======
                <a href="#child1" className="block px-4 py-2 hover:bg-gray-300">Girls</a>
                <a href="#child2" className="block px-4 py-2 hover:bg-gray-300">Boys</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#contact"
              className="text-lg cursor-pointer"
              onClick={() => handleCategoryClick('Couples')}
            >
              Couples
            </a>
          </div>
        </div>
>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
        <div className="lg:hidden flex items-center ml-auto text-white">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </nav>
<<<<<<< HEAD

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center text-white p-4 space-y-4">
          <a className="text-lg cursor-pointer" onClick={handleNavClick}>
            Home
          </a>
          <a className="text-lg cursor-pointer" onClick={handleNavClick}>
            Girls
          </a>
          <a className="text-lg cursor-pointer" onClick={handleNavClick}>
            Boys
          </a>
          <a className="text-lg cursor-pointer" onClick={handleNavClick}>
            Childrens
          </a>
          <a className="text-lg cursor-pointer" onClick={handleNavClick}>
            Couples
          </a>
        </div>
      )}
=======
      {/* {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center text-white p-4 space-y-4">
          <a href="#" className="text-lg">Home</a>
          <div className="relative">
            <a
              href="#about"
              className="text-lg cursor-pointer flex items-center"
              onClick={() => handleCategoryClick('Girls')}
            >
              Girls
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Girls' && (
              <div className="absolute left-0 mt-2 w-40 bg-transparent text-white rounded-md shadow-md">
                <a href="#girl1" className="block px-4 py-2 hover:bg-gray-300">Dresses</a>
                <a href="#girl2" className="block px-4 py-2 hover:bg-gray-300">Wedding Dresses</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#services"
              className="text-lg cursor-pointer flex items-center"
              onClick={() => handleCategoryClick('Boys')}
            >
              Boys
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Boys' && (
              <div className="absolute left-0 mt-2 w-40 bg-transparent text-white rounded-md shadow-md">
                <a href="#boy1" className="block px-4 py-2 hover:bg-gray-300">Shirt</a>
                <a href="#boy2" className="block px-4 py-2 hover:bg-gray-300">Sweater</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#contact"
              className="text-lg cursor-pointer flex items-center"
              onClick={() => handleCategoryClick('Childrens')}
            >
              Childrens
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Childrens' && (
              <div className="absolute left-0 mt-2 w-40 bg-transparent text-white rounded-md shadow-md">
                <a href="#child1" className="block px-4 py-2 hover:bg-gray-300">Girls</a>
                <a href="#child2" className="block px-4 py-2 hover:bg-gray-300">Boys</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#contact"
              className="text-lg cursor-pointer"
              onClick={() => handleCategoryClick('Couples')}
            >
              Couples
            </a>
          </div>
        </div>
      )} */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center text-white p-4 space-y-4">
          <a href="#" className="text-lg text-white">Home</a>
          <div className="relative">
            <a
              href="#about"
              className="text-lg cursor-pointer flex items-center text-white"
              onClick={() => handleCategoryClick('Girls')}
            >
              Girls
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Girls' && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-md">
                <a href="#girl1" className="block px-4 py-2 hover:bg-gray-300">Dresses</a>
                <a href="#girl2" className="block px-4 py-2 hover:bg-gray-300">Wedding Dresses</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#services"
              className="text-lg cursor-pointer flex items-center text-white"
              onClick={() => handleCategoryClick('Boys')}
            >
              Boys
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Boys' && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-md">
                <a href="#boy1" className="block px-4 py-2 hover:bg-gray-300">Shirt</a>
                <a href="#boy2" className="block px-4 py-2 hover:bg-gray-300">Sweater</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#contact"
              className="text-lg cursor-pointer flex items-center text-white"
              onClick={() => handleCategoryClick('Childrens')}
            >
              Childrens
              <FaChevronDown className="ml-2" />
            </a>
            {selectedCategory === 'Childrens' && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-md">
                <a href="#child1" className="block px-4 py-2 hover:bg-gray-300">Girls</a>
                <a href="#child2" className="block px-4 py-2 hover:bg-gray-300">Boys</a>
              </div>
            )}
          </div>
          <div className="relative">
            <a
              href="#contact"
              className="text-lg cursor-pointer text-white"
              onClick={() => handleCategoryClick('Couples')}
            >
              Couples
            </a>
          </div>
        </div>
      )}

>>>>>>> 7d6fc9dd3f0b5249c55c661c0478c6ac403590d5
    </div>
  );
};

export default Navbar;
