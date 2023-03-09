import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('the cart is filled with all instances (add/items)', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 5, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137));

  expect(cart.items.length).toBe(3);
});

test('correct operation of the mthod sum', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 5, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137));

  expect(cart.sum()).toBe(2905);
});

test('correct operation of the mthod sumDiscount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 5, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137));

  expect(cart.sumDiscount(10)).toBe(2614.5);
});

test('incorrect data of the mthod sumDiscount', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 5, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137));

  expect(cart.sumDiscount(110)).toMatch('Discount amount from 1 to 100');
});

test('correct operation of the mthod del', () => {
  const cart = new Cart();

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'Avengers', 5, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик', 137));
  cart.del(1010);
  expect(cart.items.find(el => el.id === 1010)).toBeUndefined();
});
