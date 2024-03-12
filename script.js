const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click", (e) => {
    e.preventDefault();

    const isPassword = input.getAttribute("type") === "password";

    inputIcon.setAttribute(
        "src",
        isPassword ? "eye-off.png" : "eye.png"
    );

    input.setAttribute(
        'type',
        isPassword ? "text" : "password"
    );
});