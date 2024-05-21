// Sample data for laptops including image URLs and contact numbers
const laptops = [
  { 
    name: "Huawei", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "2GB", 
    storage: "32GB", 
    price: "GHC 650", 
    image: "phones/p (4).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Sony G6", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "2GB", 
    storage: "32GB", 
    price: "GHC 630", 
    image: "phones/p (17).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei Y6", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "2GB", 
    storage: "16GB", 
    price: "GHC 520", 
    image: "phones/p (13).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei Y7", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "2GB", 
    storage: "32GB", 
    price: "GHC 650", 
    image: "phones/p (5).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Samsung S10", 
    processor: "Snapdragon", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 2350", 
    image: "phones/a (27).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei P20 Lite", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 950", 
    image: "phones/p (23).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "iPhone XR", 
    processor: "Bionic", 
    type: "iOS", 
    memory: "3GB", 
    storage: "64GB", 
    price: "GHC 2250", 
    image: "phones/p (7).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "iPhone SE 1", 
    processor: "Bionic", 
    type: "iOS", 
    memory: "2GB", 
    storage: "16GB", 
    price: "GHC 570", 
    image: "phones/p (9).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei Mate 7", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "3GB", 
    storage: "64GB", 
    price: "GHC 850", 
    image: "phones/p (10).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Samsung S8 edge", 
    processor: "Snapdragon", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1650", 
    image: "phones/a (9).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Pixel 2xl", 
    processor: "Tensor", 
    type: "Google", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1350", 
    image: "phones/a (1).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Infinix", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1250", 
    image: "phones/a (3).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Redmi", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "8GB", 
    storage: "128GB", 
    price: "GHC 2600", 
    image: "phones/a (5).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Redmi", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1750", 
    image: "phones/a (2).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "3GB", 
    storage: "64GB", 
    price: "GHC 1550", 
    image: "phones/a (4).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Sony", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "2GB", 
    storage: "32GB", 
    price: "GHC 750", 
    image: "phones/a (6).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Infinix", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1150", 
    image: "phones/a (7).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Samsung S9", 
    processor: "Snapdragon", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1950", 
    image: "phones/a (8).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Itel", 
    processor: "Other", 
    type: "Android", 
    memory: "4MB", 
    storage: "16MB", 
    price: "GHC 120", 
    image: "phones/a (10).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Iphone 14 pro", 
    processor: "Bionic", 
    type: "iOS", 
    memory: "4GB", 
    storage: "128GB", 
    price: "GHC 3800", 
    image: "phones/a (11).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Pixel 4xl", 
    processor: "Tensor", 
    type: "Google", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1850", 
    image: "phones/a (12).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Pixel 7", 
    processor: "Tensor", 
    type: "Google", 
    memory: "8GB", 
    storage: "256GB", 
    price: "GHC 6300", 
    image: "phones/a (13).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Tecno", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1550", 
    image: "phones/a (14).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Tecno Camon 18", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 2350", 
    image: "phones/a (15).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Tecno Camon 20", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "6GB", 
    storage: "128GB", 
    price: "GHC 2650", 
    image: "phones/a (16).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Sony", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1050", 
    image: "phones/a (17).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1950", 
    image: "phones/a (18).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1250", 
    image: "phones/a (19).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Sony", 
    processor: "MediaTek", 
    type: "Android", 
    memory: "3GB", 
    storage: "32GB", 
    price: "GHC 750", 
    image: "phones/a (20).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Xiaomi", 
    processor: "Snapdragon", 
    type: "Android", 
    memory: "4GB", 
    storage: "64GB", 
    price: "GHC 1500", 
    image: "phones/a (21).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Itel", 
    processor: "Other", 
    type: "Android", 
    memory: "2MB", 
    storage: "4MB", 
    price: "GHC 120", 
    image: "phones/a (22).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Pixel 7", 
    processor: "Tensor", 
    type: "Google", 
    memory: "6GB", 
    storage: "128GB", 
    price: "GHC 4650", 
    image: "phones/a (23).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  { 
    name: "Huawei", 
    processor: "Kirin", 
    type: "Huawei", 
    memory: "8GB", 
    storage: "256GB", 
    price: "GHC 2800", 
    image: "phones/a (24).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
    whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
    call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
  },
  
 
  // Add more laptops as needed
];


 // Function to display laptops
 function displayLaptops(laptops) {
  const laptopList = document.getElementById("laptopList");
  laptopList.innerHTML = "";
  laptops.forEach(laptop => {
    const card = document.createElement("div");
    card.classList.add("laptop-card");
    card.innerHTML = `
      <img src="${laptop.image}" alt="${laptop.name}" width="270" height="270"> <!-- Set width and height here -->
      <h2>${laptop.name}</h2>
      <p><strong>Processor:</strong> ${laptop.processor}</p>
      <p><strong>Type:</strong> ${laptop.type}</p>
      <p><strong>Memory:</strong> ${laptop.memory}</p>
      <p><strong>Storage:</strong> ${laptop.storage}</p>
      <p><strong>Price:</strong> ${laptop.price}</p>
      <button class="btn" onclick="startChat('${laptop.whatsapp}', '${laptop.name}', '${laptop.processor}', '${laptop.type}', '${laptop.memory}', '${laptop.storage}', '${laptop.price}')">CHAT</button>
      <button class="btn" onclick="callSupport('${laptop.call}')">CALL</button>
    `;
    laptopList.appendChild(card);
  });
}

// Function to open WhatsApp chat with the given number and send a message with laptop specifications
function startChat(number, name, processor, type, memory, storage, price) {
  const message = `Is this ${name} available?\n\nProcessor: ${processor}\nType: ${type}\nMemory: ${memory}\nStorage: ${storage}\nPrice: ${price}`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
}

// Function to initiate a call with the given number
function callSupport(number) {
  window.open(`tel:${number}`);
}

// Initial display of laptops
displayLaptops(laptops);

// Filter function
function filterLaptops() {
const priceFilter = document.getElementById("price-filter").value;
const typeFilter = document.getElementById("type-filter").value;
const nameFilter = document.getElementById("name-filter").value;
const processorFilter = document.getElementById("processor-filter").value;

console.log("Price Filter:", priceFilter);
console.log("Type Filter:", typeFilter);
console.log("Name Filter:", nameFilter);
console.log("Processor Filter:", processorFilter);

const filteredLaptops = laptops.filter(laptop => {
  let matchPrice = true;
  if (priceFilter !== "All") {
    const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
    const price = parseFloat(laptop.price.split(" ")[1]); // Extracting price from the string and converting to number
    matchPrice = price >= minPrice && price <= maxPrice;
  }

  const matchType = typeFilter === "All" || laptop.type.toLowerCase() === typeFilter.toLowerCase();
  const matchName = nameFilter === "All" || laptop.name.toLowerCase().includes(nameFilter.toLowerCase());
  const matchProcessor = processorFilter === "All" || laptop.processor.toLowerCase().includes(processorFilter.toLowerCase());

  console.log("Laptop:", laptop.name, "Match Price:", matchPrice, "Match Type:", matchType, "Match Name:", matchName, "Match Processor:", matchProcessor);

  return matchPrice && matchType && matchName && matchProcessor;
});

displayLaptops(filteredLaptops);
}

// Event listeners for filters
document.getElementById("price-filter").addEventListener("change", filterLaptops);
document.getElementById("type-filter").addEventListener("change", filterLaptops);
document.getElementById("name-filter").addEventListener("change", filterLaptops);
document.getElementById("processor-filter").addEventListener("change", filterLaptops);

// Initial display of laptops
displayLaptops(laptops);

