let Verb;

$("button").click(function(){
    Verb = $(".Verb").val();
    let noun1 = $(".noun1").val();
    let food = $(".food").val();
$("p").text("My dog and I love to " + (Verb) + " through the " + noun1 + ", and after that, we go and get " + (food) + " to cool off after a fun day!" );
});




