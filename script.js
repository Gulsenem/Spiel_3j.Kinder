var x = document.getElementById("box1");

function kliked(farbe)
{
    
    if( farbe == "red")
    {
        x.style.backgroundColor = "red";
    }
    else if (farbe == "blue")
    {
        x.style.backgroundColor = "blue";
    }
    else if (farbe == "green")
    {
        x.style.backgroundColor = "green";
    }
    else
    {
        x.style.backgroundColor = "hsl(258, 74%, 62%)";
    }
}