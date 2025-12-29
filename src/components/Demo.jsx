const Demo = () => {
  const useYouTube = true // mp4 uğraşmayalım dersen true bırak

  return (
    <section id="demo" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Demo
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-2xl p-8 shadow-lg mb-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              {useYouTube ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/etK92OzyFgk"
                  title="PDR360 Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src="/etkimvideo.mp4" type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
              )}
            </div>
          </div>

          <p className="text-center text-gray-700 text-lg">
            Senaryo akışı + quiz + geri bildirim
          </p>
        </div>
      </div>
    </section>
  )
}

export default Demo
