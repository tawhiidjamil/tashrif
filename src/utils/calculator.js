/**
 * Calculator utility functions
 */

export function getTranslationOnlyPrice(pages) {
  if (pages === 1) return 100;
  if (pages === 2) return 160;
  if (pages === 3) return 180;
  return 180 + (pages - 3) * 50;
}

export function calculateTotal(selectedServices, selectedAddons, pageCount, servicePricing) {
  let total = 0;
  const lines = [];
  const orderItems = [];

  selectedServices.forEach((key) => {
    const svc = servicePricing[key];
    if (!svc) return;
    let cost = svc.sliding ? getTranslationOnlyPrice(pageCount) : svc.perPage * pageCount;
    total += cost;
    lines.push({ label: `${svc.label} (${pageCount} পেজ)`, value: cost });
    orderItems.push(`${svc.label} — ${pageCount} পেজ = ৳${cost}`);
  });

  selectedAddons.forEach(({ key, label, price, perPage }) => {
    let cost = perPage ? price * pageCount : price;
    total += cost;
    lines.push({ label, value: cost });
    orderItems.push(`${label} = ৳${cost}`);
  });

  return { total, lines, orderItems };
}

export function buildWhatsAppUrl(orderItems, total) {
  const msg = `আসসালামু আলাইকুম,\nতাশরীফ ট্রান্সলেশন সেন্টার থেকে সেবা নিতে চাই:\n\n${orderItems.join('\n')}\n\nমোট: ৳${total}`;
  return `https://wa.me/8801719548440?text=${encodeURIComponent(msg)}`;
}
