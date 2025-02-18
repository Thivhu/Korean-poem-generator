function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: ["앞산에"],
        autoStart: true,
        delay: 75,
        cursor: ""
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);