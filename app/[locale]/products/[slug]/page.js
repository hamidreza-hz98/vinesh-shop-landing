import ProductDetailsPageWrapper from '@/components/wrappers/products/ProductDetailsPageWrapper'
import React, { Suspense } from 'react'

const page = async ({ params }) => {
  const param = await params
  const slug = await param.slug

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ProductDetailsPageWrapper slug={slug} />
    </Suspense>
  )
}

export default page