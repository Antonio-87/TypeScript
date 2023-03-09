import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        const sumItems: number[] = [];
        this._items.forEach((el) => sumItems.push(el.price));
        return sumItems.reduce((a, b) => a + b);
    }

    sumDiscount(discount: number): number | string {
        if (discount > 0 && discount < 100) {
            const sumItems: number[] = [];
            this._items.forEach(el => sumItems.push(el.price));
            return sumItems.reduce((a, b) => a + b) * (1 - discount/100);
        } else {
            return 'Discount amount from 1 to 100';
        }
    }

    del(id: number): void {
        const index: number = [...this._items].findIndex(el => el.id === id);
        this._items.splice(index, 1);
    }
}