$("button").click(function() {
var male= "male";
var female = "female";
var gender = $(".gender").val();
var age = $(".age").val();
console.log("test",gender,age,female);
if(gender=== male && age <30){
    $(".message").text("you are Yoo Si Jin");
    $(".ym").fadeIn();
}else if (gender=== female && age <30){
    $(".message").text("you are Yoon Myeung-Joo");
    $(".yf").fadeIn();
}else if (gender=== male && age >30){
    $(".message").text("you are Seo Dae-Yoon");
    $(".om").fadeIn();
}else if(gender=== female && age >30){
    $(".message").text("you are Kang Mo-Yeon");
    $(".of").fadeIn();
}else {
    $(".result").text("please give correct information !");
}});
