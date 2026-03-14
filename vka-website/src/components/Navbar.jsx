import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useLang } from '../context/LangContext';
import './Navbar.css';

export default function Navbar() {
    const { t, toggleLang } = useLang();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    const links = [
        { to: '/', label: t('home') },
        { to: '/products', label: t('nav_products') },
        { to: '/about', label: t('nav_about') },
        { to: '/contact', label: t('nav_contact') },
    ];

    return (
        <nav className={`vka-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">
                <Link to="/" className="nav-brand">
                    <img src="/images/logo.png" alt="VKA" />
                </Link>

                <div className={`nav-center ${mobileOpen ? 'open' : ''}`}>
                    {links.map(l => (
                        <Link
                            key={l.to}
                            to={l.to}
                            className={`nav-pill ${location.pathname === l.to ? 'active' : ''}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                <div className="nav-actions">
                    <a href="tel:+912333214210" className="nav-call">
                        <Phone size={15} />
                        <span className="call-text">Call</span>
                    </a>
                    <button className="nav-lang" onClick={toggleLang}>
                        {t('lang_toggle')}
                    </button>
                    <button
                        className={`nav-toggler ${mobileOpen ? 'open' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    );
}
