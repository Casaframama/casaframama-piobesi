// Lightbox Functions
function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="nf nf-md-weather_sunny"></i>' : '<i class="nf nf-md-moon_waning_crescent"></i>';
});

// Set initial mode based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="nf nf-md-weather_sunny"></i>';
} else {
  darkModeToggle.innerHTML = '<i class="nf nf-md-moon_waning_crescent"></i>';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero Carousel
const heroCarousel = document.querySelector('.hero-carousel-inner');
const heroImages = heroCarousel.querySelectorAll('.hero-image');
let heroCurrentIndex = 0;

function updateHeroCarousel() {
  heroCarousel.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
}

document.getElementById('heroNext').addEventListener('click', () => {
  heroCurrentIndex = (heroCurrentIndex + 1) % heroImages.length;
  updateHeroCarousel();
});

document.getElementById('heroPrev').addEventListener('click', () => {
  heroCurrentIndex = (heroCurrentIndex - 1 + heroImages.length) % heroImages.length;
  updateHeroCarousel();
});

// Auto-scroll every 5 seconds
setInterval(() => {
  heroCurrentIndex = (heroCurrentIndex + 1) % heroImages.length;
  updateHeroCarousel();
}, 5000);

// CTA Dropdown Toggle
document.getElementById('ctaButton').addEventListener('click', function(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('ctaDropdown');
  dropdown.querySelector('.cta-dropdown-menu').classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('ctaDropdown');
  const menu = dropdown.querySelector('.cta-dropdown-menu');
  if (!dropdown.contains(e.target) && menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});

// Translations
const translations = {
  it: {
    "hero-title": "Casa Framama",
    "hero-subtitle": "Un posto dove puoi sentirti a casa",
    "book-btn": "Prenota la tua vacanza",
    "book-airbnb": "Prenota su Airbnb",
    "book-booking": "Prenota su Booking",
    "services-title": "I Nostri Servizi",
    "service-wifi": "WiFi",
    "service-parking": "Parcheggio",
    "service-ac": "Aria Condizionata",
    "service-kitchen": "Cucina Attrezzata",
    "service-garden": "Giardino",
    "gallery-title": "La Nostra Casa",
    "welcome-title": "Benvenuti a Casa Nostra",
    "desc1": "Benvenuti a Casa Framama, un incantevole appartamento situato nel cuore delle Langhe, a Piobesi d'Alba. Circondati dalle colline morbide del Roero, potrete immergervi in una delle zone più affascinanti del Piemonte.",
    "desc2": "A soli 5 km da Alba, città famosa in tutto il mondo per i suoi tartufi e il Barolo, la nostra struttura rappresenta la base perfetta per esplorare castelli, vigneti e borghi medievali, concedendovi al contempo la serenità di un soggiorno rurale.",
    "desc3": "La nostra casa può ospitare fino a 6 ospiti e dispone di:",
    "desc4": '<li>3 camere luminose (2 matrimoniali con aria condizionata + 1 doppia)</li><li>2 bagni moderni</li><li>Cucina completamente attrezzata</li><li>Spazioso soggiorno con zona relax e aria condizionata</li>',
    "desc5": "L'appartamento si trova al secondo piano con ingresso indipendente. Potrete raggiungerlo comodamente attraverso una caratteristica scala esterna e parcheggiare la vostra auto al coperto nel nostro cortile privato, accessibile con telecomando.",
    "location-title": "Dove Siamo",
    "location-city": "Piobesi d'Alba",
    "location-region": "Piemonte, Langhe e Roero",
    "location-near": "A 5 km da Alba, città del tartufo",
    "contacts-title": "Contatti",
    "footer-brand": "Casa Framama - Vacanze nelle Langhe",
    "footer-cf": "Codice Fiscale: CRCLRD81L18A124A",
    "footer-cin": "CIN: IT004168C2YTBUH84F"
  },
  en: {
    "hero-title": "Casa Framama",
    "hero-subtitle": "A place where you can feel at home",
    "book-btn": "Book your vacation",
    "book-airbnb": "Book on Airbnb",
    "book-booking": "Book on Booking",
    "services-title": "Our Services",
    "service-wifi": "WiFi",
    "service-parking": "Parking",
    "service-ac": "Air Conditioning",
    "service-kitchen": "Equipped Kitchen",
    "service-garden": "Garden",
    "gallery-title": "Our House",
    "welcome-title": "Welcome to Our Home",
    "desc1": "Welcome to Casa Framama, a charming apartment nestled in the heart of Langhe, in Piobesi d'Alba. Surrounded by the gentle hills of Roero, you will immerse yourself in one of the most fascinating areas of Piedmont.",
    "desc2": "Just 5 km from Alba, a city famous worldwide for its truffles and Barolo wine, our property is the perfect base to explore castles, vineyards and medieval villages, while enjoying the serenity of a rural stay.",
    "desc3": "Our house can accommodate up to 6 guests and features:",
    "desc4": '<li>3 bright bedrooms (2 double rooms with air conditioning + 1 twin)</li><li>2 modern bathrooms</li><li>Fully equipped kitchen</li><li>Spacious living room with relaxation area and air conditioning</li>',
    "desc5": "The apartment is on the second floor with independent entrance. You can easily reach it via a characteristic external staircase and park your car undercover in our private courtyard, accessible with remote control.",
    "location-title": "Where We Are",
    "location-city": "Piobesi d'Alba",
    "location-region": "Piedmont, Langhe and Roero",
    "location-near": "5 km from Alba, city of truffles",
    "contacts-title": "Contacts",
    "footer-brand": "Casa Framama - Vacation in Langhe",
    "footer-cf": "Tax Code: CRCLRD81L18A124A",
    "footer-cin": "CIN: IT004168C2YTBUH84F"
  },
  de: {
    "hero-title": "Casa Framama",
    "hero-subtitle": "Ein Ort, an dem Sie sich wie zu Hause fühlen können",
    "book-btn": "Buchen Sie Ihren Urlaub",
    "book-airbnb": "Bei Airbnb buchen",
    "book-booking": "Bei Booking buchen",
    "services-title": "Unsere Dienstleistungen",
    "service-wifi": "WLAN",
    "service-parking": "Parkplatz",
    "service-ac": "Klimaanlage",
    "service-kitchen": "Ausgestattete Küche",
    "service-garden": "Garten",
    "gallery-title": "Unser Haus",
    "welcome-title": "Willkommen in unserem Zuhause",
    "desc1": "Willkommen bei Casa Framama, einer bezaubernden Wohnung im Herzen der Langhe in Piobesi d'Alba. Umgeben von den sanften Hügeln des Roero tauchen Sie in eine der faszinierendsten Regionen Piemonts ein.",
    "desc2": "Nur 5 km von Alba entfernt, einer weltberühmten Stadt für ihre Trüffel und Barolo-Wein, ist unsere Unterkunft die perfekte Basis, um Burgen, Weinberge und mittelalterliche Dörfer zu erkunden und gleichzeitig die Ruhe eines ländlichen Aufenthalts zu genießen.",
    "desc3": "Unser Haus bietet Platz für bis zu 6 Gäste und verfügt über:",
    "desc4": '<li>3 helle Schlafzimmer (2 Doppelzimmer mit Klimaanlage + 1 Zweibettzimmer)</li><li>2 moderne Bäder</li><li>Voll ausgestattete Küche</li><li>Geräumiges Wohnzimmer mit Entspannungsbereich und Klimaanlage</li>',
    "desc5": "Die Wohnung befindet sich im zweiten Stock mit eigenem Eingang. Sie erreichen sie bequem über eine charakteristische Außentreppe und können Ihr Auto in unserem privaten Hof überdacht parken, der mit Fernbedienung zugänglich ist.",
    "location-title": "Wo Wir Sind",
    "location-city": "Piobesi d'Alba",
    "location-region": "Piemont, Langhe und Roero",
    "location-near": "5 km von Alba, Stadt der Trüffel",
    "contacts-title": "Kontakte",
    "footer-brand": "Casa Framama - Urlaub in den Langhe",
    "footer-cf": "Steuernummer: CRCLRD81L18A124A",
    "footer-cin": "CIN: IT004168C2YTBUH84F"
  },
  fr: {
    "hero-title": "Casa Framama",
    "hero-subtitle": "Un endroit où vous pouvez vous sentir chez vous",
    "book-btn": "Réservez vos vacances",
    "book-airbnb": "Réserver sur Airbnb",
    "book-booking": "Réserver sur Booking",
    "services-title": "Nos Services",
    "service-wifi": "WiFi",
    "service-parking": "Parking",
    "service-ac": "Climatisation",
    "service-kitchen": "Cuisine Équipée",
    "service-garden": "Jardin",
    "gallery-title": "Notre Maison",
    "welcome-title": "Bienvenue Chez Nous",
    "desc1": "Bienvenue à Casa Framama, un appartement enchanteur situé au cœur des Langhe, à Piobesi d'Alba. Entouré des douces collines du Roero, vous plongerez dans l'une des régions les plus fascinantes du Piémont.",
    "desc2": "À seulement 5 km d'Alba, ville incontournée dans le monde pour ses truffes et son Barolo, notre structure représente la base parfaite pour explorer châteaux, vignobles et villages médiévaux, tout en profitant de la sérénité d'un séjour rural.",
    "desc3": "Notre maison peut accueillir jusqu'à 6 hôtes et dispose de :",
    "desc4": '<li>3 chambres lumineuses (2 doubles avec climatisation + 1 twin)</li><li>2 salles de bains modernes</li><li>Cuisine entièrement équipée</li><li>Spacieux salon avec zone de détente et climatisation</li>',
    "desc5": "L'appartement est au deuxième étage avec entrée indépendante. Vous pouvez y accéder facilement par un escalier externe caractéristique et stationner votre véhicule à l'abri dans notre cour privée, accessible par télécommande.",
    "location-title": "Où Nous Trouver",
    "location-city": "Piobesi d'Alba",
    "location-region": "Piémont, Langhe et Roero",
    "location-near": "À 5 km d'Alba, ville des truffes",
    "contacts-title": "Contacts",
    "footer-brand": "Casa Framama - Vacances dans les Langhe",
    "footer-cf": "Code Fiscal : CRCLRD81L18A124A",
    "footer-cin": "CIN : IT004168C2YTBUH84F"
  }
};

let currentLang = 'it';

function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'desc4' || key === 'desc4') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  // Update button text
  const bookBtn = document.getElementById('ctaButton');
  const icon = bookBtn.querySelector('i');
  const btnText = translations[lang]['book-btn'];
  bookBtn.innerHTML = btnText + ' <i class="nf nf-md-chevron_down"></i>';
  
  // Update language toggle display
  document.getElementById('langToggle').querySelector('span').textContent = lang.toUpperCase();
  
  currentLang = lang;
  
  // Save preference
  localStorage.setItem('lang', lang);
}

// Language toggle
const languages = ['it', 'en', 'de', 'fr'];
document.getElementById('langToggle').addEventListener('click', () => {
  const currentIndex = languages.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % languages.length;
  translatePage(languages[nextIndex]);
});

// Load saved language
if (localStorage.getItem('lang')) {
  translatePage(localStorage.getItem('lang'));
}
