import { HeroSubject } from "./HeroSubject";
import { HeroineSubject } from "./HeroineSubject";
import { ItemSubject } from "./ItemSubject";
import { HeroObserver } from "./HeroObserver";
import { HeroineObserver } from "./HeroineObserver";
import { ItemObserver } from "./ItemObserver";

export function main() {
    const heroSubject : HeroSubject = new HeroSubject();
    const heroineSubject : HeroineSubject = new HeroineSubject();
    const itemSubject : ItemSubject = new ItemSubject();
    
    const heroObserver : HeroObserver = new HeroObserver();
    const heroineObserver : HeroineObserver = new HeroineObserver();
    const itemObserver : ItemObserver = new ItemObserver();
    
    heroSubject.addObserver(heroineObserver);
    heroSubject.addObserver(itemObserver);
    
    heroineSubject.addObserver(heroObserver);
    
    itemSubject.addObserver(heroObserver);
    
    // 実行
    heroineSubject.run();
    itemSubject.run();
    heroSubject.run();
}