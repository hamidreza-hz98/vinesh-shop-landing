import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { abbreviateUser } from "@/lib/general";
import { randomColor } from "@/lib/ui";
import { Rating } from "../ui/ratings";
import { Button } from "../ui/button";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineReport } from "react-icons/md";
import { useTranslations } from "next-intl";

const Review = ({ review }) => {
  const t = useTranslations();

  const handleLikeReview = () => {
    console.log("handleLikeReview");
  };

  const handleDislikeReview = () => {
    console.log("handleDislikeReview");
  };

  const handleReportReview = () => {
    console.log("handleReportReview");
  };

  return (
    <>
      <div className="w-full h-auto p-4 flex flex-col items-start justify-center border border-border rounded-2xl">
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-start justify-start gap-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src={review.user.avatar} />

                <AvatarFallback
                  className="text-background text-sm"
                  style={{ backgroundColor: randomColor() }}
                >
                  {abbreviateUser(review.user.name)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start justify-center">
                <span className="font-semibold"> {review.user.name} </span>

                <Rating readOnly value={review.rate} size={12} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-1">
            <Button onClick={handleLikeReview} variant="ghost" size="icon">
              <AiOutlineLike />
            </Button>

            <Button onClick={handleDislikeReview} variant="ghost" size="icon">
              <AiOutlineDislike />
            </Button>

            <Button onClick={handleReportReview} variant="ghost" size="icon">
              <MdOutlineReport />
            </Button>
          </div>
        </div>

        <div className="w-full mt-4 px-4">
          <h3 className="font-bold"> {review.title} </h3>

          <p> {review.text} </p>
        </div>

        <Button className="w-full mt-4 sm:max-w-32" size="sm" variant="outline">
          {t("reply")}
        </Button>
      </div>

    <div className="w-full flex flex-col items-end justify-start">

      {review.replies.map((reply, index) => (
        <div
        key={index}
          className="w-[90%] h-auto p-4 flex flex-col items-start justify-end border border-border rounded-2xl"
          >
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-start justify-start gap-2">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={reply.user.avatar} />

                  <AvatarFallback
                    className="text-background text-sm"
                    style={{ backgroundColor: randomColor() }}
                  >
                    {abbreviateUser(reply.user.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start justify-center">
                  <span className="font-semibold"> {reply.user.name} </span>

                  <Rating readOnly value={reply.rate} size={12} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-1">
              <Button onClick={handleLikeReview} variant="ghost" size="icon">
                <AiOutlineLike />
              </Button>

              <Button onClick={handleDislikeReview} variant="ghost" size="icon">
                <AiOutlineDislike />
              </Button>

              <Button onClick={handleReportReview} variant="ghost" size="icon">
                <MdOutlineReport />
              </Button>
            </div>
          </div>

          <div className="w-full mt-4 px-4">
            <h3 className="font-bold"> {reply.title} </h3>

            <p> {reply.text} </p>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Review;
