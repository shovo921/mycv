import React, { useState } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string; // e.g. '01303802470'
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '01303802470',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Normalize phone number for wa.me URL
  // If starts with 0, prepend Bangladesh country code +88
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const waNumber = cleanNumber.startsWith('0')
    ? `88${cleanNumber}`
    : cleanNumber.startsWith('88')
    ? cleanNumber
    : `880${cleanNumber}`;

  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    'Hello Shuv Chandra Das, I visited your portfolio and would like to connect!'
  )}`;

  return (
    <div
      id="whatsapp-floating-widget"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanding Tooltip Pill on Hover or Desktop */}
      <a
        id="whatsapp-floating-label"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 ${
          isHovered
            ? 'opacity-100 translate-x-0 bg-slate-900/90 text-white border-emerald-500/40'
            : 'opacity-0 translate-x-3 pointer-events-none bg-slate-900/80 text-slate-200 border-slate-700'
        }`}
      >
        <span className="text-xs font-semibold font-sans">
          WhatsApp: <span className="font-mono text-emerald-400">{phoneNumber}</span>
        </span>
        <ExternalLink className="w-3 h-3 text-emerald-400" />
      </a>

      {/* Main WhatsApp Floating Action Button */}
      <a
        id="whatsapp-floating-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${phoneNumber}`}
        title={`Chat on WhatsApp (${phoneNumber})`}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/35 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />

        {/* Inner Badge Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-white relative z-10 transition-transform group-hover:rotate-12 duration-200" />

        {/* Small Active Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
