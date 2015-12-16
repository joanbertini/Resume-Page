/* This is empty on purpose! Your code to build the resume will go here. */

var name = "Stéphanie Malafosse"; 
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);
var role = "Web designer & Développeuse web";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);
