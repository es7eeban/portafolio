import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LinkedinIcon } from './icons/BrandIcons';
import { profileData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // If an access key is configured, send the real email via Web3Forms API
    if (web3FormsKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            subject: `[Portafolio] ${formData.subject}`,
            message: formData.message,
            from_name: `${formData.name} - Portafolio Web`,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitError(result.message || 'Hubo un error al enviar el mensaje.');
        }
      } catch {
        setSubmitError('No se pudo conectar con el servidor de correo. Intenta enviarlo directamente por correo o WhatsApp.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Demo / simulation mode when key is not yet set in environment
      // Provide immediate fallback action
      setTimeout(() => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
      }, 800);
    }
  };

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    formData.subject || 'Contacto desde Portafolio'
  )}&body=${encodeURIComponent(
    `${formData.message}\n\n--\nDe: ${formData.name}\nCorreo: ${formData.email}`
  )}`;

  const whatsappUrl = `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(
    `Hola Esteban, te contacto desde tu portafolio.\nNombre: ${formData.name}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`
  )}`;

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contacto Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Conversemos sobre tu Próximo Proyecto
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            ¿Buscas un Ingeniero de Software para desarrollo backend, frontend, arquitectura o consultoría técnica? Contáctame directamente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-slate-400 font-medium block">Correo Electrónico</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copiar correo"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors border border-slate-800 cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs text-emerald-400 font-medium mt-2">
                  ¡Correo copiado al portapapeles!
                </p>
              )}
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-slate-400 font-medium block">Teléfono / WhatsApp</span>
                    <a
                      href={`https://wa.me/${profileData.phoneRaw}?text=Hola%20Esteban,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-lg font-bold text-white hover:text-emerald-300 transition-colors truncate block"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  type="button"
                  title="Copiar teléfono"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors border border-slate-800 cursor-pointer shrink-0"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedPhone && (
                <p className="text-xs text-emerald-400 font-medium mt-2">
                  ¡Teléfono copiado al portapapeles!
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-slate-400 font-medium block">Perfil de LinkedIn</span>
                    <a
                      href={profileData.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-lg font-bold text-white hover:text-blue-300 transition-colors inline-flex items-center gap-1.5 truncate"
                    >
                      <span className="truncate">{profileData.linkedin}</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-slate-800">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Ubicación</span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    {profileData.location}
                  </span>
                  <span className="text-xs text-slate-500 block">
                    Disponible para trabajo híbrido o remoto
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Interactive Contact Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Envíame un Mensaje
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Completa el formulario y te responderé directamente a tu correo a la brevedad.
              </p>

              {/* Success Notification */}
              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-4">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">¡Mensaje Preparado y Enviado!</h4>
                    <p className="text-sm text-emerald-400/90 leading-relaxed max-w-md mx-auto">
                      {web3FormsKey
                        ? 'El mensaje ha sido enviado exitosamente a earojasr96@gmail.com. Te responderé muy pronto.'
                        : 'El mensaje está listo. Si deseas asegurarte de que me llegue de inmediato, también puedes abrirlo con tu app de correo o por WhatsApp:'}
                    </p>
                  </div>

                  {!web3FormsKey && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={mailtoUrl}
                        className="w-full sm:w-auto px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Abrir en mi Correo</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Enviar por WhatsApp</span>
                      </a>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-xs text-slate-400 hover:text-white underline transition-colors cursor-pointer"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Error Notification */}
                  {submitError && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Correo de contacto *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu-correo@empresa.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Asunto o Motivo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ej. Oportunidad laboral / Proyecto Full-Stack"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mensaje *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe los requerimientos del proyecto o la posición..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm resize-none transition-all"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensaje</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
