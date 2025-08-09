import CategoryDetailsPageWrapper from "@/components/wrappers/categories/CategoryDetailsPageWrapper";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  const param = await params
  const slug = await param.slug
  
  return (
    <Suspense fallback={<div>loading...</div>}>
      <CategoryDetailsPageWrapper slug={slug} />
    </Suspense>
  );
};

export default page;
