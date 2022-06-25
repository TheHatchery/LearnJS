const element = document.querySelectorAll(".inner");

element.forEach(element => {
    element.addEventListener("click", () => {
        const id = element.id;

        console.log(id);
    });
});




