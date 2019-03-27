<?php include 'header.php'?>
<?php include 'Database.php'?>

<?php
$id = $_GET['id'];
$db = new Database();

//this will get all the information from each entry in the table via the 'id' during editing.
$sql = "SELECT * FROM userdata WHERE id = $id";
$getData = $db->read($sql)->fetch_assoc();

    
//submit futnctionality.
if(isset($_POST['submit'])){
        $creator = $_POST['creator'];
        $title = $_POST['title'];
        $types = $_POST['types'];
        $identifier = $_POST['identifier'];
        $dates = $_POST['dates'];
        $languages = $_POST['languages'];
        $descriptions = $_POST['descriptions'];
        //validation
        if($creator == ""|| $title == ""|| $types == ""|| $identifier == ""|| $dates == ""|| $languages == ""|| $descriptions == ""){
            $error = "Field Must not be Empty";
      }
        else
        {

            $sql = "UPDATE userdata SET creator = '$creator' , title = '$title' , types = '$types' ,identifier = '$identifier' , dates = '$dates' , languages = '$languages', descriptions = '$descriptions' WHERE id = $id"; 
            $update = $db->update($sql);
        }


    }        
            


?>

<?php
if(isset($error)){
    echo "<p>".$error."</p>";
}
?>


<!-- Deleting Data -->
<?php
if(isset($_POST['delete'])){
    //delete query.
    $sql = "DELETE FROM userdata WHERE id = $id";
    $deleteData =  $db->delete($sql);


}




?>


<form action="update.php?id=<?php echo $getData['id'];?>" method="post">
    <input   class="input" class="input"type ="text" name="creator" value= "<?php echo $getData['creator'];?>"><br>
    <input  class="input" type ="text" name="title" value= "<?php echo $getData['title'];?>"><br>
    <!-- <select name="types">
    <option>Select Any One</option>
    <option value = "Fiction">Fiction</option>
    <option value = "Non-fiction">Non-Fiction</option>
    </select>
    <br>     -->
    <input  class="input" type ="text" name="types" value= "<?php echo $getData['types'];?>"><br>
    <input  class="input" type ="text" name="identifier" value= "<?php echo $getData['identifier'];?>"><br>
    <input   class="input" type ="date" name="dates"value= "<?php echo $getData['dates'];?>"><br>
    <input  class="input" type ="text" name="languages" value= "<?php echo $getData['languages'];?>"><br>
    <input  class="input" type ="text" name="descriptions" value= "<?php echo $getData['descriptions'];?>"><br>
    <br><br>
    <input type="submit" name="submit" value="Update">
    <input type="reset" name ="reset" value="Cancel">
    <input type="submit" name ="delete" value="Delete">
    
</form>

<h2 class="button"><a href="index.php"> Go Back</a></h2>

<?php include 'footer.php'?>



