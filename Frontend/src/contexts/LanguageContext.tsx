import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi' | 'mr';
  setLanguage: (lang: 'en' | 'hi' | 'mr') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.health': 'Health',
    'nav.education': 'Education',
    'nav.help': 'Help',
    'nav.legal': 'Legal',
    'nav.stories': 'Stories',
    'hero.title': 'Aarohi – Empowering Every Woman, Everywhere',
    'hero.subtitle': 'Rising together, supporting each other, creating a safer world for all women',
    'panic.button': 'Safe Me',
    'what.is.aarohi': 'What is Aarohi?',
    'aarohi.description': 'Aarohi means "ascending" in Sanskrit. We are a platform dedicated to empowering women through education, health awareness, legal support, and community building.',
    'health.title': 'Women\'s Health & Wellness',
    'education.title': 'Education & Opportunities',
    'help.title': 'Emergency Help & Support',
    'legal.title': 'Legal Rights & Support',
    'stories.title': 'Inspiring Stories',
    'footer.made': 'Made with ❤️ by students for Hackathon 2025'
  },
  hi: {
    'nav.home': 'होम',
    'nav.health': 'स्वास्थ्य',
    'nav.education': 'शिक्षा',
    'nav.help': 'सहायता',
    'nav.legal': 'कानूनी',
    'nav.stories': 'कहानियां',
    'hero.title': 'आरोही – हर महिला को सशक्त बनाना',
    'hero.subtitle': 'एक साथ उठना, एक दूसरे का साथ देना, सभी महिलाओं के लिए एक सुरक्षित दुनिया बनाना',
    'panic.button': 'मुझे बचाओ',
    'what.is.aarohi': 'आरोही क्या है?',
    'aarohi.description': 'आरोही का अर्थ संस्कृत में "ऊपर चढ़ना" है। हम शिक्षा, स्वास्थ्य जागरूकता, कानूनी सहायता और समुदायिक निर्माण के माध्यम से महिलाओं को सशक्त बनाने के लिए समर्पित एक मंच हैं।',
    'health.title': 'महिला स्वास्थ्य और कल्याण',
    'education.title': 'शिक्षा और अवसर',
    'help.title': 'आपातकालीन सहायता और समर्थन',
    'legal.title': 'कानूनी अधिकार और समर्थन',
    'stories.title': 'प्रेरणादायक कहानियां',
    'footer.made': 'हैकाथॉन 2025 के लिए छात्रों द्वारा ❤️ के साथ बनाया गया'
  },
  mr: {
    'nav.home': 'मुख्यपृष्ठ',
    'nav.health': 'आरोग्य',
    'nav.education': 'शिक्षण',
    'nav.help': 'मदत',
    'nav.legal': 'कायदेशीर',
    'nav.stories': 'कथा',
    'hero.title': 'आरोही – प्रत्येक महिलेला सशक्त करणे',
    'hero.subtitle': 'एकत्र उठून, एकमेकांना पाठिंबा देऊन, सर्व महिलांसाठी एक सुरक्षित जग निर्माण करणे',
    'panic.button': 'मला वाचवा',
    'what.is.aarohi': 'आरोही म्हणजे काय?',
    'aarohi.description': 'आरोही म्हणजे संस्कृतमध्ये "वर चढणे". आम्ही शिक्षण, आरोग्य जागरूकता, कायदेशीर सहाय्य आणि समुदाय निर्माणाद्वारे महिलांना सशक्त करण्यासाठी समर्पित एक व्यासपीठ आहोत.',
    'health.title': 'महिला आरोग्य आणि कल्याण',
    'education.title': 'शिक्षण आणि संधी',
    'help.title': 'आपत्कालीन मदत आणि समर्थन',
    'legal.title': 'कायदेशीर हक्क आणि समर्थन',
    'stories.title': 'प्रेरणादायक कथा',
    'footer.made': 'हॅकॅथॉन 2025 साठी विद्यार्थ्यांनी ❤️ सह बनवले'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi' | 'mr'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};