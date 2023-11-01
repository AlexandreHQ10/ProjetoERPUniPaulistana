const square = document.getElementById("square");
const frontSide = document.getElementById("frontSide");
const rightSide = document.getElementById("rightSide");
const leftSide = document.getElementById("leftSide");


frontSide.addEventListener("click", () => {
    frontSide.style.display = "none";
    rightSide.style.display = "block";
    leftSide.style.display = "block";
    square.style.transform = "rotate3d(0, 0, 0, 90deg)";
    document.title = "Página Login";
});

rightSide.addEventListener("click", () => {
    rightSide.style.display = "none";
    frontSide.style.display = "block";
    leftSide.style.display = "block";
    square.style.transform = "rotate3d(0, -1, 0, 90deg)";
    document.title = "Página Cadastre-se";
});
leftSide.addEventListener("click", () => {
    leftSide.style.display = "none";
    rightSide.style.display = "block";
    frontSide.style.display = "block";
    square.style.transform = "rotate3d(0, 1, 0, 90deg)";
    document.title = "Página Recuperar Senha";
});

