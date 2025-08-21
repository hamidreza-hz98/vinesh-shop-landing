import { CiShoppingCart, CiUser } from "react-icons/ci";

import { GrBlog } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import routes from "./routes";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

export const profileLinks = [
  {
    title: {
      en: "Dashboard",
      pt: "Painel",
      ar: "لوحة التحكم",
      fa: "داشبورد",
    },
    href: "/profile",
    icon: LuLayoutDashboard,
  },
  {
    title: {
      en: "User Info",
      pt: "Informações do Usuário",
      ar: "معلومات المستخدم",
      fa: "اطلاعات کاربر",
    },
    href: "/profile/user-info",
    icon: CiUser,
  },
  {
    title: {
      en: "Orders",
      pt: "Pedidos",
      ar: "الطلبات",
      fa: "سفارشات",
    },
    href: "/profile/orders",
    icon: IoBagOutline,
  },
  {
    title: {
      en: "Wishlist",
      pt: "Lista de Desejos",
      ar: "قائمة الأمنيات",
      fa: "لیست علاقه‌مندی‌ها",
    },
    href: "/profile/wishlist",
    icon: CiHeart,
  },
  {
    title: {
      en: "Addresses",
      pt: "Endereços",
      ar: "العناوين",
      fa: "آدرس‌ها",
    },
    href: "/profile/addresses",
    icon: MdOutlineLocationOn,
  },
  {
    title: {
      en: "Discounts",
      pt: "Descontos",
      ar: "الخصومات",
      fa: "تخفیف‌ها",
    },
    href: "/profile/discounts",
    icon: CiDiscount1,
  },
  {
    title: {
      en: "Comments",
      pt: "Comentários",
      ar: "التعليقات",
      fa: "نظرات",
    },
    href: "/profile/comments",
    icon: FaRegComment,
  },
];

export const mobileNavItems = [
  {
    href: routes.home,
    label: {
      en: "Home",
      pt: "Início",
      ar: "الرئيسية",
      fa: "خانه",
    },
    icon: IoHomeOutline,
  },
  {
    href: routes.categories,
    label: {
      en: "Categories",
      pt: "Categorias",
      ar: "الفئات",
      fa: "دسته‌ها",
    },
    icon: TbCategory2,
  },
  {
    href: routes.cart,
    label: {
      en: "Cart",
      pt: "Carrinho",
      ar: "السلة",
      fa: "سبد خرید",
    },
    icon: CiShoppingCart,
  },
  {
    href: routes.profile,
    label: {
      en: "Profile",
      pt: "Perfil",
      ar: "الملف الشخصي",
      fa: "پروفایل",
    },
    icon: CiUser,
  },
  {
    href: routes.blog,
    label: {
      en: "Blog",
      pt: "Blog",
      ar: "المدونة",
      fa: "بلاگ",
    },
    icon: GrBlog,
  },
];
