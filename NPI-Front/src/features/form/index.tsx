import { useState } from 'react';
type ContactFormProps = {
  onSubmitSuccess?: () => void;
};

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [event, setEvent] = useState<{ date: string; hour: string; address: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://686c-2001-861-8bb2-4bb0-10fa-f632-fcb0-80ee.ngrok-free.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          gender: formData.gender,
          phone: formData.phone
        }),
      });

      if (!res.ok) throw new Error('Erreur serveur');

      const result = await res.json();
      setEvent(result.event);

      setStatus('success');
      setFormData({ firstName: '', lastName: '', gender: '', phone: '' });
      onSubmitSuccess?.();
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success' && event) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Merci pour votre participation !</h2>
        <p className="mb-2">Nous avons bien reçu votre demande</p>
        <p className="mb-1"><strong>Date :</strong> {event.date}</p>
        <p className="mb-1"><strong>Heure :</strong> {event.hour}</p>
        <p className="mb-1"><strong>Adresse :</strong> {event.address}</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            placeholder="Jean"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            placeholder="Dupont"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sexe</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
          >
            <option value="">-- Sélectionner --</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            placeholder="06 12 34 56 78"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
        </button>

        {status === 'error' && (
          <p className="text-red-600 mt-2 text-sm">Une erreur est survenue.</p>
        )}
      </form>
    </div>
  );
}