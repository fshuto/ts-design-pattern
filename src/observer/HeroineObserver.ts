import { Observer } from "./Observer";
import { Subject, eType } from "./Subject";

export class HeroineObserver implements Observer {
    type = eType.Heroine;
    Update(subject : Subject) : void {
        switch(subject.type) {
            case eType.Hero:
                console.log('ヒロインが主人公に遭遇しました');
                // ヒロイン側の主人公遭遇時の処理。
                // アニメーションさせる等。
                break;

            default:
                // 主人公以外への遭遇は無視
                break;
        }
    }
}