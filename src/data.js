// All clinic details live here — edit this file to update the website.

export const clinic = {
  name: 'Srilakshmi Dental Clinic',
  shortName: 'Srilakshmi',
  doctor: 'Dr. SomShekhar',
  phoneDisplay: '094485 80245',
  phoneTel: '+919448580245',
  whatsapp: '919448580245',
  addressLines: [
    'Ground floor, Park Rd, opp. to Sanskrutha Bhavana',
    'Rangoli Halla, Hassan, Karnataka 573201',
  ],
  mapQuery:
    'Srilakshmi Dental Clinic, Park Rd, opp. Sanskrutha Bhavana, Rangoli Halla, Hassan, Karnataka 573201',
  // TODO: confirm the real clinic timings before going live.
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 1:30 PM' },
    { day: 'Evening', time: '5:00 PM – 8:30 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],
}

export const telLink = `tel:${clinic.phoneTel}`
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`
export const whatsappLink = (text = '') =>
  `https://wa.me/${clinic.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Dentist', href: '#dentist' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'General Dentistry',
  'Teeth Whitening',
  'Dental Implants',
  'Root Canal Treatment',
  'Braces & Aligners',
  'Dental Sealants',
  'Smile Makeover',
]

// `image` files are optional: put photos in /public/images with these names.
export const services = [
  { title: 'General Dentistry', image: 'service-general.jpg', icon: 'Stethoscope', text: 'Check-ups, cleaning, fillings and everyday care that keep your teeth and gums healthy.' },
  { title: 'Dental Implants', image: 'service-implant.jpg', icon: 'ShieldCheck', text: 'Permanent, natural-looking replacements for missing teeth that restore your bite.' },
  { title: 'Teeth Whitening', image: 'service-whitening.jpg', icon: 'Sparkles', text: 'Safe, professional whitening that lifts stains and brightens your smile.' },
  { title: 'Root Canal Treatment', image: 'service-rootcanal.jpg', icon: 'Activity', text: 'Gentle, modern root canal therapy that relieves pain and saves the natural tooth.' },
  { title: 'Braces & Aligners', image: 'service-ortho.jpg', icon: 'Smile', text: 'Straighten crooked or crowded teeth with metal, ceramic braces or clear aligners.' },
  { title: 'Tooth Extraction', image: 'service-extraction.jpg', icon: 'Syringe', text: 'Comfortable extractions, including wisdom teeth, with careful after-care.' },
  { title: 'Crowns & Bridges', image: 'service-crowns.jpg', icon: 'Award', text: 'Strong, tooth-coloured crowns and bridges to repair broken or weak teeth.' },
  { title: 'Smile Makeover', image: 'service-makeover.jpg', icon: 'HeartPulse', text: 'Veneers, contouring and bonding planned together for the smile you want.' },
  { title: 'Kids Dentistry', image: 'service-kids.jpg', icon: 'Baby', text: 'Friendly, patient care for children — from first visits to sealants and fluoride.' },
]

export const journeys = [
  { title: 'A Brighter Smile', tags: ['Teeth Whitening', 'Cleaning'], image: 'journey-whitening.jpg', text: 'Scaling and polishing followed by professional whitening for a noticeably brighter smile.' },
  { title: 'Straighter Teeth, More Confidence', tags: ['Braces', 'Aligners'], image: 'journey-braces.jpg', text: 'A step-by-step orthodontic plan with regular reviews until the teeth are aligned.' },
]

export const steps = [
  { title: 'Book Your Appointment', icon: 'CalendarCheck', text: 'Call, WhatsApp or fill the form below to pick a convenient time.' },
  { title: 'Consultation & Examination', icon: 'Stethoscope', text: 'A thorough check-up, with X-rays where needed, to understand your concerns.' },
  { title: 'Personalised Treatment Plan', icon: 'ClipboardList', text: 'Clear options, timelines and costs explained before anything begins.' },
  { title: 'Ongoing Care & Follow-Up', icon: 'HeartPulse', text: 'Follow-up visits and tips to keep your results healthy for years.' },
]

// TODO: replace these with real patient reviews (e.g. from Google) before going live.
export const testimonials = [
  { name: 'Patient name', role: 'Root Canal Treatment', rating: 5, title: 'Painless and Professional', text: 'Replace this text with a real review from one of your patients. Short, specific reviews work best.' },
  { name: 'Patient name', role: 'Teeth Cleaning', rating: 5, title: 'Highly Recommended', text: 'Replace this text with a real review from one of your patients. Mention the treatment they received.' },
  { name: 'Patient name', role: 'Braces', rating: 5, title: 'Friendly and Caring', text: 'Replace this text with a real review from one of your patients, with their permission.' },
]

export const faqs = [
  { q: 'What services do you offer?', a: 'We offer complete dental care: check-ups and cleaning, fillings, root canal treatment, extractions, crowns and bridges, dental implants, braces and aligners, teeth whitening, smile makeovers and children’s dentistry.' },
  { q: 'Do I need to make an appointment?', a: `Appointments are recommended so we can keep waiting time short. Call ${clinic.phoneDisplay} or send a WhatsApp message and we will confirm a time.` },
  { q: 'Do you accept walk-in patients?', a: 'Yes, walk-ins are welcome during clinic hours. Patients with appointments are seen first, so calling ahead is best.' },
  { q: 'What should I do in a dental emergency?', a: `For severe tooth pain, swelling, a broken tooth or injury, call us immediately on ${clinic.phoneDisplay}. We will do our best to see you the same day.` },
  { q: 'Is root canal treatment painful?', a: 'Modern root canal treatment is done under local anaesthesia and feels similar to getting a filling. It actually relieves the pain caused by the infected tooth.' },
  { q: 'How often should I visit the dentist?', a: 'A check-up and cleaning every six months is recommended for most people. Some gum or orthodontic treatments need more frequent visits.' },
]

export const tips = [
  { title: 'Brushing Right: The 2-Minute Rule', tag: 'Daily Care', image: 'tip-brushing.jpg', text: 'Brush twice a day for two minutes with fluoride toothpaste, using gentle circles along the gum line.' },
  { title: 'Why Sensitive Teeth Hurt', tag: 'Sensitivity', image: 'tip-sensitivity.jpg', text: 'Worn enamel and receding gums expose sensitive layers. A desensitising paste and a check-up can help.' },
  { title: 'Your Child’s First Dental Visit', tag: 'Kids', image: 'tip-kids.jpg', text: 'Bring children in by their first birthday so the first visit is a friendly one, not an emergency.' },
]

export const doctorFocus = [
  'Root canal treatment',
  'Dental implants',
  'Crowns, bridges and dentures',
  'Teeth whitening and smile design',
  'Braces and aligners',
  'Children’s dentistry',
]
