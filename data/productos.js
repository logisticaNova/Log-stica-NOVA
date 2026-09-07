// ==========================================
// CATÁLOGO DE PRODUCTOS
// 13 CATEGORÍAS - 1 PRODUCTO POR CATEGORÍA
// ==========================================

export const arrayCelulares = [
    {
        id: 1,
        sku: "CEL-IPH-001",
        marca: "Apple",
        modelo: "iPhone 17",
        imagenes: [
            "https://images.unsplash.com/photo-1592286927505-2fd8a2e0b3f4?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Apple iPhone 17 256GB",
        categoria: "Celulares",
        subcategoria: "Smartphones",
        precioOferta: 1450000,
        stock: true,
        descripcion: "Smartphone Apple de nueva generación con pantalla de alta resolución, potente procesador, sistema avanzado de cámaras y almacenamiento interno de 256GB. Diseñado para ofrecer un excelente rendimiento, autonomía y experiencia multimedia.",
        especificaciones: {
            pantalla: "6.3 pulgadas OLED",
            almacenamiento: "256GB",
            memoriaRAM: "8GB",
            camara: "Sistema avanzado de cámaras",
            conectividad: "5G / Wi-Fi / Bluetooth",
            sistema: "iOS",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayGaming = [
    {
        id: 41,
        sku: "GAM-PS5-001",
        marca: "Sony",
        modelo: "PlayStation 5 Slim",
        imagenes: [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Consola Sony PlayStation 5 Slim",
        categoria: "Gaming",
        subcategoria: "Consolas",
        precioOferta: 999999,
        stock: true,
        descripcion: "Consola de nueva generación con gráficos de alta definición, almacenamiento SSD de gran velocidad y soporte para juegos de última generación. Su diseño Slim ocupa menos espacio y mantiene un excelente rendimiento.",
        especificaciones: {
            almacenamiento: "SSD 1TB",
            resolucion: "Hasta 4K",
            conectividad: "Wi-Fi / Bluetooth / HDMI",
            unidad: "Compatible con discos",
            tecnologia: "Ray Tracing",
            accesorios: "Control DualSense incluido",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayTelevisoresMonitores = [
    {
        id: 81,
        sku: "TV-SAM-001",
        marca: "Samsung",
        modelo: "UN50DU7000",
        imagenes: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Smart TV Samsung 50 Pulgadas 4K UHD",
        categoria: "Televisores y Monitores",
        subcategoria: "Smart TV",
        precioOferta: 799999,
        stock: true,
        descripcion: "Smart TV Samsung de 50 pulgadas con resolución 4K UHD, sistema inteligente para acceder a aplicaciones de streaming y tecnología de imagen diseñada para ofrecer colores definidos y gran nivel de detalle.",
        especificaciones: {
            pantalla: "50 pulgadas",
            resolucion: "4K UHD",
            tecnologia: "LED",
            sistema: "Smart TV",
            conectividad: "Wi-Fi / Bluetooth",
            puertos: "HDMI / USB",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayAiresAcondicionados = [
    {
        id: 121,
        sku: "CLI-AA-001",
        marca: "Philco",
        modelo: "PHIN32W23N",
        imagenes: [
            "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aire Acondicionado Split Inverter 3200 Frigorías",
        categoria: "Aires Acondicionados",
        subcategoria: "Split",
        precioOferta: 850000,
        stock: true,
        descripcion: "Aire acondicionado split con tecnología Inverter para una mayor eficiencia energética y climatización constante en el hogar. Cuenta con función frío/calor, bajo nivel de ruido y control remoto inteligente.",
        especificaciones: {
            capacidad: "3200 frigorías",
            tecnologia: "Inverter",
            funcion: "Frío / Calor",
            eficiencia: "Clase A",
            gas: "R410a",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayHeladerasFreezers = [
    {
        id: 161,
        sku: "LIA-HEL-001",
        marca: "Gafa",
        modelo: "HGF358",
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf82bd1e?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Heladera con Freezer Gafa 282 Litros Blanca",
        categoria: "Heladeras y Freezers",
        subcategoria: "Heladeras",
        precioOferta: 920000,
        stock: true,
        descripcion: "Heladera cíclica con amplio espacio de almacenamiento, estantes regulables en altura y cajón especial para vegetales. Diseñada para mantener los alimentos frescos por más tiempo con un consumo eficiente de energía.",
        especificaciones: {
            capacidad: "282 litros",
            sistema: "Cíclica",
            eficiencia: "Clase A",
            color: "Blanca",
            puertas: "2 puertas",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayCocinasHornos = [
    {
        id: 201,
        sku: "COC-HOR-001",
        marca: "Longvie",
        modelo: "13501X",
        imagenes: [
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Cocina a Gas Multigas Acero Inoxidable 56cm",
        categoria: "Cocinas y Hornos",
        subcategoria: "Cocinas",
        precioOferta: 740000,
        stock: true,
        descripcion: "Cocina multigas con cuatro hornallas de alta potencia, válvulas de seguridad en hornallas y horno, y visor de doble vidrio templado. Su estructura de acero inoxidable aporta durabilidad y fácil limpieza.",
        especificaciones: {
            hornallas: "4 quemadores",
            tipo: "Multigas",
            horno: "Con visor y luz",
            seguridad: "Válvula cortagas",
            material: "Acero inoxidable",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayLavarropasSecadoras = [
    {
        id: 241,
        sku: "LAV-SEC-001",
        marca: "Drean",
        modelo: "Concept 5.05",
        imagenes: [
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Lavarropas Automático Drean 5 Kg 500 RPM",
        categoria: "Lavarropas y Secadoras",
        subcategoria: "Lavarropas",
        precioOferta: 610000,
        stock: true,
        descripcion: "Lavarropas automático con múltiples programas de lavado, selector de temperatura y sistema de lavado inteligente que optimiza el uso de agua y energía para las tareas domésticas diarias.",
        especificaciones: {
            carga: "Frontal / Superior",
            capacidad: "5 kg",
            centrifugado: "500 RPM",
            programas: "15 programas",
            eficiencia: "Clase A",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayPequenosElectrodomesticos = [
    {
        id: 281,
        sku: "PEQ-ELE-001",
        marca: "Atma",
        modelo: "HM8230",
        imagenes: [
            "https://images.unsplash.com/photo-1570222094114-d074f7e1e695?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Batidora de Mano Atma con Bowl",
        categoria: "Pequeños Electrodomésticos",
        subcategoria: "Cocina",
        precioOferta: 115000,
        stock: true,
        descripcion: "Batidora de mano con bowl giratorio y múltiples velocidades para preparar postres, masas y mezclas con gran facilidad. Incluye batidores metálicos y ganchos amasadores.",
        especificaciones: {
            potencia: "400W",
            velocidades: "5 niveles + Turbo",
            bowl: "Incluido de acero",
            accesorios: "Batidores y amasadores",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayAspiradoras = [
    {
        id: 321,
        sku: "ASP-ROB-001",
        marca: "Xiaomi",
        modelo: "Robot Vacuum E10",
        imagenes: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Aspiradora Robot Inteligente Xiaomi Vacuum E10",
        categoria: "Aspiradoras",
        subcategoria: "Robots Aspiradores",
        precioOferta: 345000,
        stock: true,
        descripcion: "Aspiradora robot con funciones de aspirado y mopeo integradas. Navegación inteligente para una limpieza profunda en diferentes tipos de pisos y control mediante aplicación móvil.",
        especificaciones: {
            potenciaSuccion: "4000 Pa",
            funciones: "Aspirado y mopeo",
            conectividad: "Wi-Fi / App",
            bateria: "Autonomía de 110 min",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayTermotanques = [
    {
        id: 361,
        sku: "TER-GAS-001",
        marca: "Ecovatio",
        modelo: "TEBP50",
        imagenes: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Termotanque a Gas 50 Litros Multigas",
        categoria: "Termotanques y Calefones",
        subcategoria: "Termotanques",
        precioOferta: 480000,
        stock: true,
        descripcion: "Termotanque de colgar con capacidad de 50 litros, recuperación rápida y sistema de seguridad multigas. Aislación de poliuretano expandido para mantener el agua caliente por más tiempo.",
        especificaciones: {
            capacidad: "50 litros",
            recuperacion: "Alta recuperación",
            energia: "Multigas",
            instalacion: "De colgar",
            seguridad: "Válvula de seguridad",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayInformatica = [
    {
        id: 401,
        sku: "INF-NOTE-001",
        marca: "Lenovo",
        modelo: "IdeaPad 1",
        imagenes: [
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Notebook Lenovo IdeaPad 1 15.6 pulgadas FHD",
        categoria: "Informática",
        subcategoria: "Notebooks",
        precioOferta: 799999,
        stock: true,
        descripcion: "Notebook portátil orientada a productividad, estudio y entretenimiento diario. Equipada con procesador eficiente, memoria RAM adecuada para multitarea y disco de estado sólido para un arranque rápido.",
        especificaciones: {
            pantalla: "15.6 pulgadas FHD",
            almacenamiento: "SSD 256GB",
            memoriaRAM: "8GB",
            sistema: "Windows 11 Home",
            conectividad: "Wi-Fi / Bluetooth",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayAudio = [
    {
        id: 441,
        sku: "AUD-PAR-001",
        marca: "JBL",
        modelo: "Clip 4",
        imagenes: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Parlante Bluetooth Portátil JBL Clip 4",
        categoria: "Audio",
        subcategoria: "Parlantes Bluetooth",
        precioOferta: 98000,
        stock: true,
        descripcion: "Parlante portátil resistente al agua y al polvo con diseño compacto y mosquetón integrado para llevarlo a todas partes. Ofrece sonido potente y graves nítidos con conectividad inalámbrica.",
        especificaciones: {
            conectividad: "Bluetooth 5.1",
            resistencia: "IP67 Sumergible",
            bateria: "Hasta 10 horas",
            potencia: "5W RMS",
            garantia: "Garantía oficial"
        }
    }
];

export const arrayAccesorios = [
    {
        id: 481,
        sku: "ACC-MOU-001",
        marca: "Logitech",
        modelo: "Pebble M350",
        imagenes: [
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80"
        ],
        nombre: "Mouse Inalámbrico Logitech Pebble M350",
        categoria: "Accesorios",
        subcategoria: "Periféricos",
        precioOferta: 35000,
        stock: true,
        descripcion: "Mouse inalámbrico de diseño moderno, ultra delgado y silencioso. Compatible con múltiples sistemas operativos y con conexión dual por Bluetooth o receptor USB.",
        especificaciones: {
            conectividad: "Bluetooth y USB 2.4GHz",
            diseno: "Slim y silencioso",
            bateria: "Hasta 18 meses",
            sensor: "Óptico de alta precisión",
            garantia: "Garantía oficial"
        }
    }
];

// ==========================================
// UNIÓN DE TODOS LOS ARRAYS
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
