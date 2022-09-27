let arr=[];
function addproduct(){
    
     var p=document.getElementById("t1").value;
     
     var product_name=document.getElementById("t2").value;
     var price=document.getElementById("t3").value;
     if(isNaN(p)==true ||isNaN(price)){
        alert("product id and price cannot be text");
     }else{
     
     var obj={product_id:p,product_name:product_name,price: price};
     arr.push(obj);
     s= "<tr><td>Product_Id</td><td>Product_Name</td><td>Price</td></tr>"
     
      s= arr.forEach(value =>{
        s+= "<tr><td>" + value.product_id + "</td><td>"+value.product_name+"</td><td>"+value.price+"</td></tr>";
     document.getElementById("table").innerHTML=s;
     });
    }
    }