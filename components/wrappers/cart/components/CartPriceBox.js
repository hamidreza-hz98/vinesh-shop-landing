"use client"

import { sampleCartItems } from '@/constants/product'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

const CartPriceBox = () => {
  const price = sampleCartItems.financial

  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className='flex flex-col gap-8'>
      <div className='p-4 border border-border rounded-2xl'>
        <div className='flex items-center justify-between py-2 border-b'>
          <span> {t("total_price")} </span>

          <span> {price.total} </span>
        </div>

        <div className='flex items-center justify-between py-2 border-b'>
          <span> {t("discount")} </span>

          <span> {price.discount} </span>
        </div>

        <div className='flex items-center justify-between py-2 border-b'>
          <span> {t("coupon")} </span>

          <span> {price.coupon} </span>
        </div>

        <div className='flex items-center justify-between py-2'>
          <span> {t("final_price")} </span>

          <span> {price.finalPrice} </span>
        </div>
      </div>
    </div>
  )
}

export default CartPriceBox