import ProfileOrderDetailsPageWrapper from "@/components/wrappers/profile/ProfileOrderDetailsPageWrapper";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  const param = await params;
  const slug = await param.slug;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileOrderDetailsPageWrapper slug={slug} />
    </Suspense>
  );
};

export default page;
