import { partOneSolution, partTwoSolution } from "../../../Day2";
import { BagInput, isValidGame } from "../../../Day2/utils";
import * as utils from "../../../Day2/utils";

const testData: string[] = [
    "Game 1: 7 green, 14 red, 5 blue; 8 red, 4 green; 6 green, 18 red, 9 blue",
    "Game 2: 3 blue, 15 red, 5 green; 1 blue, 14 red, 5 green; 11 red; 4 green, 1 blue, 3 red; 4 green, 1 blue; 10 red, 1 green",
    "Game 3: 11 green, 3 red; 4 green, 15 blue; 14 blue, 2 red, 10 green; 1 red, 3 green, 10 blue",
    "Game 4: 1 green, 6 red, 11 blue; 3 blue, 12 red; 1 green, 14 red, 8 blue; 3 blue, 7 red; 8 blue, 5 red; 7 red, 1 green",
    "Game 5: 14 green, 3 red, 3 blue; 2 red, 1 green, 1 blue; 8 green, 3 blue, 1 red; 15 green, 8 blue, 1 red", "Game 6: 4 blue, 8 green, 5 red; 9 green, 10 blue, 7 red; 11 blue, 10 red, 7 green; 8 red, 6 blue, 9 green", "Game 7: 5 green, 11 blue, 9 red; 2 green, 6 red, 12 blue; 8 red, 4 blue, 3 green; 7 green, 8 red, 9 blue; 8 green, 5 red",
    "Game 8: 7 red, 12 green; 9 blue, 15 red, 8 green; 3 blue, 11 green, 6 red; 8 blue, 12 red, 5 green",
    "Game 9: 8 blue, 6 red, 7 green; 2 blue, 3 red, 10 green; 10 blue, 6 red, 7 green; 11 red, 7 blue, 5 green; 10 red, 11 green",
    "Game 10: 5 red, 14 green; 2 red, 6 blue, 15 green; 3 red, 4 blue, 7 green; 6 red, 1 green, 4 blue"
];

let testBag: BagInput = { red: 5, green: 12, blue: 2 };

beforeEach(() => {
    jest.clearAllMocks();
})

describe('Day 2 Tasks', () => {
    
    describe('Part One', () => {
        describe('partOneSolution method', () => {
            const isValidGameSpy = jest.spyOn(utils, 'isValidGame');

            it('should return 0 if non of the games are in range', async () => {
                const result = partOneSolution(testBag, testData);
                expect(result).toEqual(0);
                expect(isValidGameSpy).toBeCalledTimes(10);
            });
            
            it('should return the sum of game ids for valid games', async () => {
                testBag = { red: 20, green: 20, blue: 20 };
                const result = partOneSolution(testBag, testData);
                expect(isValidGameSpy).toBeCalledTimes(10);
                expect(result).toEqual(55);
            });
        });

    });

    describe('Part Two', () => {
        describe('partTwoSolution method', () => {
            const fewestRequiredSpy = jest.spyOn(utils, 'fewestRequired');
            it('should return sum of powers for the fewest possible game', async () => {
                const result = partTwoSolution(testData);
                expect(result).toEqual(7592);
                expect(fewestRequiredSpy).toBeCalledTimes(10);
            });
        })
    })

    describe('Utils', () => {
        describe('sumGameSets method', () => {
            const testGame = "Game 1: 7 green, 14 red, 5 blue; 8 red, 4 green; 6 green, 18 red, 9 blue";
            it('should return object of the sum of all sets with game id:', async () => {
                const expectedResult = { id: 1, red_sum: 40, green_sum: 17, blue_sum: 14 };
                const result = utils.sumGameSets(testGame);
                expect(result).toEqual(expect.objectContaining(expectedResult));
            });
        })
    })

})