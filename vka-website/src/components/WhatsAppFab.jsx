import { MessageCircle } from 'lucide-react';
import './WhatsAppFab.css';

export default function WhatsAppFab() {
    return (
        <a
            href="https://wa.me/912333214210"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-fab"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle />
        </a>
    );
}
