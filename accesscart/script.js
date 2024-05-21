// Sample data for laptops including image URLs and contact numbers
const laptops = [

    { 
      name: "RAM", 
      platform: "PC", 
      type: "All",  
      price: "GHC 100-300", 
      image: "access/a (41).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Storage-Drive", 
      platform: "PC", 
      type: "HDD",  
      price: "GHC 100-350", 
      image: "access/a (37).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Monitor", 
      platform: "PC", 
      type: "All",  
      price: "GHC 550", 
      image: "access/ben (24).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 

    { 
      name: "Speaker", 
      platform: "PC", 
      type: "Wired",  
      price: "GHC 200", 
      image: "access/a (11).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },    
    { 
      name: "Storage Drive", 
      platform: "PC", 
      type: "SSD",  
      price: "GHC 150-450", 
      image: "access/a (3).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "PS-Gaming", 
      platform: "Console", 
      type: "PS3",  
      price: "GHC 1300", 
      image: "access/a (5).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Graphics-Card", 
      platform: "PC", 
      type: "Nvidia",  
      price: "GHC 700", 
      image: "access/a (4).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Pendrive", 
      platform: "PC", 
      type: "Storage",  
      price: "GHC 30-150", 
      image: "access/a (6).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Graphics-Card", 
      platform: "PC", 
      type: "Nvidia",  
      price: "GHC 2100", 
      image: "access/a (2).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "PC", 
      type: "Wired",  
      price: "GHC 80", 
      image: "access/a (7).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "PC", 
      type: "Wireless",  
      price: "GHC 40", 
      image: "access/a (14).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Mouse", 
      platform: "PC", 
      type: "Wireless",  
      price: "GHC 50", 
      image: "access/a (9).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Gamepad", 
      platform: "PC", 
      type: "Wired",  
      price: "GHC 120", 
      image: "access/a (10).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "All", 
      platform: "Pc", 
      type: "All",  
      price: "GHC 100-1000", 
      image: "access/a (13).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Storage Drive", 
      platform: "PC", 
      type: "SSD",  
      price: "GHC 500-950", 
      image: "access/a (12).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Processor", 
      platform: "PC", 
      type: "Intel-Core",  
      price: "GHC 80", 
      image: "access/a (15).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "PS-Gaming", 
      platform: "Console", 
      type: "X-Box",  
      price: "GHC 2400", 
      image: "access/a (17).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Graphics-Card", 
      platform: "PC", 
      type: "Nvidia",  
      price: "GHC 3300", 
      image: "access/a (16).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Gamepad", 
      platform: "PC", 
      type: "Wireless",  
      price: "GHC 200", 
      image: "access/a (21).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Gamepad", 
      platform: "Console", 
      type: "X-Box",  
      price: "GHC 170", 
      image: "access/a (22).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "PC", 
      type: "Laptop Adaptor",  
      price: "GHC 80", 
      image: "access/a (23).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Modem", 
      platform: "PC", 
      type: "All",  
      price: "GHC 280", 
      image: "access/a (31).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Gamepad", 
      platform: "Console", 
      type: "PS4",  
      price: "GHC 80", 
      image: "access/a (19).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "PC", 
      type: "Wired",  
      price: "GHC 150", 
      image: "access/a (20).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "iOS", 
      type: "Wired",  
      price: "GHC 50", 
      image: "access/ben (7).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Protector", 
      platform: "Android", 
      type: "Glass",  
      price: "GHC 20", 
      image: "access/ben (3).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "Android", 
      type: "Wired",  
      price: "GHC 35", 
      image: "access/ben (2).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "Android", 
      type: "Wired",  
      price: "GHC 35", 
      image: "access/ben (4).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Mouse", 
      platform: "PC", 
      type: "Wireless",  
      price: "GHC 75", 
      image: "access/ben (5).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "iOS", 
      type: "Wired",  
      price: "GHC 35", 
      image: "access/ben (6).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "PC", 
      type: "Wired",  
      price: "GHC 60", 
      image: "access/ben (12).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Adaptor", 
      platform: "PC", 
      type: "Wired",  
      price: "GHC 80", 
      image: "access/ben (11).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Speaker", 
      platform: "All", 
      type: "Wireless",  
      price: "GHC 250", 
      image: "access/ben (10).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Headphone", 
      platform: "All", 
      type: "Wireless",  
      price: "GHC 150", 
      image: "access/ben (17).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "MP3", 
      platform: "All", 
      type: "Other",  
      price: "GHC 55", 
      image: "access/ben (18).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Speaker", 
      platform: "All", 
      type: "Wired",  
      price: "GHC 455", 
      image: "access/ben (9).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Mouse", 
      platform: "PC", 
      type: "Wireless",  
      price: "GHC 65", 
      image: "access/ben (16).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Storage Drive", 
      platform: "PC", 
      type: "SSD",  
      price: "GHC 150-300", 
      image: "access/ben (14).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Protector", 
      platform: "iOS", 
      type: "Glass",  
      price: "GHC 35", 
      image: "access/ben (15).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Keyboard", 
      platform: "PC", 
      type: "Wireless",  
      price: "GHC 75", 
      image: "access/ben (21).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Headphone", 
      platform: "All", 
      type: "Wireless",  
      price: "GHC 65", 
      image: "access/ben (22).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Earpins", 
      platform: "iOS", 
      type: "Wired",  
      price: "GHC 30", 
      image: "access/ben (23).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Speaker", 
      platform: "All", 
      type: "Other",  
      price: "GHC 8500", 
      image: "access/ben (27).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Monitor", 
      platform: "PC", 
      type: "Other",  
      price: "GHC 450", 
      image: "access/ben (25).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Speaker", 
      platform: "All", 
      type: "Other",  
      price: "GHC 130", 
      image: "access/ben (26).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Keyboard", 
      platform: "PC", 
      type: "Wireless",  
      price: "GHC 60", 
      image: "access/ben (20).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "PowerBank", 
      platform: "Android", 
      type: "Other",  
      price: "GHC 175", 
      image: "access/ben (30).jpeg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Cover", 
      platform: "PC", 
      type: "HDD/SSD",  
      price: "GHC 80", 
      image: "access/a (34).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
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
        <p><strong>Platform:</strong> ${laptop.platform}</p>
        <p><strong>Type:</strong> ${laptop.type}</p>
        <p><strong>Price:</strong> ${laptop.price}</p>
        <button class="btn" onclick="startChat('${laptop.whatsapp}', '${laptop.name}', '${laptop.platform}', '${laptop.type}', '${laptop.price}')">CHAT</button>
        <button class="btn" onclick="callSupport('${laptop.call}')">CALL</button>
      `;
      laptopList.appendChild(card);
    });
  }
  
  // Function to open WhatsApp chat with the given number and send a message with laptop specifications
  function startChat(number, name, platform, type, price) {
    const message = `Is this ${name} available?\n\nPlatform: ${platform}\nType: ${type}\nPrice: ${price}`;
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
  const platformFilter = document.getElementById("platform-filter").value;

  console.log("Price Filter:", priceFilter);
  console.log("Type Filter:", typeFilter);
  console.log("Name Filter:", nameFilter);
  console.log("Platform Filter:", platformFilter);

  const filteredLaptops = laptops.filter(laptop => {
    let matchPrice = true;
    if (priceFilter !== "All") {
      const [minPrice, maxPrice] = priceFilter.split("-").map(Number);
      const price = parseFloat(laptop.price.split(" ")[1]); // Extracting price from the string and converting to number
      matchPrice = price >= minPrice && price <= maxPrice;
    }

    const matchType = typeFilter === "All" || laptop.type.toLowerCase() === typeFilter.toLowerCase();
    const matchName = nameFilter === "All" || laptop.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchPlatform = platformFilter === "All" || laptop.platform.toLowerCase().includes(platfomrFilter.toLowerCase());

    console.log("Laptop:", laptop.name, "Match Price:", matchPrice, "Match Type:", matchType, "Match Name:", matchName, "Match Platform:", matchPlatform);

    return matchPrice && matchType && matchName && matchPlatform;
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






  