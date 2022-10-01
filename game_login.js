function addUser()
{
    Player_1 = document.getElementById("player1_name_input").value;
    Player_2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player1_name", Player_1);
    localStorage.setItem("Player2_name", Player_2);
    window.location = "game_page.html"
}