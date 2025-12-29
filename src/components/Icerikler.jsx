const Icerikler = () => {
  const icerikler = [
    {
      baslik: 'Zorbalıkla Mücadele',
      hedef: 'Zorbalık durumlarını tanıma ve doğru tepki verme',
      kazanim: 'Empati geliştirme ve yardım etme becerisi',
      ornek: 'Okul bahçesinde zorbalık senaryosu ve müdahale seçenekleri',
    },
    {
      baslik: 'Değer Eğitimi',
      hedef: 'Temel değerleri içselleştirme',
      kazanim: 'Saygı, hoşgörü ve adalet duygusu',
      ornek: 'Günlük hayatta değerlerin uygulanması senaryoları',
    },
    {
      baslik: 'Dürüstlük',
      hedef: 'Dürüst davranışların önemini kavrama',
      kazanim: 'Etik karar verme ve sorumluluk bilinci',
      ornek: 'Zor durumlarda dürüstlük seçenekleri ve sonuçları',
    },
  ]

  return (
    <section
      id="icerikler"
      className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          İçerikler Neler Olacak?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {icerikler.map((icerik, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {icerik.baslik}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Hedef:</p>
                  <p className="text-gray-600">{icerik.hedef}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Kazanım:</p>
                  <p className="text-gray-600">{icerik.kazanim}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">
                    Örnek Senaryo:
                  </p>
                  <p className="text-gray-600">{icerik.ornek}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Icerikler

