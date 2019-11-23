import { GameManager, SceneName } from "./GameManager";

export function main() {
    let _gameManager = new GameManager();
    _gameManager.Run();
    
    // 1秒後にGameシーンへ遷移
    setTimeout(() => {
        _gameManager.ChangeScene(SceneName.Game);
    }, 1000);    
}