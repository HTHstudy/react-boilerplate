import { useCartAction } from '@store/useCartStore';
import React from 'react';

type Props = {
  itemId: string;
};
export default function PriceWrap({ itemId }: Props) {
  const { updateItemPrice, getItemPrice } = useCartAction();
  const itemPrice = getItemPrice(itemId);

  return (
    <p>
      {itemPrice}
      <button onClick={() => updateItemPrice(itemId)}>Price++</button>
    </p>
  );
}
