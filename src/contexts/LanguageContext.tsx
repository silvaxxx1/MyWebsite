import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { en } from '../locales/en'
import { ar } from '../locales/ar'

type Language = 'en' | 'ar'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  t: Translations
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
  isRTL: boolean
}

const translations: Record<Language, Translations> = { en, ar }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language | null
      if (saved && (saved === 'en' || saved === 'ar')) return saved

      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      if (browserLang === 'ar') return 'ar'
    }
    return 'en'
  })

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'ar' : 'en')
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  useEffect(() => {
    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }

    // Update HTML dir and lang attributes
    const html = document.documentElement
    html.dir = language === 'ar' ? 'rtl' : 'ltr'
    html.lang = language
  }, [language])

  const value: LanguageContextType = {
    language,
    t: translations[language],
    toggleLanguage,
    setLanguage,
    isRTL: language === 'ar',
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
