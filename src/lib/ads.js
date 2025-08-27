// src/lib/ads.js
export const handleWhatsAppConversion = (waUrl) => (e) => {
  e.preventDefault();

  // dispara a conversão e só depois redireciona
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17409470512/p3b5CObelosbELDgve1A',
      event_callback: () => { window.location.href = waUrl; }
    });
    // fallback se o callback não acontecer (rede/bloqueador)
    setTimeout(() => { window.location.href = waUrl; }, 1500);
  } else {
    // se gtag não carregou, segue o fluxo do usuário
    window.location.href = waUrl;
  }
};
