 function changeImage() {

  if (document.getElementById("clickrock").src == "http://www.userinterfaceicons.com/80x80/minimize.png") 
  {
      document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
  }
  else 
  {
      document.getElementById("clickrock").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
  }
}