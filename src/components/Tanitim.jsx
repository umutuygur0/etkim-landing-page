const Tanitim = () => {
  const features = [
    'VR tabanlı etkileşimli senaryolar',
    'Zorbalık ve akran ilişkileri farkındalığı',
    'Empati geliştirme',
    'Doğru davranışları deneyimleyerek öğrenme',
  ]

  return (
    <section id="tanitim" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Sol: Ürün Açıklaması */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              PDR360 Nedir?
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Çocuk ve ergenlerin güvenli ve sağlıklı sosyal ilişkiler
              kurmalarını hedefleyen bir girişimiz. VR tabanlı etkileşimli
              senaryolarla zorbalık ve akran ilişkilerinde farkındalık
              kazandırır, empatiyi güçlendirir ve doğru davranışları
              deneyimleyerek öğrenmeyi destekler.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: VR Görsel Alanı */}
          <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 shadow-xl">
            <div className="rounded-lg overflow-hidden bg-white">
              <img
                src="public/vrgorsel.png"
                alt="VR Senaryo Görseli"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tanitim
