import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCancel, MdOutlinePendingActions } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

export const ordersOverviewItems = [
  {
    icon: CiCircleCheck,
    title: {
      en: "Delivered",
      pt: "Entregue",
      ar: "تم التسليم",
      fa: "تحویل داده شده"
    },
    color: "text-green-500"
  },
  {
    icon: MdOutlinePendingActions,
    title: {
      en: "Pending",
      pt: "Pendente",
      ar: "قيد الانتظار",
      fa: "در انتظار"
    },
    color: "text-yellow-500"
  },
  {
    icon: CiDeliveryTruck,
    title: {
      en: "Shipment",
      pt: "Envio",
      ar: "الشحن",
      fa: "در حال ارسال"
    },
    color: "text-blue-500"
  },
  {
    icon: MdOutlineCancel,
    title: {
      en: "Canceled",
      pt: "Cancelado",
      ar: "ملغى",
      fa: "لغو شده"
    },
    color: "text-red-500"
  },
];
