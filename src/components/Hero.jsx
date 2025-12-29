const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          PDR360
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Psikolojik Danışmanlıkta VR Teknolojileri ile Güvenli ve Etkili
          Öğrenme Deneyimi
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('tanitim')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Ürünü İncele
          </button>
          <button
            onClick={() => scrollToSection('demo')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-blue-600"
          >
            Demo İzle
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

