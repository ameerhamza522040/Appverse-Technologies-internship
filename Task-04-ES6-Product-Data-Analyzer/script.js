// ============================================================
// ES6 PRODUCT DATA ANALYZER
// A simple, beginner-friendly demo of ES6+ features:
// destructuring, spread syntax, and array methods
// (map, filter, reduce, find, some, every)
// ============================================================


// ------------------------------------------------------------
// Product data
// 20 product objects, each with: id, name, category, price, stock, rating
// ------------------------------------------------------------
const products = [
  { id: 1,  name: "Wireless Mouse",     category: "Electronics",     price: 25,  stock: 120, rating: 4.3 },
  { id: 2,  name: "Mechanical Keyboard",category: "Electronics",     price: 65,  stock: 80,  rating: 4.6 },
  { id: 3,  name: "27-inch Monitor",    category: "Electronics",     price: 210, stock: 35,  rating: 4.5 },
  { id: 4,  name: "USB-C Hub",          category: "Accessories",     price: 30,  stock: 150, rating: 4.1 },
  { id: 5,  name: "Laptop Stand",       category: "Accessories",     price: 22,  stock: 90,  rating: 4.4 },
  { id: 6,  name: "Office Chair",       category: "Furniture",       price: 180, stock: 20,  rating: 4.2 },
  { id: 7,  name: "Standing Desk",      category: "Furniture",       price: 350, stock: 10,  rating: 4.7 },
  { id: 8,  name: "Notebook Set",       category: "Stationery",      price: 8,   stock: 300, rating: 4.0 },
  { id: 9,  name: "Gel Pens Pack",      category: "Stationery",      price: 6,   stock: 250, rating: 3.9 },
  { id: 10, name: "Smart Watch",        category: "Wearables",       price: 150, stock: 45,  rating: 4.5 },
  { id: 11, name: "Fitness Tracker",    category: "Wearables",       price: 90,  stock: 60,  rating: 4.2 },
  { id: 12, name: "Bluetooth Earbuds",  category: "Electronics",     price: 55,  stock: 0,   rating: 4.3 },
  { id: 13, name: "Portable Speaker",   category: "Electronics",     price: 45,  stock: 70,  rating: 4.1 },
  { id: 14, name: "Microwave Oven",     category: "Home Appliances", price: 120, stock: 15,  rating: 4.0 },
  { id: 15, name: "Air Fryer",          category: "Home Appliances", price: 95,  stock: 25,  rating: 4.6 },
  { id: 16, name: "Coffee Maker",       category: "Kitchen",         price: 60,  stock: 40,  rating: 4.3 },
  { id: 17, name: "Blender",            category: "Kitchen",         price: 40,  stock: 0,   rating: 3.8 },
  { id: 18, name: "Running Shoes",      category: "Footwear",        price: 75,  stock: 100, rating: 4.4 },
  { id: 19, name: "Casual Sneakers",    category: "Footwear",        price: 55,  stock: 130, rating: 4.1 },
  { id: 20, name: "Backpack",           category: "Accessories",     price: 48,  stock: 85,  rating: 4.5 }
];


// ------------------------------------------------------------
// Spread syntax example
// Make a safe copy of the products array so the original
// "products" array is never accidentally changed later.
// ------------------------------------------------------------
const productsCopy = [...products];


// ------------------------------------------------------------
// map() example
// Create a new array containing only the product names.
// The { name } part is object destructuring inside the
// map() callback - it pulls "name" straight out of each product.
// ------------------------------------------------------------
const productNames = productsCopy.map(({ name }) => name);


// ------------------------------------------------------------
// filter() example
// Keep only products that are in stock AND have a rating >= 4.4
// ------------------------------------------------------------
const filteredProducts = productsCopy.filter(
  (product) => product.stock > 0 && product.rating >= 4.4
);


// ------------------------------------------------------------
// reduce() example
// Add up (price x stock) for every product to get the
// total value of everything currently in inventory.
// ------------------------------------------------------------
const totalInventoryValue = productsCopy.reduce((total, product) => {
  return total + product.price * product.stock;
}, 0);


// ------------------------------------------------------------
// find() example
// Look up a single product by name.
// ------------------------------------------------------------
const foundProduct = productsCopy.find((product) => product.name === "Smart Watch");


// ------------------------------------------------------------
// some() example
// Check if at least ONE product is out of stock (stock === 0).
// ------------------------------------------------------------
const hasOutOfStockProduct = productsCopy.some((product) => product.stock === 0);


// ------------------------------------------------------------
// every() example
// Check if EVERY product meets a minimum quality rating.
// ------------------------------------------------------------
const allProductsMeetMinRating = productsCopy.every((product) => product.rating >= 3.5);


// ------------------------------------------------------------
// Summary object
// A few more array methods (map + reduce + filter) are used
// here to calculate summary stats, then the spread operator
// merges everything into one final "summary" object.
// ------------------------------------------------------------
const totalStock = productsCopy.reduce((sum, product) => sum + product.stock, 0);

