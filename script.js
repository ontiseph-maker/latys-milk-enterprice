const whatsappNumber = "254721274885";

document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const price = button.dataset.price;
    const message = `Hello LATYS MILK ENTERPRICE, I'd like to order ${product} (${price}). Please let me know availability and delivery details.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
