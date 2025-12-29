import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      soru: 'PDR360 nedir ve nasıl çalışır?',
      cevap:
        'PDR360, VR teknolojisi kullanarak öğrencilere zorbalık ve akran ilişkileri konusunda farkındalık kazandıran bir eğitim platformudur. Öğrenciler gerçekçi senaryolarda farklı roller deneyimleyerek empati geliştirir ve doğru davranışları öğrenir.',
    },
    {
      soru: 'Hangi yaş grupları için uygundur?',
      cevap:
        'PDR360, ilkokul ve ortaokul öğrencileri (8-14 yaş) için tasarlanmıştır. Senaryolar yaş gruplarına göre özelleştirilebilir.',
    },
    {
      soru: 'VR gözlüğü gerekli mi?',
      cevap:
        'Evet, tam deneyim için VR gözlüğü gereklidir. Ancak bazı senaryolar tablet veya bilgisayar üzerinden de deneyimlenebilir.',
    },
    {
      soru: 'Okullar nasıl kullanabilir?',
      cevap:
        'Rehber öğretmenler veya psikolojik danışmanlar, grup çalışmaları veya bireysel seanslarda PDR360\'ı kullanabilir. Platform, öğrenci ilerlemesini takip etme özelliği sunar.',
    },
    {
      soru: 'Güvenlik ve gizlilik nasıl sağlanıyor?',
      cevap:
        'Tüm veriler KVKK uyumlu şekilde saklanır. Öğrenci verileri şifrelenir ve sadece yetkili eğitimciler erişebilir.',
    },
    {
      soru: 'Ürünü nasıl talep edebilirim?',
      cevap:
        'Sayfanın alt kısmındaki "Ürün Talep Formu"nu doldurarak talebinizi iletebilirsiniz. Ekibimiz en kısa sürede sizinle iletişime geçecektir.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="sss"
      className="py-20 px-4 md:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.soru}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.cevap}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