const averagePrice =
  productsCopy.reduce((sum, product) => sum + product.price, 0) / productsCopy.length;

const expensiveProductsCount = productsCopy.filter((product) => product.price > 100).length;

const outOfStockProducts = productsCopy.filter((product) => product.stock === 0).length;

// Base info object, merged into the summary using spread syntax (...)
const reportInfo = { reportName: "Inventory Summary", generatedBy: "ES6 Product Data Analyzer" };

const summary = {
  ...reportInfo,
  totalProducts: productsCopy.length,
  totalStock: totalStock,
  totalInventoryValue: totalInventoryValue,
  averagePrice: Number(averagePrice.toFixed(2)),
  expensiveProductsCount: expensiveProductsCount,
  outOfStockProducts: outOfStockProducts
};


// ============================================================
// DISPLAY RESULTS ON THE PAGE
// Everything below simply takes the results calculated above
// and shows them in the browser (not just in the console).
// ============================================================

// ---------- 1. All Products table ----------
const allProductsBody = document.querySelector("#allProductsTable tbody");

productsCopy.forEach((product) => {
  // Destructuring: pull all the fields we need out of "product" at once
  const { id, name, category, price, stock, rating } = product;

  const row = document.createElement("tr");
  if (stock === 0) row.classList.add("out-of-stock");

  row.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${category}</td>
    <td>$${price}</td>
    <td>${stock}</td>
    <td>${rating}</td>
  `;

  allProductsBody.appendChild(row);
});

// ---------- 2. Product Names (map) ----------
const productNamesList = document.querySelector("#productNamesList");

productNames.forEach((name) => {
  const item = document.createElement("li");
  item.textContent = name;
  productNamesList.appendChild(item);
});

// ---------- 3. Filtered Products (filter) ----------
const filteredProductsBody = document.querySelector("#filteredProductsTable tbody");

filteredProducts.forEach(({ name, category, price, stock, rating }) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${category}</td>
    <td>$${price}</td>
    <td>${stock}</td>
    <td>${rating}</td>
  `;
  filteredProductsBody.appendChild(row);
});

// ---------- 4. Total Inventory Value (reduce) ----------
document.querySelector("#totalInventoryValue").textContent = `$${totalInventoryValue.toLocaleString()}`;

// ---------- 5. Product Found (find) ----------
const foundBox = document.querySelector("#productFound");

if (foundProduct) {
  const { name, category, price, stock, rating } = foundProduct;
  foundBox.innerHTML = `
    <strong>${name}</strong><br>
    Category: ${category}<br>
    Price: $${price}<br>
    Stock: ${stock}<br>
    Rating: ${rating}
  `;
} else {
  foundBox.textContent = "No matching product found.";
}

// ---------- 6. some() Result ----------
const someResultEl = document.querySelector("#someResult");
someResultEl.textContent = hasOutOfStockProduct ? "true — some products are out of stock" : "false";
someResultEl.classList.add(hasOutOfStockProduct ? "is-false" : "is-true");

// ---------- 7. every() Result ----------
const everyResultEl = document.querySelector("#everyResult");
everyResultEl.textContent = allProductsMeetMinRating ? "true — all products meet the minimum rating" : "false";
everyResultEl.classList.add(allProductsMeetMinRating ? "is-true" : "is-false");

// ---------- 8. Summary Object ----------
const summaryBody = document.querySelector("#summaryTable tbody");

// Destructuring the summary object to get clean labels for the table
const {
  totalProducts,
  totalStock: summaryTotalStock,
  totalInventoryValue: summaryTotalValue,
  averagePrice: summaryAveragePrice,
  expensiveProductsCount: summaryExpensiveCount,
  outOfStockProducts: summaryOutOfStock
} = summary;

const summaryRows = [
  ["Total Products", totalProducts],
  ["Total Stock", summaryTotalStock],
  ["Total Inventory Value", `$${summaryTotalValue.toLocaleString()}`],
  ["Average Price", `$${summaryAveragePrice}`],
  ["Expensive Products (over $100)", summaryExpensiveCount],
  ["Out of Stock Products", summaryOutOfStock]
];

summaryRows.forEach(([label, value]) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${label}</td><td>${value}</td>`;
  summaryBody.appendChild(row);
});

// ------------------------------------------------------------
// Console output (for developers checking DevTools alongside
// the visual results shown above)
// ------------------------------------------------------------
console.log("All Products:", productsCopy);
console.log("Product Names (map):", productNames);
console.log("Filtered Products (filter):", filteredProducts);
console.log("Total Inventory Value (reduce):", totalInventoryValue);
console.log("Product Found (find):", foundProduct);
console.log("Has Out Of Stock Product (some):", hasOutOfStockProduct);
console.log("All Products Meet Min Rating (every):", allProductsMeetMinRating);
console.log("Summary Object:", summary);