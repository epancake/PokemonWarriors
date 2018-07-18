export interface PokeTypes {
    id: number;
    type: string;
    superEffectiveAgainst: Array<string>;
    notVeryEffectiveAgainst: Array<string>;
    resistantTo: Array<string>;
    vulnerableTo: Array<string>;
    immuneTo: string;
}
