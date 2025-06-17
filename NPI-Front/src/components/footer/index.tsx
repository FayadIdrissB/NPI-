function Footer() {
  return (
    <div className="px-6 bg-black">
        <footer className="bg-cover bg-center text-white py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            {/* Téléphone */}
                <div className="flex-1">
                    <h2 className="text-1xl font-bold mb-4 border-b border-white pb-2">Téléphone</h2>
                    <p className="text-lg font-semibold">06 61 64 72 21</p>
                </div>

            {/* Horaires */}
                 <div className="flex-1">
                     <h2 className="text-1xl font-bold mb-4 border-b border-white pb-2">Horaires</h2>
                    <p><strong>Lundi – Vendredi :</strong> 10:00 – 20:00</p>
                </div>

            {/* Contact */}
                <div className="flex-1">
                    <h2 className="text-1xl font-bold mb-4 border-b border-white pb-2">Réseaux Sociaux</h2>
                    <div className="flex space-x-6 text-3xl">
                      <a href="https://www.instagram.com/itsflorian__/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram hover:text-gray-300"></i>
                      </a>
                      <a href="mailto:kelembhoflo@gmail.com">
                        <i className="fas fa-envelope hover:text-gray-300"></i>
                      </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
  
export default Footer;