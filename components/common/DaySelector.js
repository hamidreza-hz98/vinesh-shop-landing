"use client"

import { generateUpcomingDays } from '@/lib/date'
import { useLocale } from 'next-intl'
import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

const DaySelector = ({ onSelect }) => {
  const locale = useLocale()
  const days = generateUpcomingDays(10, locale)

  const [selected, setSelected] = useState(null)

  const handleSelect = (date) => {
    setSelected(date.date)
    onSelect(date)
  }

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="h-full w-full mt-4"
    >
      <CarouselContent className="h-full">
        {days.map((day, index) => (
          <CarouselItem
            key={index}
            className="h-full basis-[40%] sm:basis-[29%] md:basis-[17%]"
          >
            <button
              type="button"
              onClick={() => handleSelect(day)}
              className={`w-full h-16 flex flex-col items-center justify-center rounded-lg border transition-all
                ${selected === day.date
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
                }`}
            >
              <span className="text-sm font-medium">{day.weekDay}</span>
              <span className="text-sm text-muted-foreground font-bold">{day.date} { day.month } </span>
            </button>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default DaySelector
