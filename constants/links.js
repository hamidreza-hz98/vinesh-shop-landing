import { CiShoppingCart, CiUser } from "react-icons/ci";

import { GrBlog } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import routes from "./routes";

export const mobileNavItems = [
  {
    href: routes.home,
    label: {
      en: "Home",
      pt: "Início",
      ar: "الرئيسية",
      fa: "خانه"
    },
    icon: IoHomeOutline
  },
  {
    href: routes.categories,
    label: {
      en: "Categories",
      pt: "Categorias",
      ar: "الفئات",
      fa: "دسته‌ها"
    },
    icon: TbCategory2
  },
  {
    href: routes.cart,
    label: {
      en: "Cart",
      pt: "Carrinho",
      ar: "السلة",
      fa: "سبد خرید"
    },
    icon: CiShoppingCart
  },
  {
    href: routes.profile,
    label: {
      en: "Profile",
      pt: "Perfil",
      ar: "الملف الشخصي",
      fa: "پروفایل"
    },
    icon: CiUser
  },
  {
    href: routes.blog,
    label: {
      en: "Blog",
      pt: "Blog",
      ar: "المدونة",
      fa: "بلاگ"
    },
    icon: GrBlog
  },
];
