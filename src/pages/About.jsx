import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowRight, Instagram, Youtube } from 'lucide-react';
import { useLang } from '../context/LangContext';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

export default function About() {
    const { t } = useLang();

    const cats = [
        { emoji: '🚜', title: t('power_weeders'), desc: 'Diesel and petrol power weeders for efficient weed control and soil cultivation.' },
        { emoji: '💧', title: t('htp_sprayers'), desc: 'High pressure sprayers for effective pesticide and fertilizer application.' },
        { emoji: '🌱', title: t('seeders'), desc: 'Manual and mechanical seeders for precise seed placement.' },
        { emoji: '⚙️', title: 'Power Tillers & Equipment', desc: 'Heavy-duty tillers and other agricultural machinery.' },
    ];

    return (
        <div className="page-enter about-pg">
            <div className="page-hero-bar">
                <div className="container">
                    <div className="vka-breadcrumb">
                        <Link to="/">{t('home')}</Link>
                        <span className="sep">/</span>
                        <span className="current">{t('nav_about')}</span>
                    </div>
                    <h1>{t('about_title')}</h1>
                    <p className="subtitle">Your trusted partner in agricultural mechanization since 1996</p>
                </div>
            </div>

            {/* Intro */}
            <section className="about-intro-sec">
                <div className="container">
                    <div className="row g-5 align-items-start">
                        <div className="col-lg-7">
                            <ScrollReveal className="reveal-left">
                                <div className="about-txt">
                                    <span className="section-label">✦ {t('nav_about')}</span>
                                    <h2>{t('about_us')}</h2>
                                    <div className="gold-line mb-3" />
                                    <p><strong>Vijay Krushi Avajare</strong> {t('about_intro')}</p>
                                    <p><strong>{t('established')}</strong></p>
                                    <p>{t('about_details')}</p>
                                    <p>{t('about_location')}</p>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="col-lg-5">
                            <ScrollReveal className="reveal-right">
                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="stat-pill">
                                            <div className="val">{t('since_1996')}</div>
                                            <div className="lbl">{t('serving_farmers')}</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="stat-pill">
                                            <div className="val">Takali, Miraj</div>
                                            <div className="lbl">Sangli, Maharashtra</div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="cat-sec">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <span className="section-label">✦ {t('nav_products')}</span>
                            <h2 className="section-title">{t('product_categories')}</h2>
                            <div className="gold-line-center" />
                        </div>
                    </ScrollReveal>
                    <div className="row g-4">
                        {cats.map((c, i) => (
                            <div className="col-md-6 col-lg-3" key={c.title}>
                                <ScrollReveal className="reveal-scale" delay={i * 100}>
                                    <div className="cat-tile">
                                        <span className="cat-emoji">{c.emoji}</span>
                                        <h3>{c.title}</h3>
                                        <p>{c.desc}</p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="about-gallery-sec">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <span className="section-label">✦ {t('our_presence')}</span>
                            <h2 className="section-title">{t('experience_vka')}</h2>
                            <div className="gold-line-center" />
                        </div>
                    </ScrollReveal>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <ScrollReveal className="reveal-left">
                                <div className="about-gallery-item">
                                    <img src="/images/store/store_front.jpg" alt="Vijay Krushi Avajare Store Front" />
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="col-md-6">
                            <ScrollReveal className="reveal-right">
                                <div className="about-gallery-item">
                                    <img src="/images/store/store_inside.jpg" alt="Vijay Krushi Avajare Interior" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="svc-sec">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <span className="section-label">✦ {t('our_services')}</span>
                            <h2 className="section-title" style={{ color: 'white' }}>{t('our_services')}</h2>
                            <div className="gold-line-center" />
                        </div>
                    </ScrollReveal>
                    <div className="row g-4">
                        {[
                            { n: '01', h: t('sales'), p: t('sales_desc') },
                            { n: '02', h: t('service'), p: t('service_desc') },
                            { n: '03', h: t('spare_parts'), p: t('spare_parts_desc') },
                        ].map((s, i) => (
                            <div className="col-md-4" key={s.n}>
                                <ScrollReveal className="reveal" delay={i * 120}>
                                    <div className="svc-card">
                                        <span className="svc-num">{s.n}</span>
                                        <h3>{s.h}</h3>
                                        <p>{s.p}</p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Follow Journey CTA */}
            <section className="about-social-cta">
                <div className="container">
                    <ScrollReveal>
                        <div className="social-cta-card">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="cta-txt">
                                        <h2>{t('social_title')}</h2>
                                        <p>{t('follow_us')}</p>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="cta-social-btns">
                                        <a href="https://www.instagram.com/vijay_krushi_avajare_?igsh=MXFyZzh1YTdxNml0bA==" target="_blank" rel="noopener noreferrer" className="cta-social-btn insta">
                                            <Instagram size={22} />
                                            <span>Instagram</span>
                                        </a>
                                        <a href="https://youtube.com/@vijaykrushiavajare2226?si=ZKjg1nt3Etqs5voM" target="_blank" rel="noopener noreferrer" className="cta-social-btn yt">
                                            <Youtube size={22} />
                                            <span>YouTube</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Location */}
            <section className="about-loc-sec">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <span className="section-label">✦ {t('label_address')}</span>
                            <h2 className="section-title">{t('visit_store')}</h2>
                            <div className="gold-line-center" />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="about-loc-card">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="about-loc-info">
                                        <h3>{t('store_address')}</h3>
                                        <p>Pate No. 7191, Bapurao Patil Galli<br />Sonali Naka, Takali Road<br />Takali - 416 111<br />Ta. Miraj, Dist. Sangli<br />Maharashtra, India</p>

                                        <h3 className="mt-4">{t('contact_info')}</h3>
                                        <p>📞 <a href="tel:+917447484725">+91 744 748 4725</a></p>
                                        <p>✉️ <a href="mailto:vkaavajare@gmail.com">vkaavajare@gmail.com</a></p>
                                        <p>⏰ {t('business_hours')}<br />{t('sunday_closed')}</p>

                                        <div className="about-loc-btns">
                                            <a href="https://wa.me/917447484725" target="_blank" rel="noopener noreferrer" className="btn-emerald">
                                                💬 {t('chat_whatsapp')}
                                            </a>
                                            <Link to="/contact" className="btn-outline-emerald">
                                                {t('get_directions')} <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-map">
                                        <iframe title="Map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Vijay+Krushi+Avajare+Takali+Miraj+Sangli&output=embed" allowFullScreen />
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
