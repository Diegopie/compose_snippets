/**
 * @param {string} currency
 * @param {number} value
 * @param {string} goal
 * @returns {function(): void}
 */
export function createDispatch(
  currency = "USD",
  value = 200.0,
  goal = "revenue"
) {
  if (goal === "revenue") {
    const newEvent = function() {
      window.compose.dispatchEvent(
        new CustomEvent(`goal:${goal}`, {
          detail: {
            value: value,
            currency: `${currency}`,
          },
        })
      );
    };
    console.log(newEvent);

    return newEvent;
  }

  const newEvent = () => {
    window.compose.dispatchEvent(new CustomEvent(`goal:${goal}`));
  };

  return newEvent;
}
