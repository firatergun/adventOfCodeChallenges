
export type BagInput = {
    red: number;
    green: number;
    blue: number;
};
type GameSumType = {
    red_sum: number;
    green_sum: number;
    blue_sum: number;
    id: number;
};

type Game = {
    red: number;
    green: number;
    blue: number;
}
export function sumGameSets(game: string): GameSumType {
    const [gameId, set] = game.split(':') as [gameId: string, sets: string];
    const gameSetRegex = /\d{1,2}\u0020green|\d{1,2}\u0020red|\d{1,2}\u0020blue/g;
    const results: RegExpMatchArray[] = Array.from(set.matchAll(gameSetRegex));
    // console.log(set);
    const setSum = results.reduce((acc, curr) => {
        if (curr[0].includes('green')) {
            acc.green_sum += parseInt(curr[0].split(" ")[0]);
        }
        if (curr[0].includes('red')) {
            acc.red_sum += parseInt(curr[0].split(" ")[0]);
        }
        if (curr[0].includes('blue')) {
            acc.blue_sum += parseInt(curr[0].split(" ")[0]);
        }
        // console.log(curr);
        // console.log(acc);
        return acc;
    }, { red_sum: 0, green_sum: 0, blue_sum: 0 });
    const setTotal = {
        id: parseInt(gameId.split(" ")[1]),
        ...setSum
    };
    return setTotal;
};

export function isValidGame(game: string, bagInput: BagInput) {
    const [gameId, set] = game.split(':') as [gameId: string, sets: string];
    const gameSetRegex = /\d{1,2}\u0020green|\d{1,2}\u0020red|\d{1,2}\u0020blue/g;
    const sets: RegExpMatchArray[] = Array.from(set.matchAll(gameSetRegex));
    // console.log(sets);
    let isValidSet = true;
    const { green, red, blue } = bagInput;
    for (const set of sets) {
        const value = parseInt(set[0].split(" ")[0]);
        // Check if set includes Green and break if value is greater then bag green content 
        if ((set[0].includes('green')) && (value > green)) {
            isValidSet = false;
            break;
        }
        // Check if set includes Red and break if value is greater then bag green content
        if ((set[0].includes('red')) && (value > red)) {
            isValidSet = false;
            break;
        }
        // Check if set includes Blue and break if value is greater then bag green content
        if ((set[0].includes('blue')) && (value > blue)) {
            isValidSet = false;
            break;
        }
    }
    // Return Game id if all sets are valid
    if (isValidSet) {
        return parseInt(gameId.split(" ")[1]);
    }
    //Return 0 if any set has more then bag content
    return 0;
};

export const checkBagByGameTotal = (bagInput: BagInput, game: GameSumType) => {
    if ((game.red_sum <= bagInput.red) && (game.green_sum <= bagInput.green) && (game.blue_sum <= bagInput.blue)) {
        return true;
    }
    return false;
};

export const fewestRequired = (game: string): Game => {
    const [gameId, set] = game.split(':') as [gameId: string, sets: string];
    const gameSetRegex = /\d{1,2}\u0020green|\d{1,2}\u0020red|\d{1,2}\u0020blue/g;
    const sets: RegExpMatchArray[] = Array.from(set.matchAll(gameSetRegex));
    const fewestRequired: Game = {
        red: 0,
        green: 0,
        blue: 0
    }
    for (const set of sets) {
        const value = parseInt(set[0].split(" ")[0]);
        if ((set[0].includes('green'))) {
            if (value > fewestRequired.green) {
                fewestRequired.green = value;
            }
        }
        if (set[0].includes('red')) {
            if (value > fewestRequired.red) {
                fewestRequired.red = value;
            }
        }
        if (set[0].includes('blue')) {
            if (value > fewestRequired.blue) {
                fewestRequired.blue = value;
            }
        }
    }
    return fewestRequired;
}
