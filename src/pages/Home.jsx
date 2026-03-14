import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, ArrowRight, Check, Users, Award, ShieldCheck, Instagram, Youtube } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

export default function Home() {
    const { t } = useLang();
    const featured = products.slice(0, 6);

    return (
        <div className="page-enter">
            {/* ===== Desktop Hero (Strictly Unchanged) ===== */}
            <section className="hero-video-banner d-desktop-only">
                <video autoPlay muted loop playsInline className="hero-video">
                    <source src="/new_resource/vkamp4.mp4" type="video/mp4" />
                </video>
                <div className="video-dim" />
            </section>

            {/* ===== Mobile Hero (New) ===== */}
            <section className="mobile-hero-banner d-mobile-only">
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">✦ {t('about_vka')}</span>
                        <h1 className="mobile-hero-title">Vijay Krushi Avajare</h1>
                        <p className="mobile-hero-subtitle">Dealer in Agricultural Equipment - Power Weeders, HTP Sprayers, Seeders & Tools</p>
                        <div className="mobile-hero-actions">
                            <a href="https://wa.me/917447484725" target="_blank" rel="noopener noreferrer" className="btn-emerald">
                                {t('chat_whatsapp')}
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== Products Showcase ===== */}
            <section className="products-home">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <span className="section-label">✦ {t('nav_products')}</span>
                            <h2 className="section-title">{t('our_products')}</h2>
                            <p className="section-subtitle mx-auto">{t('browse_products')}</p>
                            <div className="gold-line-center" />
                        </div>
                    </ScrollReveal>

                    <div className="products-home-grid">
                        {featured.map((p, i) => (
                            <ScrollReveal key={p.slug} className="reveal" delay={i * 80}>
                                <ProductCard product={p} />
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal>
                        <div className="view-all-center">
                            <Link to="/products" className="btn-emerald btn-lg">
                                {t('view_all_products')} <ArrowRight size={18} />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== Advantages Section ===== */}
            <section className="advantages-home section-padding section-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <span className="section-label">✦ {t('advantages_subtitle')}</span>
                            <h2 className="section-title">{t('advantages_title')}</h2>
                            <div className="gold-line-center" />
                        </div>
                    </ScrollReveal>

                    <div className="advantages-grid">
                        {[
                            { img: '/images/advantages/made_in_india.png', icon: <MapPin size={20} />, label: t('adv_made_in_india') },
                            { img: '/images/advantages/pan_india.png', icon: <ArrowRight size={20} />, label: t('adv_india_dist') },
                            { img: '/images/advantages/pricing.png', icon: <Check size={20} />, label: t('adv_pricing') },
                            { img: '/images/advantages/support.png', icon: <Phone size={20} />, label: t('adv_support') },
                            { img: '/images/advantages/subsidy.png', icon: <Check size={20} />, label: t('adv_subsidy') },
                            { img: '/images/advantages/spares.png', icon: <Check size={20} />, label: t('adv_spares') },
                        ].map((adv, idx) => (
                            <ScrollReveal key={idx} delay={idx * 100}>
                                <div className="adv-card">
                                    <div className="adv-img-wrapper">
                                        <img src={adv.img} alt={adv.label} loading="lazy" />
                                        <div className="adv-icon-badge">{adv.icon}</div>
                                    </div>
                                    <h4 className="adv-label">{adv.label}</h4>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== About ===== */}
            <section className="about-home">
                <div className="about-home-bg" />
                <div className="container">
                    <div className="row g-5 align-items-start">
                        <div className="col-lg-7">
                            <ScrollReveal className="reveal-left">
                                <span className="section-label">✦ {t('nav_about')}</span>
                                <div className="about-col-text">
                                    <h2>{t('about_vka')}</h2>
                                    <div className="gold-line" />
                                    <p>{t('about_text_1')}</p>
                                    <p>{t('about_text_2')}</p>
                                    
                                    <div className="about-values-grid mt-4 mb-4">
                                        <div className="value-item">
                                            <div className="value-icon"><Users size={20} /></div>
                                            <div className="value-txt">
                                                <h4>{t('farmer_first')}</h4>
                                                <p>{t('farmer_first_desc')}</p>
                                            </div>
                                        </div>
                                        <div className="value-item">
                                            <div className="value-icon"><Award size={20} /></div>
                                            <div className="value-txt">
                                                <h4>{t('quality_excellence')}</h4>
                                                <p>{t('quality_excellence_desc')}</p>
                                            </div>
                                        </div>
                                        <div className="value-item">
                                            <div className="value-icon"><ShieldCheck size={20} /></div>
                                            <div className="value-txt">
                                                <h4>{t('trust_integrity')}</h4>
                                                <p>{t('trust_integrity_desc')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/about" className="btn-outline-emerald mt-2">
                                        {t('learn_more')} <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="col-lg-5">
                            <ScrollReveal className="reveal-right" delay={100}>
                                <div className="about-store-img">
                                    <img src="/images/store/store_inside.jpg" alt="Inside Vijay Krushi Avajare" className="store-photo" />
                                </div>
                            </ScrollReveal>
                            <ScrollReveal className="reveal-right" delay={200}>
                                <div className="services-mini mt-4">
                                    <h3>{t('our_services')}</h3>
                                    {[t('service_sales'), t('service_repair'), t('service_parts'), t('service_consult'), t('service_demo')].map(s => (
                                        <div className="service-row" key={s}>
                                            <span className="service-check"><Check size={13} /></span>
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Location ===== */}
            <section className="location-home">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <span className="section-label">✦ {t('label_address')}</span>
                            <h2 className="section-title">{t('visit_store')}</h2>
                            <div className="gold-line-center" />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="loc-card">
                            <div className="row g-0">
                                 <div className="col-lg-4">
                                    <div className="loc-img-gallery">
                                        <div className="loc-store-img">
                                            <img src="/images/store/store_front.jpg" alt="Vijay Krushi Avajare Store Front" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="loc-info">
                                        <h2>{t('visit_store')}</h2>
                                        <div className="loc-detail">
                                            <div className="loc-label"><MapPin size={14} /> {t('label_address')}</div>
                                            <p>Pate No. 7191, Bapurao Patil Galli<br />
                                                Sonali Naka, Takali Road<br />
                                                Takali - 416 111, Ta. Miraj<br />
                                                Dist. Sangli, Maharashtra</p>
                                        </div>
                                        <div className="loc-detail">
                                            <div className="loc-label"><Phone size={14} /> {t('nav_contact')}</div>
                                            <p>Phone: <a href="tel:+917447484725">+91 744 748 4725</a><br />
                                                Email: <a href="mailto:vkaavajare@gmail.com">vkaavajare@gmail.com</a></p>
                                        </div>
                                        <div className="loc-detail">
                                            <div className="loc-label"><Clock size={14} /> {t('label_hours')}</div>
                                            <p>{t('business_hours')}<br />{t('sunday_closed')}</p>
                                        </div>
                                        <div className="loc-btns">
                                            <a href="https://wa.me/917447484725" target="_blank" rel="noopener noreferrer" className="btn-emerald">
                                                {t('chat_whatsapp')}
                                            </a>
                                            <Link to="/contact" className="btn-outline-emerald">
                                                {t('get_directions')} <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="loc-map">
                                        <iframe
                                            title="Location"
                                            src="https://www.google.com/maps?q=Vijay+Krushi+Avajare+Takali+Miraj+Sangli&output=embed"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
