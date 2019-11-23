import { Subject, eType } from "./Subject";

// アイテム制御クラス
export class ItemSubject extends Subject {
    constructor() {
        super(eType.Item);
    }

    // 処理開始
    public run() : void {
        console.log('アイテムが処理開始');
        // todo アニメーションさせる等
    }
}