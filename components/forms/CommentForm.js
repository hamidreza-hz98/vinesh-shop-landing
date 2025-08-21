"use client"

import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Rating from "@mui/material/Rating"
import { useLocale, useTranslations } from "next-intl"
import { commentFormFields } from "@/constants/comment"

const CommentForm = ({ open, onOpenChange }) => {
  const t = useTranslations()
  const locale = useLocale()

  const [form, setForm] = useState({
    title: "",
    rate: 0,
    text: "",
  })

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted:", form)
    // API call goes here...
    setForm({ title: "", rate: 0, text: "" })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {t("leave_a_comment")}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title + Rate in one row */}
          <div className="flex gap-4 items-center">
            {commentFormFields.map((field) => {
              if (field.type === "text") {
                return (
                  <Input
                    key={field.key}
                    placeholder={field.placeholder[locale]}
                    value={form[field.key]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  />
                )
              }
              if (field.type === "rating") {
                return (
                  <Rating
                    key={field.key}
                    name={field.key}
                    value={form[field.key]}
                    onChange={(_, newValue) =>
                      handleChange(field.key, newValue)
                    }
                  />
                )
              }
              return null
            })}
          </div>

          {/* Textarea in its own row */}
          {commentFormFields.map((field) => {
            if (field.type === "textarea") {
              return (
                <Textarea
                className="h-32"
                  key={field.key}
                  placeholder={field.placeholder[locale]}
                  value={form[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                />
              )
            }
            return null
          })}

          <DialogFooter>
            <Button type="submit">
              {t("submit")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CommentForm
