<?php
    include('dbconnection.php'); // Adjust the path to your actual dbconnection file

    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $email = $_POST['email'];

        $query = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";

        if (mysqli_query($conn, $query)) {
            echo "Data entry successful";
        } else {
            echo "Data entry unsuccessful: " . mysqli_error($conn);
        }
    }

    // Closing the connection
    mysqli_close($conn);
?>




<!DOCTYPE html>
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>QRiosity - Find Information About Your Food</title>
   <link rel="icon" href="Image/LogoWhite.png" type="image/icon type">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
   <!-- CSS -->
   <link rel="stylesheet" href="login.css">
   </head>
<body>
      <div class="popupContainer" id="popupContainer">
         <button class="close-btn" id="closeBtn">&times;</button>
         <!-- Register and Sign In forms here -->
         <div class="form-container sign-up-container">
            <form method="post" action="index.php">
               <h1>Create Account</h1>
               <span>or use your email for registration</span>
               <input type="text" placeholder="Username" name ="username"/>
               <input type="email" placeholder="Email" name ="email"/>
               <input type="password" placeholder="Password" name ="password"/>
               <button type="submit" name="submit">Sign Up</button>
            </form>
            </div>
         </div>
      </div>

</div>
<script src="script.js"></script>
</body>
</html>