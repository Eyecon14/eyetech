// Sample data for laptops including image URLs and contact numbers
const laptops = [

    { 
      name: "Dell Chromebook", 
      processor: "Intel dual core", 
      type: "Education", 
      memory: "4GB", 
      storage: "16 SSD", 
      windows: "Windows 11", 
      price: "GHC 650", 
      image: "laps/a (1).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Toshiba Tecra", 
      processor: "Intel dual core", 
      type: "Education", 
      memory: "4GB", 
      storage: "128 SSD", 
      windows: "Windows 10", 
      price: "GHC 790", 
      image: "laps/b.jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Dell Chromebook", 
      processor: "Intel dual core", 
      type: "Education", 
      memory: "2GB", 
      storage: "16 SSD", 
      windows: "Chrome OS", 
      price: "GHC 490", 
      image: "laps/s.jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Samsung Chromebook", 
      processor: "Intel dual core", 
      type: "Education", 
      memory: "2GB", 
      storage: "32 SSD", 
      windows: "Chrome OS", 
      price: "GHC 500", 
      image: "laps/a (4).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Dell Chromebook", 
      processor: "Intel dual core", 
      type: "Education", 
      memory: "4GB", 
      storage: "32 SSD", 
      windows: "Windows 10", 
      price: "GHC 770", 
      image: "laps/a (3).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "HP Laptop", 
      processor: "AMD", 
      type: "Semi-Gaming", 
      memory: "6GB", 
      storage: "250 HHD", 
      windows: "Windows 10", 
      price: "GHC 899", 
      image: "laps/c.jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Dell Latitude", 
      processor: "Intel core i3", 
      type: "Education", 
      memory: "4GB", 
      storage: "128 SSD", 
      windows: "Windows 11", 
      price: "GHC 2250", 
      image: "laps/c (2).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "HP laptop", 
      processor: "Intel core i5", 
      type: "Gaming", 
      memory: "8GB", 
      storage: "512 SSD", 
      windows: "Windows 11", 
      price: "GHC 4990", 
      image: "laps/q (10).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Acer Laptop", 
      processor: "Intel core i5", 
      type: "Gaming", 
      memory: "8GB", 
      storage: "500 HDD", 
      windows: "Windows 11", 
      price: "GHC 2500", 
      image: "laps/q (39).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Fijitsu", 
      processor: "Intel core i5", 
      type: "Traditional", 
      memory: "8GB", 
      storage: "500 HDD", 
      windows: "Windows 11", 
      price: "GHC 1700", 
      image: "laps/q (37).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Macbook Air 2015", 
      processor: "Intel core i5", 
      type: "Ultrabook", 
      memory: "4GB", 
      storage: "128 SSD", 
      windows: "Mac OS", 
      price: "GHC 1800", 
      image: "laps/q (38).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },   
    { 
      name: "Lenovo", 
      processor: "Intel quad core", 
      type: "Traditional", 
      memory: "8GB", 
      storage: "250 SSD", 
      windows: "Windows 11", 
      price: "GHC 2300", 
      image: "laps/q (35).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Acer Aspire E", 
      processor: "Intel dual core", 
      type: "Education", 
      memory: "2GB", 
      storage: "32 HDD", 
      windows: "Windows 10", 
      price: "GHC 850", 
      image: "laps/s (4).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Sony Laptop", 
      processor: "Intel pentium", 
      type: "Education", 
      memory: "2GB", 
      storage: "320 HDD", 
      windows: "Windows 10", 
      price: "GHC 800", 
      image: "laps/s (6).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },    
    { 
      name: "HP Laptop", 
      processor: "Intel core 2 duo", 
      type: "Traditional", 
      memory: "4GB", 
      storage: "320 HDD", 
      windows: "Windows 11", 
      price: "GHC 750", 
      image: "laps/s (5).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Lenovo", 
      processor: "Intel dual core", 
      type: "Education", 
      memory: "1GB", 
      storage: "16 eMMC", 
      windows: "Chrome OS", 
      price: "GHC 600", 
      image: "laps/s (36).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },   
    { 
      name: "MacBook 2010", 
      processor: "Intel core 2 quad", 
      type: "Education", 
      memory: "4GB", 
      storage: "250 HDD", 
      windows: "Mac OS", 
      price: "GHC 850", 
      image: "laps/s (12).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "HP EliteBook", 
      processor: "Intel core i5", 
      type: "Convertible", 
      memory: "8GB", 
      storage: "256 SSD", 
      windows: "Windows 11", 
      price: "GHC 2700", 
      image: "laps/q (45).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Lenovo ThinkPad", 
      processor: "Intel core i5", 
      type: "Convertible", 
      memory: "8GB", 
      storage: "256 SSD", 
      windows: "Windows 11", 
      price: "GHC 2700", 
      image: "laps/q (46).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Lenovo ThinkPad", 
      processor: "Intel core i7", 
      type: "Gaming", 
      memory: "8GB", 
      storage: "256 SSD", 
      windows: "Windows 11", 
      price: "GHC 2500", 
      image: "laps/q (44).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Dell Laptop", 
      processor: "Intel core i7", 
      type: "Gaming", 
      memory: "16GB", 
      storage: "256 SSD", 
      windows: "Windows 11", 
      price: "GHC 2700", 
      image: "laps/q (43).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Lenovo", 
      processor: "Intel core i3", 
      type: "Coonvertible", 
      memory: "4GB", 
      storage: "500 HDD", 
      windows: "Windows 10", 
      price: "GHC 1700", 
      image: "laps/q (42).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "HP EliteBook", 
      processor: "Intel core i5", 
      type: "Gaming", 
      memory: "8GB", 
      storage: "256 SSD", 
      windows: "Windows 11", 
      price: "GHC 5700", 
      image: "laps/a (2).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Asus ZenBook", 
      processor: "Intel core i9", 
      type: "Gaming", 
      memory: "16GB", 
      storage: "1tb SSD", 
      windows: "Windows 11", 
      price: "GHC 25700", 
      image: "laps/q (5).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "MacBook 2020", 
      processor: "Intel core i5", 
      type: "UltraBook", 
      memory: "8GB", 
      storage: "256 SSD", 
      windows: "Mac OS", 
      price: "GHC 2700", 
      image: "laps/q (19).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Acer Prediator", 
      processor: "Intel core i7", 
      type: "Gaming", 
      memory: "16GB", 
      storage: "512 SSD", 
      windows: "Windows 11", 
      price: "GHC 11700", 
      image: "laps/q (11).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Lenovo ThinkPad", 
      processor: "Intel core i5", 
      type: "Gaming", 
      memory: "8GB", 
      storage: "256 SSD", 
      windows: "Windows 11", 
      price: "GHC 2500", 
      image: "laps/q (39).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "HP EliteBook", 
      processor: "Intel core i5", 
      type: "Semi-Gaming", 
      memory: "8GB", 
      storage: "500 HDD", 
      windows: "Windows 11", 
      price: "GHC 2700", 
      image: "laps/q (41).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },    
    { 
      name: "Lenovo Yoga", 
      processor: "Intel quad core", 
      type: "X360 Convertible", 
      memory: "4GB", 
      storage: "256 SSD", 
      windows: "Windows 10", 
      price: "GHC 1900", 
      image: "laps/d (2).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "HP Laptop", 
      processor: "Intel core i5", 
      type: "Semi-Gaming", 
      memory: "8GB", 
      storage: "500 HDD", 
      windows: "Windows 10", 
      price: "GHC 1700", 
      image: "laps/d (5).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "MacBook Wholesale", 
      processor: "All", 
      type: "All", 
      memory: "All", 
      storage: "All", 
      windows: "Mac OS", 
      price: "GHC 700-3000", 
      image: "laps/d (4).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "HP Wholesale", 
      processor: "Intel core i5", 
      type: "Gaming", 
      memory: "4GB-16GB", 
      storage: "SSD", 
      windows: "Windows 11", 
      price: "GHC 3000-6000", 
      image: "laps/d (6).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Lenovo Yoga", 
      processor: "Intel core i3", 
      type: "X360 Convertible", 
      memory: "4GB", 
      storage: "128 SSD", 
      windows: "Windows 10", 
      price: "GHC 1900", 
      image: "laps/q (2).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
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






  