import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full p-2 flex items-center justify-between bg-transparent z-30 mt-10">
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
        <div className="lg:hidden flex items-center ml-auto text-white">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </nav>
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

    </div>
  );
};

export default Navbar;
