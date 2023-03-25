
  
  $(document).ready(function(){
    // Get user profile details from alert box when edit profile is clicked
    $("#editProfile").click(function(){
        var username = prompt("Please enter your new username:");
        var email = prompt("Please enter your new email:");
        var dob = prompt("Please enter your new date of birth:");
        var address = prompt("Please enter your new address:");
        var mobile = prompt("Please enter your new mobile number:");
        // Update profile details on the page
        $("#username").html(username);
        $("#email").html(email);
        $("#dob").html(dob);
        $("#address").html(address);
        $("#mobile").html(mobile);
    });
    // Logout the user when the logout button is clicked
    $("#logout").click(function(){
        window.location.href = "logout.php";
    });
});