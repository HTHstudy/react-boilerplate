import { useCartAction } from '@store/useCartStore';
import { FlexDiv } from '../styles';
import CartItemContainer from './CartItemContainer';
import React from 'react';

function CartContainer() {
  const { getCartKeys } = useCartAction();
  const cartKeys = getCartKeys();

  return (
    <FlexDiv>
      장바구니
      {cartKeys.map((itemId) => (
        <CartItemContainer key={itemId} itemId={itemId} />
      ))}
    </FlexDiv>
  );
}

export default CartContainer;
