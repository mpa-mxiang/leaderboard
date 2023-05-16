const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const POST_ID = 'l31NxnmdYsMg44J4cOh6';
const URL = `${BASE_URL}${POST_ID}/scores/`;

// POST action: get scores from users
export const postScore = async (data) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const results = await response.json();
  return results.result;
};

// GET action: get scores from API
export const getScore = async () => {
  const response = await fetch(URL);
  const results = await response.json();
  return results.result;
};
