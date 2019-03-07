
function myFunction(age, finalprice) {
    //alert('your age is: ' + age.value)

    var agevalue = age.value
    var discountedprice=""
    for(var i=0; i<= 100; i++) {
        console.log(i*age.value);
        discountedprice += i+"*"+agevalue+"="+i*agevalue+"<br>"
    }
    //document.write(discountedprice);
    //alert("your ticket price is:" + discountedprice);
    finalprice.innerHTML = discountedprice;
}

