
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { enTranslations } from '../translations/en';
import { grTranslations } from '../translations/gr';

type Language = 'en' | 'gr';
type TranslationKey = keyof typeof enTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    if (language === 'en') {
      return enTranslations[key];
    } else {
      return grTranslations[key];
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
