import { useState } from 'react';
import photoGroupe from '../../assets/images/photoGroupe.jpeg'
import photo_flo from '../../assets/images/photo_flo.jpeg'
import vidéo from '../../assets/images/vidéo.mp4'
import Header from '../../components/header/index'
import ContactForm from '../../features/form'
import '../../App.css'


function Home() {
  const [remainingTickets, setRemainingTickets] = useState(20);

  const handleFormSubmit = () => {
    setRemainingTickets(prev => Math.max(prev - 1, 0));
  };

  return (
    <>
      <Header />
      <div className='h-full w-full bg-[#242424]'>
        <section className="bg-black text-white py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Né pour impacter –{" "}
            <span className="font-semibold">Le GALA des entrepreneur</span>
          </h1>
          <p className="text-lime-400 text-red-500 text-sm font-medium mb-8">
            Date | 28 juin 2025
          </p>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            "Né pour impacter", ce n'est pas juste un podcast. Ce n'est pas juste un événement.
            C'est une réponse. Une vision. Une nécessite.
          </p>
          <p className="max-w-3xl mx-auto text-lg mb-12">
            À l'heure où tout va vite, où les distractions sont partout et où le système nous formate
            à survivre au lieu de vivre... il est urgent de revenir à l'essentiel : notre pouvoir d'agir,
            de créer, d'élever.
          </p>
          <div className="inline-block bg-yellow-300 text-black font-bold text-lg px-6 py-4 rounded-md">
            {remainingTickets} Billet{remainingTickets > 1 ? 's' : ''} disponible{remainingTickets > 1 ? 's' : ''}
            <br />
          </div>
          
          <div className='mt-[100px] flex justify-center'>
            <img src={photo_flo} alt="Logo" className='rounded-[20px] w-[510px] mx-auto' />
          </div>

          <br/>
          <br/>
          <br/>

          <div className="mt-10">
            <video
              controls
              poster={photoGroupe}
              className="rounded-[20px] w-[910px] h-[500px] mx-auto object-contain object-center"
            >
              <source src={vidéo} type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mt-[50px]">
            <p className="text-lg md:text-xl">
              <strong className="font-semibold">Né pour impacter – “Lève-toi et Bâtis”</strong>, <br/>

                POURQUOI LE 28 JUIN COMPTE ?

                  L’événement du 28 juin à Lyon est une étape clé de ce mouvement.
                  Une occasion de rassembler les bâtisseurs, les visionnaires, les éveillés.
                  Ceux qui ne veulent plus juste consommer du contenu, mais devenir le contenu.

            </p>
            
            <br/>
            <br/>
            <br/>
            
            <div className="text-left max-w-xl mx-auto">
              <p className="text-lg font-normal mb-3">Nous mettons l’accent sur 5 piliers essentiels :</p>
              <ul className="list-disc list-inside space-y-2 text-white text-lg">
                <li><strong>👁 Vision</strong></li>
                <li><strong>💰 Éducation financière</strong></li>
                <li><strong>🔑 Entrepreneuriat</strong></li>
                <li><strong>🧠 Développement personnel</strong></li>
                <li><strong>📚 Gestion & transmission</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section className='bg-black text-white py-16 px-4 text-center'>
          <ContactForm onSubmitSuccess={handleFormSubmit} />
        </section>
      </div>
    </>
  )
}

export default Home