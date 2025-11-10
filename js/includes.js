const scriptQueue = [
  'assets/vendor/gusti/vendors/jquery-3.5.1.min.js',
  'assets/vendor/gusti/scripts/vlt-plugins.min.js',
  'assets/vendor/gusti/scripts/vlt-helpers.js',
  'assets/vendor/gusti/scripts/vlt-controllers.min.js'
];

async function includePartials() {
  const targets = Array.from(document.querySelectorAll('[data-include]'));
  for (const target of targets) {
    const file = target.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} while requesting ${file}`);
      }
      const html = await response.text();
      target.outerHTML = html;
    } catch (error) {
      console.error(`Failed to load partial: ${file}`, error);
      target.outerHTML = `<div class="include-error">Unable to load ${file}</div>`;
    }
  }
}

function loadScriptSequential(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
}

async function loadExternalScripts() {
  for (const src of scriptQueue) {
    await loadScriptSequential(src);
  }
}

async function bootstrap() {
  await includePartials();
  await loadExternalScripts();
  setupWhatsAppForm();
  document.dispatchEvent(new Event('DOMContentLoaded'));
  window.dispatchEvent(new Event('load'));
}

bootstrap();

function setupWhatsAppForm() {
  const form = document.querySelector('.js-whatsapp-form');
  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    const phoneNumber = '6282116040700';
    const text = encodeURIComponent(
      `Halo Gusti, saya ${name || 'someone'}.\nEmail: ${email || '-'}\nPesan: ${message || '-'}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  });
}
