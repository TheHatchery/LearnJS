const element = document.querySelectorAll(".child");

element.forEach(element => {
    element.addEventListener("click", () => {
        const id = element.id;

        console.log(id);
    });
});




