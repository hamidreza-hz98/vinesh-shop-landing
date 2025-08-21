import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCancel, MdOutlinePendingActions } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrInProgress } from "react-icons/gr";

export const orderStatuses = {
  delivered: {
    icon: CiCircleCheck,
    title: {
      en: "Delivered",
      pt: "Entregue",
      ar: "تم التسليم",
      fa: "تحویل داده شده",
    },

    color: "text-green-500",
  },

  
  key: "in_progress",
  
  in_progress: {
    icon: GrInProgress,
    title:
    {
         en: "In Progress",
         pt: "Em Andamento",
         ar: "قيد التنفيذ",
         fa: "در حال پردازش",
       },
    color: "text-slate-500",
  },

  canceled:{
    icon: MdOutlineCancel,
    title: {
      en: "Canceled",
      pt: "Cancelado",
      ar: "ملغى",
      fa: "لغو شده",
    },
    color: "text-red-500",
  }
};

export const ordersOverviewItems = [
  {
    icon: CiCircleCheck,
    title: {
      en: "Delivered",
      pt: "Entregue",
      ar: "تم التسليم",
      fa: "تحویل داده شده",
    },
    color: "text-green-500",
  },
  {
    icon: MdOutlinePendingActions,
    title: {
      en: "Pending",
      pt: "Pendente",
      ar: "قيد الانتظار",
      fa: "در انتظار",
    },
    color: "text-yellow-500",
  },
  {
    icon: CiDeliveryTruck,
    title: {
      en: "Shipment",
      pt: "Envio",
      ar: "الشحن",
      fa: "در حال ارسال",
    },
    color: "text-blue-500",
  },
  {
    icon: MdOutlineCancel,
    title: {
      en: "Canceled",
      pt: "Cancelado",
      ar: "ملغى",
      fa: "لغو شده",
    },
    color: "text-red-500",
  },
];

