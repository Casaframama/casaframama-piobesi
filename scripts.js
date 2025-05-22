// DOM Elements
const carousel = document.querySelector('.carousel-inner');
const darkModeToggle = document.querySelector('.theme-toggle');
let currentIndex = 0;

// Carousel Functions
function updateCarousel() {
    if (!carousel) return;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    if (!carousel) return;
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
}

function prevSlide() {
    if (!carousel) return;
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
}

// Language Management
const translations = {
    it: {
        title: "Un posto dove puoi sentirti a casa",
        welcome: "Benvenuti a casa nostra",
        description: [
            "Casa Framama è un grazioso alloggio nella nostra casa di famiglia, che può ospitare fino a 6 persone.",
            "Situata nel Roero a Piobesi D'alba, a pochi passi da Alba, ideale per chi vuole tranquillità rimanendo vicino al cuore delle Langhe.",
            "E' composto da 3 camere da letto, di cui due matrimoniali con aria condizionata è una con due letti singoli, con 2 bagni in comune, cucina accessoriata è ampio salone con zona relax con aria condizionata.",
            "L' Ingresso è al secondo piano, accedendo da scala esterna. Alla proprietà si accede da cancello esterno, dotato di telecomando, all'interno si può usufruire del cortile dove si può parcheggiare almeno una macchina al coperto."
        ],
        contacts: "Contatti",
        location: "Dove Trovarci"
    },
    en: {
        title: "A place where you can feel at home",
        welcome: "Welcome to our home",
        description: [
            "Casa Framama is a charming accommodation in our family home, which can host up to 6 people.",
            "Located in Roero at Piobesi D'alba, a short distance from Alba, ideal for those seeking tranquility while staying close to the heart of the Langhe region.",
            "It consists of 3 bedrooms, two with double beds and air conditioning and one with two single beds, 2 shared bathrooms, a fully equipped kitchen, and a spacious living room with a relaxation area with air conditioning.",
            "The entrance is on the second floor, accessed by an external staircase. The property is accessed through an external gate with remote control, and inside you can use the courtyard where at least one car can be parked under cover."
        ],
        contacts: "Contacts",
        location: "How to Find Us"
    },
    fr: {
        title: "Un endroit où vous pouvez vous sentir chez vous",
        welcome: "Bienvenue chez nous",
        description: [
            "Casa Framama est un charmant logement dans notre maison familiale, pouvant accueillir jusqu'à 6 personnes.",
            "Située dans le Roero à Piobesi D'alba, à quelques pas d'Alba, idéale pour ceux qui recherchent la tranquillité tout en restant proche du cœur des Langhe.",
            "Elle se compose de 3 chambres, dont deux avec lits doubles et climatisation et une avec deux lits simples, 2 salles de bains communes, une cuisine équipée et un grand salon avec espace détente climatisé.",
            "L'entrée se fait au deuxième étage, accessible par un escalier extérieur. On accède à la propriété par un portail extérieur équipé d'une télécommande, et à l'intérieur vous pouvez utiliser la cour où au moins une voiture peut être garée à l'abri."
        ],
        contacts: "Contacts",
        location: "Comment Nous Trouver"
    }
};

// Language Selector Functions
function toggleLanguageMenu() {
    const menu = document.querySelector('.language-menu');
    menu.classList.toggle('show');
    
    // Close menu when clicking outside
    if (menu.classList.contains('show')) {
        document.addEventListener('click', function closeMenu(e) {
            if (!e.target.closest('.language-selector')) {
                menu.classList.remove('show');
                document.removeEventListener('click', closeMenu);
            }
        });
    }
}

function selectLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }

    // Update button text
    const button = document.querySelector('.language-menu-button .selected-lang');
    button.textContent = lang.toUpperCase();
    
    // Close menu
    document.querySelector('.language-menu').classList.remove('show');

    // Update text content
    const elements = {
        '.catchphrase': translations[lang].title,
        '.welcome-text': translations[lang].welcome,
        '.contact-header': translations[lang].contacts,
        '.position': translations[lang].location
    };

    for (const [selector, text] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) element.textContent = text;
    }

    // Update description
    const descriptionContainer = document.querySelector('.description');
    if (descriptionContainer) {
        descriptionContainer.innerHTML = translations[lang].description
            .map(text => `<p>${text}</p>`)
            .join('');
    }

    // Store preference
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.setAttribute('lang', lang);
}

// Theme Management
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (shouldBeDark) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        if (darkModeToggle) darkModeToggle.textContent = '☀️';
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.textContent = '🌙';
    }
}

function initializeLanguage() {
    const storedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = storedLang || (translations[browserLang] ? browserLang : 'it');
    selectLanguage(defaultLang);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme and language
    initializeTheme();
    initializeLanguage();

    // Set up carousel controls
    document.querySelectorAll('.carousel-control').forEach(control => {
        control.addEventListener('click', () => {
            if (control.classList.contains('next')) nextSlide();
            else if (control.classList.contains('prev')) prevSlide();
        });
    });

    // Set up theme toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
});
