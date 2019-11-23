export abstract class BaseScene {
    // シーン共通の初期化処理
    protected constructor() {

    }

    // シーン内の処理はシーン毎に記述
    public abstract Update() : void;
}