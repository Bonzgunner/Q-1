
function validateform(){
  var name=document.myform.name.value;
  var email=document.myform.email.value;
  var password=document.myform.password.value;
  var contact=document.myform.contact.value;
  var address=document.myform.address.value;

  if(name==null || name=="")
    {
      alert("Name can't be blank ! ");
      return false;
      }
  else if (name.match(/^[A-Za-z]+$/))
           {
           }
  else
    {
      alert("Enter only letters");
      return false;
    }
  
  if(password==null || password=="")
    {
      alert("Please enter a password ! ");
      return false;
      }
  
  if(email==null || email=="")
    {
      alert("Pease enter an email ! ");
      return false;
      }
  
    if(contact==null || contact=="")
    {
      alert("Contact can't be blank ! ");
      return false;
      }
  else if(contact.match(/^[A-Za-z]+$/))
    {
      alert("Enter only numbers");
      return false;
      }
  
  if (address==null || address=="")
    {
      alert("Please enter your address !");
      return false;
      }
}
