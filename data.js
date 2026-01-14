// data.js
const products = [
    // --- MOBILES ---
    { id: 101, category: "mobile", title: "Apple iPhone 15 Pro", price: 134900, rating: 4.8, img: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_SL1500_.jpg", brand: "Apple" },
    { id: 102, category: "mobile", title: "Samsung Galaxy S24 Ultra", price: 129999, rating: 4.7, img: "https://m.media-amazon.com/images/I/71RFc2iWnTL._AC_SL1500_.jpg", brand: "Samsung" },
    { id: 103, category: "mobile", title: "Google Pixel 8", price: 75999, rating: 4.5, img: "https://m.media-amazon.com/images/I/71Wc67W8q4L._AC_SL1500_.jpg", brand: "Google" },
    { id: 104, category: "mobile", title: "OnePlus 12", price: 64999, rating: 4.6, img: "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_SL1500_.jpg", brand: "OnePlus" },
    
    // --- LAPTOPS ---
    { id: 201, category: "laptop", title: "MacBook Air M2", price: 99900, rating: 4.9, img: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_SL1500_.jpg", brand: "Apple" },
    { id: 202, category: "laptop", title: "Dell XPS 15", price: 180000, rating: 4.6, img: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg", brand: "Dell" },
    { id: 203, category: "laptop", title: "HP Spectre x360", price: 145000, rating: 4.5, img: "https://m.media-amazon.com/images/I/61G+48yCwlL._AC_SL1000_.jpg", brand: "HP" },

    // --- FASHION ---
    { id: 301, category: "fashion", title: "Nike Air Jordan", price: 12995, rating: 4.8, img: "https://m.media-amazon.com/images/I/71+8M+8Xl+L._AC_XY695_.jpg", brand: "Nike" },
    { id: 302, category: "fashion", title: "Adidas Ultraboost", price: 16999, rating: 4.7, img: "https://m.media-amazon.com/images/I/71L5lQ0k2AL._AC_SY695_.jpg", brand: "Adidas" },
    { id: 303, category: "fashion", title: "Levi's Men's Jeans", price: 2999, rating: 4.2, img: "https://m.media-amazon.com/images/I/81+3j5+j+RL._AC_UL1500_.jpg", brand: "Levis" },
    
    // --- HOME ---
    { id: 401, category: "home", title: "Dyson V15 Vacuum", price: 45900, rating: 4.9, img: "https://m.media-amazon.com/images/I/61Kq-Pz7+5L._AC_SL1500_.jpg", brand: "Dyson" },
    { id: 402, category: "home", title: "Philips Air Fryer", price: 8999, rating: 4.4, img: "https://m.media-amazon.com/images/I/71qLgX2F+xL._AC_SL1500_.jpg", brand: "Philips" }
];

// Utility to format price
const formatPrice = (price) => "₹" + price.toLocaleString("en-IN");
