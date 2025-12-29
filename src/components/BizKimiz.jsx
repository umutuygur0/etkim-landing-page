const BizKimiz = () => {
  return (
    <section
      id="biz-kimiz"
      className="py-20 px-4 md:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Biz Kimiz
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 md:p-12 rounded-2xl shadow-lg">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Çocuk ve ergenlerin güvenli ve sağlıklı sosyal ilişkiler
            kurmalarını hedefleyen bir girişimiz. VR tabanlı etkileşimli
            senaryolarla zorbalık ve akran ilişkilerinde farkındalık
            kazandırır, empatiyi güçlendirir ve doğru davranışları
            deneyimleyerek öğrenmeyi destekler.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Geleneksel rehberlik çalışmalarını dijital dünyaya taşır.
            Öğrencilerin gerçek hayatta karşılaşabilecekleri zorbalık
            durumlarını risk almadan deneyimlemesini sağlar.
          </p>
        </div>

        {/* Özellikler */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">
              Gerçekçi Deneyim
            </h3>
            <p className="text-gray-600">
              Gerçekçi okul ortamı ve akran etkileşimleri ile öğrenciler
              farklı senaryoları deneyimler.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">
              Farklı Roller
            </h3>
            <p className="text-gray-600">
              Zorba/mağdur deneyimi gibi farklı rollerle empati geliştirme
              fırsatı.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">
              Senaryo Tabanlı Öğrenme
            </h3>
            <p className="text-gray-600">
              Senaryo tabanlı karar mekanizması ile seçime göre sonuç
              görme.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-600">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">
              Geri Bildirim
            </h3>
            <p className="text-gray-600">
              Quiz ve geri bildirim ile duygusal öğrenme odaklı akış.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BizKimiz

