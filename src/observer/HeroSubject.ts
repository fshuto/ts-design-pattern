import { Subject, eType } from "./Subject";
import { Observer } from "./Observer";

// 主人公制御クラス
export class HeroSubject extends Subject {
    constructor() {
        super(eType.Hero);
    }

    // 処理開始
    public run() : void {
        console.log('主人公が処理開始');

        // アイテムを所得したと仮定して...
        console.log('主人公がアイテムを拾いました');
        this.notifyObserver(eType.Item);

        // ヒロインと遭遇したと仮定して...
        console.log('主人公がヒロインと遭遇しました');
        this.notifyObserver(eType.Heroine);
    }
}