exports.handler = async function (event, context) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: event.body,
  });

  const data = await response.json();

  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  };
};
