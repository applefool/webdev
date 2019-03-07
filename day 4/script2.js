
function myFunction(age, finalprice) {
    alert('your age is: ' + age.value)

    var ticketprice = 20
    var discountedprice = 0
    var agevalue = age.value
    if (agevalue < 18 || agevalue > 65) {
        discountedprice = ticketprice * 0.50
    }
    else if (agevalue > 18 && agevalue < 41) {
        discountedprice = ticketprice
    }
    else if (agevalue > 40 && agevalue < 66) {
        discountedprice = ticketprice * 0.75
    }
    alert("your ticket price is:" + discountedprice);

    finalprice.value = discountedprice;
}

