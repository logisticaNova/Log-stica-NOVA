// data/productos.js

export const celulares = [
    {
        id: 1,
        sku: "CEL-IPH-17",
        marca: "Apple",
        modelo: "iPhone 17",
        nombre: "Apple iPhone 17 256GB",
        categoria: "Celulares",
        subcategoria: "iPhone",
        precioOferta: 1538600,
        stock: true,
        descripcion: "El Apple iPhone 17 combina un diseño vanguardista de aluminio espacial, rendimiento gráfico superior impulsado por el nuevo chip propietario y resistencia avanzada al agua y polvo.",
        especificaciones: {
            pantalla: "6.3 pulgadas Super Retina XDR",
            almacenamiento: "256GB",
            conectividad: "5G",
            sistema: "iOS",
            camaraPrincipal: "Sistema dual avanzado de 48MP",
            puerto: "USB-C",
            seguridad: "Face ID"
        },
        imagenes: [
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 2,
        sku: "CEL-SAM-S24",
        marca: "Samsung",
        modelo: "Galaxy S24 Ultra",
        nombre: "Samsung Galaxy S24 Ultra 512GB",
        categoria: "Celulares",
        subcategoria: "Galaxy S",
        precioOferta: 1690000,
        stock: true,
        descripcion: "Experimenta la era de la inteligencia artificial móvil con el Galaxy S24 Ultra. Cuenta con chasis de titanio, S-Pen incorporado y un sistema de cámaras con zoom espacial de nivel profesional.",
        especificaciones: {
            pantalla: "6.8 pulgadas Dynamic AMOLED 2X",
            almacenamiento: "512GB",
            memoriaRam: "12GB",
            conectividad: "5G",
            sistema: "Android",
            camaraPrincipal: "200 MP + Telefoto",
            bateria: "5000 mAh"
        },
        imagenes: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80"
        ]
    }
];

export const arrayGamingInformatica = [
    {
        id: 3,
        sku: "GAM-NOTEBOOK-ASUS",
        marca: "Asus",
        modelo: "TUF Gaming F15",
        nombre: "Notebook Gamer Asus TUF F15 144Hz",
        categoria: "Gaming",
        subcategoria: "Laptops",
        precioOferta: 1450000,
        stock: true,
        descripcion: "Diseñada para gaming serio y multitarea pesada. Equipada con procesador de alta potencia, tarjeta gráfica dedicada de última generación y refrigeración optimizada para largas sesiones.",
        especificaciones: {
            pantalla: "15.6 pulgadas 144Hz FHD",
            almacenamiento: "512GB SSD NVMe",
            ram: "16GB DDR5",
            gpu: "NVIDIA GeForce RTX 4050",
            procesador: "Intel Core i7"
        },
        imagenes: [
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 4,
        sku: "INF-MONITOR-LG",
        marca: "LG",
        modelo: "UltraGear 27",
        nombre: "Monitor Gamer LG UltraGear 27 pulgadas",
        categoria: "Televisores / Monitores",
        subcategoria: "Monitores",
        precioOferta: 480000,
        stock: true,
        descripcion: "Monitor optimizado para eSports y diseño. Ofrece tiempos de respuesta ultrarrápidos, colores sumamente precisos y compatibilidad con tecnologías de sincronización de cuadros.",
        especificaciones: {
            tamano: "27 pulgadas IPS",
            resolucion: "QHD (2560 x 1440)",
            frecuencia: "165Hz",
            tiempoRespuesta: "1ms GTG",
            puertos: "HDMI / DisplayPort"
        },
        imagenes: [
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80"
        ]
    }
];

export const arrayHogarElectro = [
    {
        id: 5,
        sku: "HEL-WHIRL-PRO",
        marca: "Whirlpool",
        modelo: "No Frost WRM45",
        nombre: "Heladera Whirlpool No Frost 432L Inox",
        categoria: "Heladeras / Freezers",
        subcategoria: "Heladeras",
        precioOferta: 1290000,
        stock: true,
        descripcion: "Tecnología Evox antihuellas que protege tu heladera de la oxidación. Sistema de refrigeración No Frost envolvente que mantiene los alimentos frescos por más tiempo sin generar escarcha.",
        especificaciones: {
            capacidadTotal: "432 Litros",
            sistemaFrio: "No Frost",
            eficienciaEnergetica: "Clase A+",
            color: "Acero Inoxidable",
            tecnologia: "Inverter"
        },
        imagenes: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1571175333759-4f1bd0f7809a?auto=format&fit=crop&w=600&q=80"
        ]
    },
    {
        id: 6,
        sku: "AIR-LG-INVERTER",
        marca: "LG",
        modelo: "Dual Cool 3000 frigorías",
        nombre: "Aire Acondicionado Split Inverter Frío/Calor",
        categoria: "Aires Acondicionados",
        subcategoria: "Splits",
        precioOferta: 950000,
        stock: true,
        descripcion: "Climatización inteligente con compresor Inverter que reduce significativamente el consumo eléctrico. Operación ultra silenciosa y filtrado de aire avanzado para ambientes sanos.",
        especificaciones: {
            frigorias: "3000 Frigorías",
            tipo: "Frío / Calor Inverter",
            eficiencia: "Clase A",
            gasRefrigerante: "R410a ecológico"
        },
        imagenes: [
            "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
        ]
    }
];

// Array maestro que unifica todas las categorías para alimentar tu código principal
export const productos = [
    ...celulares,
    ...arrayGamingInformatica,
    ...arrayHogarElectro
];
