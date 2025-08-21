import PrimaryProductCard from '@/components/common/cards/PrimaryProductCard'
import Pagination from '@/components/common/Pagination'
import { products } from '@/constants/product'
import React from 'react'

const ProfileWishlistPageWrapper = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {
        products.slice(0, 6).map((product, index) => 
        <PrimaryProductCard key={index} product={product} />
      )
      }

      <div className='col-span-full'>
        <Pagination initialPage={1} initialPageSize={6} totalItems={31} />
      </div>
    </div>
  )
}

export default ProfileWishlistPageWrapper