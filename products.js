// Product Database
const products = [
  {
    id: 1,
    name: "MS Equal Angle",
    category: "angles",
    categoryName: "MS Angles",
    icon: "📐",
    badge: "Hot Rolled",
    description:
      "High-quality mild steel equal angles for structural applications",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 808:1989",
    specifications: [
      {
        size: "25 x 25 x 3",
        weight: "1.11",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "25 x 25 x 5",
        weight: "1.77",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "30 x 30 x 3",
        weight: "1.36",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "30 x 30 x 5",
        weight: "2.18",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "40 x 40 x 5",
        weight: "2.97",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "40 x 40 x 6",
        weight: "3.52",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "50 x 50 x 5",
        weight: "3.77",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "50 x 50 x 6",
        weight: "4.47",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "65 x 65 x 6",
        weight: "5.85",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "75 x 75 x 6",
        weight: "6.85",
        grade: "E250",
        standard: "IS 808",
      },
    ],
  },
  {
    id: 2,
    name: "MS Unequal Angle",
    category: "angles",
    categoryName: "MS Angles",
    icon: "📐",
    badge: "Hot Rolled",
    description: "Mild steel unequal angles for versatile construction needs",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 808:1989",
    specifications: [
      {
        size: "40 x 25 x 3",
        weight: "1.48",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "50 x 30 x 5",
        weight: "2.97",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "60 x 40 x 5",
        weight: "3.77",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "60 x 40 x 6",
        weight: "4.47",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "75 x 50 x 6",
        weight: "5.62",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "100 x 75 x 8",
        weight: "10.60",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "125 x 75 x 10",
        weight: "15.10",
        grade: "E250",
        standard: "IS 808",
      },
      {
        size: "150 x 100 x 12",
        weight: "22.90",
        grade: "E250",
        standard: "IS 808",
      },
    ],
  },
  {
    id: 3,
    name: "MS Channel (ISMC)",
    category: "channels",
    categoryName: "MS Channels",
    icon: "🔩",
    badge: "Hot Rolled",
    description: "Indian Standard Medium Weight Channels for construction",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 3954:1994",
    specifications: [
      { size: "75 x 40", weight: "6.80", grade: "E250", standard: "IS 3954" },
      { size: "100 x 50", weight: "9.20", grade: "E250", standard: "IS 3954" },
      { size: "125 x 65", weight: "13.10", grade: "E250", standard: "IS 3954" },
      { size: "150 x 75", weight: "16.40", grade: "E250", standard: "IS 3954" },
      { size: "175 x 75", weight: "19.10", grade: "E250", standard: "IS 3954" },
      { size: "200 x 75", weight: "22.30", grade: "E250", standard: "IS 3954" },
      { size: "250 x 82", weight: "31.10", grade: "E250", standard: "IS 3954" },
      { size: "300 x 90", weight: "36.30", grade: "E250", standard: "IS 3954" },
      {
        size: "400 x 100",
        weight: "49.40",
        grade: "E250",
        standard: "IS 3954",
      },
    ],
  },
  {
    id: 4,
    name: "MS I Beam (ISMB)",
    category: "beams",
    categoryName: "I Beams",
    icon: "🏗️",
    badge: "Hot Rolled",
    description: "Indian Standard Medium Weight Beams for heavy structural use",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 808:1989",
    specifications: [
      { size: "100 x 75", weight: "11.50", grade: "E250", standard: "IS 808" },
      { size: "125 x 75", weight: "13.70", grade: "E250", standard: "IS 808" },
      { size: "150 x 80", weight: "17.20", grade: "E250", standard: "IS 808" },
      { size: "175 x 85", weight: "20.90", grade: "E250", standard: "IS 808" },
      { size: "200 x 100", weight: "25.40", grade: "E250", standard: "IS 808" },
      { size: "250 x 125", weight: "37.30", grade: "E250", standard: "IS 808" },
      { size: "300 x 140", weight: "46.10", grade: "E250", standard: "IS 808" },
      { size: "350 x 165", weight: "52.40", grade: "E250", standard: "IS 808" },
      { size: "450 x 150", weight: "72.40", grade: "E250", standard: "IS 808" },
      {
        size: "600 x 210",
        weight: "122.60",
        grade: "E250",
        standard: "IS 808",
      },
    ],
  },
  {
    id: 5,
    name: "MS Plates",
    category: "plates",
    categoryName: "Plates & Sheets",
    icon: "📄",
    badge: "Hot Rolled",
    description: "High-quality mild steel plates for various applications",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 2062:2011",
    specifications: [
      {
        size: "5mm thickness",
        weight: "39.25",
        grade: "E250",
        standard: "IS 2062",
      },
      {
        size: "6mm thickness",
        weight: "47.10",
        grade: "E250",
        standard: "IS 2062",
      },
      {
        size: "8mm thickness",
        weight: "62.80",
        grade: "E250",
        standard: "IS 2062",
      },
      {
        size: "10mm thickness",
        weight: "78.50",
        grade: "E250",
        standard: "IS 2062",
      },
      {
        size: "12mm thickness",
        weight: "94.20",
        grade: "E250",
        standard: "IS 2062",
      },
      {
        size: "16mm thickness",
        weight: "125.60",
        grade: "E250",
        standard: "IS 2062",
      },
      {
        size: "20mm thickness",
        weight: "157.00",
        grade: "E250",
        standard: "IS 2062",
      },
      {
        size: "25mm thickness",
        weight: "196.25",
        grade: "E250",
        standard: "IS 2062",
      },
    ],
  },
  {
    id: 6,
    name: "MS Round Pipes",
    category: "pipes",
    categoryName: "Pipes & Tubes",
    icon: "⚙️",
    badge: "ERW",
    description: "Electric Resistance Welded round pipes for structural use",
    grade: "IS 1239 Part 1 YST 210/240/310",
    standard: "IS 1239:2004",
    specifications: [
      {
        size: "15 NB (21.3 OD)",
        weight: "1.27",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "20 NB (26.9 OD)",
        weight: "1.69",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "25 NB (33.7 OD)",
        weight: "2.20",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "32 NB (42.4 OD)",
        weight: "2.93",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "40 NB (48.3 OD)",
        weight: "3.56",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "50 NB (60.3 OD)",
        weight: "4.69",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "65 NB (76.1 OD)",
        weight: "6.15",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "80 NB (88.9 OD)",
        weight: "7.48",
        grade: "YST 240",
        standard: "IS 1239",
      },
      {
        size: "100 NB (114.3 OD)",
        weight: "10.07",
        grade: "YST 240",
        standard: "IS 1239",
      },
    ],
  },
  {
    id: 7,
    name: "MS Square Tubes",
    category: "pipes",
    categoryName: "Pipes & Tubes",
    icon: "🔲",
    badge: "Hot Rolled",
    description: "Square hollow sections for structural applications",
    grade: "IS 4923 YST 310",
    standard: "IS 4923:1997",
    specifications: [
      {
        size: "20 x 20 x 2",
        weight: "1.12",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "25 x 25 x 2",
        weight: "1.42",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "40 x 40 x 2",
        weight: "2.33",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "50 x 50 x 3",
        weight: "4.31",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "60 x 60 x 3",
        weight: "5.29",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "80 x 80 x 4",
        weight: "9.42",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "100 x 100 x 5",
        weight: "14.80",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "120 x 120 x 6",
        weight: "21.30",
        grade: "YST 310",
        standard: "IS 4923",
      },
    ],
  },
  {
    id: 8,
    name: "MS Rectangular Tubes",
    category: "pipes",
    categoryName: "Pipes & Tubes",
    icon: "▭",
    badge: "Hot Rolled",
    description: "Rectangular hollow sections for structural frameworks",
    grade: "IS 4923 YST 310",
    standard: "IS 4923:1997",
    specifications: [
      {
        size: "40 x 20 x 2",
        weight: "1.78",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "50 x 25 x 2",
        weight: "2.23",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "60 x 40 x 3",
        weight: "4.31",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "80 x 40 x 3",
        weight: "5.29",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "100 x 50 x 4",
        weight: "8.84",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "120 x 60 x 5",
        weight: "13.40",
        grade: "YST 310",
        standard: "IS 4923",
      },
      {
        size: "150 x 75 x 6",
        weight: "20.10",
        grade: "YST 310",
        standard: "IS 4923",
      },
    ],
  },
  {
    id: 9,
    name: "MS Flat Bars",
    category: "plates",
    categoryName: "Plates & Sheets",
    icon: "▬",
    badge: "Hot Rolled",
    description: "Mild steel flat bars for general engineering applications",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 1730:1989",
    specifications: [
      { size: "25 x 3", weight: "0.56", grade: "E250", standard: "IS 1730" },
      { size: "25 x 5", weight: "0.98", grade: "E250", standard: "IS 1730" },
      { size: "40 x 5", weight: "1.57", grade: "E250", standard: "IS 1730" },
      { size: "50 x 6", weight: "2.36", grade: "E250", standard: "IS 1730" },
      { size: "65 x 6", weight: "3.06", grade: "E250", standard: "IS 1730" },
      { size: "75 x 8", weight: "4.72", grade: "E250", standard: "IS 1730" },
      { size: "100 x 10", weight: "7.85", grade: "E250", standard: "IS 1730" },
      { size: "150 x 12", weight: "14.13", grade: "E250", standard: "IS 1730" },
    ],
  },
  {
    id: 10,
    name: "MS Round Bars",
    category: "plates",
    categoryName: "Plates & Sheets",
    icon: "⭕",
    badge: "Hot Rolled",
    description: "Round bars for machining and general engineering",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 1786:2008",
    specifications: [
      { size: "8mm dia", weight: "0.395", grade: "E250", standard: "IS 1786" },
      { size: "10mm dia", weight: "0.617", grade: "E250", standard: "IS 1786" },
      { size: "12mm dia", weight: "0.888", grade: "E250", standard: "IS 1786" },
      { size: "16mm dia", weight: "1.578", grade: "E250", standard: "IS 1786" },
      { size: "20mm dia", weight: "2.466", grade: "E250", standard: "IS 1786" },
      { size: "25mm dia", weight: "3.854", grade: "E250", standard: "IS 1786" },
      { size: "32mm dia", weight: "6.313", grade: "E250", standard: "IS 1786" },
      { size: "40mm dia", weight: "9.864", grade: "E250", standard: "IS 1786" },
    ],
  },
  {
    id: 11,
    name: "MS Junior Beam (ISJB)",
    category: "beams",
    categoryName: "I Beams",
    icon: "🏗️",
    badge: "Hot Rolled",
    description:
      "Indian Standard Junior Beams for light structural applications",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 808:1989",
    specifications: [
      { size: "100 x 50", weight: "6.10", grade: "E250", standard: "IS 808" },
      { size: "125 x 75", weight: "10.00", grade: "E250", standard: "IS 808" },
      { size: "150 x 75", weight: "11.50", grade: "E250", standard: "IS 808" },
      { size: "175 x 90", weight: "15.20", grade: "E250", standard: "IS 808" },
      { size: "200 x 100", weight: "18.40", grade: "E250", standard: "IS 808" },
      { size: "225 x 100", weight: "21.10", grade: "E250", standard: "IS 808" },
      { size: "250 x 100", weight: "24.80", grade: "E250", standard: "IS 808" },
    ],
  },
  {
    id: 12,
    name: "MS Chequered Plates",
    category: "plates",
    categoryName: "Plates & Sheets",
    icon: "▦",
    badge: "Hot Rolled",
    description: "Anti-skid chequered plates for flooring and stair treads",
    grade: "IS 2062 E250 (Fe 410 W) A",
    standard: "IS 3502:1992",
    specifications: [
      {
        size: "3mm thickness",
        weight: "25.10",
        grade: "E250",
        standard: "IS 3502",
      },
      {
        size: "4mm thickness",
        weight: "32.50",
        grade: "E250",
        standard: "IS 3502",
      },
      {
        size: "5mm thickness",
        weight: "40.80",
        grade: "E250",
        standard: "IS 3502",
      },
      {
        size: "6mm thickness",
        weight: "48.90",
        grade: "E250",
        standard: "IS 3502",
      },
      {
        size: "8mm thickness",
        weight: "65.20",
        grade: "E250",
        standard: "IS 3502",
      },
      {
        size: "10mm thickness",
        weight: "81.50",
        grade: "E250",
        standard: "IS 3502",
      },
    ],
  },
];

