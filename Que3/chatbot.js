function getResponse(input) {
  const text = input.toLowerCase();

  switch (true) {
    case text.includes("weather"):
      return "Sunny.";
    case text.includes("temp"):
      return "25°C.";
    case text.includes("rain"):
      return "No rain.";
    case text.includes("bye"):
      return "Bye!";
    default:
      return "Don't understand.";
  }
}

module.exports = { getResponse };
