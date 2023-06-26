import { useCartAction } from '@store/useCartStore';
import { GoodsWrap } from '../../styles';
import QuantityWrap from './QuantityWrap';
import PriceWrap from './PriceWrap';

import React from 'react';

function CartItemContainer({ itemId }: { itemId: string }) {
  const { removeCart, getItemName } = useCartAction();
  const name = getItemName(itemId);

  return (
    <GoodsWrap>
      <p>{name}</p>
      <PriceWrap itemId={itemId} />
      <QuantityWrap itemId={itemId} />
      <button onClick={() => removeCart(itemId)}>삭제</button>
    </GoodsWrap>
  );
}
const MemoizedComp = React.memo(CartItemContainer);
export default MemoizedComp;
