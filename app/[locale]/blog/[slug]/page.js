import BlogDetailsPageWrapper from "@/components/wrappers/blog/BlogDetailsPageWrapper";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  const param = await params;
  const slug = await param.slug;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogDetailsPageWrapper slug={slug} />
    </Suspense>
  );
};

export default page;