export const orders = [
  {
    trackNumber: 7842389712,
    status: {
      name: {
        en: "Delivered",
        pt: "Entregue",
        ar: "تم التسليم",
        fa: "تحویل شده",
      },
      key: "delivered",
    },
    submitDate: "2025-08-01",
    address: {
      name: "Home",
      receipientName: "John Doe",
      address: "123 Main Street, Lisbon, Portugal",
      zipCode: "1000-123",
      recipientPhone: "+351912345678",
      geolocation: "38.7169,-9.1390",
      isDefault: true,
    },
    transaction: {
      paid: "$450",
      discount: "$50",
      coupon: "WELCOME10 - 10$",
      shipmentPrice: "$20",
      date: "2025-08-01",
    },
    price: "$420",
    deliveryDate: "2025-08-05",
    products: [
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
          { type: "image", src: "/images/placeholder.svg" },
        ],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 2,
        discount: 15,
      },
    ],
  },
  {
    trackNumber: 9845123781,
    status: {
      name: {
        en: "In Progress",
        pt: "Em Andamento",
        ar: "قيد التنفيذ",
        fa: "در حال پردازش",
      },
      key: "in_progress",
    },
    submitDate: "2025-08-10",
    address: {
      name: "Office",
      receipientName: "Maria Silva",
      address: "456 Avenida Central, Porto, Portugal",
      zipCode: "4000-200",
      recipientPhone: "+351913456789",
      geolocation: "41.1496,-8.6109",
      isDefault: false,
    },
    transaction: {
      paid: "$300",
      discount: "$20",
      coupon: "OFF20",
      shipmentPrice: "$15",
      date: "2025-08-10",
    },
    price: "$295",
    deliveryDate: "2025-08-18",
    products: [
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [{ type: "image", src: "/images/placeholder.svg" }],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 1,
        discount: 10,
      },
    ],
  },
  {
    trackNumber: 1123498573,
    status: {
      name: { en: "Canceled", pt: "Cancelado", ar: "ملغي", fa: "لغو شده" },
      key: "canceled",
    },
    submitDate: "2025-07-28",
    address: {
      name: "Warehouse",
      receipientName: "Omar Ali",
      address: "789 Industrial Road, Dubai, UAE",
      zipCode: "12345",
      recipientPhone: "+971501234567",
      geolocation: "25.276987,55.296249",
      isDefault: false,
    },
    transaction: {
      paid: "$0",
      discount: "$0",
      coupon: "",
      shipmentPrice: "$0",
      date: "2025-07-28",
    },
    price: "$0",
    deliveryDate: "",
    products: [],
  },
  {
    trackNumber: 6678234901,
    status: {
      name: {
        en: "Delivered",
        pt: "Entregue",
        ar: "تم التسليم",
        fa: "تحویل شده",
      },
      key: "delivered",
    },
    submitDate: "2025-08-15",
    address: {
      name: "Friend",
      receipientName: "Sara Kazemi",
      address: "Rua das Flores 22, Coimbra, Portugal",
      zipCode: "3000-456",
      recipientPhone: "+351914567890",
      geolocation: "40.2033,-8.4103",
      isDefault: false,
    },
    transaction: {
      paid: "$0",
      discount: "$0",
      coupon: "",
      shipmentPrice: "$15",
      date: "2025-08-15",
    },
    price: "$265",
    deliveryDate: "",
    products: [
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [{ type: "image", src: "/images/placeholder.svg" }],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 1,
        discount: 0,
      },
    ],
  },
  {
    trackNumber: 4456789012,
    status: {
      name: {
        en: "Delivered",
        pt: "Entregue",
        ar: "تم التسليم",
        fa: "تحویل شده",
      },
      key: "delivered",
    },
    submitDate: "2025-08-05",
    address: {
      name: "Home",
      receipientName: "Hamidreza Hassanzadeh",
      address: "Avenida Republica 88, Lisbon, Portugal",
      zipCode: "1050-200",
      recipientPhone: "+351915678901",
      geolocation: "38.7369,-9.1390",
      isDefault: true,
    },
    transaction: {
      paid: "$249",
      discount: "$0",
      coupon: "",
      shipmentPrice: "$10",
      date: "2025-08-05",
    },
    price: "$259",
    deliveryDate: "2025-08-12",
    products: [
      {
        name: {
          en: "Modern Velvet Armchair",
          pt: "Poltrona de Veludo Moderna",
          ar: "كرسي بذراعين من المخمل العصري",
          fa: "صندلی راحتی مخملی مدرن",
        },
        excerpt: {
          en: "A cozy and stylish velvet armchair perfect for any modern interior.",
          pt: "Uma poltrona de veludo aconchegante e elegante, perfeita para interiores modernos.",
          ar: "كرسي بذراعين مريح وأنيق من المخمل مثالي لأي ديكور داخلي عصري.",
          fa: "یک صندلی راحتی مخملی شیک و راحت، مناسب برای دکوراسیون‌های مدرن.",
        },
        rate: 4.5,
        price: {
          en: "$249",
          pt: "R$ 1249",
          ar: "د.إ 249",
          fa: "۲۴۹ دلار",
        },
        slug: {
          en: "modern-velvet-armchair",
          pt: "poltrona-de-veludo-moderna",
          ar: "كرسي-مخمل-عصري",
          fa: "صندلی-راحتی-مخملی-مدرن",
        },
        media: [{ type: "image", src: "/images/placeholder.svg" }],
        color: {
          name: {
            en: "Navy Blue",
            pt: "Azul Marinho",
            ar: "أزرق كحلي",
            fa: "سرمه‌ای",
          },
          code: "#245784",
        },
        size: {
          name: { en: "Standard", pt: "Padrão", ar: "قياسي", fa: "استاندارد" },
          dimensions: {
            en: "80x75x90 cm",
            pt: "80x75x90 cm",
            ar: "٨٠x٧٥x٩٠ سم",
            fa: "۸۰x۷۵x۹۰ سانتی‌متر",
          },
        },
        warranty: {
          en: "2 years manufacturer warranty",
          pt: "2 anos de garantia do fabricante",
          ar: "ضمان سنتين من الشركة المصنعة",
          fa: "۲ سال گارانتی شرکت سازنده",
        },
        quantity: 1,
        discount: 0,
      },
    ],
  },
];
