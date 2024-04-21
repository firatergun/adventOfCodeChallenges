import { data } from './data';
import { BagInput, sumGameSets, checkBagByGameTotal, isValidGame, fewestRequired } from './utils';

export const partOneSolution = (bagInput: BagInput, games?: string[]) => {
    if (!games) {
        games = data;
    }
    const idSum = games?.reduce((acc, cur) => {
        //OPTIONAL TODO: Validate current input if it's valid game entry ( should have game id and atleast 1 set )
        acc += isValidGame(cur, bagInput);
        return acc;
    }, 0);
    return idSum;
};

export const partTwoSolution = (games?: string[]) => {
    console.log(!games);
    if (!games) {
        games = data;
    }
    const sumOfPowers = games.reduce((acc, curr) => {
        // OPTIONAL TODO: Validate current input if it's valid game entry ( should have game id and atleast 1 set )
        // Find max red,green,blue for each game
        const fewest = fewestRequired(curr);
        // find power of max red*green*blue
        const { red, green, blue } = fewest;
        const power = red * green * blue;
        // find sum of powers
        acc += power;
        return acc;
    }, 0);
    return sumOfPowers;
}


export const partThreeSolution = (bagInput: BagInput, games?: string[]) => { // Solution takes Bag object including number of red, green and blue's
    if (!games) {
        games = data;
    }
    const idSum = games.reduce((acc, cur) => {
        //OPTIONAL TODO: Validate current input if it's valid game entry ( should have game id and atleast 1 set)
        const game = sumGameSets(cur);
        if (checkBagByGameTotal(bagInput, game)) {
            console.log('VALID...');
            acc += game.id;
        }
        return acc;
    }, 0);
    return idSum;
}