import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            PDR360
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('biz-kimiz')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Biz Kimiz
            </button>
            <button
              onClick={() => scrollToSection('sss')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sıkça Sorulan Sorular
            </button>
            <button
              onClick={() => scrollToSection('urun-talebi')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Ürün Talebi
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('urun-talebi')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Talep Formu
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

