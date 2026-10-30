// Tarjetas de deseos de la portada, sombra de la cabecera, sección activa del menú y aparición al hacer scroll.
(() => {
  const top = document.querySelector('.top');
  const onScroll = () => top.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Decoración: se generan aquí para no llenar el HTML de elementos sin contenido
  const colores = ['#d9423b', '#3f9a5a', '#2f7fb8', '#f2c833', '#f08a1d', '#d9689b'];
  const deseos = document.createElement('div');
  deseos.className = 'deseos';
  deseos.setAttribute('aria-hidden', 'true');
  const total = 22;
  for (let i = 0; i < total; i++) {
    const t = document.createElement('i');
    t.style.left = `${(i + 0.2) * (100 / total)}%`;
    t.style.top = `${(i % 3) * 16 - 6}px`;
    t.style.background = colores[i % colores.length];
    t.style.rotate = `${(i % 5) * 4 - 8}deg`;
    t.style.setProperty('--r', `${(i % 5) * 4 - 8}deg`);
    t.style.setProperty('--d', `${(i % 7) * 70}ms`);
    deseos.append(t);
  }
  document.querySelector('.hero').append(deseos);

  const links = [...document.querySelectorAll('.menu a')];
  const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((a) => a.classList.toggle('on', a.hash === `#${e.target.id}`));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((a) => spy.observe(document.querySelector(a.hash)));
  spy.observe(document.querySelector('.hero')); // sin enlace propio: al volver arriba no queda nada marcado

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.documentElement.classList.add('js');
  const show = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    show.unobserve(e.target);
  }), { rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('section:not(.hero) h2, section:not(.hero) .wrap > p, .carta > div, .galeria > *, .horario table, .horario address, .horario .btn, .mapa, .contacto .btns > *')
    .forEach((el) => {
      el.classList.add('reveal');
      el.style.setProperty('--retraso', `${[...el.parentNode.children].indexOf(el) % 4 * 80}ms`);
      show.observe(el);
    });
})();
