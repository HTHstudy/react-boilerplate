import { useCartAction } from '@store/useCartStore';
import React from 'react';

function CartSizeContainer() {
  const cartSize = useCartAction().getCartSize();
  return <p>{cartSize}</p>;
}

export default CartSizeContainer;
