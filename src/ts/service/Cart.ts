import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }

    totalCostWithDiscount(discount: number): number {
        const total = this.totalCost();
        return total - (total * discount / 100);
    }

    removeById(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}