import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate,useLocation } from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation(); // ⬅️ Get current route
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true); // always solid on non-home pages
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    handleScroll(); // set initial scroll state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isHome]); // rerun on route change


      const handleLoginClick = () =>{
        navigate('/login');
      }
  
    const navItems = [
      { name: 'About', href: '/about' },
      { name: 'Reviews', href: '#reviews' },
      { name: 'Courses', href: '#guarantee', hasDropdown: true },
      { name: 'Live Classes', href: '#live-classes' },
      { name: 'OnDemand', href: '#ondemand' },
      { name: 'MBA Admissions', href: '#mba-admissions' },
      { name: 'Tutoring', href: '#tutoring' },
    ];
  
    return (
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2b343d] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="logo2.png" 
                alt="GMAT INSIGHT" 
                className="h-8 w-auto"
              />
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </a>
                    {item.hasDropdown && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <div className="py-1">
                          <a href="/gmat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            GMAT
                          </a>
                          <a href="/gre" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            GRE
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
  
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={handleLoginClick} className="text-white hover:text-blue-300 px-4 py-2 text-sm font-medium border border-white hover:border-blue-300 rounded transition-colors duration-200">
                LOGIN
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm font-medium rounded transition-colors duration-200">
                TRY NOW
              </button>
            </div>
  
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-blue-300 p-2 rounded-md transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-[#2b343d]`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-600">
              <div className="space-y-2">
                <button onClick={handleLoginClick} className="w-full text-left text-white hover:text-blue-300 px-3 py-2 text-base font-medium border border-white hover:border-blue-300 rounded transition-colors duration-200">
                  LOGIN
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-base font-medium rounded transition-colors duration-200">
                  TRY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;