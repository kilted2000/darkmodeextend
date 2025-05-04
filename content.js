(() => {
    const darkStyleId = '___dark_mode_extension_style';
    let styleEl = document.getElementById(darkStyleId);
  
    if (styleEl) {
      styleEl.remove(); 
    } else {
      styleEl = document.createElement('style');
      styleEl.id = darkStyleId;
      styleEl.textContent = `
        html, body {
          background-color: #121212 !important;
          color: #e0e0e0 !important;
        }
  
        a { color: #bb86fc !important; }
        img, video { filter: brightness(0.8) contrast(1.2); }
  
        * {
          background-color: transparent !important;
          border-color: #444 !important;
        }
      `;
      document.head.appendChild(styleEl);
    }
  })();
  
