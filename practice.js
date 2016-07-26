/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
/*
 var name="Kripesh Bista";
 var age=23;
 var address;
 */
//console.log(age.length);//undefined
//console.log(parseInt(age));//parse String into Number
//console.log(name.length);//lenght of String
//$("#main").append(["Hello JavaScript"]);//append in main element
//console.log("name".charAt(3));
//console.log(name.replace(name,"location"));
//console.log(name.toUpperCase());
//other type
//console.log(Boolean(1));//true
//console.log(Boolean(""));//false 
//console.log(address);//If you declare a variable without assigning any value to it, its type is undefined.
//console.log("My name is " + name + ". And I am " + age + " years old.");
//console.log("3" + 4 + 7);//if you add a string to a number (or other value) everything is converted in to a string first. This might catch you up:
	//Save and append().
/*var awesomeThoughts="I am Kripesh and i am awesome!";
console.log(awesomeThoughts);*/
	//String replace and append
/*var awesomeThoughts="I am Kripesh and i am awesome!";
var funThoughts=awesomeThoughts.replace("awesome","fun");
console.log(awesomeThoughts);
console.log(funThoughts);
$("#main").append(funThoughts);
*/
	//String manipulation
/*var s = "aleapfrogacademy";

var udacityizer= function(s){
	s = s[1].toUpperCase() + s.slice(2);
	return s;
};
console.log(udacityizer(s));
*/
	//Mixing replace and append
/*var name="Kripesh Bista";
var role="Web Developer And Facilitator Assistant";
var formattedName= HTMLheaderName.replace("%data%",name);
//$("#header").append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName,formattedRole);//prepend()
*/


/*var array =["ram","syham","hari"];
array.push("kripesh");*/
//a[50]="kripesh";
//console.log(typeof a[1]);
/*for(var i = 0; i < array.length; i++){
	console.log(array[i]);
}*/

//console.log(array.toString());
//console.log(array.reverse().toString());
/*var simpleArray=[5,5,4];
function increment(_array){
	var newArray=[];
	newArray=_array.slice(0);
	var lastNumber=newArray.pop();
	newArray.push(lastNumber + 1);
	return newArray;
}
console.log(increment(simpleArray));
*/
/*var name="KRipeSH bISta";
function nameFormate(oldName){
	var finalName= oldName;
	var names=oldName.split(" ");
	names[1]=names[1].slice(0,1).toUpperCase() + names[1].slice(1).toLowerCase();
	names[0]=names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	finalName=names.join(" ");
	return finalName;
}
console.log(nameFormate(name));
//output: Kripesh Bista*/
/*function add(){
	var sum=0;
	for(int i=0,j=arguments.length;i<j;i++){
		sum +=arguments;
	}
	return sum;
}
console.log(add(2,3,4,5));*/
//Protecting the resume
/*var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
var charEscape = function(_html) {
    var newHTML = _html;

	    newHTML = _html.replace(/</g, "&lt;");
	    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
console.log(charEscape(html));*/
/*var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};
console.log(weirdObject.property);//true
console.log(weirdObject ["property"]);//true

console.log(weirdObject.property1);//true
console.log(weirdObject ["property1"]);//true

console.log(weirdObject ["property-2"]);//true
console.log(weirdObject.property-2);//NAN

console.log(weirdObject.property 3);//false
console.log(weirdObject ["property 3"]);//true

console.log(weirdObject.property$);//true
console.log(weirdObject ["property$"]);//true

console.log(weirdObject. property);//false
console.log(weirdObject [" property"]);//true

console.log(weirdObject.property());//false not a function
console.log(weirdObject ["property()"]);//true

console.log(weirdObject.property[];//false
console.log(weirdObject ["property[]"]);//true

console.log(weirdObject.8property());//false
console.log(weirdObject ["8property"]);//true
*/

/*function add(){
	var sum=0;
	for(var i=0,j=arguments.length; i<j;i++){
		sum += arguments[i];
	}
	return sum/arguments.length;
}
console.log(add(3,3,2,1));*/

//String to Array
/*var myString ="This is my favorite string";

var myArray=myString.split(" ");
console.log(myArray);*/

/*function locationizer(work_obj) {
    var locationArray=[];
    for(job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    for(school in education.schools){
    	var newLocation=education.schools[school].city;
    	locationArray.push(newLocation);
    }
    return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
$(document).click(function(loc){
	console.log(loc.pageX,loc.pageY);
});
*/
/*
var contact=HTMLcontactGeneric.replace("%contact%",bio.contacts);
var mobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var email=HTMLemail.replace("%data%",bio.contacts.email);
var twitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
var github=HTMLgithub.replace("%data%",bio.contacts.github);
var blog=HTMLblog.replace("%data%",bio.contacts.blog);
var location=HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").prepend(pic,contact,github,blog,mobile,welcomeMsg,email,twitter);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var skill=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(skill);
	skill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(skill);
	skill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(skill);
	skill=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(skill);};
*/