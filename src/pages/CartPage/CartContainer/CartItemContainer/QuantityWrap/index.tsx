import { useCartAction } from '@store/useCartStore';
import React from 'react';

type Props = {
  itemId: string;
};
export default function QuantityWrap({ itemId }: Props) {
  const { updateItemQuantity, getItemQuantity } = useCartAction();
  const itemQuantity = getItemQuantity(itemId);
  return (
    <p>
      {itemQuantity}
      <button onClick={() => updateItemQuantity(itemId)}>수량 증가</button>
    </p>
  );
}
