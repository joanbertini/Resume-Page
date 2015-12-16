/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var formattedName = HTMLheaderName.replace("%data%", "Stéphanie Malafosse");
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", "Web designer & Développeuse web");
$("#header").append(formattedRole);