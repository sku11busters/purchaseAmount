import Cart from '../service/Cart';
import Movie from '../domain/Movie';

describe('Cart Class', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('should calculate total cost without discount', () => {
        const movie1 = new Movie(1, 'Movie 1', 'Original Movie 1', 2023, 'Russia', 'Best Movie 1', 'Drama', 120, 500);
        const movie2 = new Movie(2, 'Movie 2', 'Original Movie 2', 2023, 'Usa', 'Best Movie 2', 'Action', 90, 300);
        
        cart.add(movie1);
        cart.add(movie2);

        const total = cart.totalCost();
        expect(total).toBe(800); 
    });

    test('should calculate total cost with discount', () => {
        const movie1 = new Movie(1, 'Movie 1', 'Original Movie 1', 2023, 'Russia', 'Best Movie 1', 'Drama', 120, 500);
        const movie2 = new Movie(2, 'Movie 2', 'Original Movie 2', 2023, 'Usa', 'Best Movie 2', 'Action', 90, 300);

        cart.add(movie1);
        cart.add(movie2);

        const totalWithDiscount = cart.totalCostWithDiscount(10); 
        expect(totalWithDiscount).toBe(720); 
    });

    test('should remove an item by ID', () => {
        const movie1 = new Movie(1, 'Movie 1', 'Original Movie 1', 2023, 'Russia', 'Best Movie 1', 'Drama', 120, 500);
        const movie2 = new Movie(2, 'Movie 2', 'Original Movie 2', 2023, 'Usa', 'Best Movie 2', 'Action', 90, 300);

        cart.add(movie1);
        cart.add(movie2);

        cart.removeById(1);

        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toBe(movie2);
    });

    test('should return an empty array when all items are removed', () => {
        const movie1 = new Movie(1, 'Movie 1', 'Original Movie 1', 2023, 'Russia', 'Best Movie 1', 'Drama', 120, 500);
        cart.add(movie1);
        cart.removeById(1);

        expect(cart.items.length).toBe(0);
    });
});
