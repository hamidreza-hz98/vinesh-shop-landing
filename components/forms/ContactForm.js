"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { contactFormFields } from "@/constants/general";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const t = useTranslations();

  // 1️⃣ Create form instance
  const form = useForm({
    defaultValues: contactFormFields.reduce((acc, field) => {
      acc[field.key] = "";
      return acc;
    }, {}),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="w-full p-4 border border-border rounded-2xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4"
        >
          {contactFormFields.map((field, idx) => {
            const fieldName = field.key;
            return (
              <FormField
                key={idx}
                control={form.control} // 2️⃣ pass control here
                name={fieldName}
                render={({ field: hookField }) => (
                  <FormItem className="w-full">
                    <FormLabel>{field.label.en}</FormLabel>
                    <FormControl>
                      {field.type === "textarea" ? (
                        <Textarea
                          placeholder={field.placeholder.en}
                          {...hookField}
                          className="w-full"
                        />
                      ) : (
                        <Input
                          type={field.type}
                          placeholder={field.placeholder.en}
                          {...hookField}
                          className="w-full"
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}

          <div className="col-span-full">
            <Button type="submit" className="w-full">
              {t("submit")}
            </Button>
          </div>
        </form>
      </Form>{" "}
    </div>
  );
};

export default ContactForm;
