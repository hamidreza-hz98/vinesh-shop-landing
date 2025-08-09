'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import ElasticSlider from '../ui/reactbits/ElasticSlider'
import { average } from '@/lib/number'

const Filter = ({ items = [] }) => {
  const locale = useLocale()

  const accordionItems = items.filter((item) => item.type !== 'radio')
  const radioItem = items.find((item) => item.type === 'radio')

  const getLabel = (labelObj) => labelObj?.[locale] || labelObj?.en || ''

  return (
    <div className="w-full h-fit px-4 py-8  space-y-6 sticky top-4">
      {/* Accordion Section */}
      <Accordion type="multiple" className="space-y-2">
        {accordionItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{getLabel(item.label)}</AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                {/* Checkbox Type */}
                {item.type === 'checkbox' &&
                  item.options?.map((option) => (
                    <div key={option.value} className="flex items-center gap-2">
                      <Checkbox id={`${item.id}-${option.value}`} />
                      <Label htmlFor={`${item.id}-${option.value}`}>
                        {getLabel(option.label)}
                      </Label>
                    </div>
                  ))}

                {/* Select Type */}
                {item.type === 'select' && (
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={`Select ${getLabel(item.label)}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {item.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {getLabel(option.label)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {/* Range Slider (ElasticSlider) */}
                {item.type === 'range' && (
                  <div>
                    <ElasticSlider
                      minValue={item.minValue}
                      maxValue={item.maxValue}
                      step={10}
                      range
                      defaultValue={average([item.minValue, item.maxValue])}
                    />
                  </div>
                )}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Radio Toggle (Availability) */}
      {radioItem && (
        <div className="pt-2 border-t">
          <div className="flex items-center gap-2 mt-4">
            <input
              type="radio"
              id={radioItem.id}
              className="w-4 h-4 border rounded"
            />
            <Label htmlFor={radioItem.id}>
              {getLabel(radioItem.label)}
            </Label>
          </div>
        </div>
      )}
    </div>
  )
}

export default Filter
