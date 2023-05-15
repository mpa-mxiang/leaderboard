const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const POST_ID = 'l31NxnmdYsMg44J4cOh6';
const URL = BASE_URL + POST_ID + '/scores/';


// POST action: get scores from users
export const postScore = async (data) => {
  try {
    const response = await fetch(URL, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

// GET action: get scores from API
export const getScore = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    return result.result;
  } catch (error) {
    console.error("Error:", error);
  }
}
