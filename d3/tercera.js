//aquí debes trabajar con datos de un CSV
var w = 450;
var h = 450;
d3.select(".dataviz-tercera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#EEEEEE");

var width = 900, height = 800;
var data; [
    {pelicula:"La tumba de las luciérnagas", age: 1988, rt_score: 97},
    {pelicula:"Recuerdos del ayer", age: 1991, rt_score: 100},
    {pelicula:"Pom Poko", age: 1994, rt_score: 78},
    {pelicula:"Mis vecinos los Yamada", age: 1999, rt_score: 75},
    {pelicula:"El cuento de la princesa Kaguya", age: 2013, rt_score: 100},
]
var svg = d3.select("svg")
  .attr("width", width)
  .attr("height", height)
  .style("background","#EEEEEE");
var g = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")  
  .attr("transform", "translate(30,0)")
g.append("circle")
  .attr("cx", function(d) { return d.rt_score/5; })
  .attr("cy", function(d) { return height/2; })
  .attr("r", function(d) { return d.año/4000; })
g.append("text")
  .attr("x", function(d) { return d.rt_score/5; })
  .attr("y", function(d,i) { return height-300; })
  .attr("font-size","11")
  .attr("text-anchor","middle")
  .text(function(d) { return d.pelicula; })
d3.select(".dataviz-primera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#EEEEEE");