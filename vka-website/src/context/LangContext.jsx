import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { strings } from '../data/i18n';

const LangContext = createContext();

export function LangProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        return localStorage.getItem('vka-lang') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('vka-lang', lang);
        document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';
    }, [lang]);

    const setLang = useCallback((l) => setLangState(l), []);
    const toggleLang = useCallback(() => {
        setLangState(prev => prev === 'en' ? 'mr' : 'en');
    }, []);

    const t = useCallback((key) => {
        return strings[lang]?.[key] || strings.en?.[key] || key;
    }, [lang]);

    return (
        <LangContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    const context = useContext(LangContext);
    if (!context) throw new Error('useLang must be used within LangProvider');
    return context;
}
