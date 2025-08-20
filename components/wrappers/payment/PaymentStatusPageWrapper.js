"use client";

import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PaymentPage = () => {
  const t = useTranslations();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const status = searchParams.get("status");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      {status === "success" ? (
        <>
          <CheckCircle2 className="w-16 h-16 text-green-500" />
          <h1 className="text-2xl font-bold">{t("success_payment_title")}</h1>
          <p className="text-gray-600">{t("success_payment_message")}</p>
          <Link href={`/${locale}/profile/orders`}>
            <Button className="mt-4">{t("go_to_orders")}</Button>
          </Link>
        </>
      ) :  (
        <>
          <XCircle className="w-16 h-16 text-red-500" />
          <h1 className="text-2xl font-bold">{t("fail_payment_title")}</h1>
          <p className="text-gray-600">{t("fail_payment_message")}</p>
          <div className="flex items-center justify-between gap-8">
          <Link href={`/${locale}/cart`}>
            <Button className="mt-4">{t("try_again")}</Button>
          </Link>

          <Link href={`/`}>
            <Button className="mt-4">{t("homepage")}</Button>
          </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
