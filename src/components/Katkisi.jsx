const Katkisi = () => {
  return (
    <section
      id="katkisi"
      className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Öğrencilere Katkısı */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Katkısı Ne? Öğrencilere
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Empati ve sosyal-duygusal becerilerin gelişimi
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Güvenli ortamda deneyim kazanma
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Doğru tepkiyi uygulamalı öğrenme
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Zorbalık durumlarını risk almadan deneyimleme
                </span>
              </li>
            </ul>
          </div>

          {/* Neden Bu Ürün */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Neden Bu Ürün?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Geleneksel rehberliği dijitale taşır
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Risk almadan zorbalık senaryosu deneyimi
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Okullara ve psikolojik danışmanlara modern eğitim materyali
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold text-xl mr-3">•</span>
                <span className="text-gray-700 text-lg">
                  Gerçekçi okul ortamı ve akran etkileşimleri
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Katkisi

