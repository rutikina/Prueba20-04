//aquí debes trabajar con datos de un JSON
d3.json("https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a")
var w = 450;
var h = 450;
d3.select(".dataviz-segunda")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#FFFFFF");