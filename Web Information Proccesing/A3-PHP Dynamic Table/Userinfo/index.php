<?php include 'header.php';?>
<?php include 'Database.php';?>

<?php

if(isset($_GET['msg'])){
    echo"<p>".$_GET['msg']."</p>";
}

?>
            <table align="center">
                    <tr>
                        <th>id </th>
                        <th>creator </th>
                        <th>title </th>
                        <th>types </th>
                        <th>identifier</th>
                        <th>dates </th>
                        <th>languages </th>
                        <th>descriptions </th>
                        <th>Action</th>
                    </tr> 
                   <!-- //data base instence  -->
                   <?php 

                   $db = new Database();
                    
    
                   $sql = "SELECT * FROM `userdata`";

                   $read = $db->read($sql);
                   if($read){
                       $i=1; //declared a varaible for 
                       while($row = $read->fetch_assoc()){
                    ?>  
                    <tr>

                        <td> 
                            <?php echo $i++;?>
                        </td>
                        <td><?php echo $row['creator'];?></td>
                        <td><?php echo $row['title'];?></td>
                        <td><?php echo $row['types'];?></td>
                        <td><?php echo $row['identifier'];?></td>
                        <td><?php echo $row['dates'];?></td>
                        <td><?php echo $row['languages'];?></td>
                        <td><?php echo $row['descriptions'];?></td>
                        <!-- creating a dynamic iteration of update.php for the different id's. -->
                        <td><a href="update.php?id=<?php echo $row['id']; ?>">Edit</a></td>
                    </tr>
                    
                    
                    <?php

                       }
                   }

                    ?>

                            
                </table>
                
                <button class="button"><a href="add.php">Add New</button>
            
                   

<?php include 'footer.php';?>
               