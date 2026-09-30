const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "user 1",
  password: "password1",
  database: "test_db",
});
const API_KEY = "test_api_key_12345";
const JWT_SECRET = "test_jwt_secret_12345";

function displayComment(comment) {
    document.getElementById("output").innerHTML = comment;
}

displayComment(location.hash.substring(1));
