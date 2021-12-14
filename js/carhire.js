function display(){
    let fname= document.getElementById('fname').value;
    let lname= document.getElementById('lname').value;
    let model= document.getElementById('carmodel').value;
    let del= document.getElementById('cardel').value;
   
    document.getElementById('displayinfo').innerHTML= "Hi "+fname +" "+lname;
    document.getElementById('displayinfo2').innerHTML= "Great Choice. your "+model+" will be ready soon!! and will be delivered at your" +del;
 

}