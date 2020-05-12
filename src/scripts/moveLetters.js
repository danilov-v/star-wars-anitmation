const textContainer = document.querySelector("#byline");
const text = textContainer.textContent.split("");
textContainer.textContent = "";

const createNode = (content) => {
  const span = document.createElement("span");
  const text = content.trim();
  span.textContent = text;
  return text ? span :  document.createTextNode(' ');
};

text.map(createNode).forEach(textContainer.appendChild.bind(textContainer));
