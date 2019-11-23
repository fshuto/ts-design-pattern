import { Observer } from "./Observer";
import { Subject, eType } from "./Subject";

export class ItemObserver implements Observer {
    type = eType.Item;
    Update(subject : Subject) : void {
        switch(subject.type) {
            case eType.Hero:
                console.log('アイテムが主人公に拾われました');
                // アイテムの表示切り替え処理等。
                // 取得されたれたアイテムはフィールドから消す。
                break;

            default:
                // 主人公以外がアイテムに触れた場合は無視
                break;
        }
    }
}