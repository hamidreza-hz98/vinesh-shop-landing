"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Chip, Rating } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GoPencil, GoTrash } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";

const UserCommentCard = ({ comment }) => {
  const t = useTranslations();
  const locale = useLocale();

  const setCommentStatusIcon = () => {
    switch (comment.status.value) {
      case "accepted":
        return <FaRegCircleCheck />;

      case "rejected":
        return <IoCloseCircleOutline />;

      case "pending":
        return <FaRegClock />;

      default:
        break;
    }
  };

  const setCommentStatusColor = () => {
    switch (comment.status.value) {
      case "accepted":
        return "success";

      case "rejected":
        return "error";

      case "pending":
        return "warning";

      default:
        break;
    }
  };

  return (
    <>
      <div className="w-full h-auto p-4 flex flex-col items-start justify-center border border-border rounded-2xl">
        <div className="w-full flex items-start justify-between gap-2">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center justify-start gap-2">
              <Image
                src={comment.product.media[0].src}
                alt={comment.product.name[locale]}
                width={64}
                height={64}
                sizes="100vw"
              />

              <span className="font-bold">
                {" "}
                {comment.product.name[locale]}{" "}
              </span>
            </div>

            <Rating className="mt-4" name="read-only" value={comment.rate} readOnly precision={0.1} />
          </div>

          <div className="flex flex-col items-end justify-start gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger variant="ghost" size="icon">
                <CiMenuKebab />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Button
                  variant="outline"
                   className="w-full justify-start" size="sm">
                    <GoPencil className="text-muted-foreground" />
                    {t("edit_comment_and_rate")}
                  </Button>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <Button
                  variant="outline"
                    className="w-full justify-start text-red-600"
                    size="sm"
                  >
                    <GoTrash className="text-red-600" />
                    {t("delete_comment")}
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Chip
              size="small"
              color={setCommentStatusColor()}
              label={comment.status.label[locale]}
              icon={setCommentStatusIcon()}
            />
          </div>
        </div>

        <div className="w-full border border-border mt-4" />

        <div className="w-full mt-4 px-4">
          <h3 className="font-bold"> {comment.title} </h3>

          <p> {comment.text} </p>
        </div>
      </div>
    </>
  );
};

export default UserCommentCard;
