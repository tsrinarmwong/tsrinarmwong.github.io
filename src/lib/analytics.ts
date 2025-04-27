// src/lib/analytics.ts

export const initGoogleAnalytics = () => {
    if (typeof window === 'undefined' || import.meta.env.DEV) return;
  
    // Load the GA script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-PBQS0QTH8D';
    document.head.appendChild(script1);
  
    // Configure gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PBQS0QTH8D');
    `;
    document.head.appendChild(script2);
  };