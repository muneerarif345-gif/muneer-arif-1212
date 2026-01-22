<!DOCTYPE html>
<html>
<head>
  <title>Signup Form</title>
</head>
<body>

<h2>Signup Form</h2>

<form onsubmit="showData(); return false;">
  Name: <input type="text" id="name" required><br><br>
  Email: <input type="email" id="email" required><br><br>
  Password: <input type="password" id="password" required><br><br>
  <button type="submit">Signup</button>
</form>

<h3>Submitted Data</h3>
<p id="result"></p>

<script>
function showData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  document.getElementById("result").innerHTML =
    "Name: " + name + "<br>" +
    "Email: " + email + "<br>" +
    "Password: " + password;
}
</script>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
  <title>Read More</title>
</head>
<body>

<h2>Item Details</h2>

<p>
  This is a mobile phone with excellent features
  <span id="dots">...</span>
  <span id="more" style="display:none;">
    including high-speed performance, long battery life,
    powerful camera, and modern design.
  </span>
</p>

<button onclick="readMore()" id="btn">Read more</button>

<script>
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btn = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
</script>

</body>
</html>
