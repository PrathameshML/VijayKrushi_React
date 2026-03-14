import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { products, getCategories, getCategoryCounts } from '../data/products';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import './Products.css';

export default function Products() {
    const { t } = useLang();
    const [cat, setCat] = useState('');
    const [q, setQ] = useState('');
    const categories = useMemo(() => getCategories(), []);
    const counts = useMemo(() => getCategoryCounts(), []);

    const filtered = useMemo(() => {
        const s = q.toLowerCase();
        return products.filter(p => {
            const inCat = !cat || p.category === cat;
            const text = `${p.name} ${p.category} ${(p.keywords || []).join(' ')}`.toLowerCase();
            return inCat && (!s || text.includes(s));
        });
    }, [cat, q]);

    return (
        <div className="page-enter">
            <div className="page-hero-bar" style={{ paddingTop: 'calc(var(--nav-h) + 32px)' }}>
                <div className="container">
                    <div className="vka-breadcrumb">
                        <Link to="/">{t('home')}</Link>
                        <span className="sep">/</span>
                        <span className="current">{t('nav_products')}</span>
                    </div>
                    <h1>{t('our_products')}</h1>
                    <p className="subtitle">{t('browse_products')}</p>
                </div>
            </div>

            <div className="container">
                <div className="prod-page-layout">
                    <aside className="prod-sidebar">
                        <div className="sidebar-card">
                            <h3>{t('categories')}</h3>
                            <div className="cat-list">
                                <button className={`cat-btn ${!cat ? 'active' : ''}`} onClick={() => setCat('')}>
                                    {t('all_products')} <span className="cnt">({products.length})</span>
                                </button>
                                {categories.map(c => (
                                    <button key={c} className={`cat-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>
                                        {c} <span className="cnt">({counts[c] || 0})</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-card sidebar-contact">
                            <h3>{t('quick_contact')}</h3>
                            <p><strong>📞 {t('label_phone')}</strong><a href="tel:+912333214210">02333 214210</a></p>
                            <p><strong>⏰ {t('label_hours')}</strong>Mon-Sat: 9AM-7PM</p>
                            <a href="https://wa.me/912333214210" target="_blank" rel="noopener noreferrer" className="btn-emerald w-100 justify-content-center mt-2" style={{ fontSize: 13, padding: '10px 16px' }}>
                                💬 WhatsApp
                            </a>
                        </div>

                        <div className="sidebar-card sidebar-help">
                            <h3>{t('need_help')}</h3>
                            <p>{t('need_help_desc')}</p>
                            <Link to="/contact" className="btn-outline-emerald w-100 justify-content-center" style={{ fontSize: 13, padding: '10px 16px' }}>
                                {t('contact_us')} →
                            </Link>
                        </div>
                    </aside>

                    <div className="prod-area">
                        <div className="prod-toolbar">
                            <input
                                type="search"
                                className="prod-search"
                                placeholder={t('search_placeholder')}
                                value={q}
                                onChange={e => setQ(e.target.value)}
                            />
                            <span className="prod-count">
                                {t('showing_products')} {filtered.length} {t('product_s')}
                            </span>
                        </div>

                        <div className="prod-grid">
                            {filtered.length > 0 ? filtered.map((p, i) => (
                                <ScrollReveal key={p.slug} className="reveal" delay={Math.min(i * 50, 250)}>
                                    <ProductCard product={p} />
                                </ScrollReveal>
                            )) : (
                                <p className="prod-empty">{t('no_products_found')}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
