// ==========================================
// CATÁLOGO DE PRODUCTOS
// 13 CATEGORÍAS - 225 PRODUCTOS
// ==========================================

// ==========================================
// CELULARES - 30 PRODUCTOS
// ==========================================

export const arrayCelulares = [
    {
        id: 1,
        sku: "CEL-IPH-001",
        marca: "Apple",
        modelo: "iPhone 17",
        imagenes: [
            "https://i.postimg.cc/W4r3Rws7/image-search-1788802797575.jpg",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80", 
            "https://i.postimg.cc/XqDGNNm5/image-search-1788803929102.webp"
        ],
        nombre: "Apple iPhone 17 256GB",
        categoria: "Celulares",
        subcategoria: "iPhone",
        precioOferta: 1450000,
        stock: true,
        descripcion: "Smartphone Apple de última generación con pantalla OLED, gran rendimiento y almacenamiento de 256GB.",
        especificaciones: {
            pantalla: "6.3 pulgadas OLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "Sistema avanzado de cámaras",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "iOS",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 2,
        sku: "CEL-IPH-002",
        marca: "Apple",
        modelo: "iPhone 17 Pro",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Apple iPhone 17 Pro 256GB",
        categoria: "Celulares",
        subcategoria: "iPhone",
        precioOferta: 1850000,
        stock: true,
        descripcion: "iPhone Pro con rendimiento premium, cámara profesional y pantalla OLED de alta resolución.",
        especificaciones: {
            pantalla: "6.3 pulgadas OLED",
            almacenamiento: "256GB",
            memoriaRAM: "12GB",
            camara: "Sistema Pro de cámaras",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "iOS",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 3,
        sku: "CEL-IPH-003",
        marca: "Apple",
        modelo: "iPhone 16",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Apple iPhone 16 128GB",
        categoria: "Celulares",
        subcategoria: "iPhone",
        precioOferta: 1250000,
        stock: true,
        descripcion: "iPhone con excelente rendimiento, cámara avanzada y pantalla OLED.",
        especificaciones: {
            pantalla: "6.1 pulgadas OLED",
            almacenamiento: "128GB",
            memoriaRAM: "8GB",
            camara: "Cámara dual avanzada",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "iOS",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 4,
        sku: "CEL-IPH-004",
        marca: "Apple",
        modelo: "iPhone 16 Pro",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Apple iPhone 16 Pro 256GB",
        categoria: "Celulares",
        subcategoria: "iPhone",
        precioOferta: 1650000,
        stock: true,
        descripcion: "Smartphone profesional con gran potencia, cámara Pro y pantalla Super Retina.",
        especificaciones: {
            pantalla: "6.3 pulgadas OLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "Sistema Pro de cámaras",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "iOS",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 5,
        sku: "CEL-SAM-005",
        marca: "Samsung",
        modelo: "Galaxy A06",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy A06 128GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 285000,
        stock: true,
        descripcion: "Celular económico Samsung con pantalla amplia, batería de larga duración y almacenamiento de 128GB.",
        especificaciones: {
            pantalla: "6.7 pulgadas",
            almacenamiento: "128GB",
            memoriaRAM: "4GB",
            camara: "50MP + cámara frontal",
            bateria: "5000mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 6,
        sku: "CEL-SAM-006",
        marca: "Samsung",
        modelo: "Galaxy A16",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy A16 128GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 365000,
        stock: true,
        descripcion: "Smartphone Samsung equilibrado para uso diario, redes sociales, fotografía y entretenimiento.",
        especificaciones: {
            pantalla: "6.7 pulgadas Super AMOLED",
            almacenamiento: "128GB",
            memoriaRAM: "4GB",
            camara: "50MP triple cámara",
            bateria: "5000mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 7,
        sku: "CEL-SAM-007",
        marca: "Samsung",
        modelo: "Galaxy A26",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy A26 256GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 485000,
        stock: true,
        descripcion: "Smartphone Samsung con pantalla AMOLED, amplio almacenamiento y cámara de alta resolución.",
        especificaciones: {
            pantalla: "6.7 pulgadas AMOLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 8,
        sku: "CEL-SAM-008",
        marca: "Samsung",
        modelo: "Galaxy A36",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy A36 256GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 595000,
        stock: true,
        descripcion: "Celular 5G de gama media con pantalla AMOLED y excelente autonomía.",
        especificaciones: {
            pantalla: "6.7 pulgadas AMOLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP OIS",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 9,
        sku: "CEL-SAM-009",
        marca: "Samsung",
        modelo: "Galaxy A56",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy A56 256GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 725000,
        stock: true,
        descripcion: "Smartphone Samsung de gama media alta con gran pantalla, cámara avanzada y 5G.",
        especificaciones: {
            pantalla: "6.7 pulgadas Super AMOLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP OIS",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi 6 / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 10,
        sku: "CEL-SAM-010",
        marca: "Samsung",
        modelo: "Galaxy S24 FE",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy S24 FE 256GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 890000,
        stock: true,
        descripcion: "Smartphone premium con pantalla Dynamic AMOLED, cámara avanzada y procesador de alto rendimiento.",
        especificaciones: {
            pantalla: "6.7 pulgadas Dynamic AMOLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP triple cámara",
            bateria: "4700mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 11,
        sku: "CEL-SAM-011",
        marca: "Samsung",
        modelo: "Galaxy S25",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy S25 256GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 1100000,
        stock: true,
        descripcion: "Smartphone premium Samsung con procesador de última generación y cámara profesional.",
        especificaciones: {
            pantalla: "6.2 pulgadas Dynamic AMOLED 2X",
            almacenamiento: "256GB",
            memoriaRAM: "12GB",
            camara: "50MP triple cámara",
            bateria: "4000mAh",
            conectividad: "5G / Wi-Fi 7 / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 12,
        sku: "CEL-SAM-012",
        marca: "Samsung",
        modelo: "Galaxy S25 Ultra",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung Galaxy S25 Ultra 256GB",
        categoria: "Celulares",
        subcategoria: "Samsung",
        precioOferta: 1550000,
        stock: true,
        descripcion: "Smartphone insignia Samsung con pantalla premium, S Pen y sistema de cámaras profesional.",
        especificaciones: {
            pantalla: "6.9 pulgadas Dynamic AMOLED 2X",
            almacenamiento: "256GB",
            memoriaRAM: "12GB",
            camara: "200MP cuádruple cámara",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi 7 / Bluetooth",
            sistema: "Android",
            accesorio: "S Pen",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 13,
        sku: "CEL-MOT-013",
        marca: "Motorola",
        modelo: "Moto G05",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Motorola Moto G05 128GB",
        categoria: "Celulares",
        subcategoria: "Motorola",
        precioOferta: 260000,
        stock: true,
        descripcion: "Celular económico Motorola para uso diario con gran batería y almacenamiento ampliable.",
        especificaciones: {
            pantalla: "6.7 pulgadas",
            almacenamiento: "128GB",
            memoriaRAM: "4GB",
            camara: "50MP",
            bateria: "5200mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 14,
        sku: "CEL-MOT-014",
        marca: "Motorola",
        modelo: "Moto G15",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Motorola Moto G15 256GB",
        categoria: "Celulares",
        subcategoria: "Motorola",
        precioOferta: 325000,
        stock: true,
        descripcion: "Smartphone Motorola con pantalla amplia, buen rendimiento y batería de larga duración.",
        especificaciones: {
            pantalla: "6.7 pulgadas Full HD+",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP",
            bateria: "5200mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 15,
        sku: "CEL-MOT-015",
        marca: "Motorola",
        modelo: "Moto G55",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Motorola Moto G55 256GB",
        categoria: "Celulares",
        subcategoria: "Motorola",
        precioOferta: 430000,
        stock: true,
        descripcion: "Motorola 5G con pantalla de alta frecuencia, cámara avanzada y excelente autonomía.",
        especificaciones: {
            pantalla: "6.5 pulgadas 120Hz",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP OIS",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 16,
        sku: "CEL-MOT-016",
        marca: "Motorola",
        modelo: "Moto G75",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Motorola Moto G75 256GB",
        categoria: "Celulares",
        subcategoria: "Motorola",
        precioOferta: 495000,
        stock: true,
        descripcion: "Smartphone resistente con 5G, cámara estabilizada y pantalla fluida.",
        especificaciones: {
            pantalla: "6.78 pulgadas 120Hz",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP OIS",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            resistencia: "Protección contra agua y polvo",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 17,
        sku: "CEL-MOT-017",
        marca: "Motorola",
        modelo: "Edge 50 Fusion",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Motorola Edge 50 Fusion 256GB",
        categoria: "Celulares",
        subcategoria: "Motorola Edge",
        precioOferta: 650000,
        stock: true,
        descripcion: "Smartphone premium Motorola con diseño delgado, pantalla pOLED y cámara de alta resolución.",
        especificaciones: {
            pantalla: "6.7 pulgadas pOLED 144Hz",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP OIS",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            carga: "68W TurboPower",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 18,
        sku: "CEL-MOT-018",
        marca: "Motorola",
        modelo: "Edge 50 Pro",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Motorola Edge 50 Pro 512GB",
        categoria: "Celulares",
        subcategoria: "Motorola Edge",
        precioOferta: 850000,
        stock: true,
        descripcion: "Motorola de gama alta con pantalla pOLED, cámara profesional y carga ultrarrápida.",
        especificaciones: {
            pantalla: "6.7 pulgadas pOLED 144Hz",
            almacenamiento: "512GB",
            memoriaRAM: "12GB",
            camara: "50MP triple cámara",
            bateria: "4500mAh",
            conectividad: "5G / Wi-Fi 7 / Bluetooth",
            sistema: "Android",
            carga: "125W TurboPower",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 19,
        sku: "CEL-XIA-019",
        marca: "Xiaomi",
        modelo: "Redmi A5",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xiaomi Redmi A5 128GB",
        categoria: "Celulares",
        subcategoria: "Xiaomi",
        precioOferta: 225000,
        stock: true,
        descripcion: "Smartphone económico Xiaomi con pantalla amplia y batería de gran capacidad.",
        especificaciones: {
            pantalla: "6.88 pulgadas 120Hz",
            almacenamiento: "128GB",
            memoriaRAM: "4GB",
            camara: "32MP",
            bateria: "5200mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 20,
        sku: "CEL-XIA-020",
        marca: "Xiaomi",
        modelo: "Redmi Note 14",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xiaomi Redmi Note 14 256GB",
        categoria: "Celulares",
        subcategoria: "Xiaomi",
        precioOferta: 390000,
        stock: true,
        descripcion: "Smartphone Xiaomi con pantalla AMOLED, cámara de alta resolución y gran batería.",
        especificaciones: {
            pantalla: "6.67 pulgadas AMOLED 120Hz",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "108MP",
            bateria: "5500mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 21,
        sku: "CEL-XIA-021",
        marca: "Xiaomi",
        modelo: "Redmi Note 14 Pro",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xiaomi Redmi Note 14 Pro 256GB",
        categoria: "Celulares",
        subcategoria: "Xiaomi",
        precioOferta: 520000,
        stock: true,
        descripcion: "Redmi Note Pro con pantalla AMOLED, cámara de alta resolución y excelente rendimiento.",
        especificaciones: {
            pantalla: "6.67 pulgadas AMOLED 120Hz",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "200MP OIS",
            bateria: "5500mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            carga: "45W",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 22,
        sku: "CEL-XIA-022",
        marca: "Xiaomi",
        modelo: "Poco X7",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xiaomi Poco X7 256GB",
        categoria: "Celulares",
        subcategoria: "Poco",
        precioOferta: 575000,
        stock: true,
        descripcion: "Smartphone orientado al rendimiento con pantalla AMOLED y conectividad 5G.",
        especificaciones: {
            pantalla: "6.67 pulgadas AMOLED 120Hz",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "50MP OIS",
            bateria: "5110mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 23,
        sku: "CEL-XIA-023",
        marca: "Xiaomi",
        modelo: "Poco F7",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xiaomi Poco F7 256GB",
        categoria: "Celulares",
        subcategoria: "Poco",
        precioOferta: 750000,
        stock: true,
        descripcion: "Smartphone de alto rendimiento para juegos, multimedia y uso intensivo.",
        especificaciones: {
            pantalla: "6.67 pulgadas AMOLED 120Hz",
            almacenamiento: "256GB",
            memoriaRAM: "12GB",
            camara: "50MP",
            bateria: "6500mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            refrigeracion: "Sistema de refrigeración líquida",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 24,
        sku: "CEL-XIA-024",
        marca: "Xiaomi",
        modelo: "14T",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xiaomi 14T 512GB",
        categoria: "Celulares",
        subcategoria: "Xiaomi",
        precioOferta: 820000,
        stock: true,
        descripcion: "Smartphone premium Xiaomi con pantalla AMOLED y sistema fotográfico avanzado.",
        especificaciones: {
            pantalla: "6.67 pulgadas AMOLED 144Hz",
            almacenamiento: "512GB",
            memoriaRAM: "12GB",
            camara: "50MP Leica",
            bateria: "5000mAh",
            conectividad: "5G / Wi-Fi 6E / Bluetooth",
            sistema: "Android",
            carga: "67W",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 25,
        sku: "CEL-XIA-025",
        marca: "Xiaomi",
        modelo: "Xiaomi 15",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xiaomi 15 512GB",
        categoria: "Celulares",
        subcategoria: "Xiaomi Premium",
        precioOferta: 1150000,
        stock: true,
        descripcion: "Smartphone premium compacto con procesador de alta gama y cámaras Leica.",
        especificaciones: {
            pantalla: "6.36 pulgadas AMOLED",
            almacenamiento: "512GB",
            memoriaRAM: "12GB",
            camara: "50MP Leica triple cámara",
            bateria: "5240mAh",
            conectividad: "5G / Wi-Fi 7 / Bluetooth",
            sistema: "Android",
            carga: "90W",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 26,
        sku: "CEL-TCL-026",
        marca: "TCL",
        modelo: "50 SE",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "TCL 50 SE 256GB",
        categoria: "Celulares",
        subcategoria: "TCL",
        precioOferta: 280000,
        stock: true,
        descripcion: "Celular TCL económico con pantalla amplia y almacenamiento generoso.",
        especificaciones: {
            pantalla: "6.78 pulgadas 90Hz",
            almacenamiento: "256GB",
            memoriaRAM: "6GB",
            camara: "50MP",
            bateria: "5010mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 27,
        sku: "CEL-TCL-027",
        marca: "TCL",
        modelo: "50 Pro",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "TCL 50 Pro 512GB",
        categoria: "Celulares",
        subcategoria: "TCL",
        precioOferta: 410000,
        stock: true,
        descripcion: "Smartphone TCL con gran almacenamiento, pantalla fluida y cámara de alta resolución.",
        especificaciones: {
            pantalla: "6.8 pulgadas 120Hz",
            almacenamiento: "512GB",
            memoriaRAM: "8GB",
            camara: "50MP",
            bateria: "5010mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 28,
        sku: "CEL-HON-028",
        marca: "Honor",
        modelo: "X7c",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Honor X7c 256GB",
        categoria: "Celulares",
        subcategoria: "Honor",
        precioOferta: 330000,
        stock: true,
        descripcion: "Smartphone Honor económico con batería de gran capacidad y cámara de 108MP.",
        especificaciones: {
            pantalla: "6.77 pulgadas 120Hz",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "108MP",
            bateria: "6000mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 29,
        sku: "CEL-HON-029",
        marca: "Honor",
        modelo: "200 Lite",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Honor 200 Lite 256GB",
        categoria: "Celulares",
        subcategoria: "Honor",
        precioOferta: 430000,
        stock: true,
        descripcion: "Celular delgado y liviano con pantalla AMOLED y cámara frontal de alta resolución.",
        especificaciones: {
            pantalla: "6.7 pulgadas AMOLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "108MP",
            bateria: "4500mAh",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 30,
        sku: "CEL-ZTE-030",
        marca: "ZTE",
        modelo: "Blade A55",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "ZTE Blade A55 128GB",
        categoria: "Celulares",
        subcategoria: "ZTE",
        precioOferta: 210000,
        stock: true,
        descripcion: "Smartphone económico para uso diario con pantalla grande y batería de larga duración.",
        especificaciones: {
            pantalla: "6.75 pulgadas",
            almacenamiento: "128GB",
            memoriaRAM: "4GB",
            camara: "13MP",
            bateria: "5000mAh",
            conectividad: "4G / Wi-Fi / Bluetooth",
            sistema: "Android",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// GAMING - 15 PRODUCTOS
// ==========================================

export const arrayGaming = [
    {
        id: 41,
        sku: "GAM-PS5-001",
        marca: "Sony",
        modelo: "PlayStation 5 Slim",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Consola Sony PlayStation 5 Slim",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 999999,
        stock: true,
        descripcion: "Consola de nueva generación con SSD de alta velocidad, gráficos 4K y tecnología Ray Tracing.",
        especificaciones: {
            almacenamiento: "SSD 1TB",
            resolucion: "Hasta 4K",
            conectividad: "Wi-Fi / Bluetooth / HDMI",
            unidad: "Compatible con discos",
            tecnologia: "Ray Tracing",
            accesorios: "Control DualSense incluido",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 42,
        sku: "GAM-PS5-002",
        marca: "Sony",
        modelo: "PlayStation 5 Pro",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Sony PlayStation 5 Pro 2TB",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 1499999,
        stock: true,
        descripcion: "Consola premium de Sony con mayor potencia gráfica y almacenamiento SSD de 2TB.",
        especificaciones: {
            almacenamiento: "SSD 2TB",
            resolucion: "Hasta 8K",
            tecnologia: "Ray Tracing avanzado",
            conectividad: "Wi-Fi / Bluetooth / HDMI",
            HDR: "Compatible con HDR",
            accesorios: "Control DualSense",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 43,
        sku: "GAM-XBX-003",
        marca: "Microsoft",
        modelo: "Xbox Series S",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xbox Series S 512GB",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 650000,
        stock: true,
        descripcion: "Consola compacta de nueva generación con rendimiento hasta 1440p.",
        especificaciones: {
            almacenamiento: "SSD 512GB",
            resolucion: "Hasta 1440p",
            fps: "Hasta 120 FPS",
            conectividad: "Wi-Fi / Bluetooth / HDMI",
            unidad: "Digital",
            accesorios: "Control Xbox incluido",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 44,
        sku: "GAM-XBX-004",
        marca: "Microsoft",
        modelo: "Xbox Series X",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Xbox Series X 1TB",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 1050000,
        stock: true,
        descripcion: "Consola Xbox de alto rendimiento con gráficos 4K y SSD ultrarrápido.",
        especificaciones: {
            almacenamiento: "SSD 1TB",
            resolucion: "4K UHD",
            fps: "Hasta 120 FPS",
            conectividad: "Wi-Fi / Bluetooth / HDMI",
            unidad: "Blu-ray 4K",
            accesorios: "Control Xbox incluido",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 45,
        sku: "GAM-SWI-005",
        marca: "Nintendo",
        modelo: "Switch OLED",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Nintendo Switch OLED 64GB",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 620000,
        stock: true,
        descripcion: "Consola híbrida Nintendo con pantalla OLED de 7 pulgadas para jugar en casa o portátil.",
        especificaciones: {
            almacenamiento: "64GB",
            pantalla: "7 pulgadas OLED",
            resolucion: "1280 x 720",
            conectividad: "Wi-Fi / Bluetooth",
            modos: "TV / Sobremesa / Portátil",
            accesorios: "Joy-Con incluidos",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 46,
        sku: "GAM-SWI-006",
        marca: "Nintendo",
        modelo: "Switch Lite",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Nintendo Switch Lite",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 480000,
        stock: true,
        descripcion: "Consola Nintendo portátil, liviana y compacta para jugar en cualquier lugar.",
        especificaciones: {
            pantalla: "5.5 pulgadas",
            almacenamiento: "32GB",
            resolucion: "1280 x 720",
            conectividad: "Wi-Fi / Bluetooth",
            autonomia: "Hasta 7 horas",
            controles: "Integrados",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 47,
        sku: "GAM-SWI-007",
        marca: "Nintendo",
        modelo: "Switch 2",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Nintendo Switch 2",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 850000,
        stock: true,
        descripcion: "Nueva generación de Nintendo con mayor potencia y pantalla de alta resolución.",
        especificaciones: {
            pantalla: "7.9 pulgadas",
            almacenamiento: "256GB",
            resolucion: "Hasta 4K en TV",
            conectividad: "Wi-Fi / Bluetooth",
            modos: "TV / Sobremesa / Portátil",
            controles: "Joy-Con 2",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 48,
        sku: "GAM-STM-008",
        marca: "Valve",
        modelo: "Steam Deck LCD",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Valve Steam Deck LCD 256GB",
        categoria: "Gaming",
        subcategoria: "Consolas Portátiles",
        precioOferta: 780000,
        stock: true,
        descripcion: "Consola portátil para PC gaming con sistema SteamOS.",
        especificaciones: {
            pantalla: "7 pulgadas LCD",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "16GB",
            resolucion: "1280 x 800",
            sistema: "SteamOS",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía"
        }
    },
    {
        id: 49,
        sku: "GAM-STM-009",
        marca: "Valve",
        modelo: "Steam Deck OLED",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Valve Steam Deck OLED 512GB",
        categoria: "Gaming",
        subcategoria: "Consolas Portátiles",
        precioOferta: 950000,
        stock: true,
        descripcion: "Consola portátil premium con pantalla OLED y SSD de 512GB.",
        especificaciones: {
            pantalla: "7.4 pulgadas OLED 90Hz",
            almacenamiento: "SSD 512GB",
            memoriaRAM: "16GB",
            resolucion: "1280 x 800",
            sistema: "SteamOS",
            conectividad: "Wi-Fi 6E / Bluetooth",
            garantia: "Garantía"
        }
    },
    {
        id: 50,
        sku: "GAM-ROG-010",
        marca: "ASUS",
        modelo: "ROG Ally Z1 Extreme",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "ASUS ROG Ally Z1 Extreme",
        categoria: "Gaming",
        subcategoria: "Consolas Portátiles",
        precioOferta: 1050000,
        stock: true,
        descripcion: "Consola portátil gamer con Windows y procesador AMD Ryzen Z1 Extreme.",
        especificaciones: {
            pantalla: "7 pulgadas Full HD 120Hz",
            almacenamiento: "SSD 512GB",
            memoriaRAM: "16GB",
            procesador: "AMD Ryzen Z1 Extreme",
            sistema: "Windows 11",
            conectividad: "Wi-Fi 6E / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 51,
        sku: "GAM-PC-011",
        marca: "Nova",
        modelo: "Ryzen 5 Gamer",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC Gamer Ryzen 5 16GB 512GB",
        categoria: "Gaming",
        subcategoria: "PC Gamer",
        precioOferta: 850000,
        stock: true,
        descripcion: "Computadora gamer equilibrada para juegos actuales, estudio y entretenimiento.",
        especificaciones: {
            procesador: "AMD Ryzen 5",
            memoriaRAM: "16GB DDR4",
            almacenamiento: "SSD 512GB",
            grafica: "Gráficos integrados",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Ethernet",
            gabinete: "Gamer con iluminación RGB"
        }
    },
    {
        id: 52,
        sku: "GAM-PC-012",
        marca: "Nova",
        modelo: "Core i5 Gamer",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC Gamer Core i5 16GB 512GB",
        categoria: "Gaming",
        subcategoria: "PC Gamer",
        precioOferta: 920000,
        stock: true,
        descripcion: "PC gamer con procesador Intel Core i5 y almacenamiento SSD.",
        especificaciones: {
            procesador: "Intel Core i5",
            memoriaRAM: "16GB DDR4",
            almacenamiento: "SSD 512GB",
            grafica: "Gráficos integrados",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Ethernet",
            gabinete: "Gamer RGB"
        }
    },
    {
        id: 53,
        sku: "GAM-PC-013",
        marca: "Nova",
        modelo: "Ryzen 5 RTX 4060",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC Gamer Ryzen 5 RTX 4060",
        categoria: "Gaming",
        subcategoria: "PC Gamer",
        precioOferta: 1250000,
        stock: true,
        descripcion: "PC gamer dedicada para jugar en Full HD y alta resolución con excelente rendimiento gráfico.",
        especificaciones: {
            procesador: "AMD Ryzen 5",
            memoriaRAM: "16GB",
            almacenamiento: "SSD 1TB",
            grafica: "NVIDIA GeForce RTX 4060",
            memoriaGrafica: "8GB",
            sistema: "Windows 11",
            gabinete: "Gamer RGB"
        }
    },
    {
        id: 54,
        sku: "GAM-PC-014",
        marca: "Nova",
        modelo: "Ryzen 7 RTX 4060",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC Gamer Ryzen 7 RTX 4060",
        categoria: "Gaming",
        subcategoria: "PC Gamer",
        precioOferta: 1450000,
        stock: true,
        descripcion: "Computadora gamer de alto rendimiento con Ryzen 7 y RTX 4060.",
        especificaciones: {
            procesador: "AMD Ryzen 7",
            memoriaRAM: "32GB",
            almacenamiento: "SSD 1TB",
            grafica: "NVIDIA GeForce RTX 4060",
            memoriaGrafica: "8GB",
            sistema: "Windows 11",
            gabinete: "Gamer RGB"
        }
    },
    {
        id: 55,
        sku: "GAM-PC-015",
        marca: "Nova",
        modelo: "Core i7 RTX 4070",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC Gamer Core i7 RTX 4070",
        categoria: "Gaming",
        subcategoria: "PC Gamer",
        precioOferta: 1950000,
        stock: true,
        descripcion: "PC gamer de alto rendimiento para juegos AAA, streaming, edición y trabajo profesional.",
        especificaciones: {
            procesador: "Intel Core i7",
            memoriaRAM: "32GB DDR5",
            almacenamiento: "SSD 1TB",
            grafica: "NVIDIA GeForce RTX 4070",
            memoriaGrafica: "12GB",
            sistema: "Windows 11",
            gabinete: "Gamer Premium RGB"
        }
    }
];

// ==========================================
// TELEVISORES Y MONITORES - 30 PRODUCTOS
// ==========================================

export const arrayTelevisoresMonitores = [
    {
        id: 81,
        sku: "TV-TCL-001",
        marca: "TCL",
        modelo: "32S5K",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV TCL 32 Pulgadas HD",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 270000,
        stock: true,
        descripcion: "Smart TV compacto ideal para dormitorios, cocinas y espacios pequeños.",
        especificaciones: {
            pantalla: "32 pulgadas",
            resolucion: "HD",
            tecnologia: "LED",
            sistema: "Google TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 82,
        sku: "TV-PHI-002",
        marca: "Philips",
        modelo: "32PHD6910",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Philips 32 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 285000,
        stock: true,
        descripcion: "Televisor Smart compacto con excelente relación precio-prestaciones.",
        especificaciones: {
            pantalla: "32 pulgadas",
            resolucion: "HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 83,
        sku: "TV-NOB-003",
        marca: "Noblex",
        modelo: "DK32X7500",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Noblex 32 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 295000,
        stock: true,
        descripcion: "Smart TV Noblex compacto con conectividad inalámbrica.",
        especificaciones: {
            pantalla: "32 pulgadas",
            resolucion: "HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 84,
        sku: "TV-BGH-004",
        marca: "BGH",
        modelo: "B3224",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV BGH 32 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 300000,
        stock: true,
        descripcion: "Televisor Smart BGH de 32 pulgadas para entretenimiento diario.",
        especificaciones: {
            pantalla: "32 pulgadas",
            resolucion: "HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 85,
        sku: "TV-RCA-005",
        marca: "RCA",
        modelo: "RE32SM",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV RCA 32 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 310000,
        stock: true,
        descripcion: "Smart TV RCA económico con conectividad para aplicaciones de entretenimiento.",
        especificaciones: {
            pantalla: "32 pulgadas",
            resolucion: "HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 86,
        sku: "TV-KAN-006",
        marca: "Kanji",
        modelo: "KJ-32S",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Kanji 32 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 315000,
        stock: true,
        descripcion: "Televisor Smart compacto y accesible.",
        especificaciones: {
            pantalla: "32 pulgadas",
            resolucion: "HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 87,
        sku: "TV-TCL-007",
        marca: "TCL",
        modelo: "40S5K",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV TCL 40 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 350000,
        stock: true,
        descripcion: "Smart TV TCL de tamaño intermedio para hogares y habitaciones.",
        especificaciones: {
            pantalla: "40 pulgadas",
            resolucion: "Full HD",
            tecnologia: "LED",
            sistema: "Google TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 88,
        sku: "TV-PHI-008",
        marca: "Philco",
        modelo: "PLD40HS25",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Philco 40 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 365000,
        stock: true,
        descripcion: "Televisor Philco de 40 pulgadas con funciones Smart.",
        especificaciones: {
            pantalla: "40 pulgadas",
            resolucion: "Full HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 89,
        sku: "TV-NOB-009",
        marca: "Noblex",
        modelo: "DK43X7500",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Noblex 43 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 395000,
        stock: true,
        descripcion: "Smart TV Noblex de 43 pulgadas con resolución Full HD.",
        especificaciones: {
            pantalla: "43 pulgadas",
            resolucion: "Full HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 90,
        sku: "TV-HIT-010",
        marca: "Hitachi",
        modelo: "CDH-43SMART",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Hitachi 43 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV Económicos",
        precioOferta: 410000,
        stock: true,
        descripcion: "Smart TV Hitachi de 43 pulgadas para entretenimiento familiar.",
        especificaciones: {
            pantalla: "43 pulgadas",
            resolucion: "Full HD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 91,
        sku: "TV-SAM-011",
        marca: "Samsung",
        modelo: "UN50DU7000",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Samsung 50 Pulgadas 4K UHD",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 799999,
        stock: true,
        descripcion: "Smart TV Samsung 4K con excelente calidad de imagen y plataforma inteligente.",
        especificaciones: {
            pantalla: "50 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "Tizen",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 92,
        sku: "TV-LG-012",
        marca: "LG",
        modelo: "50UT7300",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV LG 50 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 820000,
        stock: true,
        descripcion: "Smart TV LG con resolución 4K, sistema webOS y conectividad completa.",
        especificaciones: {
            pantalla: "50 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "webOS",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR10",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 93,
        sku: "TV-TCL-013",
        marca: "TCL",
        modelo: "50P755",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV TCL 50 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 780000,
        stock: true,
        descripcion: "Smart TV TCL 4K con Google TV y excelente calidad de imagen.",
        especificaciones: {
            pantalla: "50 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "QLED",
            sistema: "Google TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR10+",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 94,
        sku: "TV-PHI-014",
        marca: "Philips",
        modelo: "50PUD7408",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Philips 50 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 790000,
        stock: true,
        descripcion: "Smart TV Philips 4K con plataforma inteligente y conectividad inalámbrica.",
        especificaciones: {
            pantalla: "50 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "Google TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR10+",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 95,
        sku: "TV-NOB-015",
        marca: "Noblex",
        modelo: "DK50X7500",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Noblex 50 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 760000,
        stock: true,
        descripcion: "Smart TV Noblex 4K para disfrutar contenido multimedia en gran formato.",
        especificaciones: {
            pantalla: "50 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 96,
        sku: "TV-SAM-016",
        marca: "Samsung",
        modelo: "UN55DU8000",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Samsung 55 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 930000,
        stock: true,
        descripcion: "Televisor Samsung de 55 pulgadas con resolución 4K y diseño delgado.",
        especificaciones: {
            pantalla: "55 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "Crystal UHD",
            sistema: "Tizen",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 97,
        sku: "TV-LG-017",
        marca: "LG",
        modelo: "55UT7300",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV LG 55 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 950000,
        stock: true,
        descripcion: "Smart TV LG 4K de gran tamaño con sistema webOS.",
        especificaciones: {
            pantalla: "55 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "webOS",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR10",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 98,
        sku: "TV-TCL-018",
        marca: "TCL",
        modelo: "55C655",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV TCL 55 Pulgadas QLED 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 980000,
        stock: true,
        descripcion: "Smart TV TCL QLED con gran calidad de imagen y sistema Google TV.",
        especificaciones: {
            pantalla: "55 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "QLED",
            sistema: "Google TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "Dolby Vision",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 99,
        sku: "TV-SAM-019",
        marca: "Samsung",
        modelo: "UN65DU7000",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Samsung 65 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 1150000,
        stock: true,
        descripcion: "Smart TV Samsung de 65 pulgadas para una experiencia cinematográfica.",
        especificaciones: {
            pantalla: "65 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "Crystal UHD",
            sistema: "Tizen",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 100,
        sku: "TV-LG-020",
        marca: "LG",
        modelo: "65UT7300",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV LG 65 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 1200000,
        stock: true,
        descripcion: "Smart TV LG de gran formato con resolución 4K y webOS.",
        especificaciones: {
            pantalla: "65 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "webOS",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR10",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 101,
        sku: "TV-TCL-021",
        marca: "TCL",
        modelo: "65C655",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV TCL 65 Pulgadas QLED 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 1300000,
        stock: true,
        descripcion: "Smart TV QLED TCL de 65 pulgadas con gran contraste y color.",
        especificaciones: {
            pantalla: "65 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "QLED",
            sistema: "Google TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "Dolby Vision",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 102,
        sku: "TV-SAM-022",
        marca: "Samsung",
        modelo: "UN75DU7000",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Samsung 75 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 1750000,
        stock: true,
        descripcion: "Televisor Samsung de gran formato con resolución 4K UHD.",
        especificaciones: {
            pantalla: "75 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "Crystal UHD",
            sistema: "Tizen",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 103,
        sku: "TV-LG-023",
        marca: "LG",
        modelo: "75UT7300",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV LG 75 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 1800000,
        stock: true,
        descripcion: "Smart TV LG de 75 pulgadas con experiencia de cine en casa.",
        especificaciones: {
            pantalla: "75 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "webOS",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR10",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 104,
        sku: "TV-SAM-024",
        marca: "Samsung",
        modelo: "UN85DU7000",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Samsung 85 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV 4K",
        precioOferta: 2500000,
        stock: true,
        descripcion: "Televisor Samsung de 85 pulgadas para una experiencia audiovisual inmersiva.",
        especificaciones: {
            pantalla: "85 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "Crystal UHD",
            sistema: "Tizen",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 105,
        sku: "TV-LG-025",
        marca: "LG",
        modelo: "OLED55B4",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "LG OLED 55 Pulgadas 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "OLED",
        precioOferta: 1450000,
        stock: true,
        descripcion: "Televisor OLED con negros perfectos, gran contraste y calidad cinematográfica.",
        especificaciones: {
            pantalla: "55 pulgadas OLED",
            resolucion: "4K UHD",
            tecnologia: "OLED",
            sistema: "webOS",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "Dolby Vision",
            frecuencia: "120Hz",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 106,
        sku: "TV-SAM-026",
        marca: "Samsung",
        modelo: "S90D",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Samsung OLED S90D 55 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "OLED",
        precioOferta: 1650000,
        stock: true,
        descripcion: "Smart TV OLED premium Samsung con gran contraste y frecuencia de 120Hz.",
        especificaciones: {
            pantalla: "55 pulgadas OLED",
            resolucion: "4K UHD",
            tecnologia: "OLED",
            sistema: "Tizen",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "HDR10+",
            frecuencia: "120Hz",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 107,
        sku: "TV-TCL-027",
        marca: "TCL",
        modelo: "55C755",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV TCL 55 Pulgadas Mini LED 4K",
        categoria: "Televisores y Monitores",
        subcategoria: "Mini LED",
        precioOferta: 1250000,
        stock: true,
        descripcion: "Televisor TCL Mini LED con excelente contraste, brillo y calidad de imagen.",
        especificaciones: {
            pantalla: "55 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "Mini LED / QLED",
            sistema: "Google TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            HDR: "Dolby Vision",
            frecuencia: "144Hz",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 108,
        sku: "MON-SAM-028",
        marca: "Samsung",
        modelo: "Odyssey G5 32",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Monitor Gamer Samsung Odyssey G5 32",
        categoria: "Televisores y Monitores",
        subcategoria: "Monitores Gamer",
        precioOferta: 650000,
        stock: true,
        descripcion: "Monitor gamer curvo con resolución QHD y alta frecuencia de actualización.",
        especificaciones: {
            pantalla: "32 pulgadas curva",
            resolucion: "QHD 2560x1440",
            frecuencia: "165Hz",
            panel: "VA",
            respuesta: "1ms",
            tecnologia: "FreeSync",
            conectividad: "DisplayPort / HDMI",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 109,
        sku: "MON-LG-029",
        marca: "LG",
        modelo: "UltraGear 27GS60F",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Monitor Gamer LG UltraGear 27 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Monitores Gamer",
        precioOferta: 520000,
        stock: true,
        descripcion: "Monitor gamer LG de alta frecuencia ideal para juegos competitivos.",
        especificaciones: {
            pantalla: "27 pulgadas",
            resolucion: "Full HD",
            frecuencia: "180Hz",
            panel: "IPS",
            respuesta: "1ms",
            tecnologia: "AMD FreeSync",
            conectividad: "DisplayPort / HDMI",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 110,
        sku: "MON-AOC-030",
        marca: "AOC",
        modelo: "24G2SP",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Monitor Gamer AOC 24 Pulgadas",
        categoria: "Televisores y Monitores",
        subcategoria: "Monitores Gamer",
        precioOferta: 380000,
        stock: true,
        descripcion: "Monitor gamer accesible con panel IPS y alta frecuencia de actualización.",
        especificaciones: {
            pantalla: "24 pulgadas",
            resolucion: "Full HD",
            frecuencia: "165Hz",
            panel: "IPS",
            respuesta: "1ms",
            tecnologia: "Adaptive Sync",
            conectividad: "DisplayPort / HDMI",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// AIRES ACONDICIONADOS Y VENTILADORES
// ==========================================

export const arrayAiresAcondicionados = [
    {
        id: 121,
        sku: "CLI-AA-001",
        marca: "Philco",
        modelo: "PHIN32W23N",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Split Inverter 3200 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split Inverter",
        precioOferta: 850000,
        stock: true,
        descripcion: "Aire acondicionado split inverter frío/calor ideal para ambientes medianos.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 122,
        sku: "CLI-AA-002",
        marca: "BGH",
        modelo: "BSI35WCC",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado BGH Split 3200 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 790000,
        stock: true,
        descripcion: "Equipo BGH frío/calor para hogares y oficinas.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 123,
        sku: "CLI-AA-003",
        marca: "Surrey",
        modelo: "553AIQ1201F",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Surrey 3200 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 920000,
        stock: true,
        descripcion: "Aire acondicionado Surrey con tecnología inverter.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 124,
        sku: "CLI-AA-004",
        marca: "TCL",
        modelo: "TAC-12CHSA",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado TCL 3200 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 720000,
        stock: true,
        descripcion: "Equipo TCL frío/calor de buena eficiencia para el hogar.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 125,
        sku: "CLI-AA-005",
        marca: "Noblex",
        modelo: "NAC32C",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Noblex 3200 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 700000,
        stock: true,
        descripcion: "Aire acondicionado Noblex de bajo consumo para ambientes medianos.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 126,
        sku: "CLI-AA-006",
        marca: "Carrier",
        modelo: "XPower 3200",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Carrier XPower 3200",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 980000,
        stock: true,
        descripcion: "Aire acondicionado Carrier de alta eficiencia y excelente rendimiento.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 127,
        sku: "CLI-AA-007",
        marca: "Hisense",
        modelo: "AS-12UW4",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Hisense 3200 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 735000,
        stock: true,
        descripcion: "Equipo Hisense frío/calor con buena eficiencia energética.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 128,
        sku: "CLI-AA-008",
        marca: "Philco",
        modelo: "PHIN53W23N",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Philco 5300 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 1150000,
        stock: true,
        descripcion: "Aire acondicionado de alta capacidad para ambientes grandes.",
        especificaciones: {
            capacidad: "5300 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 129,
        sku: "CLI-AA-009",
        marca: "BGH",
        modelo: "BSI55WCC",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado BGH 5300 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 1080000,
        stock: true,
        descripcion: "Equipo BGH de gran capacidad para espacios amplios.",
        especificaciones: {
            capacidad: "5300 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 130,
        sku: "CLI-AA-010",
        marca: "Surrey",
        modelo: "553AIQ1801F",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Surrey 5500 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 1250000,
        stock: true,
        descripcion: "Equipo Surrey de alta capacidad para grandes ambientes.",
        especificaciones: {
            capacidad: "5500 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 131,
        sku: "VEN-LIL-001",
        marca: "Liliana",
        modelo: "VTFM20",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador de Pie Liliana 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 95000,
        stock: true,
        descripcion: "Ventilador de pie de gran caudal de aire para hogares y comercios.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "90W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 132,
        sku: "VEN-PHI-002",
        marca: "Philco",
        modelo: "VPD18",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador de Pie Philco 18 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 85000,
        stock: true,
        descripcion: "Ventilador de pie compacto con tres velocidades.",
        especificaciones: {
            tamaño: "18 pulgadas",
            potencia: "80W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 133,
        sku: "VEN-ATM-003",
        marca: "Atma",
        modelo: "VP1825",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador de Pie Atma",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 80000,
        stock: true,
        descripcion: "Ventilador económico para uso doméstico.",
        especificaciones: {
            tamaño: "18 pulgadas",
            potencia: "75W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 134,
        sku: "VEN-KAN-004",
        marca: "Kanji",
        modelo: "KJ-VP20",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador de Pie Kanji 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 90000,
        stock: true,
        descripcion: "Ventilador de pie de 20 pulgadas con buena potencia.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "90W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 135,
        sku: "VEN-PEA-005",
        marca: "Peabody",
        modelo: "PE-VP20",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador de Pie Peabody 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 110000,
        stock: true,
        descripcion: "Ventilador Peabody con diseño moderno y buen caudal de aire.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "90W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 136,
        sku: "VEN-LIL-006",
        marca: "Liliana",
        modelo: "VTHM20",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador Turbo Liliana 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 120000,
        stock: true,
        descripcion: "Ventilador turbo de alta potencia para espacios amplios.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "120W",
            velocidades: "3",
            oscilacion: "Sí",
            estructura: "Metálica",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 137,
        sku: "VEN-AXE-007",
        marca: "Axel",
        modelo: "AX-VP20",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador de Pie Axel 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 75000,
        stock: true,
        descripcion: "Ventilador económico de pie para uso doméstico.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "80W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 138,
        sku: "VEN-WIN-008",
        marca: "Winco",
        modelo: "W-VC20",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador Winco 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 78000,
        stock: true,
        descripcion: "Ventilador económico con tres velocidades y oscilación.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "85W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 139,
        sku: "VEN-PHI-009",
        marca: "Philips",
        modelo: "CX2050",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador Philips 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 105000,
        stock: true,
        descripcion: "Ventilador Philips de alta eficiencia para uso doméstico.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "90W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 140,
        sku: "VEN-NEX-010",
        marca: "Nex",
        modelo: "NEX-V20",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Ventilador de Pie Nex 20 Pulgadas",
        categoria: "Aires Acondicionados",
        subcategoria: "Ventiladores",
        precioOferta: 72000,
        stock: true,
        descripcion: "Ventilador económico para hogares y oficinas.",
        especificaciones: {
            tamaño: "20 pulgadas",
            potencia: "80W",
            velocidades: "3",
            oscilacion: "Sí",
            altura: "Regulable",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// HELADERAS Y FREEZERS - 15
// ==========================================

export const arrayHeladerasFreezers = [
    {
        id: 161,
        sku: "HEL-GAF-001",
        marca: "Gafa",
        modelo: "HGF358",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Gafa No Frost 300 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 920000,
        stock: true,
        descripcion: "Heladera No Frost con freezer superior y amplio espacio de almacenamiento.",
        especificaciones: {
            capacidad: "282 litros",
            sistema: "No Frost",
            eficiencia: "Clase A",
            color: "Blanca",
            puertas: "2 puertas",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 162,
        sku: "HEL-PAT-002",
        marca: "Patrick",
        modelo: "HPK350",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Patrick 350 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 890000,
        stock: true,
        descripcion: "Heladera familiar con freezer superior y gran capacidad.",
        especificaciones: {
            capacidad: "350 litros",
            sistema: "Cíclica",
            eficiencia: "Clase A",
            color: "Blanca",
            puertas: "2 puertas",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 163,
        sku: "HEL-DRE-003",
        marca: "Drean",
        modelo: "HDR300",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Drean 300 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 850000,
        stock: true,
        descripcion: "Heladera familiar de bajo consumo y excelente distribución interior.",
        especificaciones: {
            capacidad: "300 litros",
            sistema: "Cíclica",
            eficiencia: "Clase A",
            color: "Blanca",
            freezer: "Freezer superior",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 164,
        sku: "HEL-COL-004",
        marca: "Columbia",
        modelo: "C-350",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Columbia 350 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 810000,
        stock: true,
        descripcion: "Heladera económica para hogares de tamaño mediano.",
        especificaciones: {
            capacidad: "350 litros",
            sistema: "Cíclica",
            eficiencia: "Clase A",
            color: "Blanca",
            freezer: "Superior",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 165,
        sku: "HEL-PHI-005",
        marca: "Philco",
        modelo: "PHNT320",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Philco No Frost 320 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 950000,
        stock: true,
        descripcion: "Heladera No Frost Philco con excelente distribución y bajo mantenimiento.",
        especificaciones: {
            capacidad: "320 litros",
            sistema: "No Frost",
            eficiencia: "Clase A",
            color: "Inox",
            freezer: "Superior",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 166,
        sku: "HEL-SAM-006",
        marca: "Samsung",
        modelo: "RT38",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Samsung No Frost 380 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 1250000,
        stock: true,
        descripcion: "Heladera Samsung No Frost con gran capacidad y tecnología de conservación.",
        especificaciones: {
            capacidad: "380 litros",
            sistema: "No Frost",
            eficiencia: "Clase A",
            color: "Inox",
            tecnologia: "Digital Inverter",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 167,
        sku: "HEL-LG-007",
        marca: "LG",
        modelo: "GT47",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera LG No Frost 400 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 1350000,
        stock: true,
        descripcion: "Heladera LG de gran capacidad con sistema No Frost.",
        especificaciones: {
            capacidad: "400 litros",
            sistema: "No Frost",
            eficiencia: "Clase A",
            color: "Inox",
            tecnologia: "Smart Inverter",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 168,
        sku: "HEL-WHI-008",
        marca: "Whirlpool",
        modelo: "WRM39",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Whirlpool No Frost 390 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 1300000,
        stock: true,
        descripcion: "Heladera Whirlpool con tecnología No Frost y gran capacidad.",
        especificaciones: {
            capacidad: "390 litros",
            sistema: "No Frost",
            eficiencia: "Clase A",
            color: "Inox",
            tecnologia: "Inverter",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 169,
        sku: "HEL-ELE-009",
        marca: "Electrolux",
        modelo: "DFN41",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Electrolux No Frost 400 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 1280000,
        stock: true,
        descripcion: "Heladera Electrolux con excelente capacidad y eficiencia.",
        especificaciones: {
            capacidad: "400 litros",
            sistema: "No Frost",
            eficiencia: "Clase A",
            color: "Inox",
            freezer: "Superior",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 170,
        sku: "HEL-BAM-010",
        marca: "Bambi",
        modelo: "B350",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera Bambi 350 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 780000,
        stock: true,
        descripcion: "Heladera económica de gran capacidad para uso familiar.",
        especificaciones: {
            capacidad: "350 litros",
            sistema: "Cíclica",
            eficiencia: "Clase A",
            color: "Blanca",
            freezer: "Superior",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 171,
        sku: "FRE-GAF-011",
        marca: "Gafa",
        modelo: "FG200",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freezer Gafa 200 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Freezers",
        precioOferta: 650000,
        stock: true,
        descripcion: "Freezer horizontal Gafa ideal para almacenamiento doméstico y comercial.",
        especificaciones: {
            capacidad: "200 litros",
            tipo: "Horizontal",
            temperatura: "Congelamiento profundo",
            control: "Termostato regulable",
            consumo: "Bajo consumo",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 172,
        sku: "FRE-PAT-012",
        marca: "Patrick",
        modelo: "HPF300",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freezer Patrick 300 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Freezers",
        precioOferta: 780000,
        stock: true,
        descripcion: "Freezer horizontal de gran capacidad para hogares y comercios.",
        especificaciones: {
            capacidad: "300 litros",
            tipo: "Horizontal",
            temperatura: "Congelamiento profundo",
            control: "Termostato regulable",
            consumo: "Bajo consumo",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 173,
        sku: "FRE-CON-013",
        marca: "Consul",
        modelo: "CHB53",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freezer Consul 200 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Freezers",
        precioOferta: 690000,
        stock: true,
        descripcion: "Freezer compacto y eficiente para almacenamiento de alimentos.",
        especificaciones: {
            capacidad: "200 litros",
            tipo: "Horizontal",
            temperatura: "Congelamiento profundo",
            control: "Termostato",
            consumo: "Bajo consumo",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 174,
        sku: "FRE-ESL-014",
        marca: "Eslabón de Lujo",
        modelo: "EF300",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freezer Eslabón de Lujo 300 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Freezers",
        precioOferta: 760000,
        stock: true,
        descripcion: "Freezer horizontal de gran capacidad y bajo consumo.",
        especificaciones: {
            capacidad: "300 litros",
            tipo: "Horizontal",
            temperatura: "Congelamiento profundo",
            control: "Termostato regulable",
            consumo: "Bajo consumo",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 175,
        sku: "FRE-ELE-015",
        marca: "Electrolux",
        modelo: "H500",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freezer Electrolux 500 Litros",
        categoria: "Heladeras y Freezers",
        subcategoria: "Freezers",
        precioOferta: 950000,
        stock: true,
        descripcion: "Freezer horizontal de gran capacidad para comercios y hogares.",
        especificaciones: {
            capacidad: "500 litros",
            tipo: "Horizontal",
            temperatura: "Congelamiento profundo",
            control: "Termostato regulable",
            consumo: "Eficiente",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// COCINAS Y HORNOS - 15
// ==========================================

export const arrayCocinasHornos = [
    {
        id: 201,
        sku: "COC-HOR-001",
        marca: "Longvie",
        modelo: "13501X",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina a Gas Multigas Acero Inoxidable 56cm",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Comunes",
        precioOferta: 740000,
        stock: true,
        descripcion: "Cocina familiar multigas de cuatro hornallas con horno completo.",
        especificaciones: {
            hornallas: "4 quemadores",
            tipo: "Multigas",
            horno: "Con visor y luz",
            seguridad: "Válvula cortagas",
            material: "Acero inoxidable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 202,
        sku: "COC-HOR-002",
        marca: "Orbis",
        modelo: "960BC3",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Orbis 4 Hornallas",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Comunes",
        precioOferta: 680000,
        stock: true,
        descripcion: "Cocina Orbis multigas para uso familiar con horno a gas.",
        especificaciones: {
            hornallas: "4",
            tipo: "Multigas",
            horno: "A gas",
            seguridad: "Válvula de seguridad",
            material: "Acero",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 203,
        sku: "COC-HOR-003",
        marca: "Escorial",
        modelo: "Candor",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Escorial Candor",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Comunes",
        precioOferta: 550000,
        stock: true,
        descripcion: "Cocina económica de cuatro hornallas para hogares.",
        especificaciones: {
            hornallas: "4",
            tipo: "Multigas",
            horno: "A gas",
            parrilla: "Incluida",
            material: "Acero",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 204,
        sku: "COC-HOR-004",
        marca: "Volcan",
        modelo: "550",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Volcan 4 Hornallas",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Comunes",
        precioOferta: 580000,
        stock: true,
        descripcion: "Cocina Volcan práctica para uso diario.",
        especificaciones: {
            hornallas: "4",
            tipo: "Multigas",
            horno: "A gas",
            seguridad: "Válvula cortagas",
            material: "Acero",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 205,
        sku: "COC-HOR-005",
        marca: "Domec",
        modelo: "C-150",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Domec 4 Hornallas",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Comunes",
        precioOferta: 620000,
        stock: true,
        descripcion: "Cocina Domec de cuatro hornallas con horno a gas.",
        especificaciones: {
            hornallas: "4",
            tipo: "Multigas",
            horno: "A gas",
            seguridad: "Válvula de seguridad",
            material: "Acero inoxidable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 206,
        sku: "COC-IND-006",
        marca: "Morelli",
        modelo: "Master 550",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Industrial Morelli Master 550",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Industriales",
        precioOferta: 850000,
        stock: true,
        descripcion: "Cocina industrial robusta para gastronomía profesional.",
        especificaciones: {
            hornallas: "4 quemadores industriales",
            material: "Acero inoxidable",
            parrilla: "Hierro fundido",
            tipo: "Industrial",
            uso: "Gastronómico",
            garantia: "Garantía"
        }
    },
    {
        id: 207,
        sku: "COC-IND-007",
        marca: "Morelli",
        modelo: "Master 750",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Industrial Morelli Master 750",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Industriales",
        precioOferta: 1050000,
        stock: true,
        descripcion: "Cocina industrial de gran tamaño para restaurantes y comercios.",
        especificaciones: {
            hornallas: "6 quemadores",
            material: "Acero inoxidable",
            parrilla: "Hierro fundido",
            tipo: "Industrial",
            uso: "Gastronómico",
            garantia: "Garantía"
        }
    },
    {
        id: 208,
        sku: "COC-IND-008",
        marca: "Florencia",
        modelo: "Industrial 550",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Industrial Florencia 550",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Industriales",
        precioOferta: 890000,
        stock: true,
        descripcion: "Cocina industrial para uso gastronómico intensivo.",
        especificaciones: {
            hornallas: "4 quemadores",
            material: "Acero inoxidable",
            parrilla: "Hierro fundido",
            tipo: "Industrial",
            uso: "Profesional",
            garantia: "Garantía"
        }
    },
    {
        id: 209,
        sku: "COC-IND-009",
        marca: "Cañossilen",
        modelo: "CI-6",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Industrial Cañossilen 6 Hornallas",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Industriales",
        precioOferta: 980000,
        stock: true,
        descripcion: "Cocina industrial de seis hornallas para restaurantes.",
        especificaciones: {
            hornallas: "6",
            material: "Acero inoxidable",
            parrilla: "Hierro fundido",
            tipo: "Industrial",
            uso: "Profesional",
            garantia: "Garantía"
        }
    },
    {
        id: 210,
        sku: "COC-IND-010",
        marca: "Sol Real",
        modelo: "SI-8",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina Industrial Sol Real 8 Hornallas",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas Industriales",
        precioOferta: 1250000,
        stock: true,
        descripcion: "Cocina industrial de gran capacidad para cocinas profesionales.",
        especificaciones: {
            hornallas: "8",
            material: "Acero inoxidable",
            parrilla: "Hierro fundido",
            tipo: "Industrial",
            uso: "Profesional",
            garantia: "Garantía"
        }
    },
    {
        id: 211,
        sku: "HOR-PIZ-011",
        marca: "Morelli",
        modelo: "Pizza 4",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Horno Pizzero Morelli 4 Moldes",
        categoria: "Cocinas y Hornos",
        subcategoria: "Hornos Pizzeros",
        precioOferta: 720000,
        stock: true,
        descripcion: "Horno pizzero profesional para pizzerías y emprendimientos gastronómicos.",
        especificaciones: {
            capacidad: "4 pizzas",
            tipo: "Pizzero",
            energia: "Gas",
            temperatura: "Hasta 350°C",
            material: "Acero",
            garantia: "Garantía"
        }
    },
    {
        id: 212,
        sku: "HOR-PIZ-012",
        marca: "Morelli",
        modelo: "Pizza 6",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Horno Pizzero Morelli 6 Moldes",
        categoria: "Cocinas y Hornos",
        subcategoria: "Hornos Pizzeros",
        precioOferta: 890000,
        stock: true,
        descripcion: "Horno pizzero de mayor capacidad para producción profesional.",
        especificaciones: {
            capacidad: "6 pizzas",
            tipo: "Pizzero",
            energia: "Gas",
            temperatura: "Hasta 350°C",
            material: "Acero",
            garantia: "Garantía"
        }
    },
    {
        id: 213,
        sku: "HOR-PIZ-013",
        marca: "Ariston",
        modelo: "PZ4",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Horno Pizzero Ariston 4 Pizzas",
        categoria: "Cocinas y Hornos",
        subcategoria: "Hornos Pizzeros",
        precioOferta: 780000,
        stock: true,
        descripcion: "Horno profesional para pizzas y productos gastronómicos.",
        especificaciones: {
            capacidad: "4 pizzas",
            tipo: "Pizzero",
            energia: "Gas",
            temperatura: "Hasta 350°C",
            material: "Acero",
            garantia: "Garantía"
        }
    },
    {
        id: 214,
        sku: "HOR-PAS-014",
        marca: "Morelli",
        modelo: "Pastelero 4",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Horno Pastelero Morelli 4 Bandejas",
        categoria: "Cocinas y Hornos",
        subcategoria: "Hornos Pasteleros",
        precioOferta: 950000,
        stock: true,
        descripcion: "Horno profesional para panadería, pastelería y gastronomía.",
        especificaciones: {
            capacidad: "4 bandejas",
            tipo: "Pastelero",
            energia: "Gas",
            temperatura: "Hasta 300°C",
            bandejas: "Incluidas",
            garantia: "Garantía"
        }
    },
    {
        id: 215,
        sku: "HOR-PAS-015",
        marca: "Venancio",
        modelo: "Turbo 6",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Horno Pastelero Venancio Turbo 6",
        categoria: "Cocinas y Hornos",
        subcategoria: "Hornos Pasteleros",
        precioOferta: 1250000,
        stock: true,
        descripcion: "Horno profesional de convección para panadería y pastelería.",
        especificaciones: {
            capacidad: "6 bandejas",
            tipo: "Convección",
            energia: "Gas / Eléctrico",
            temperatura: "Hasta 300°C",
            ventilacion: "Turbo",
            garantia: "Garantía"
        }
    }
];

// ==========================================
// LAVARROPAS Y SECADORAS - 10
// ==========================================

export const arrayLavarropasSecadoras = [
    {
        id: 241,
        sku: "LAV-SEC-001",
        marca: "Drean",
        modelo: "Concept 5.05",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Automático Drean 5 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Económicos",
        precioOferta: 610000,
        stock: true,
        descripcion: "Lavarropas económico para hogares pequeños y uso diario.",
        especificaciones: {
            carga: "Superior",
            capacidad: "5 kg",
            centrifugado: "500 RPM",
            programas: "15 programas",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 242,
        sku: "LAV-SEC-002",
        marca: "Aurora",
        modelo: "5010",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Aurora 5 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Económicos",
        precioOferta: 570000,
        stock: true,
        descripcion: "Lavarropas automático económico y práctico.",
        especificaciones: {
            carga: "Superior",
            capacidad: "5 kg",
            centrifugado: "500 RPM",
            programas: "10",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 243,
        sku: "LAV-SEC-003",
        marca: "Candy",
        modelo: "CSO 105",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Candy 5 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Económicos",
        precioOferta: 590000,
        stock: true,
        descripcion: "Lavarropas compacto para uso familiar.",
        especificaciones: {
            carga: "Frontal",
            capacidad: "5 kg",
            centrifugado: "1000 RPM",
            programas: "15",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 244,
        sku: "LAV-SEC-004",
        marca: "Patrick",
        modelo: "LTP6",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Patrick 6 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Económicos",
        precioOferta: 630000,
        stock: true,
        descripcion: "Lavarropas económico de 6 kg para familias pequeñas.",
        especificaciones: {
            carga: "Superior",
            capacidad: "6 kg",
            centrifugado: "600 RPM",
            programas: "12",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 245,
        sku: "LAV-SEC-005",
        marca: "Eslabón de Lujo",
        modelo: "EWT6",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Eslabón de Lujo 6 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Económicos",
        precioOferta: 650000,
        stock: true,
        descripcion: "Lavarropas económico con buena capacidad para uso familiar.",
        especificaciones: {
            carga: "Superior",
            capacidad: "6 kg",
            centrifugado: "600 RPM",
            programas: "12",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 246,
        sku: "LAV-AUT-006",
        marca: "Drean",
        modelo: "Next 6.06",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Automático Drean Next 6 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Automáticos",
        precioOferta: 720000,
        stock: true,
        descripcion: "Lavarropas automático Drean de carga superior con múltiples programas.",
        especificaciones: {
            carga: "Superior",
            capacidad: "6 kg",
            centrifugado: "600 RPM",
            programas: "23",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 247,
        sku: "LAV-AUT-007",
        marca: "Drean",
        modelo: "Next 8.12",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Automático Drean Next 8 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Automáticos",
        precioOferta: 820000,
        stock: true,
        descripcion: "Lavarropas Drean de 8 kg ideal para familias.",
        especificaciones: {
            carga: "Superior",
            capacidad: "8 kg",
            centrifugado: "1200 RPM",
            programas: "23",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 248,
        sku: "LAV-AUT-008",
        marca: "Samsung",
        modelo: "WW70",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Samsung 7 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Automáticos",
        precioOferta: 900000,
        stock: true,
        descripcion: "Lavarropas Samsung automático con tecnología de lavado avanzada.",
        especificaciones: {
            carga: "Frontal",
            capacidad: "7 kg",
            centrifugado: "1200 RPM",
            tecnologia: "Digital Inverter",
            programas: "12",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 249,
        sku: "LAV-AUT-009",
        marca: "LG",
        modelo: "WM9",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas LG 9 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Automáticos",
        precioOferta: 1050000,
        stock: true,
        descripcion: "Lavarropas LG de gran capacidad con motor inverter.",
        especificaciones: {
            carga: "Frontal",
            capacidad: "9 kg",
            centrifugado: "1400 RPM",
            tecnologia: "Inverter Direct Drive",
            programas: "14",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 250,
        sku: "LAV-AUT-010",
        marca: "Whirlpool",
        modelo: "WLF10",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Whirlpool 10 Kg",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas Automáticos",
        precioOferta: 1100000,
        stock: true,
        descripcion: "Lavarropas Whirlpool de gran capacidad para familias numerosas.",
        especificaciones: {
            carga: "Frontal",
            capacidad: "10 kg",
            centrifugado: "1400 RPM",
            tecnologia: "Inverter",
            programas: "16",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// PEQUEÑOS ELECTRODOMÉSTICOS - 20
// ==========================================

export const arrayPequenosElectrodomesticos = [
    {
        id: 281,
        sku: "PEQ-ELE-001",
        marca: "Atma",
        modelo: "HM8230",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Batidora de Mano Atma con Bowl",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Batidoras",
        precioOferta: 115000,
        stock: true,
        descripcion: "Batidora de mano con múltiples velocidades y accesorios para cocina.",
        especificaciones: {
            potencia: "400W",
            velocidades: "5 + Turbo",
            bowl: "Incluido",
            accesorios: "Batidores y amasadores",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 282,
        sku: "PEQ-ELE-002",
        marca: "Liliana",
        modelo: "AM780",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Amasadora Liliana 5 Litros",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Amasadoras",
        precioOferta: 220000,
        stock: true,
        descripcion: "Amasadora doméstica para preparar masas, panes y repostería.",
        especificaciones: {
            potencia: "600W",
            capacidad: "5 litros",
            velocidades: "6",
            accesorios: "Batidor y amasador",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 283,
        sku: "PEQ-ELE-003",
        marca: "Philips",
        modelo: "HR3705",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Batidora Philips 300W",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Batidoras",
        precioOferta: 90000,
        stock: true,
        descripcion: "Batidora Philips compacta para preparaciones de cocina.",
        especificaciones: {
            potencia: "300W",
            velocidades: "5",
            turbo: "Sí",
            accesorios: "Batidores",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 284,
        sku: "PEQ-ELE-004",
        marca: "Peabody",
        modelo: "PE-BM50",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Batidora Planetaria Peabody 5 Litros",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Batidoras Planetarias",
        precioOferta: 280000,
        stock: true,
        descripcion: "Batidora planetaria para cocina y repostería.",
        especificaciones: {
            potencia: "600W",
            capacidad: "5 litros",
            velocidades: "6",
            accesorios: "Batidor / Gancho / Mezclador",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 285,
        sku: "PEQ-ELE-005",
        marca: "Atma",
        modelo: "LM8520",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Licuadora Atma 500W",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Licuadoras",
        precioOferta: 95000,
        stock: true,
        descripcion: "Licuadora económica para preparaciones diarias.",
        especificaciones: {
            potencia: "500W",
            capacidad: "1.5 litros",
            velocidades: "2",
            vaso: "Plástico",
            cuchillas: "Acero inoxidable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 286,
        sku: "PEQ-ELE-006",
        marca: "Philips",
        modelo: "HR2129",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Licuadora Philips 700W",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Licuadoras",
        precioOferta: 125000,
        stock: true,
        descripcion: "Licuadora Philips de buena potencia para frutas, bebidas y comidas.",
        especificaciones: {
            potencia: "700W",
            capacidad: "2 litros",
            velocidades: "2",
            vaso: "Plástico",
            cuchillas: "Acero inoxidable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 287,
        sku: "PEQ-ELE-007",
        marca: "Oster",
        modelo: "BLST",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Licuadora Oster 600W",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Licuadoras",
        precioOferta: 145000,
        stock: true,
        descripcion: "Licuadora Oster con vaso resistente y cuchillas de acero.",
        especificaciones: {
            potencia: "600W",
            capacidad: "1.5 litros",
            velocidades: "3",
            vaso: "Vidrio",
            cuchillas: "Acero inoxidable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 288,
        sku: "PEQ-ELE-008",
        marca: "Liliana",
        modelo: "AH950",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freidora de Aire Liliana 4 Litros",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Freidoras de Aire",
        precioOferta: 125000,
        stock: true,
        descripcion: "Freidora de aire para cocinar con poco o nada de aceite.",
        especificaciones: {
            capacidad: "4 litros",
            potencia: "1400W",
            temperatura: "80°C a 200°C",
            timer: "60 minutos",
            pantalla: "Digital",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 289,
        sku: "PEQ-ELE-009",
        marca: "Philips",
        modelo: "HD9200",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freidora de Aire Philips 4.1 Litros",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Freidoras de Aire",
        precioOferta: 170000,
        stock: true,
        descripcion: "Airfryer Philips para preparar papas, carnes, verduras y repostería.",
        especificaciones: {
            capacidad: "4.1 litros",
            potencia: "1400W",
            temperatura: "80°C a 200°C",
            tecnologia: "Rapid Air",
            timer: "60 minutos",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 290,
        sku: "PEQ-ELE-010",
        marca: "Atma",
        modelo: "AF5510",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freidora de Aire Atma 5 Litros",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Freidoras de Aire",
        precioOferta: 145000,
        stock: true,
        descripcion: "Freidora de aire familiar con canasto de gran capacidad.",
        especificaciones: {
            capacidad: "5 litros",
            potencia: "1500W",
            temperatura: "80°C a 200°C",
            timer: "60 minutos",
            control: "Digital",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 291,
        sku: "PEQ-ELE-011",
        marca: "Peabody",
        modelo: "PE-AF55",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freidora de Aire Peabody 5.5 Litros",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Freidoras de Aire",
        precioOferta: 180000,
        stock: true,
        descripcion: "Airfryer familiar Peabody con controles digitales.",
        especificaciones: {
            capacidad: "5.5 litros",
            potencia: "1700W",
            temperatura: "80°C a 200°C",
            timer: "60 minutos",
            control: "Digital",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 292,
        sku: "PEQ-ELE-012",
        marca: "Moulinex",
        modelo: "OW2101",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Panificadora Moulinex",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Panificadoras",
        precioOferta: 230000,
        stock: true,
        descripcion: "Panificadora automática para preparar pan, masas y recetas caseras.",
        especificaciones: {
            potencia: "650W",
            capacidad: "1 kg",
            programas: "12",
            timer: "Hasta 15 horas",
            pantalla: "Digital",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 293,
        sku: "PEQ-ELE-013",
        marca: "Atma",
        modelo: "CM4010",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cafetera Espresso Atma",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Cafeteras",
        precioOferta: 180000,
        stock: true,
        descripcion: "Cafetera espresso para preparar café en casa.",
        especificaciones: {
            potencia: "1050W",
            presion: "15 bar",
            deposito: "1.2 litros",
            funciones: "Espresso / Vapor",
            filtro: "Portafiltro",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 294,
        sku: "PEQ-ELE-014",
        marca: "Oster",
        modelo: "BVST",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cafetera Programable Oster",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Cafeteras",
        precioOferta: 150000,
        stock: true,
        descripcion: "Cafetera programable para preparar café automáticamente.",
        especificaciones: {
            potencia: "900W",
            capacidad: "1.5 litros",
            tazas: "12",
            programacion: "24 horas",
            filtro: "Reutilizable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 295,
        sku: "PEQ-ELE-015",
        marca: "Philips",
        modelo: "HD7432",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cafetera Philips",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Cafeteras",
        precioOferta: 120000,
        stock: true,
        descripcion: "Cafetera compacta Philips para preparar café filtrado.",
        especificaciones: {
            potencia: "700W",
            capacidad: "0.6 litros",
            tazas: "5",
            filtro: "Permanente",
            sistema: "Antigoteo",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 296,
        sku: "PEQ-ELE-016",
        marca: "Liliana",
        modelo: "CM900",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cortadora de Alimentos Liliana",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Cortadoras",
        precioOferta: 135000,
        stock: true,
        descripcion: "Cortadora eléctrica para fiambres, quesos y alimentos.",
        especificaciones: {
            potencia: "150W",
            disco: "170mm",
            espesor: "Regulable",
            seguridad: "Protección de cuchilla",
            material: "Acero inoxidable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 297,
        sku: "PEQ-ELE-017",
        marca: "Peabody",
        modelo: "PE-SM100",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Sandwichera Peabody",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Sandwicheras",
        precioOferta: 95000,
        stock: true,
        descripcion: "Sandwichera eléctrica para preparar tostados y comidas rápidas.",
        especificaciones: {
            potencia: "750W",
            placas: "Antiadherentes",
            capacidad: "2 sandwiches",
            indicador: "Luz LED",
            limpieza: "Fácil",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 298,
        sku: "PEQ-ELE-018",
        marca: "Atma",
        modelo: "TO8210",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Tostadora Atma",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Tostadoras",
        precioOferta: 70000,
        stock: true,
        descripcion: "Tostadora compacta con diferentes niveles de tostado.",
        especificaciones: {
            potencia: "750W",
            ranuras: "2",
            niveles: "6",
            funcion: "Descongelar / Recalentar",
            bandeja: "Recolectora de migas",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 299,
        sku: "PEQ-ELE-019",
        marca: "Liliana",
        modelo: "EX820",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Exprimidor Eléctrico Liliana",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Exprimidores",
        precioOferta: 65000,
        stock: true,
        descripcion: "Exprimidor eléctrico para cítricos de forma rápida y sencilla.",
        especificaciones: {
            potencia: "40W",
            funcionamiento: "Automático",
            deposito: "Incluido",
            conos: "2 tamaños",
            limpieza: "Piezas desmontables",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 300,
        sku: "PEQ-ELE-020",
        marca: "Philips",
        modelo: "HD9252",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Freidora de Aire Philips 4.1 Litros Digital",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Freidoras de Aire",
        precioOferta: 190000,
        stock: true,
        descripcion: "Freidora de aire digital con tecnología Rapid Air.",
        especificaciones: {
            capacidad: "4.1 litros",
            potencia: "1400W",
            tecnologia: "Rapid Air",
            temperatura: "80°C a 200°C",
            pantalla: "Digital",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// ASPIRADORAS Y HIDROLAVADORAS - 10
// ==========================================

export const arrayAspiradoras = [
    {
        id: 321,
        sku: "ASP-ROB-001",
        marca: "Liliana",
        modelo: "LA910",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aspiradora Liliana 1200W",
        categoria: "Aspiradoras",
        subcategoria: "Aspiradoras Económicas",
        precioOferta: 120000,
        stock: true,
        descripcion: "Aspiradora doméstica económica para limpieza diaria.",
        especificaciones: {
            potencia: "1200W",
            capacidad: "1.5 litros",
            filtro: "Lavable",
            cable: "5 metros",
            accesorios: "Boquillas incluidas",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 322,
        sku: "ASP-ROB-002",
        marca: "Atma",
        modelo: "AS8920",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aspiradora Atma 1400W",
        categoria: "Aspiradoras",
        subcategoria: "Aspiradoras Económicas",
        precioOferta: 135000,
        stock: true,
        descripcion: "Aspiradora potente y compacta para hogares.",
        especificaciones: {
            potencia: "1400W",
            capacidad: "2 litros",
            filtro: "Lavable",
            cable: "5 metros",
            accesorios: "Múltiples boquillas",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 323,
        sku: "ASP-ROB-003",
        marca: "Philco",
        modelo: "AS1400",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aspiradora Philco 1400W",
        categoria: "Aspiradoras",
        subcategoria: "Aspiradoras Económicas",
        precioOferta: 145000,
        stock: true,
        descripcion: "Aspiradora Philco para limpieza de pisos y superficies.",
        especificaciones: {
            potencia: "1400W",
            capacidad: "2 litros",
            filtro: "Lavable",
            cable: "5 metros",
            accesorios: "Boquillas",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 324,
        sku: "ASP-ROB-004",
        marca: "Black+Decker",
        modelo: "WDA",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aspiradora Vertical Black+Decker",
        categoria: "Aspiradoras",
        subcategoria: "Aspiradoras Verticales",
        precioOferta: 180000,
        stock: true,
        descripcion: "Aspiradora vertical compacta y práctica para limpieza rápida.",
        especificaciones: {
            potencia: "120W",
            tipo: "Vertical",
            bateria: "Recargable",
            autonomia: "Hasta 30 minutos",
            filtro: "Lavable",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 325,
        sku: "ASP-ROB-005",
        marca: "Kanji",
        modelo: "KJ-ASP",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aspiradora Kanji 1200W",
        categoria: "Aspiradoras",
        subcategoria: "Aspiradoras Económicas",
        precioOferta: 110000,
        stock: true,
        descripcion: "Aspiradora económica para limpieza general.",
        especificaciones: {
            potencia: "1200W",
            capacidad: "1.5 litros",
            filtro: "Lavable",
            cable: "5 metros",
            accesorios: "Incluidos",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 326,
        sku: "HID-LUS-006",
        marca: "Lusqtoff",
        modelo: "HL-120",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Hidrolavadora Lusqtoff 120 Bar",
        categoria: "Aspiradoras",
        subcategoria: "Hidrolavadoras",
        precioOferta: 180000,
        stock: true,
        descripcion: "Hidrolavadora económica para limpieza de vehículos, patios y exteriores.",
        especificaciones: {
            potencia: "1400W",
            presion: "120 Bar",
            caudal: "6 L/min",
            manguera: "5 metros",
            accesorios: "Pistola y lanza",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 327,
        sku: "HID-GAM-007",
        marca: "Gamma",
        modelo: "G2900",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Hidrolavadora Gamma 120 Bar",
        categoria: "Aspiradoras",
        subcategoria: "Hidrolavadoras",
        precioOferta: 195000,
        stock: true,
        descripcion: "Hidrolavadora compacta para tareas de limpieza doméstica.",
        especificaciones: {
            potencia: "1500W",
            presion: "120 Bar",
            caudal: "6 L/min",
            manguera: "5 metros",
            accesorios: "Pistola y boquillas",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 328,
        sku: "HID-BLA-008",
        marca: "Black+Decker",
        modelo: "BEPW",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Hidrolavadora Black+Decker 110 Bar",
        categoria: "Aspiradoras",
        subcategoria: "Hidrolavadoras",
        precioOferta: 210000,
        stock: true,
        descripcion: "Hidrolavadora compacta de presión para vehículos y exteriores.",
        especificaciones: {
            potencia: "1400W",
            presion: "110 Bar",
            caudal: "5.5 L/min",
            manguera: "5 metros",
            accesorios: "Pistola",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 329,
        sku: "HID-EIN-009",
        marca: "Einhell",
        modelo: "TC-HP",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Hidrolavadora Einhell 120 Bar",
        categoria: "Aspiradoras",
        subcategoria: "Hidrolavadoras",
        precioOferta: 220000,
        stock: true,
        descripcion: "Hidrolavadora de alta presión para limpieza doméstica.",
        especificaciones: {
            potencia: "1500W",
            presion: "120 Bar",
            caudal: "5.5 L/min",
            manguera: "5 metros",
            accesorios: "Pistola y lanza",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 330,
        sku: "HID-DOW-010",
        marca: "Dowen Pagio",
        modelo: "DP-120",
        imagenes: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Hidrolavadora Dowen Pagio 120 Bar",
        categoria: "Aspiradoras",
        subcategoria: "Hidrolavadoras",
        precioOferta: 175000,
        stock: true,
        descripcion: "Hidrolavadora económica para limpieza de autos y espacios exteriores.",
        especificaciones: {
            potencia: "1400W",
            presion: "120 Bar",
            caudal: "6 L/min",
            manguera: "5 metros",
            accesorios: "Pistola y lanza",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// TERMOTANQUES - 15
// ==========================================

export const arrayTermotanques = [
    {
        id: 361,
        sku: "TER-GAS-001",
        marca: "Ecovatio",
        modelo: "TEBP50",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque a Gas Natural 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Natural",
        precioOferta: 480000,
        stock: true,
        descripcion: "Termotanque a gas natural económico para hogares.",
        especificaciones: {
            capacidad: "50 litros",
            recuperacion: "Alta recuperación",
            energia: "Gas Natural",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 362,
        sku: "TER-GAS-002",
        marca: "Orbis",
        modelo: "315",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Orbis Gas Natural 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Natural",
        precioOferta: 520000,
        stock: true,
        descripcion: "Termotanque Orbis de gas natural para uso familiar.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Gas Natural",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 363,
        sku: "TER-GAS-003",
        marca: "Señorial",
        modelo: "S-55",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Señorial Gas Natural 55 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Natural",
        precioOferta: 500000,
        stock: true,
        descripcion: "Termotanque económico de gas natural para hogares.",
        especificaciones: {
            capacidad: "55 litros",
            energia: "Gas Natural",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 364,
        sku: "TER-GAS-004",
        marca: "Longvie",
        modelo: "T305",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Longvie Gas Natural",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Natural",
        precioOferta: 540000,
        stock: true,
        descripcion: "Termotanque Longvie para gas natural con buena recuperación.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Gas Natural",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 365,
        sku: "TER-GAS-005",
        marca: "Rheem",
        modelo: "TQ50",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Rheem Gas Natural 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Natural",
        precioOferta: 560000,
        stock: true,
        descripcion: "Termotanque Rheem de gas natural con sistema de seguridad.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Gas Natural",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 366,
        sku: "TER-ENV-006",
        marca: "Ecovatio",
        modelo: "TEBP50E",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Gas Envasado Ecovatio 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Envasado",
        precioOferta: 490000,
        stock: true,
        descripcion: "Termotanque económico preparado para gas envasado.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Gas Envasado",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 367,
        sku: "TER-ENV-007",
        marca: "Orbis",
        modelo: "315E",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Orbis Gas Envasado",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Envasado",
        precioOferta: 520000,
        stock: true,
        descripcion: "Termotanque Orbis para instalaciones con gas envasado.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Gas Envasado",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 368,
        sku: "TER-ENV-008",
        marca: "Señorial",
        modelo: "S-55E",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Señorial Gas Envasado",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Envasado",
        precioOferta: 510000,
        stock: true,
        descripcion: "Termotanque económico para gas envasado.",
        especificaciones: {
            capacidad: "55 litros",
            energia: "Gas Envasado",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 369,
        sku: "TER-ENV-009",
        marca: "Longvie",
        modelo: "T305E",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Longvie Gas Envasado",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Envasado",
        precioOferta: 545000,
        stock: true,
        descripcion: "Termotanque Longvie compatible con gas envasado.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Gas Envasado",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 370,
        sku: "TER-ENV-010",
        marca: "Rheem",
        modelo: "TQ50E",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Rheem Gas Envasado 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Gas Envasado",
        precioOferta: 570000,
        stock: true,
        descripcion: "Termotanque Rheem para gas envasado con sistema de seguridad.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Gas Envasado",
            recuperacion: "Alta",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 371,
        sku: "TER-ELE-011",
        marca: "Rheem",
        modelo: "TE50",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Eléctrico Rheem 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Eléctricos",
        precioOferta: 450000,
        stock: true,
        descripcion: "Termotanque eléctrico de 50 litros para hogares.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Eléctrico",
            potencia: "1500W",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 372,
        sku: "TER-ELE-012",
        marca: "Señorial",
        modelo: "TES55",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Eléctrico Señorial 55 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Eléctricos",
        precioOferta: 430000,
        stock: true,
        descripcion: "Termotanque eléctrico económico para uso familiar.",
        especificaciones: {
            capacidad: "55 litros",
            energia: "Eléctrico",
            potencia: "1500W",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 373,
        sku: "TER-ELE-013",
        marca: "Ecovatio",
        modelo: "TE50",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Eléctrico Ecovatio 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Eléctricos",
        precioOferta: 390000,
        stock: true,
        descripcion: "Termotanque eléctrico económico de 50 litros.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Eléctrico",
            potencia: "1500W",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 374,
        sku: "TER-ELE-014",
        marca: "Escorial",
        modelo: "TEE55",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Eléctrico Escorial 55 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Eléctricos",
        precioOferta: 410000,
        stock: true,
        descripcion: "Termotanque eléctrico de capacidad familiar.",
        especificaciones: {
            capacidad: "55 litros",
            energia: "Eléctrico",
            potencia: "1500W",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 375,
        sku: "TER-ELE-015",
        marca: "Longvie",
        modelo: "E50",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque Eléctrico Longvie 50 Litros",
        categoria: "Termotanques y Calefones",
        subcategoria: "Eléctricos",
        precioOferta: 460000,
        stock: true,
        descripcion: "Termotanque Longvie eléctrico para hogares.",
        especificaciones: {
            capacidad: "50 litros",
            energia: "Eléctrico",
            potencia: "1500W",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// INFORMÁTICA - 15
// ==========================================

export const arrayInformatica = [
    {
        id: 401,
        sku: "INF-PC-001",
        marca: "Lenovo",
        modelo: "IdeaCentre 3",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC de Escritorio Lenovo IdeaCentre 3",
        categoria: "Informática",
        subcategoria: "Computadoras de Escritorio",
        precioOferta: 650000,
        stock: true,
        descripcion: "Computadora de escritorio compacta para oficina, estudio y uso familiar.",
        especificaciones: {
            procesador: "Intel Core i3",
            memoriaRAM: "8GB",
            almacenamiento: "SSD 256GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 402,
        sku: "INF-PC-002",
        marca: "HP",
        modelo: "Slim Desktop",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC de Escritorio HP Slim",
        categoria: "Informática",
        subcategoria: "Computadoras de Escritorio",
        precioOferta: 690000,
        stock: true,
        descripcion: "PC compacta HP para tareas de oficina, estudio y navegación.",
        especificaciones: {
            procesador: "Intel Core i3",
            memoriaRAM: "8GB",
            almacenamiento: "SSD 256GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 403,
        sku: "INF-PC-003",
        marca: "Dell",
        modelo: "Inspiron Desktop",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC Dell Inspiron Desktop",
        categoria: "Informática",
        subcategoria: "Computadoras de Escritorio",
        precioOferta: 720000,
        stock: true,
        descripcion: "Computadora Dell para oficina y uso doméstico.",
        especificaciones: {
            procesador: "Intel Core i3",
            memoriaRAM: "8GB",
            almacenamiento: "SSD 256GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 404,
        sku: "INF-PC-004",
        marca: "GFAST",
        modelo: "Office Ryzen 3",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC GFAST Office Ryzen 3",
        categoria: "Informática",
        subcategoria: "Computadoras de Escritorio",
        precioOferta: 590000,
        stock: true,
        descripcion: "PC económica con procesador Ryzen para oficina y estudio.",
        especificaciones: {
            procesador: "AMD Ryzen 3",
            memoriaRAM: "8GB",
            almacenamiento: "SSD 256GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Ethernet",
            garantia: "Garantía"
        }
    },
    {
        id: 405,
        sku: "INF-PC-005",
        marca: "CX",
        modelo: "Office Intel",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "PC CX Office Intel",
        categoria: "Informática",
        subcategoria: "Computadoras de Escritorio",
        precioOferta: 550000,
        stock: true,
        descripcion: "Computadora económica para tareas administrativas y educativas.",
        especificaciones: {
            procesador: "Intel Core i3",
            memoriaRAM: "8GB",
            almacenamiento: "SSD 240GB",
            sistema: "Windows 11",
            conectividad: "Ethernet",
            garantia: "Garantía"
        }
    },
    {
        id: 406,
        sku: "INF-NOTE-006",
        marca: "Lenovo",
        modelo: "IdeaPad 1",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Lenovo IdeaPad 1 15.6 Pulgadas",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 799999,
        stock: true,
        descripcion: "Notebook económica Lenovo para estudio, oficina y entretenimiento.",
        especificaciones: {
            pantalla: "15.6 pulgadas FHD",
            procesador: "Intel Celeron",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11 Home",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 407,
        sku: "INF-NOTE-007",
        marca: "HP",
        modelo: "14-dq",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook HP 14 Pulgadas",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 760000,
        stock: true,
        descripcion: "Notebook HP compacta para tareas cotidianas.",
        especificaciones: {
            pantalla: "14 pulgadas HD",
            procesador: "Intel Celeron",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 408,
        sku: "INF-NOTE-008",
        marca: "Acer",
        modelo: "Aspire 3",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Acer Aspire 3",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 780000,
        stock: true,
        descripcion: "Notebook Acer para estudio, trabajo y entretenimiento.",
        especificaciones: {
            pantalla: "15.6 pulgadas FHD",
            procesador: "Intel Core i3",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 409,
        sku: "INF-NOTE-009",
        marca: "ASUS",
        modelo: "Vivobook Go 15",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook ASUS Vivobook Go 15",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 820000,
        stock: true,
        descripcion: "Notebook liviana ASUS para movilidad y productividad.",
        especificaciones: {
            pantalla: "15.6 pulgadas FHD",
            procesador: "Intel Core i3",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 410,
        sku: "INF-NOTE-010",
        marca: "Exo",
        modelo: "Smart E15",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Exo Smart E15",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 590000,
        stock: true,
        descripcion: "Notebook argentina económica para estudio y oficina.",
        especificaciones: {
            pantalla: "15.6 pulgadas",
            procesador: "Intel Celeron",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía"
        }
    },
    {
        id: 411,
        sku: "INF-NOTE-011",
        marca: "Positivo BGH",
        modelo: "E15",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Positivo BGH E15",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 610000,
        stock: true,
        descripcion: "Notebook económica para tareas educativas y administrativas.",
        especificaciones: {
            pantalla: "15.6 pulgadas",
            procesador: "Intel Celeron",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía"
        }
    },
    {
        id: 412,
        sku: "INF-NOTE-012",
        marca: "Lenovo",
        modelo: "V15",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Lenovo V15",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 690000,
        stock: true,
        descripcion: "Notebook Lenovo para trabajo, oficina y estudio.",
        especificaciones: {
            pantalla: "15.6 pulgadas FHD",
            procesador: "Intel Core i3",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 413,
        sku: "INF-NOTE-013",
        marca: "HP",
        modelo: "15-fc",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook HP 15 Pulgadas",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 730000,
        stock: true,
        descripcion: "Notebook HP con buen equilibrio entre precio y rendimiento.",
        especificaciones: {
            pantalla: "15.6 pulgadas FHD",
            procesador: "AMD Ryzen 3",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 414,
        sku: "INF-NOTE-014",
        marca: "Dell",
        modelo: "Inspiron 15",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Dell Inspiron 15",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 780000,
        stock: true,
        descripcion: "Notebook Dell para productividad y uso cotidiano.",
        especificaciones: {
            pantalla: "15.6 pulgadas FHD",
            procesador: "Intel Core i3",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 415,
        sku: "INF-NOTE-015",
        marca: "Acer",
        modelo: "Extensa 15",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Acer Extensa 15",
        categoria: "Informática",
        subcategoria: "Notebooks Económicas",
        precioOferta: 650000,
        stock: true,
        descripcion: "Notebook Acer económica para estudio y oficina.",
        especificaciones: {
            pantalla: "15.6 pulgadas",
            procesador: "Intel Core i3",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// AUDIO - 10
// ==========================================

export const arrayAudio = [
    {
        id: 441,
        sku: "AUD-PAR-001",
        marca: "JBL",
        modelo: "Go 4",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth JBL Go 4",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 85000,
        stock: true,
        descripcion: "Parlante Bluetooth compacto y portátil con excelente autonomía.",
        especificaciones: {
            conectividad: "Bluetooth 5.3",
            resistencia: "IP67",
            bateria: "Hasta 7 horas",
            potencia: "4.2W",
            tamaño: "Compacto",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 442,
        sku: "AUD-PAR-002",
        marca: "JBL",
        modelo: "Clip 4",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth JBL Clip 4",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 98000,
        stock: true,
        descripcion: "Parlante portátil con mosquetón integrado, resistente al agua y polvo.",
        especificaciones: {
            conectividad: "Bluetooth 5.1",
            resistencia: "IP67 Sumergible",
            bateria: "Hasta 10 horas",
            potencia: "5W RMS",
            tamaño: "Compacto",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 443,
        sku: "AUD-PAR-003",
        marca: "Xiaomi",
        modelo: "Sound Pocket",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth Xiaomi Sound Pocket",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 90000,
        stock: true,
        descripcion: "Parlante pequeño Xiaomi con sonido potente para su tamaño.",
        especificaciones: {
            conectividad: "Bluetooth 5.4",
            resistencia: "IP67",
            bateria: "Hasta 10 horas",
            potencia: "5W",
            tamaño: "Compacto",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 444,
        sku: "AUD-PAR-004",
        marca: "Philips",
        modelo: "TAS1505",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth Philips TAS1505",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 85000,
        stock: true,
        descripcion: "Parlante Bluetooth portátil compacto.",
        especificaciones: {
            conectividad: "Bluetooth",
            resistencia: "IPX7",
            bateria: "Hasta 8 horas",
            potencia: "5W",
            tamaño: "Compacto",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 445,
        sku: "AUD-PAR-005",
        marca: "JBL",
        modelo: "Flip 6",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth JBL Flip 6",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 210000,
        stock: true,
        descripcion: "Parlante portátil JBL con sonido potente y resistencia al agua.",
        especificaciones: {
            conectividad: "Bluetooth 5.1",
            resistencia: "IP67",
            bateria: "Hasta 12 horas",
            potencia: "30W RMS",
            tamaño: "Mediano",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 446,
        sku: "AUD-PAR-006",
        marca: "Sony",
        modelo: "SRS-XB100",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth Sony SRS-XB100",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 140000,
        stock: true,
        descripcion: "Parlante portátil Sony con excelente autonomía y resistencia.",
        especificaciones: {
            conectividad: "Bluetooth 5.3",
            resistencia: "IP67",
            bateria: "Hasta 16 horas",
            potencia: "5W",
            tamaño: "Compacto",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 447,
        sku: "AUD-PAR-007",
        marca: "JBL",
        modelo: "Charge 5",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth JBL Charge 5",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 300000,
        stock: true,
        descripcion: "Parlante Bluetooth potente con gran autonomía y función powerbank.",
        especificaciones: {
            conectividad: "Bluetooth 5.1",
            resistencia: "IP67",
            bateria: "Hasta 20 horas",
            potencia: "40W RMS",
            funcion: "Powerbank",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 448,
        sku: "AUD-PAR-008",
        marca: "Sony",
        modelo: "SRS-XG300",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth Sony SRS-XG300",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 450000,
        stock: true,
        descripcion: "Parlante portátil potente con iluminación y gran batería.",
        especificaciones: {
            conectividad: "Bluetooth",
            resistencia: "IP67",
            bateria: "Hasta 25 horas",
            potencia: "25W RMS",
            iluminacion: "LED",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 449,
        sku: "AUD-PAR-009",
        marca: "JBL",
        modelo: "Xtreme 3",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth JBL Xtreme 3",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 520000,
        stock: true,
        descripcion: "Parlante JBL de gran potencia para fiestas y exteriores.",
        especificaciones: {
            conectividad: "Bluetooth 5.1",
            resistencia: "IP67",
            bateria: "Hasta 15 horas",
            potencia: "100W",
            funcion: "PartyBoost",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 450,
        sku: "AUD-PAR-010",
        marca: "JBL",
        modelo: "PartyBox Stage 320",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante JBL PartyBox Stage 320",
        categoria: "Audio",
        subcategoria: "Parlantes Party",
        precioOferta: 1150000,
        stock: true,
        descripcion: "Parlante party de gran potencia con iluminación y batería integrada.",
        especificaciones: {
            conectividad: "Bluetooth",
            bateria: "Hasta 18 horas",
            potencia: "240W",
            iluminacion: "Luces LED",
            entradas: "Micrófono / Guitarra",
            ruedas: "Incluidas",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// ACCESORIOS - 20
// ==========================================

export const arrayAccesorios = [
    {
        id: 481,
        sku: "ACC-MOU-001",
        marca: "Logitech",
        modelo: "Pebble M350",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Mouse Inalámbrico Logitech Pebble M350",
        categoria: "Accesorios",
        subcategoria: "Mouse",
        precioOferta: 35000,
        stock: true,
        descripcion: "Mouse inalámbrico compacto, silencioso y cómodo para oficina y estudio.",
        especificaciones: {
            conectividad: "Bluetooth y USB 2.4GHz",
            diseno: "Slim y silencioso",
            bateria: "Hasta 18 meses",
            sensor: "Óptico",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 482,
        sku: "ACC-MOU-002",
        marca: "Logitech",
        modelo: "M185",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Mouse Inalámbrico Logitech M185",
        categoria: "Accesorios",
        subcategoria: "Mouse",
        precioOferta: 28000,
        stock: true,
        descripcion: "Mouse inalámbrico económico y confiable.",
        especificaciones: {
            conectividad: "USB 2.4GHz",
            botones: "3",
            sensor: "Óptico",
            bateria: "Hasta 12 meses",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 483,
        sku: "ACC-MOU-003",
        marca: "Redragon",
        modelo: "M601",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Mouse Gamer Redragon M601",
        categoria: "Accesorios",
        subcategoria: "Mouse Gamer",
        precioOferta: 45000,
        stock: true,
        descripcion: "Mouse gamer con sensor de precisión y diseño ergonómico.",
        especificaciones: {
            sensor: "Óptico",
            dpi: "Hasta 3200 DPI",
            botones: "6",
            conectividad: "USB",
            iluminacion: "RGB",
            garantia: "Garantía"
        }
    },
    {
        id: 484,
        sku: "ACC-TEC-004",
        marca: "Logitech",
        modelo: "K120",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Teclado Logitech K120",
        categoria: "Accesorios",
        subcategoria: "Teclados",
        precioOferta: 30000,
        stock: true,
        descripcion: "Teclado USB económico para oficina y hogar.",
        especificaciones: {
            conexion: "USB",
            distribucion: "Español",
            teclas: "104",
            resistencia: "A prueba de derrames",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 485,
        sku: "ACC-TEC-005",
        marca: "Redragon",
        modelo: "K552",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Teclado Mecánico Gamer Redragon K552",
        categoria: "Accesorios",
        subcategoria: "Teclados Gamer",
        precioOferta: 85000,
        stock: true,
        descripcion: "Teclado mecánico gamer con retroiluminación.",
        especificaciones: {
            tipo: "Mecánico",
            switches: "Outemu",
            conexion: "USB",
            iluminacion: "RGB",
            estructura: "Metal",
            garantia: "Garantía"
        }
    },
    {
        id: 486,
        sku: "ACC-AUR-006",
        marca: "HyperX",
        modelo: "Cloud Stinger 2",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Auriculares Gamer HyperX Cloud Stinger 2",
        categoria: "Accesorios",
        subcategoria: "Auriculares",
        precioOferta: 95000,
        stock: true,
        descripcion: "Auriculares gamer cómodos con micrófono integrado.",
        especificaciones: {
            conexion: "3.5mm",
            drivers: "50mm",
            microfono: "Integrado",
            compatibilidad: "PC / Consolas",
            controles: "Volumen integrado",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 487,
        sku: "ACC-AUR-007",
        marca: "JBL",
        modelo: "Tune 520BT",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Auriculares Bluetooth JBL Tune 520BT",
        categoria: "Accesorios",
        subcategoria: "Auriculares Bluetooth",
        precioOferta: 85000,
        stock: true,
        descripcion: "Auriculares inalámbricos JBL con gran autonomía.",
        especificaciones: {
            conectividad: "Bluetooth 5.3",
            bateria: "Hasta 57 horas",
            carga: "USB-C",
            microfono: "Integrado",
            controles: "En auricular",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 488,
        sku: "ACC-AUR-008",
        marca: "Xiaomi",
        modelo: "Redmi Buds 6",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Auriculares Xiaomi Redmi Buds 6",
        categoria: "Accesorios",
        subcategoria: "Auriculares TWS",
        precioOferta: 75000,
        stock: true,
        descripcion: "Auriculares inalámbricos compactos con estuche de carga.",
        especificaciones: {
            conectividad: "Bluetooth",
            bateria: "Hasta 42 horas con estuche",
            microfono: "Integrado",
            carga: "USB-C",
            tipo: "TWS",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 489,
        sku: "ACC-AUR-009",
        marca: "Philips",
        modelo: "TAH4205",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Auriculares Bluetooth Philips TAH4205",
        categoria: "Accesorios",
        subcategoria: "Auriculares Bluetooth",
        precioOferta: 70000,
        stock: true,
        descripcion: "Auriculares Bluetooth económicos con diseño liviano.",
        especificaciones: {
            conectividad: "Bluetooth",
            bateria: "Hasta 29 horas",
            microfono: "Integrado",
            carga: "USB-C",
            controles: "Integrados",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 490,
        sku: "ACC-CAR-010",
        marca: "Samsung",
        modelo: "EP-T2510",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cargador Samsung USB-C 25W",
        categoria: "Accesorios",
        subcategoria: "Cargadores",
        precioOferta: 35000,
        stock: true,
        descripcion: "Cargador rápido Samsung de 25W con conexión USB-C.",
        especificaciones: {
            potencia: "25W",
            conexion: "USB-C",
            tecnologia: "Super Fast Charging",
            entrada: "100-240V",
            proteccion: "Sobrecarga / Sobretemperatura",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 491,
        sku: "ACC-CAR-011",
        marca: "Motorola",
        modelo: "TurboPower 33W",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cargador Motorola TurboPower 33W",
        categoria: "Accesorios",
        subcategoria: "Cargadores",
        precioOferta: 38000,
        stock: true,
        descripcion: "Cargador rápido Motorola de 33W.",
        especificaciones: {
            potencia: "33W",
            conexion: "USB-C",
            tecnologia: "TurboPower",
            entrada: "100-240V",
            proteccion: "Protección múltiple",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 492,
        sku: "ACC-CAR-012",
        marca: "Anker",
        modelo: "Nano 30W",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cargador Anker Nano 30W",
        categoria: "Accesorios",
        subcategoria: "Cargadores",
        precioOferta: 45000,
        stock: true,
        descripcion: "Cargador compacto de carga rápida para celulares y tablets.",
        especificaciones: {
            potencia: "30W",
            conexion: "USB-C",
            tecnologia: "Power Delivery",
            diseño: "Compacto",
            proteccion: "MultiProtect",
            garantia: "Garantía"
        }
    },
    {
        id: 493,
        sku: "ACC-CAB-013",
        marca: "Baseus",
        modelo: "USB-C",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cable Baseus USB-C",
        categoria: "Accesorios",
        subcategoria: "Cables",
        precioOferta: 18000,
        stock: true,
        descripcion: "Cable USB-C para carga y transferencia de datos.",
        especificaciones: {
            conexion: "USB-C a USB-C",
            longitud: "1 metro",
            carga: "Carga rápida",
            datos: "Alta velocidad",
            material: "Reforzado",
            garantia: "Garantía"
        }
    },
    {
        id: 494,
        sku: "ACC-CAB-014",
        marca: "Anker",
        modelo: "PowerLine",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cable Anker USB-C a Lightning",
        categoria: "Accesorios",
        subcategoria: "Cables",
        precioOferta: 32000,
        stock: true,
        descripcion: "Cable reforzado para carga y sincronización de dispositivos compatibles.",
        especificaciones: {
            conexion: "USB-C a Lightning",
            longitud: "0.9 metros",
            carga: "Carga rápida",
            certificacion: "MFi",
            material: "Nylon reforzado",
            garantia: "Garantía"
        }
    },
    {
        id: 495,
        sku: "ACC-PWB-015",
        marca: "Xiaomi",
        modelo: "Power Bank 10000",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Power Bank Xiaomi 10000mAh",
        categoria: "Accesorios",
        subcategoria: "Power Banks",
        precioOferta: 45000,
        stock: true,
        descripcion: "Batería portátil compacta para cargar celulares y dispositivos.",
        especificaciones: {
            capacidad: "10000mAh",
            entradas: "USB-C / Micro USB",
            salidas: "USB-A",
            carga: "Carga rápida",
            proteccion: "Protección múltiple",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 496,
        sku: "ACC-CAR-016",
        marca: "Samsung",
        modelo: "Wireless 25W",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cargador Inalámbrico Samsung 25W",
        categoria: "Accesorios",
        subcategoria: "Cargadores Inalámbricos",
        precioOferta: 55000,
        stock: true,
        descripcion: "Base de carga inalámbrica para smartphones compatibles.",
        especificaciones: {
            potencia: "Hasta 25W",
            tecnologia: "Wireless Charging",
            conexion: "USB-C",
            compatibilidad: "Qi",
            proteccion: "Temperatura / Sobrecarga",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 497,
        sku: "ACC-MEM-017",
        marca: "Kingston",
        modelo: "DataTraveler 64GB",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Pendrive Kingston DataTraveler 64GB",
        categoria: "Accesorios",
        subcategoria: "Memorias USB",
        precioOferta: 18000,
        stock: true,
        descripcion: "Memoria USB compacta para almacenamiento y transferencia de archivos.",
        especificaciones: {
            capacidad: "64GB",
            conexion: "USB 3.2",
            velocidad: "Alta velocidad",
            material: "Plástico",
            compatibilidad: "Windows / Mac / Linux",
            garantia: "Garantía"
        }
    },
    {
        id: 498,
        sku: "ACC-MEM-018",
        marca: "SanDisk",
        modelo: "Ultra 128GB",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Pendrive SanDisk Ultra 128GB",
        categoria: "Accesorios",
        subcategoria: "Memorias USB",
        precioOferta: 30000,
        stock: true,
        descripcion: "Pendrive de gran capacidad para documentos, fotos y videos.",
        especificaciones: {
            capacidad: "128GB",
            conexion: "USB 3.0",
            velocidad: "Hasta 130MB/s",
            compatibilidad: "PC / Notebook",
            material: "Plástico",
            garantia: "Garantía"
        }
    },
    {
        id: 499,
        sku: "ACC-WEB-019",
        marca: "Logitech",
        modelo: "C270",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Webcam Logitech C270 HD",
        categoria: "Accesorios",
        subcategoria: "Webcams",
        precioOferta: 55000,
        stock: true,
        descripcion: "Webcam HD para videollamadas, clases y reuniones online.",
        especificaciones: {
            resolucion: "720p HD",
            microfono: "Integrado",
            conexion: "USB",
            compatibilidad: "Windows / Mac",
            clip: "Universal",
            garantia: "Garantía oficial"
        }
    },
    {
        id: 500,
        sku: "ACC-BLU-020",
        marca: "TP-Link",
        modelo: "UB500",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Adaptador Bluetooth USB TP-Link UB500",
        categoria: "Accesorios",
        subcategoria: "Adaptadores",
        precioOferta: 22000,
        stock: true,
        descripcion: "Adaptador USB Bluetooth para agregar conectividad inalámbrica a computadoras.",
        especificaciones: {
            conexion: "USB 2.0",
            bluetooth: "5.0",
            alcance: "Hasta 20 metros",
            compatibilidad: "Windows",
            tamaño: "Nano",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// CATÁLOGO COMPLETO
// ==========================================

export const catalogoCompleto = [
    ...arrayCelulares,
    ...arrayGaming,
    ...arrayTelevisoresMonitores,
    ...arrayAiresAcondicionados,
    ...arrayHeladerasFreezers,
    ...arrayCocinasHornos,
    ...arrayLavarropasSecadoras,
    ...arrayPequenosElectrodomesticos,
    ...arrayAspiradoras,
    ...arrayTermotanques,
    ...arrayInformatica,
    ...arrayAudio,
    ...arrayAccesorios
];

// ==========================================
// EXPORT PRINCIPAL
// ==========================================

export const productos = catalogoCompleto;
