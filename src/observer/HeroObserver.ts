import { Observer } from "./Observer";
import { Subject, eType } from "./Subject";

export class HeroObserver implements Observer {
    type = eType.Hero;
    Update(subject : Subject) : void {
        switch(subject.type) {
            case eType.Heroine:
                console.log('主人公がヒロインに遭遇しました');
                // 主人公がヒロインに遭遇した際の処理
                // アニメーションする。ステージクリアとする。等。
                break;

            case eType.Item:
                console.log('主人公がアイテムを拾いました');
                // 主人公のアイテムボックスにアイテムを追加する等
                break;

            default:
                // 主人公以外はアイテムは無視
                break;
        }
    }
}