import { Observer } from "./Observer";

// 観測される者の種類
export enum eType {
    Hero,
    Heroine,
    Item
}

// 観測される側のクラス
export abstract class Subject {
    private _observers : Observer[];
    private _type : eType;
    get type() : eType {
        return this._type;
    }

    constructor(type : eType) {
        this._observers = [];
        this._type = type;
    }

    // 観測者の追加
    public addObserver(observer : Observer) : void {
        this._observers.push(observer);
    }

    // 観測者の削除
    public deleteObserver(observer : Observer) : void {
        this._observers = this._observers.filter((value) => {
            // 配列をobserverでない要素のみでフィルターする。
            // = observerを取り除く
            value !== observer;
        });
    }

    // 観測者へ通知
    public notifyObserver(type : eType) : void {
        this._observers.forEach((observer) => {
            if (type === observer.type) 
            {
                observer.Update(this);
            }
        });
    }
}