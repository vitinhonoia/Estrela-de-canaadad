// Interações: menu, smooth scroll, lightbox, formulário (Formspree-friendly)
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle
  const nav = document.querySelector('.nav ul');
  const toggle = document.getElementById('navToggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(nav) nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      if(nav){ nav.style.flexDirection = window.innerWidth < 980 ? 'column' : 'row'; }
    });
  }

  // Year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for local links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

  // Lightbox
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');

  if(gallery && lightbox && lbImage && lbClose){
    gallery.querySelectorAll('.photo').forEach(btn => {
      btn.addEventListener('click', () => {
        const src = btn.dataset.full;
        lbImage.src = src;
        lightbox.hidden = false;
        lightbox.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
      });
    });
    const closeLB = () => {
      lightbox.hidden = true;
      lightbox.setAttribute('aria-hidden','true');
      lbImage.src = '';
      document.body.style.overflow = '';
    };
    lbClose.addEventListener('click', closeLB);
    lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLB(); });
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && !lightbox.hidden) closeLB(); });
  }

  // Contact form - progressive enhancement:
  // By default the form is handled via JS fetch to a form endpoint (Formspree or similar).
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const mailtoBtn = document.getElementById('mailtoBtn');

  if(form){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Enviando...';
      const data = new FormData(form);

      // Replace this URL by your Formspree endpoint or server endpoint.
      const endpoint = 'https://formspree.io/f/SEU_ENDPOINT_AQUI';

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          status.textContent = 'Mensagem enviada — obrigado! Entraremos em contato em breve.';
          form.reset();
        } else {
          const json = await res.json();
          status.textContent = json.error || 'Erro ao enviar. Tente novamente ou envie por email.';
        }
      } catch (err) {
        status.textContent = 'Erro de rede. Use o botão "Abrir no email" ou tente mais tarde.';
      }
    });
  }

  if(mailtoBtn){
    mailtoBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value || '[Nome]';
      const email = document.getElementById('email').value || '[Email]';
      const message = document.getElementById('message').value || '[Mensagem]';
      const subject = encodeURIComponent('Contato - Capítulo Estrela de Canaã');
      const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
      window.location.href = `mailto:capitulo@exemplo.com?subject=${subject}&body=${body}`;
    });
  }
});
