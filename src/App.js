import React from "react";
import "./styles.css";

export default function App() {
  const puzzle = require("./puzzleInput.txt");

  /**
   * Finds the total number of trees you will encounter in the map.
   *
   * @param input
   * @param right
   * @param down
   */
  const findTotalTrees = (input, right, down) => {
    const map = input.split(/[\r\n]+/);
    let totalTrees = 0;
    let x = 0;
    for (let y = down; y < map.length; y += down) {
      x = (x + right) % map[y].length;
      if (map[y][x] === "#") {
        totalTrees++;
      }
    }
    return totalTrees;
  };

  /**
   * Multiplys the total trees together.
   *
   * @param input
   */
  const multiplyTotalTree = (input) =>
    findTotalTrees(input, 1, 1) *
    findTotalTrees(input, 3, 1) *
    findTotalTrees(input, 5, 1) *
    findTotalTrees(input, 7, 1) *
    findTotalTrees(input, 1, 2);

  console.log(findTotalTrees(puzzle, 3, 1));
  console.log(multiplyTotalTree(puzzle));

  return (
    <article className="day-desc">
      <h2>--- Day 3: Toboggan Trajectory ---</h2>
      <a href="https://adventofcode.com/2020/day/3#part2">Question link</a>
    </article>
  );
}
