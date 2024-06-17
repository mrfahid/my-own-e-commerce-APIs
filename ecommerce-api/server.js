const express = require('express');
const app = express();
const port = 3000;

const products = [
  {
    "id": 1,
    "img": "https://plus.unsplash.com/premium_photo-1661666704697-ae3c8c825da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFdvbWVuJTIwRXRobmljJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    "title": "Women Ethnic",
    "rating": 5.0,
    "color": "white",
    "category": "clothing",
    "price": 49.99,
    "description": "Beautiful traditional ethnic wear for women.",
    "availability": "in stock",
    "aosDelay": "0"
  },
  {
    "id": 2,
    "img": "https://plus.unsplash.com/premium_photo-1673977133880-0dbf6846bc43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V29tZW4lMjBXZXN0ZXJuJTIwc3RvcmUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    "title": "Women Western",
    "rating": 4.5,
    "color": "red",
    "category": "clothing",
    "price": 59.99,
    "description": "Trendy western wear for modern women.",
    "availability": "in stock",
    "aosDelay": "200"
  },
  {
    "id": 3,
    "img": "https://images.unsplash.com/photo-1548659545-93415a88191c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R29nZ2xlc3xlbnwwfHwwfHx8MA%3D%3D",
    "title": "Goggles",
    "rating": 4.7,
    "color": "brown",
    "category": "accessories",
    "price": 19.99,
    "description": "Stylish and protective goggles for all seasons.",
    "availability": "out of stock",
    "aosDelay": "400"
  },
  {
    "id": 4,
    "img": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0fGVufDB8fDB8fHww",
    "title": "Printed T-Shirt",
    "rating": 4.4,
    "color": "yellow",
    "category": "clothing",
    "price": 29.99,
    "description": "Comfortable and stylish printed t-shirt for casual wear.",
    "availability": "in stock",
    "aosDelay": "600"
  },
  {
    "id": 5,
    "img": "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFQlMjBTaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    "title": "Fashion T-Shirt",
    "rating": 4.5,
    "color": "pink",
    "category": "clothing",
    "price": 34.99,
    "description": "Trendy fashion t-shirt for all occasions.",
    "availability": "in stock",
    "aosDelay": "800"
  },
  {
    "id": 6,
    "img": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFja2V0fGVufDB8fDB8fHww",
    "title": "Men's Jacket",
    "rating": 4.8,
    "color": "black",
    "category": "clothing",
    "price": 89.99,
    "description": "Warm and stylish jacket for men.",
    "availability": "in stock",
    "aosDelay": "1000"
  },
  {
    "id": 7,
    "img": "https://images.unsplash.com/photo-1615290642882-6b9501729a27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    "title": "Sneakers",
    "rating": 4.9,
    "color": "white",
    "category": "footwear",
    "price": 59.99,
    "description": "Comfortable and trendy sneakers for everyday wear.",
    "availability": "in stock",
    "aosDelay": "1200"
  },
  {
    "id": 8,
    "img": "https://images.unsplash.com/photo-1613482184847-44483b792eeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhhbmRiYWd8ZW58MHx8MHx8fDA%3D",
    "title": "Handbag",
    "rating": 4.6,
    "color": "blue",
    "category": "accessories",
    "price": 49.99,
    "description": "Elegant handbag for women.",
    "availability": "in stock",
    "aosDelay": "1400"
  },
  {
    "id": 9,
    "img": "https://images.unsplash.com/photo-1631863552122-3072cf599a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFNtYXJ0JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
    "title": "Smart Watch",
    "rating": 4.7,
    "color": "black",
    "category": "electronics",
    "price": 199.99,
    "description": "High-tech smart watch with multiple features.",
    "availability": "in stock",
    "aosDelay": "1600"
  },
  {
    "id": 10,
    "img": "https://plus.unsplash.com/premium_photo-1671718111976-48b74d57c181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FzdWFsJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D",
    "title": "Casual Shoes",
    "rating": 4.5,
    "color": "gray",
    "category": "footwear",
    "price": 69.99,
    "description": "Stylish casual shoes for everyday wear.",
    "availability": "in stock",
    "aosDelay": "1800"
  },
  {
    "id": 11,
    "img": "https://images.unsplash.com/photo-1527019116805-6830bec33ebc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN1bW1lciUyMEhhdHxlbnwwfHwwfHx8MA%3D%3D",
    "title": "Summer Hat",
    "rating": 4.3,
    "color": "beige",
    "category": "accessories",
    "price": 15.99,
    "description": "Light and comfortable summer hat.",
    "availability": "in stock",
    "aosDelay": "2000"
  },
  {
    "id": 12,
    "img": "https://images.unsplash.com/photo-1555607242-831530078567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlbHR8ZW58MHx8MHx8fDA%3D",
    "title": "Leather Belt",
    "rating": 4.4,
    "color": "brown",
    "category": "accessories",
    "price": 24.99,
    "description": "Durable leather belt for all occasions.",
    "availability": "in stock",
    "aosDelay": "2200"
  },
  {
    "id": 13,
    "img": "https://images.unsplash.com/photo-1555617117-08d2a80f6aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
    "title": "Sunglasses",
    "rating": 4.6,
    "color": "black",
    "category": "accessories",
    "price": 29.99,
    "description": "Trendy sunglasses for sun protection.",
    "availability": "in stock",
    "aosDelay": "2400"
  },
  {
    "id": 14,
    "img": "https://images.unsplash.com/photo-1512675828443-4f454c42253a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9ybWFsJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D",
    "title": "Formal Shoes",
    "rating": 4.5,
    "color": "black",
    "category": "footwear",
    "price": 89.99,
    "description": "Elegant formal shoes for office and occasions.",
    "availability": "in stock",
    "aosDelay": "2600"
  },
  {
    "id": 15,
    "img": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4ncyUyMERyZXNzfGVufDB8fDB8fHww",
    "title": "Women's Dress",
    "rating": 4.8,
    "color": "red",
    "category": "clothing",
    "price": 79.99,
    "description": "Elegant dress for special occasions.",
    "availability": "in stock",
    "aosDelay": "2800"
  },
  {
    "id": 16,
    "img": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    "title": "Men's Shirt",
    "rating": 4.7,
    "color": "blue",
    "category": "clothing",
    "price": 49.99,
    "description": "Stylish and comfortable men's shirt.",
    "availability": "in stock",
    "aosDelay": "3000"
  },
  {
    "id": 17,
    "img": "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
    "title": "Running Shoes",
    "rating": 4.9,
    "color": "black",
    "category": "footwear",
    "price": 99.99,
    "description": "High-performance running shoes for athletes.",
    "availability": "in stock",
    "aosDelay": "3200"
  },
  {
    "id": 18,
    "img": "https://images.unsplash.com/photo-1614330315526-166f2d71e544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFdhbGxldHxlbnwwfHwwfHx8MA%3D%3D",
    "title": "Wallet",
    "rating": 4.5,
    "color": "brown",
    "category": "accessories",
    "price": 39.99,
    "description": "Compact and stylish wallet.",
    "availability": "in stock",
    "aosDelay": "3400"
  },
  {
    "id": 19,
    "img": "https://images.unsplash.com/photo-1585728748176-455ac5eed962?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    "title": "Scarf",
    "rating": 4.4,
    "color": "white",
    "category": "accessories",
    "price": 14.99,
    "description": "Soft and warm scarf for all seasons.",
    "availability": "in stock",
    "aosDelay": "3600"
  },
  {
    "id": 20,
    "img": "https://images.unsplash.com/photo-1616178193482-4dad15347c26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fEplYW5zfGVufDB8fDB8fHww",
    "title": "Jeans",
    "rating": 4.7,
    "color": "blue",
    "category": "clothing",
    "price": 59.99,
    "description": "Comfortable and stylish jeans for everyday wear.",
    "availability": "in stock",
    "aosDelay": "3800"
  }
]


// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to retrieve all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Endpoint to retrieve a product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Endpoint to filter products by category
app.get('/api/products/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const filteredProducts = products.filter(p => p.category.toLowerCase() === category);
  res.json(filteredProducts);
});

// Endpoint to search products by title
app.get('/api/products/search/:title', (req, res) => {
  const title = req.params.title.toLowerCase();
  const searchedProducts = products.filter(p => p.title.toLowerCase().includes(title));
  res.json(searchedProducts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
