import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Youtube } from 'lucide-react';
import { useLang } from '../context/LangContext';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

export default function Contact() {
    const { t } = useLang();

    return (
        <div className="page-enter contact-pg">
            <div className="page-hero-bar">
                <div className="container">
                    <div className="vka-breadcrumb">
                        <Link to="/">{t('home')}</Link>
                        <span className="sep">/</span>
                        <span className="current">{t('nav_contact')}</span>
                    </div>
                    <h1>{t('contact_title')}</h1>
                </div>
            </div>

            <div className="container contact-sec">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <ScrollReveal className="reveal-left">
                            <div className="contact-card">
                                <h3>{t('contact_reach')}</h3>
                                <ul className="ct-list">
                                    <li>
                                        <div className="ct-icon"><Phone size={18} /></div>
                                        <div><strong>{t('label_phone')}</strong><a href="tel:+912333214210">02333 214210</a></div>
                                    </li>
                                    <li>
                                        <div className="ct-icon"><MessageCircle size={18} /></div>
                                        <div><strong>WhatsApp</strong><a href="https://wa.me/912333214210" target="_blank" rel="noopener noreferrer">02333 214210</a></div>
                                    </li>
                                    <li>
                                        <div className="ct-icon"><Mail size={18} /></div>
                                        <div><strong>{t('label_email')}</strong><a href="mailto:vkaavajare@gmail.com">vkaavajare@gmail.com</a></div>
                                    </li>
                                    <li>
                                        <div className="ct-icon"><MapPin size={18} /></div>
                                        <div><strong>{t('label_address')}</strong>{t('address_full')}</div>
                                    </li>
                                    <li>
                                        <div className="ct-icon"><Clock size={18} /></div>
                                        <div><strong>{t('label_hours')}</strong>{t('business_hours')}</div>
                                    </li>
                                </ul>

                                <div className="mt-5">
                                    <a href="https://wa.me/912333214210" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-special">
                                        <MessageCircle size={22} fill="white" />
                                        <span>{t('chat_whatsapp_special') || 'Chat on WhatsApp'}</span>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="col-lg-6">
                        <ScrollReveal className="reveal-right">
                            <div className="contact-card">
                                <h3>{t('enquiry_form')}</h3>
                                <form action="https://formspree.io/f/your-id" method="POST" className="ct-form">
                                    <input type="text" name="name" className="ct-input" placeholder={t('your_name')} required />
                                    <input type="tel" name="phone" className="ct-input" placeholder={t('phone')} required />
                                    <input type="email" name="email" className="ct-input" placeholder={t('email')} />
                                    <textarea name="message" className="ct-textarea" rows="4" placeholder={t('your_message')} />
                                    <button type="submit" className="ct-submit">{t('send')}</button>
                                </form>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal className="reveal-right" delay={200}>
                            <div className="contact-card mt-4">
                                <h3>{t('social_title')}</h3>
                                <p className="mb-4">{t('follow_us')}</p>
                                <div className="contact-social-grid">
                                    <a href="https://www.instagram.com/vijay_krushi_avajare_?igsh=MXFyZzh1YTdxNml0bA==" target="_blank" rel="noopener noreferrer" className="ct-social-item insta">
                                        <div className="ct-social-icon"><Instagram size={24} /></div>
                                        <span>Instagram</span>
                                    </a>
                                    <a href="https://youtube.com/@vijaykrushiavajare2226?si=ZKjg1nt3Etqs5voM" target="_blank" rel="noopener noreferrer" className="ct-social-item yt">
                                        <div className="ct-social-icon"><Youtube size={24} /></div>
                                        <span>YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
}
