import { Subject, eType } from "./Subject";

// ヒロイン制御クラス
export class HeroineSubject extends Subject {
    constructor() {
        super(eType.Heroine);
    }

    // 処理開始
    public run() : void {
        console.log('ヒロインが処理開始');
        // todo アニメーションさせる等
    }
}