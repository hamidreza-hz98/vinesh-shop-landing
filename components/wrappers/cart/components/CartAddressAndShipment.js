import Addresses from '@/components/common/Addresses'
import SelectShipment from '@/components/common/SelectShipment'
import React from 'react'

const CartAddressAndShipment = () => {
  
  const handleUpdateOrder = () => {
    // update
  }
  
  return (
    <div>
      <Addresses onSelect={handleUpdateOrder} />

      <SelectShipment onSelect={handleUpdateOrder} />
    </div>
  )
}

export default CartAddressAndShipment