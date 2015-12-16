/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var formattedName = HTMLheaderName.replace("%data%", name);
var name = "Stéphanie Malafosse";
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var role = "Web designer & Développeuse web";
$("#header").append(formattedRole);