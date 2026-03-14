import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowLeft, FileText, Download } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { getProductBySlug, products } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
    const { slug } = useParams();
    const { lang, t } = useLang();
    const product = getProductBySlug(slug) || products[0];

    if (!product) {
        return (
            <div className="container text-center py-5">
                <h1>Product not found</h1>
                <Link to="/products" className="btn-emerald mt-3">{t('back_to_products')}</Link>
            </div>
        );
    }

    const name = lang === 'mr' && product.name_mr ? product.name_mr : product.name;
    const img = product.images?.[0] || '/images/logo.png';
    const specs = product.specs || {};

    return (
        <div className="page-enter">
            <div className="page-hero-bar" style={{ paddingTop: 'calc(var(--nav-h) + 32px)' }}>
                <div className="container">
                    <div className="vka-breadcrumb">
                        <Link to="/">{t('home')}</Link>
                        <span className="sep">/</span>
                        <Link to="/products">{t('nav_products')}</Link>
                        <span className="sep">/</span>
                        <span className="current">{name}</span>
                    </div>
                    <h1>{name}</h1>
                </div>
            </div>

            <div className="container pd-section">
                <div className="pd-card">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="pd-img-wrap">
                                <img src={img} alt={name} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pd-info">
                                <span className="vka-badge mb-3">{product.category}</span>
                                <h1>{name}</h1>

                                {Object.keys(specs).length > 0 && (
                                    <div className="pd-specs">
                                        <h3>{t('specs')}</h3>
                                        <ul className="pd-specs-list">
                                            {Object.entries(specs).map(([k, v]) => (
                                                <li key={k}><strong>{k}</strong><span>{v}</span></li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {product.resources && product.resources.length > 0 && (
                                    <div className="pd-resources mt-5">
                                        <h3>{t('resources_title')}</h3>
                                        <div className="pd-resources-list">
                                            {product.resources.map((res, i) => (
                                                <a 
                                                    key={i}
                                                    href={res.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="pd-resource-item"
                                                >
                                                    <div className="pd-res-icon">
                                                        <FileText size={20} />
                                                    </div>
                                                    <div className="pd-res-info">
                                                        <strong>{lang === 'mr' ? res.title_mr : res.title}</strong>
                                                        <span>{t('download_pdf')}</span>
                                                    </div>
                                                    <Download size={18} className="ms-auto" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="pd-actions">
                                    <a
                                        href={`https://wa.me/917447484725?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-emerald"
                                    >
                                        <Phone size={16} /> {t('call_for_price')}
                                    </a>
                                    <Link to="/products" className="btn-outline-emerald">
                                        <ArrowLeft size={16} /> {t('back_to_products')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
