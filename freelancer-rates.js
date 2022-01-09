// @ts-check


/**The day rate, given a rate per hour
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

/** Calculates the number of days in a budget, rounded down
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const result =  budget / dayRate(ratePerHour);
  return Math.floor(result);
}

/** Calculates the discounted rate for large projects, rounded up
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  // Individual Days
  const daysWithoutDiscount = numDays % 22;
  const totalWithoutDiscount = dayRate(ratePerHour) * daysWithoutDiscount;

  // Months With discount
  const totalRate = dayRate(ratePerHour) * (numDays - daysWithoutDiscount); 
  const totalWithDiscount = totalRate - (totalRate * discount) ;
  return Math.ceil(totalWithoutDiscount + totalWithDiscount);
}