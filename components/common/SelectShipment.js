"use client"

import React, { useState } from 'react'
import DaySelector from './DaySelector'
import TimeSelector from './TimeSelector'
import { useLocale, useTranslations } from 'next-intl'

const SelectShipment = ({ onSelect }) => {
  const [day, setDay] = useState(null)

  const t = useTranslations()
  const locale = useLocale()

  const handleShowAvailableTimes = (date) => {
    console.log(date);
    setDay(date)
  }

  const handleSetShipmentDate = (date) => {
    // Hell Yeah!
  }

  return (
    <div className='mt-8'>
      <h2 className='text-xl font-bold'> {t("select_shipment_date")} </h2>

      <DaySelector onSelect={handleShowAvailableTimes} />

      {
        day &&
        <TimeSelector onSelect={handleSetShipmentDate} />
      }
    </div>
  )
}

export default SelectShipment