
for (var i=0; i<2; i++)
{
    var box1 = document.createElement("div");
    document.getElementById("box").appendChild(box1);
    var x = document.getElementById("box1");

    function kliked(farbe)
    {

        if( farbe == "red")
        {
            box1.style.backgroundColor = "red";
        }
        else if (farbe == "blue")
        {
            box1.style.backgroundColor = "blue";
        }
        else if (farbe == "green")
        {
            box1.style.backgroundColor = "green";
        }
        else
        {
            box1.style.backgroundColor = "hsl(258, 74%, 62%)";
        }
    }
}