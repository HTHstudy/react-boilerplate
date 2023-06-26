import { useCartAction } from '@store/useCartStore';
import { GoodsWrap } from './styles';
import CartSizeContainer from './CartSizeContainer';
import CartContainer from './CartContainer';
import React from 'react';

const GOODS = [
  {
    id: 'aa',
    name: '상품1',
    price: 1000,
    quantity: 1,
  },
  {
    id: 'bb',
    name: '상품2',
    price: 2000,
    quantity: 2,
  },
  {
    id: 'cc',
    name: '상품3',
    price: 3000,
    quantity: 3,
  },
];

export default function OptimizationPage() {
  const { addCart } = useCartAction();

  return (
    <div>
      CartPage
      <div>
        {GOODS.map((g) => (
          <GoodsWrap key={g.id} onClick={() => addCart(g)}>
            <p>{g.name}</p>
            <p>{g.price}</p>
            <p>{g.quantity}</p>
          </GoodsWrap>
        ))}
      </div>
      <CartContainer />
      <CartSizeContainer />
    </div>
  );
}
