var strr = JSON.parse(sessionStorage.getItem("data"));
var i = 0;
document.getElementById("ppage1").innerHTML=1;
document.getElementById("identity").innerHTML=1;

    var job = strr[i];
        $("#div1").click(function () {
        var job = strr[i];
        $("#ppage2").text(Number(i)+1);
        $("#job").text(job);
        $("#identity1").text(Number(i)+2);
        $("#page1").hide();
        $("#page2").show();
    });
    $("#div2").click(function () {
        i = i + 1;
        $("#ppage1").text(Number(i)+1);
        $("#page2").hide();
        $("#identity").text(Number(i)+1);
        $("#page1").show();
        if(i >= strr.length){
        }
    });


