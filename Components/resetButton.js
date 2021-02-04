function resetButton() {
    document.getElementById("search").value="";
    document.getElementById("grid").innerHTML='<div id="centerDiv" class="card" onclick="dataReceiver()"><img class = "shake" src="./assets/ball.png"></div><div id="search-results"></div>';
}

export default resetButton;