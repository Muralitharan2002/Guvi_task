<?php 

$servername = 'localhost';
$username = 'root';
$password = '';

//creating connection using php data object - ( PDO )

// if(isset($_POST['insert']))
// {

// }
try {
  $uname = $_POST['uname'];
  $pass = $_POST['pass'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $dob = $_POST['dob'];

  echo "The tow params are $uname and $pass";
  //code...
  $conn = new PDO("mysql:host=$servername;dbname=regdata",$username, $password);

$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo "Connected successfully";
try {
  //code...
  $sql = "INSERT INTO userdata (username, pass, email, mobile, dob) VALUES (?,?,?,?,?)";
  $stmt = $conn->prepare($sql);
  $stmt->execute(["$uname","$pass","$email","$mobile","$dob"]);
} catch (\Throwable $th) {
   echo $th;
}

echo " New record created successfully";
} catch(PDOException $e) {
echo "Connection failed: " . $e->getMessage();
}
?>