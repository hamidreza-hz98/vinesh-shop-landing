export const commentFormFields = [
  {
    label: {
      en: "Title",
      pt: "Título",
      ar: "العنوان",
      fa: "عنوان",
    },

    placeholder: {
      en: "Good Quality!",
      pt: "Boa qualidade!",
      ar: "جودة ممتازة!",
      fa: "کیفیت عالی!",
    },

    key: "title",

    type: "text",
  },
  {
    label: {
      en: "Rate",
      pt: "Avaliação",
      ar: "التقييم",
      fa: "امتیاز",
    },

    key: "rate",

    type: "rating",
  },
  {
    label: {
      en: "Text",
      pt: "Comentário",
      ar: "النص",
      fa: "متن",
    },

    placeholder: {
      en: "I bought this product last week, so that....",
      pt: "Comprei este produto na semana passada, então....",
      ar: "اشتريت هذا المنتج الأسبوع الماضي، لذا....",
      fa: "من این محصول را هفته گذشته خریدم، بنابراین....",
    },

    key: "text",

    type: "textarea",
  },
];

export const userSampleComments = [
  {
    status: {
      label: {
        en: "Rejected",
        pt: "",
        ar: "",
        fa: ""
      },

      value: "rejected"
    },
    rate: 5,
    title: "Absolutely love it!",
    text: "Super comfy and looks amazing in my living room.",
    user: {
      name: "Emily Hamilton",
      avatar: null,
    },
    date: "2025-07-10",
    likes: 27,
    dislikes: 7,
    product: {
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
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
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
        name: {
          en: "Standard",
          pt: "Padrão",
          ar: "قياسي",
          fa: "استاندارد",
        },
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
  },
  {
    status: {
      label: {
        en: "Pending",
        pt: "",
        ar: "",
        fa: ""
      },

      value: "pending"
    },
    rate: 4,
    title: "Great purchase",
    text: "The fabric feels really soft and the color is exactly as shown. Took a bit longer to arrive than expected.",
    user: {
      name: "Daniel K.",
      avatar: "/images/placeholder.svg",
    },
    replies: [],
    date: "2025-07-14",
    likes: 15,
    dislikes: 3,
    product: {
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
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
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
        name: {
          en: "Standard",
          pt: "Padrão",
          ar: "قياسي",
          fa: "استاندارد",
        },
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
  },
  {
    status: {
      label: {
        en: "Accepted",
        pt: "",
        ar: "",
        fa: ""
      },

      value: "accepted"
    },
    rate: 3,
    title: "Good, but not perfect",
    text: "The chair is stylish, but I found the seat a bit firmer than I like. Still works well as an accent piece.",
    user: {
      name: "Sophia L.",
      avatar: "/images/placeholder.svg",
    },
    replies: [],
    date: "2025-07-18",
    likes: 9,
    dislikes: 6,
    product: {
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
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
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
        name: {
          en: "Standard",
          pt: "Padrão",
          ar: "قياسي",
          fa: "استاندارد",
        },
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
  },
  {
    status: {
      label: {
        en: "Accepted",
        pt: "",
        ar: "",
        fa: ""
      },

      value: "accepted"
    },
    rate: 5,
    title: "Exceeded my expectations!",
    text: "Beautiful design and very comfortable. Everyone who visits compliments it. Highly recommend!",
    user: {
      name: "Michael B.",
      avatar: "/images/placeholder.svg",
    },
    replies: [],
    date: "2025-07-21",
    likes: 42,
    dislikes: 2,
    product: {
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
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
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
        name: {
          en: "Standard",
          pt: "Padrão",
          ar: "قياسي",
          fa: "استاندارد",
        },
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
  },
  {
    status: {
      label: {
        en: "Accepted",
        pt: "",
        ar: "",
        fa: ""
      },

      value: "accepted"
    },
    rate: 2,
    title: "Not worth the price",
    text: "Looks good but the quality doesn’t feel very durable. A bit disappointed given the cost.",
    user: {
      name: "Hannah S.",
      avatar: "/images/placeholder.svg",
    },
    replies: [],
    date: "2025-07-25",
    likes: 5,
    dislikes: 18,
    product: {
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
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
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
        name: {
          en: "Standard",
          pt: "Padrão",
          ar: "قياسي",
          fa: "استاندارد",
        },
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
  },
  {
    status: {
      label: {
        en: "Accepted",
        pt: "",
        ar: "",
        fa: ""
      },

      value: "accepted"
    },
    rate: 4,
    title: "Nice chair overall",
    text: "Perfect size for my reading nook. Assembly was straightforward, though the instructions could be clearer.",
    user: {
      name: "James P.",
      avatar: "/images/placeholder.svg",
    },
    replies: [],
    date: "2025-07-29",
    likes: 20,
    dislikes: 4,
    product: {
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
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
        {
          type: "image",
          src: "/images/placeholder.svg",
        },
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
        name: {
          en: "Standard",
          pt: "Padrão",
          ar: "قياسي",
          fa: "استاندارد",
        },
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
  },
];

export const pendingForComment = [
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
      {
        type: "image",
        src: "/images/placeholder.svg",
      },
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
      name: {
        en: "Standard",
        pt: "Padrão",
        ar: "قياسي",
        fa: "استاندارد",
      },
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
];
