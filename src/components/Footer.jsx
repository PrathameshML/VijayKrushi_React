import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';
import { useLang } from '../context/LangContext';
import './Footer.css';

export default function Footer() {
    const { t } = useLang();
    const year = new Date().getFullYear();

    return (
        <footer className="vka-footer">
            <div className="footer-glow" />
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand-col">
                        <img src="/images/logo.png" alt="VKA" className="footer-logo" />
                        <span className="footer-brand-name">Vijay Krushi Avajare</span>
                        <span className="footer-brand-desc">
                            Agricultural Equipment Dealer<br />{t('since_1996')}
                        </span>
                        <div className="footer-social mt-4">
                            <a href="https://www.instagram.com/vijay_krushi_avajare_?igsh=MXFyZzh1YTdxNml0bA==" target="_blank" rel="noopener noreferrer" className="social-link insta" title="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://youtube.com/@vijaykrushiavajare2226?si=ZKjg1nt3Etqs5voM" target="_blank" rel="noopener noreferrer" className="social-link yt" title="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>{t('quick_links')}</h4>
                        <ul>
                            <li><Link to="/">{t('home')}</Link></li>
                            <li><Link to="/products">{t('nav_products')}</Link></li>
                            <li><Link to="/about">{t('nav_about')}</Link></li>
                            <li><Link to="/contact">{t('nav_contact')}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>{t('nav_products')}</h4>
                        <ul>
                            <li><Link to="/products">{t('power_weeders')}</Link></li>
                            <li><Link to="/products">{t('htp_sprayers')}</Link></li>
                            <li><Link to="/products">{t('seeders')}</Link></li>
                            <li><Link to="/products">{t('garden_tools')}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>{t('nav_contact')}</h4>
                        <p>Takali, Miraj, Sangli<br />Maharashtra - 416 111</p>
                        <p>Phone: <a href="tel:+912333214210">02333 214210</a></p>
                        <p>Email: <a href="mailto:vkaavajare@gmail.com">vkaavajare@gmail.com</a></p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {year} Vijay Krushi Avajare. {t('all_rights')}</p>
                </div>
            </div>
        </footer>
    );
}
