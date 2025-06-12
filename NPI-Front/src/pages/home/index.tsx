import alexHitchen from '../../assets/images/photoHitchen.jpg'
import Header from '../../components/header/index'
import ContactForm from '../../features/form'
import '../../App.css'


function Home() {

  return (
    <>
      <Header />
      <div className='h-full w-full bg-[#242424]'>
        <section className="bg-black text-white py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Né pour impacter –{" "}
            <span className="font-semibold">Arrête de procrastiner</span>
          </h1>
          <p className="text-lime-400 text-red-500 text-sm font-medium mb-8">
            date | 25 juin 2025
          </p>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Après une première édition qui a rassemblé 200 visionnaires, Impulse
            revient avec encore plus de feu, de stratégie et d’opportunités !
          </p>
          <p className="max-w-3xl mx-auto text-lg mb-12">
            Rejoins 500 leaders, porteurs de projets, investisseurs et
            entrepreneurs pour une journée qui marquera un tournant dans ton
            parcours.
          </p>
          <div className="inline-block bg-yellow-300 text-black font-bold text-lg px-6 py-4 rounded-md">
              5 billet en vente
            <br />
          </div>
          
          <div className='mt-[100px] flex justify-center'>
            <img src={alexHitchen} alt="Logo" className='rounded-[20px]'/>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mt-[50px]">
            <p className="text-lg md:text-xl">
              <strong className="font-semibold">Impulse Conférence 2 – “Lève-toi et Bâtis”</strong>, 
              c’est plus qu’un événement. C’est une plateforme stratégique, prophétique et entrepreneuriale 
              pour propulser une nouvelle génération de bâtisseurs.
            </p>

            <div className="text-left max-w-xl mx-auto">
              <p className="text-lg font-normal mb-3">Nous mettons l’accent sur 3 piliers essentiels :</p>
              <ul className="list-disc list-inside space-y-2 text-white text-lg">
                <li><strong>Vision claire</strong></li>
                <li><strong>Structure solide</strong></li>
                <li><strong>Capacité à lever des fonds</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section className='bg-black text-white py-16 px-4 text-center'>
          <ContactForm />
        </section>
      </div>
    </>
  )
}

export default Home