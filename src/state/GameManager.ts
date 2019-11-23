import { TitleScene } from './scene/TitleScene';
import { BaseScene } from './scene/BaseScene';
import { GameScene } from './scene/GameScene';

export enum SceneName {
    Title,
    Game
};

// シーンごとの個別データの定義
interface SceneDatas {
    class : any;
    // todo 背景画像やサウンドなどのシーン個別の設定があれば、ここに定義を追加する
}

export class GameManager {

    // private member
    private _currentScene : BaseScene;
    private _intervalTimerNum : any;
    private _sceneDatas : SceneDatas[] = [
        {
            class: TitleScene
        },
        {
            class: GameScene
        }
    ];

    constructor() {
        // タイトルシーンでタイトルシーンで初期化
        this._currentScene = new TitleScene();
        this._intervalTimerNum = 0;
    }

    // ゲーム内処理の実行
    public Run() : void {
        // 100msごとにUpdateを実行
        this._intervalTimerNum = setInterval(this._currentScene.Update, 100);
    }

    // シーンを指定したシーンに変更する
    public ChangeScene(nextSceneName : SceneName) : void {
        clearInterval(this._intervalTimerNum);
        // todo シーンのデストラクタ処理

        let nextClass = this._GetNextSceneClass(nextSceneName);
        this._currentScene = new nextClass();

        // 新しいシーンを走らせる
        this.Run();
    }

    // 次のシーンのクラスを取得する
    private _GetNextSceneClass(nextSceneName : SceneName) : any {
        return this._sceneDatas[<number>nextSceneName].class;
    }
}