// Display products function
function displayProducts(productsToDisplay, containerId = "catalogGrid") {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const card = `
      <div class="catalog-item" onclick="openProductDetail(${product.id})">
        <div class="catalog-item-img">
          <span class="catalog-badge">${product.badge}</span>
          <span style="font-size: 60px;">${product.icon}</span>
        </div>
        <div class="catalog-item-info">
          <div class="category">${product.categoryName}</div>
          <h3>${product.name}</h3>
          <p class="specs-preview">${product.description}</p>
          <button class="view-details-btn">View Details →</button>
        </div>
      </div>
    `;
    grid.innerHTML += card;
  });
}

// Filter products by category
function filterProducts(category) {
  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  displayProducts(filtered);
}

// Open product detail modal
function openProductDetail(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Update modal content
  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalProductCategory").textContent =
    product.categoryName;
  document.getElementById("modalProductIcon").textContent = product.icon;

  // Update product info
  const infoHtml = `
    <div class="info-row">
      <div class="info-label">Product Name:</div>
      <div class="info-value">${product.name}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Category:</div>
      <div class="info-value">${product.categoryName}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Grade:</div>
      <div class="info-value">${product.grade}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Standard:</div>
      <div class="info-value">${product.standard}</div>
    </div>
    <div class="info-row">
      <div class="info-label">Description:</div>
      <div class="info-value">${product.description}</div>
    </div>
  `;
  document.getElementById("modalProductInfo").innerHTML = infoHtml;

  // Update specifications table
  const specBody = document.getElementById("modalSpecBody");
  specBody.innerHTML = "";
  product.specifications.forEach((spec) => {
    const row = `
      <tr>
        <td>${spec.size}</td>
        <td>${spec.weight}</td>
        <td>${spec.grade}</td>
        <td>${spec.standard}</td>
      </tr>
    `;
    specBody.innerHTML += row;
  });

  // Show modal
  document.getElementById("productModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal
function closeModal() {
  document.getElementById("productModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

// Download specification
function downloadSpec() {
  alert(
    "Specification sheet download will be available soon. Please contact us for detailed specifications."
  );
}

// Inquire about product
function inquireProduct() {
  const productName = document.getElementById("modalProductName").textContent;
  const contactSection = document.getElementById("contact");
  closeModal();

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });

    // Pre-fill the product in the form
    setTimeout(() => {
      const select = document.querySelector(".contact-form select");
      if (select) {
        for (let option of select.options) {
          if (
            option.text.includes(productName.split(" ")[0]) ||
            option.text.includes(productName.split(" ")[1])
          ) {
            select.value = option.value;
            break;
          }
        }
      }
    }, 500);
  } else {
    // If no contact section on page, redirect to home contact
    window.location.href = "index.html#contact";
  }
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("productModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
// Gallery Tab Switching
function showGallery(type) {
  // Hide all galleries
  document.getElementById("factory").style.display = "none";
  document.getElementById("machinery").style.display = "none";
  document.getElementById("production").style.display = "none";

  // Show selected gallery
  document.getElementById(type).style.display = "grid";

  // Update active tab
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => tab.classList.remove("active"));
  event.target.classList.add("active");
}

// FAQ Toggle
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQs
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked FAQ if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active");
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
const fadeItems = document.querySelectorAll(".fade-item");

function revealOnScroll() {
  fadeItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ---------- PHOTO-BASED PRODUCT RENDERING ---------- */
(function () {
  if (window.__isiProductPhotosReady) return;
  window.__isiProductPhotosReady = true;

  function slugify(value) {
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function productImages(product) {
    const slug = slugify(product.name || product.categoryName || "product");
    const category = slugify(product.categoryName || "steel");
    return [
      "https://loremflickr.com/1200/900/" + category + ",industrial?lock=" + slug + "-1",
      "https://loremflickr.com/1200/900/" + category + ",steel?lock=" + slug + "-2",
      "https://loremflickr.com/1200/900/industrial,steel,workshop?lock=" + slug + "-3",
    ];
  }

  function productHeroHtml(product) {
    const images = product.images || productImages(product);
    return (
      '<img class="product-photo" src="' +
      images[0] +
      '" alt="' +
      product.name +
      '" />'
    );
  }

  displayProducts = window.displayProducts = function (productsToDisplay, containerId = "catalogGrid") {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    grid.innerHTML = "";

    productsToDisplay.forEach((product) => {
      const images = product.images || productImages(product);
      const card = `
        <div class="catalog-item" onclick="openProductDetail(${product.id})">
          <div class="catalog-item-img">
            <span class="catalog-badge">${product.badge}</span>
            <img src="${images[0]}" alt="${product.name}" class="catalog-item-photo" />
          </div>
          <div class="catalog-item-info">
            <div class="category">${product.categoryName}</div>
            <h3>${product.name}</h3>
            <p class="specs-preview">${product.description}</p>
            <button class="view-details-btn">View Details →</button>
          </div>
        </div>
      `;
      grid.insertAdjacentHTML("beforeend", card);
    });
  };

  openProductDetail = window.openProductDetail = function (productId) {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const images = product.images || productImages(product);

    document.getElementById("modalProductName").textContent = product.name;
    document.getElementById("modalProductCategory").textContent = product.categoryName;

    const hero = document.getElementById("modalProductIcon");
    if (hero) {
      hero.innerHTML = productHeroHtml({ ...product, images });
    }

    const infoHtml = `
      <div class="info-row">
        <div class="info-label">Product Name:</div>
        <div class="info-value">${product.name}</div>
      </div>
      <div class="info-row">
        <div class="info-label">Category:</div>
        <div class="info-value">${product.categoryName}</div>
      </div>
      <div class="info-row">
        <div class="info-label">Grade:</div>
        <div class="info-value">${product.grade}</div>
      </div>
      <div class="info-row">
        <div class="info-label">Standard:</div>
        <div class="info-value">${product.standard}</div>
      </div>
      <div class="info-row">
        <div class="info-label">Description:</div>
        <div class="info-value">${product.description}</div>
      </div>
    `;
    document.getElementById("modalProductInfo").innerHTML = infoHtml;

    const specBody = document.getElementById("modalSpecBody");
    specBody.innerHTML = "";
    product.specifications.forEach((spec) => {
      const row = `
        <tr>
          <td>${spec.size}</td>
          <td>${spec.weight}</td>
          <td>${spec.grade}</td>
          <td>${spec.standard}</td>
        </tr>
      `;
      specBody.insertAdjacentHTML("beforeend", row);
    });

    document.getElementById("productModal").classList.add("active");
    document.body.style.overflow = "hidden";
  };
})();
