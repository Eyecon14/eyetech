// Sample data for laptops including image URLs and contact numbers
const laptops = [
    { 
      name: "Dell Chromebook", 
      processor: "Intel Core i5", 
      type: "Business", 
      memory: "8GB", 
      storage: "256GB SSD", 
      windows: "Windows 10", 
      price: "GHC 5,000", 
      image: "a.jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "+1234567890" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Laptop B", 
      processor: "AMD Ryzen 7", 
      type: "Gaming", 
      memory: "16GB", 
      storage: "512GB SSD", 
      windows: "Windows 11", 
      price: "GHC 3,000", 
      image: "a.jpg", // Replace "laptop-b.jpg" with the actual image URL for Laptop B
      whatsapp: "+9876543210", // Replace "+9876543210" with the WhatsApp number for Laptop B
      call: "+9876543210" // Replace "+9876543210" with the call number for Laptop B
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
        <img src="${laptop.image}" alt="${laptop.name}" width="200" height="150"> <!-- Set width and height here -->
        <h2>${laptop.name}</h2>
        <p><strong>Processor:</strong> ${laptop.processor}</p>
        <p><strong>Type:</strong> ${laptop.type}</p>
        <p><strong>Memory:</strong> ${laptop.memory}</p>
        <p><strong>Storage:</strong> ${laptop.storage}</p>
        <p><strong>Windows:</strong> ${laptop.windows}</p>
        <p><strong>Price:</strong> ${laptop.price}</p>
        <button class="btn" onclick="startChat('${laptop.whatsapp}', '${laptop.name}', '${laptop.processor}', '${laptop.type}', '${laptop.memory}', '${laptop.storage}', '${laptop.windows}', '${laptop.price}')">CHAT</button>
        <button class="btn" onclick="callSupport('${laptop.call}')">CALL</button>
      `;
      laptopList.appendChild(card);
    });
  }
  
  // Function to open WhatsApp chat with the given number and send a message with laptop specifications
  function startChat(number, name, processor, type, memory, storage, windows, price) {
    const message = `Is this ${name} available?\n\nProcessor: ${processor}\nType: ${type}\nMemory: ${memory}\nStorage: ${storage}\nWindows: ${windows}\nPrice: ${price}`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
  }
  
  // Function to initiate a call with the given number
  function callSupport(number) {
    window.open(`tel:${number}`);
  }
  
  // Initial display of laptops
  displayLaptops(laptops);
  