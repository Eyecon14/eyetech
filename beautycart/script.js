// Sample data for laptops including image URLs and contact numbers
const laptops = [

    { 
      name: "Pink Vervet", 
      platform: "Unisex", 
      type: "3 in 1",  
      price: "GHC 110", 
      image: "beauty/a (1).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Noir", 
      platform: "Male", 
      type: "3 in 1",  
      price: "GHC 130", 
      image: "beauty/a (2).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },     { 
      name: "Valiance", 
      platform: "Unisex", 
      type: "Perfume",  
      price: "GHC 120", 
      image: "beauty/a (3).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },     { 
      name: "Others", 
      platform: "Unisex", 
      type: "Spray",  
      price: "GHC 50-150", 
      image: "beauty/a (4).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },     { 
      name: "Tropical", 
      platform: "Unisex", 
      type: "3 in 1",  
      price: "GHC 100", 
      image: "beauty/a (5).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },     { 
      name: "Dear Body", 
      platform: "Unisex", 
      type: "2 in 1",  
      price: "GHC 90", 
      image: "beauty/a (6).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },
    { 
      name: "Calvin Klein", 
      platform: "Male", 
      type: "Perfume",  
      price: "GHC 130", 
      image: "beauty/a (7).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Amor", 
      platform: "Unisex", 
      type: "Perfume",  
      price: "GHC 150", 
      image: "beauty/a (8).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Others", 
      platform: "Unisex", 
      type: "SPray",  
      price: "GHC 120", 
      image: "beauty/a (9).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Pure Black", 
      platform: "Male", 
      type: "Perfume",  
      price: "GHC 150", 
      image: "beauty/a (10).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "I Am With You", 
      platform: "Unisex", 
      type: "Plastic",  
      price: "GHC 100", 
      image: "beauty/a (12).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    },  
    { 
      name: "Others", 
      platform: "Unisex", 
      type: "Perfume",  
      price: "GHC 120", 
      image: "beauty/a (30).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Others", 
      platform: "Unisex", 
      type: "Spray",  
      price: "GHC 80", 
      image: "beauty/a (16).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Others", 
      platform: "Unisex", 
      type: "Spray",  
      price: "GHC 100", 
      image: "beauty/a (15).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "The Chairman", 
      platform: "Male", 
      type: "Perfume",  
      price: "GHC 150", 
      image: "beauty/a (17).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Chenale", 
      platform: "Female", 
      type: "Full Package",  
      price: "GHC 230", 
      image: "beauty/a (18).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Dior", 
      platform: "Female", 
      type: "Perfume",  
      price: "GHC 130", 
      image: "beauty/a (19).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Tomford", 
      platform: "Female", 
      type: "Perfume",  
      price: "GHC 110", 
      image: "beauty/a (20).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Others", 
      platform: "Female", 
      type: "3 in 1",  
      price: "GHC 180", 
      image: "beauty/a (21).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Sublime", 
      platform: "Unisex", 
      type: "Spray",  
      price: "GHC 100", 
      image: "beauty/a (22).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Others", 
      platform: "Unisex", 
      type: "Perfume",  
      price: "GHC 90", 
      image: "beauty/a (23).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Ophylia", 
      platform: "Unisex", 
      type: "Perfume",  
      price: "GHC 170", 
      image: "beauty/a (24).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Unique", 
      platform: "Unisex", 
      type: "Perfume",  
      price: "GHC 120", 
      image: "beauty/a (25).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Intro", 
      platform: "Unisex", 
      type: "Spray",  
      price: "GHC 120", 
      image: "beauty/a (26).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Good Girl", 
      platform: "Female", 
      type: "Perfume",  
      price: "GHC 130", 
      image: "beauty/a (27).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Yara", 
      platform: "Female", 
      type: "Spray",  
      price: "GHC 120", 
      image: "beauty/a (28).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Fragrance", 
      platform: "Unisex", 
      type: "Spray",  
      price: "GHC 190", 
      image: "beauty/a (27).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 
    { 
      name: "Others", 
      platform: "Unisex", 
      type: "3 in 1",  
      price: "GHC 130", 
      image: "beauty/a (29).jpg", // Replace "laptop-a.jpg" with the actual image URL for Laptop A
      whatsapp: "+233507326886", // Replace "+1234567890" with the WhatsApp number for Laptop A
      call: "0533420206" // Replace "+1234567890" with the call number for Laptop A
    }, 


    // Add more as needed
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






  