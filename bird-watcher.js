/*

Instructions

You are an avid bird watcher that keeps track of how many birds have visited your garden. Usually you use a tally in a notebook to count the birds but you want to better work with your data. You already digitalized the bird counts per day for the past weeks that you kept in the notebook.

Now you want to determine the total number of birds that you counted, calculate the bird count for a specific week and correct a counting mistake.
1. Determine the total number of birds that you counted so far

Let us start analyzing the data by getting a high level view. Find out how many birds you counted in total since you started your logs.

Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount(birdsPerDay);
// => 34

2. Calculate the number of visiting birds in a specific week

Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2);
// => 12

3. Fix a counting mistake

You realized that all the time you were trying to keep track of the birds, there was one bird that was hiding in a far corner of the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument and returns that same array after correcting the counting mistake.

birdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsPerDay);
// => [3, 5, 1, 7, 5, 1]


*/
// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
 export function totalBirdCount(birdsPerDay) {
    let sum = 0
    for (let i = 0; i < birdsPerDay.length; i++){
      sum = sum + birdsPerDay[i]
    }
    return sum
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let sum = 0
    let nbDays = week * 7 -7
    let newTab = birdsPerDay.splice(nbDays,7)
    for (let i = 0; i < newTab.length; i++){
      sum = sum + newTab[i]
    }
    return sum
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++){
      birdsPerDay[i] = birdsPerDay[i] + 1
      i++
    }
    return birdsPerDay
  }
