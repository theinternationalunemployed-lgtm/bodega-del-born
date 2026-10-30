# Bodega del Born · web

Web estática hecha con la skill `web-restaurante`. Diseño propio a partir del local: madera oscura, cartel de pizarra pintado a mano, tarjetas de deseos de colores y cítricos del vermut.
Todavía **sin publicar**.

## Editar carta u horario
Cada idioma es un archivo: busca `EDITAR` / `EDIT` y cambia **los tres**.
El horario también está en `openingHoursSpecification` del `<head>` de cada uno.

## De dónde salen los datos (consultados el 30/10/2026)
- Horario y cuenta: [Instagram @bodegadelborn](https://www.instagram.com/bodegadelborn/). Es la fuente más directa; otras webs dan horas distintas.
- Dirección y teléfono: `negocios_ciutat_vella.xlsx`, Tripadvisor y Restaurant Guru. Apple Maps da otro teléfono y el número 15: hay que confirmarlo.
- Valoración (4,8★, casi 1.000 reseñas): Google Maps según el Excel, 28/10/2026.
- Tarjetas de deseos: reseñas de clientes y sección "Dessitjos" de su Instagram.
- Platos y bebidas: **reseñas de clientes**, sin confirmar. Por eso la carta lleva el aviso y no tiene precios.
  Privateaser indica vino 5 €, vermut 6 € y plato de quesos 12 €, pero sin fecha; no se han usado.

## Pendiente de pedir al local
- [ ] Carta real con precios (comida y bebida)
- [ ] Confirmar teléfono, número de la calle y horario
- [ ] ¿Aceptan reservas? (Restaurant Guru dice que no; Privateaser ofrece grupos)
- [ ] Fotos propias: portada y 6 para la galería → `img/` en WebP; foto 1200×630 para compartir
- [ ] Email de contacto
- [ ] Razón social, NIF y datos registrales (aviso legal y privacidad)
- [ ] ¿Dominio propio? Restaurant Guru cita bodegalapuntual.com: comprobar si tiene relación.
      Hoy las URL canónicas y el sitemap apuntan a GitHub Pages.
- [ ] Confirmar que les parece bien invitar a escribir y colgar un deseo en la web
