import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../context/LangContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const { lang, t } = useLang();
    const name = lang === 'mr' && product.name_mr ? product.name_mr : product.name;
    const img = product.images?.[0] || '/images/logo.png';
    const specs = product.specs ? Object.entries(product.specs).slice(0, 2) : [];

    return (
        <article className="p-card">
            <div className="p-card-img">
                <img src={img} alt={name} loading="lazy" />
            </div>
            <div className="p-card-body">
                <span className="vka-badge">{product.category}</span>
                <h3 className="p-card-name">{name}</h3>
                {specs.length > 0 && (
                    <div className="p-card-specs">
                        {specs.map(([k, v]) => (
                            <span className="p-card-spec" key={k}>{k}: {v}</span>
                        ))}
                    </div>
                )}
                <div className="p-card-footer">
                    <Link to={`/product/${product.slug}`} className="p-card-btn">
                        {t('view_details')} <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
