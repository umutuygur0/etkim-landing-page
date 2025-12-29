import { useState } from 'react'

const TalepFormu = () => {
  const [formData, setFormData] = useState({
    adSoyad: '',
    kurum: '',
    email: '',
    telefon: '',
    rol: '',
    mesaj: '',
    kvkk: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.kvkk) {
      alert('KVKK onayı zorunludur.')
      return
    }
    console.log('Form Data:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        adSoyad: '',
        kurum: '',
        email: '',
        telefon: '',
        rol: '',
        mesaj: '',
        kvkk: false,
      })
    }, 3000)
  }

  return (
    <section
      id="urun-talebi"
      className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Ürün Talebi
        </h2>
        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
            <p className="text-lg font-semibold">
              Talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
          >
            <div>
              <label
                htmlFor="adSoyad"
                className="block text-gray-700 font-semibold mb-2"
              >
                Ad Soyad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="adSoyad"
                name="adSoyad"
                value={formData.adSoyad}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="kurum"
                className="block text-gray-700 font-semibold mb-2"
              >
                Kurum/Okul Adı <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="kurum"
                name="kurum"
                value={formData.kurum}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                E-posta <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="telefon"
                className="block text-gray-700 font-semibold mb-2"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="rol"
                className="block text-gray-700 font-semibold mb-2"
              >
                Rol <span className="text-red-500">*</span>
              </label>
              <select
                id="rol"
                name="rol"
                value={formData.rol}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seçiniz...</option>
                <option value="rehber-ogretmen">Rehber Öğretmen</option>
                <option value="yonetici">Yönetici</option>
                <option value="veli">Veli</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="mesaj"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mesaj / İhtiyaç
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                value={formData.mesaj}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="kvkk"
                name="kvkk"
                checked={formData.kvkk}
                onChange={handleChange}
                required
                className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="kvkk" className="text-gray-700 text-sm">
                <span className="text-red-500">*</span> KVKK Aydınlatma Metni'ni
                okudum ve kabul ediyorum.
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Talep Gönder
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default TalepFormu

