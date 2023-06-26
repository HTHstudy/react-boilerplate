import { withSelector } from './middleware';
import { shallow } from 'zustand/shallow';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

// State 타입 정의
type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
type CartState = {
  cart: Map<string, Item>;
};
const initCartState: CartState = {
  cart: new Map<string, Item>(),
};

const useCartStore = create(
  devtools<CartState>(() => initCartState, { name: 'cartStore', serialize: { options: { map: true } } })
);
export const useCartSelector = withSelector(useCartStore);

// 액션 함수들 타입 정의
type CartAction = {
  addCart: (item: Item) => void;
  removeCart: (itemId: Item['id']) => void;
  updateItemQuantity: (itemId: Item['id']) => void;
  updateItemPrice: (itemId: Item['id']) => void;
  getCartKeys: () => string[];
  getCartSize: () => number;
  getCartItem: (itemId: Item['id']) => Item | undefined;
  getItemName: (itemId: Item['id']) => Item['name'];
  getItemPrice: (itemId: Item['id']) => Item['price'];
  getItemQuantity: (itemId: Item['id']) => Item['quantity'];
};

// 액션 함수 개별 작성
const addCart: CartAction['addCart'] = (item) => {
  const prevCart = useCartStore.getState().cart;
  if (prevCart.get(item.id)) return;
  const newCart = new Map(prevCart);
  newCart.set(item.id, item);
  useCartStore.setState(() => ({ cart: newCart }));
};
const removeCart: CartAction['removeCart'] = (itemId) => {
  const prevCart = useCartStore.getState().cart;
  if (!prevCart) return;
  const newCart = new Map(prevCart);
  newCart.delete(itemId);
  useCartStore.setState(() => ({ cart: newCart }));
};
const updateItemQuantity: CartAction['updateItemQuantity'] = (itemId) => {
  const prevCart = useCartStore.getState().cart;
  const prevItem = prevCart.get(itemId);
  if (!prevItem) return;
  const newCart = new Map(prevCart);
  const updatedItem = { ...prevItem, quantity: prevItem.quantity + 1 };
  newCart.set(itemId, updatedItem);
  useCartStore.setState(() => ({ cart: newCart }));
};
const updateItemPrice: CartAction['updateItemPrice'] = (itemId) => {
  const prevCart = useCartStore.getState().cart;
  const prevItem = prevCart.get(itemId);
  if (!prevItem) return;
  const newCart = new Map(prevCart);
  const updatedItem = { ...prevItem, price: prevItem.price + 1 };
  newCart.set(itemId, updatedItem);
  useCartStore.setState(() => ({ cart: newCart }));
};

// 파생 상태 getter 함수 정의(일반적으로 리렌더링 최적화를 위해 필요함)
const getCartKeys = () => {
  const cartKeys = useCartStore((state) => [...state.cart.keys()], shallow);
  return cartKeys;
};
const getCartSize = () => {
  const cartSize = useCartStore((state) => state.cart.size, shallow);
  return cartSize;
};
const getCartItem = (itemId: string) => {
  const cartItem = useCartStore((state) => state.cart.get(itemId));
  return cartItem;
};
const getItemName = (itemId?: string) => {
  const itemName = useCartStore((state) => {
    if (!itemId) return '';
    const item = state.cart.get(itemId);
    if (!item) return '';
    return item.name;
  });
  return itemName;
};
const getItemPrice = (itemId?: string) => {
  const itemPrice = useCartStore((state) => {
    if (!itemId) return 0;
    const item = state.cart.get(itemId);
    if (!item) return 0;
    return item.price;
  });
  return itemPrice;
};
const getItemQuantity = (itemId?: string) => {
  const itemQuantity = useCartStore((state) => {
    if (!itemId) return 0;
    const item = state.cart.get(itemId);
    if (!item) return 0;
    return item.quantity;
  });
  return itemQuantity;
};

// 액션 함수 모음 useCartAction export
export const useCartAction = (): CartAction => ({
  addCart,
  removeCart,
  updateItemQuantity,
  updateItemPrice,
  getCartKeys,
  getCartSize,
  getCartItem,
  getItemName,
  getItemPrice,
  getItemQuantity,
});
