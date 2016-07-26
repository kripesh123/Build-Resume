var bio={
	"name" : "Kripesh Bista",
	"role" : "Web Developer",
	"contacts":[{
		"mobile":"9843485099",
		"email" : "kripeshbista3@gmail.com",
		"twitter" :"Kripesh Bista",
		"github" : "kripesh123",
		"blog" : "Kripesh Bista",
		"location" : "Lalitpur,Nepal",
	}],
	"picture_URL" :"images/fry.jpg",
	"welcome_message": "Hello Peeps. Welcome to JavaScript",
	"skills":["Java(JEE):Spring Framework","Hibernate","ASP.NET","Web Technology(JS)"]
};

var education={
	"schools":[
		{
			"name": "United School",
			"location": "Lalitpur,Satdobato",
			"degree": "High School",
			"major" :"Management",
			"date":"2001-2012",
			"url":"http://united.school"
		},
		{
			"name":"Ambrosia International College",
			"location":"Lalitpur,Pulchowk",
			"degree":"BscIT",
			"major" :"Information Technology",
			"date":"2012-2016",
			"url":"http://ambrosia.college"
		}
	],
	"onlineCourses" : [
		{
			"title":"JavaScript",
			"school":"JavaScript",
			"date":2015,
			"url":"https://www.js.org"
		}
	]
};

var work={
	"jobs":[
		{
			"employer":"VolcusSoft Pvt Ltd",
			"title":"Java Developer",
			"location":"Kausaltar, Bhaktapur",
			"date":"2015-2016",
			"description":"Java Developer"
		},
		{
			"employer":"Leapfrog Academy",
			"title":"Web Developer & Facilitator Assistant",
			"location":"Dilibazar, Kathmandu",
			"date":"2016-Present",
			"description":"Web Developer & Facilitator Assistant"
		}
	]
};

var projects={
	"projects":[
		{
			"title" :"CannaShop",
			"date":"2015",
			"description":"Selling Canna For Medical Purpose",
			"images":["images/fry.jpg"]
		},
		{
			"title":"School Management System",
			"date":"2016",
			"description":"Communicate hardware biometric device to software",
			"images":["images/fry.jpg"]
		},
		{
			"title":"Job portal",
			"date":"2016",
			"description":"Where company can post job and user can apply for it",
			"images":["images/fry.jpg"]
		}
	]
};

bio.display=function(){
	var name= HTMLheaderName.replace("%data%",bio.name);
	var role=HTMLheaderRole.replace("%data%",bio.role);
	var pic=HTMLbioPic.replace("%data%",bio.picture_URL);
	var welcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
	$("#header").prepend(name,role).append(pic,welcomeMsg);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){
		var skills=HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(skills);
	};
	for(contact in bio.contacts){
		var mobile=HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var email=HTMLemail.replace("%data%",bio.contacts[contact].email);
		var twitter=HTMLtwitter.replace("%data%",bio.contacts[contact].twitter);
		var github=HTMLgithub.replace("%data%",bio.contacts[contact].github);
		var blog=HTMLblog.replace("%data%",bio.contacts[contact].blog);
		var location=HTMLcontactGeneric.replace("%contact%","location").replace("%data%",bio.contacts[contact].location);

		$("#footerContacts").append(mobile,email,twitter,github,blog,location);
	};
};


education.display=function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);
		var name=HTMLschoolName.replace("%data%",education.schools[school].name);
		var degree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var major=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		var date=HTMLschoolDates.replace("%data%",education.schools[school].date);
		var location=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(name + degree,major,date,location);
	}
	for(course in education.onlineCourses){
		var title=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var school=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var date=HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
		var url=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(HTMLonlineClasses + title,school,date,url);
	}
};

work.display=function(){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var employer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var title=HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var employerTitle=employer +" "+ title;
			$(".work-entry:last").append(employerTitle);
			var dates=HTMLworkDates.replace("%data%",work.jobs[job].date);
			$(".work-entry:last").append(dates);
			var description=HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(description);
		};
};


projects.display=function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(title);
		var date =HTMLprojectDates.replace("%data%",projects.projects[project].date);
		$(".project-entry:last").append(date);
		var description =HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(description);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var image=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(image);
			}
		}
	}
}

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 
	return newName;
};

bio.display();
education.display();
work.display();
projects.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
