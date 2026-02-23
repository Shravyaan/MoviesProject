const API_URL = "http://localhost:3005/products";

async function fetchProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();
}
