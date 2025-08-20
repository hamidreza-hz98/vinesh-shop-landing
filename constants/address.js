export const addressFields = [
  {
    label: {
      en: "Address Name",
      pt: "Nome do Endereço",
      ar: "اسم العنوان",
      fa: "نام آدرس",
    },
    type: "text",
    placeholder: {
      en: "Home, Office, ...",
      pt: "Casa, Escritório, ...",
      ar: "منزل، مكتب، ...",
      fa: "خانه، دفتر، ...",
    },
  },
  {
    label: {
      en: "Recipient Name",
      pt: "Nome do Destinatário",
      ar: "اسم المستلم",
      fa: "نام گیرنده",
    },
    type: "text",
    placeholder: {
      en: "Mr. Doe",
      pt: "Sr. Silva",
      ar: "السيد أحمد",
      fa: "آقای احمدی",
    },
  },
  {
    label: {
      en: "Recipient Phone",
      pt: "Telefone do Destinatário",
      ar: "هاتف المستلم",
      fa: "شماره تلفن گیرنده",
    },
    type: "text",
    placeholder: {
      en: "+1 408 456 785",
      pt: "+351 912 345 678",
      ar: "+971 50 123 4567",
      fa: "+98 912 123 4567",
    },
  },
  {
    label: {
      en: "Address",
      pt: "Endereço",
      ar: "العنوان",
      fa: "آدرس",
    },
    type: "textarea",
    placeholder: {
      en: "9999 Example Street, Parkway Code 003",
      pt: "Rua Exemplo 9999, Código 003",
      ar: "شارع المثال 9999، الرمز 003",
      fa: "خیابان مثال ۹۹۹۹، کد ۰۰۳",
    },
  },
  {
    label: {
      en: "Zip Code",
      pt: "Código Postal",
      ar: "الرمز البريدي",
      fa: "کد پستی",
    },
    type: "number",
    placeholder: {
      en: "12345",
      pt: "1234-567",
      ar: "12345",
      fa: "۱۲۳۴۵۶۷۸۹۰",
    },
  },
  {
    label: {
      en: "Geo Location",
      pt: "Localização Geográfica",
      ar: "الموقع الجغرافي",
      fa: "موقعیت جغرافیایی",
    },
    type: "leaflet",
  },
]


export const addresses = [
  {
    name: "Home",
    receipientName: "Amir Ronaghinia",
    address: "123 Azadi Street, Tehran, Iran",
    zipCode: "11369",
    recipientPhone: "+98 912 123 4567",
    geolocation: "35.7006,51.3370",
    isDefault: true
  },
  {
    name: "Office",
    receipientName: "Sara Kazemi",
    address: "45 Ferdowsi Ave, Tehran, Iran",
    zipCode: "11364",
    recipientPhone: "+98 912 765 4321",
    geolocation: "35.6892,51.3890",
    isDefault: false
  },
  {
    name: "Warehouse",
    receipientName: "Hamidreza Hassanzadeh",
    address: "12 Kargar Blvd, Tehran, Iran",
    zipCode: "14177",
    recipientPhone: "+98 935 111 2233",
    geolocation: "35.7153,51.4043",
    isDefault: false
  },
  {
    name: "Portugal Office",
    receipientName: "Amir Ronaghinia",
    address: "Rua de Santa Catarina 200, Porto, Portugal",
    zipCode: "4000-442",
    recipientPhone: "+351 912 345 678",
    geolocation: "41.1500,-8.6100",
    isDefault: false
  },
  {
    name: "Client Site",
    receipientName: "John Doe",
    address: "1600 Amphitheatre Parkway, Mountain View, CA, USA",
    zipCode: "94043",
    recipientPhone: "+1 650 253 0000",
    geolocation: "37.4220,-122.0841",
    isDefault: false
  }
]
