"use client";

import PendingForCommentCard from "@/components/common/cards/PendingForCommentCard";
import UserCommentCard from "@/components/common/cards/UserCommentCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pendingForComment, userSampleComments } from "@/constants/comment";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const ProfileCommentsPageWrapper = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div>
      <Tabs
        defaultValue="pending_for_comment"
        className="w-full mt-4"
      >
        <TabsList>
          <TabsTrigger value="pending_for_comment">
            {t("pending_for_comment")}
          </TabsTrigger>
          <TabsTrigger value="comments">{t("comments")}</TabsTrigger>
        </TabsList>

        <TabsContent value="pending_for_comment" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pendingForComment.map((item, index) => (
              <PendingForCommentCard key={index} product={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comments" className="mt-4">
          <div className="flex flex-col gap-4">
          {userSampleComments.map((comment, index) => (
            <UserCommentCard key={index} comment={comment} />
          ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileCommentsPageWrapper;
