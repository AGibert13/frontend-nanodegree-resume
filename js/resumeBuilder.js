class School {
    constructor(name, location, degree, majors, dates, link) {
        this.name = name;
        this.location = location;
        this.degree = degree;
        this.majors = majors;
        this.dates = dates;
        this.url = link;
    }

    displaySchool(id, open, close) {
        var schName = '<a href="#">' + this.name;
        var schDeg = '- ' + this.degree + '</a>';
        var schDates = '<div class="date-text">' + this.dates + '</div>';
        var schLoc = '<div class="location-text">' + this.location + '</div>';

        if (this.majors != "N/A") {
            var schMaj = '<em><br> Major: ' + this.majors + '</em>';
            $(id).append(open + schName + schDeg + schDates + schLoc + schMaj + close);
        } else {
            $(id).append(open + schName + schDeg + schDates + schLoc + close);
        }
    }
}

class Online {
    constructor(title, school, dates, link) {
        this.title = title;
        this.school = school;
        this.dates = dates;
        this.url = link;
    }

    displayOnline(id, open, close) {
        var oTitle = '<a href="' + this.url + '">' + this.title + ' - ' + this.school + '</a>';
        var oDates = '<div class="date-text">' + this.dates + '</div>';
        $(id).after(open + oTitle + oDates + close);

    }
}

class Job {
    constructor(employer, title, location, dates, description) {
        this.employer = employer;
        this.title = title;
        this.location = location;
        this.dates = dates;
        this.description = description;
    }

    displayJob(id, open, close) {
        var wEmp = '<a href="#">' + this.employer;
        var wTitle = '- ' + this.title + '</a>';
        var wDate = '<div class="date-text">' + this.dates + '</div>';
        var wLoc = '<div class="location-text">' + this.location + '</div>';
        var wDesc = '<p><br>' + this.description + '</p>';
        $(id).append(open + wEmp + wTitle + wDate + wLoc + wDesc + close);
    }
}

class Project {
    constructor(title, dates, description, images) {
        this.title = title;
        this.dates = dates;
        this.description = description;
        this.images = images;
    }

    displayProject(id, open, close) {
        var pTitle = '<a href="#">' + this.title + '</a>';
        var pDates = '<div class="date-text">' + this.dates + '</div>';
        var pDesc = '<p><br>' + this.description + '</p>';
        var pImg = '<img src="' + this.images + '">';

        $(id).append(open + pTitle + pDates + pDesc + pImg + close);
    }
}

var bio = {
    name: "Adrien Gibert",
    role: "Jr. Programming Intern",
    contacts: {
        mobile: "(706) 905-8292",
        email: "adriengibert13@gmail.com",
        github: "https://github.com/AGibert13",
        location: "Atlanta, GA"
    },
    welcomeMessage: `Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened,
	 	ambition inspired, and success achieved.
		— Helen Keller`,
    biopic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkRAAAAJGI1OTQ5MzNiLWM4YTUtNDMyNy1hNTYwLWM3Y2FiOTNhYjI2NQ.jpg",
    skills: {
        computer_languages: ["JavaScript ES6", "jQuery", "Python 2.7", "SQL", "Git and GitHub", "VBA", "HTML 5", "CSS"],
        software: ["Microsoft Office (Word, PowerPoint, Excel, Access)", "Sublime Text", "Notepad ++", "Dreamweaver", "GitBash", "Windows OS (7, 10)", "AirWatch Console",
            "Cherwell Service Manager", "GitBash", "Chrome Developer Tools", "GitHub", "Vagrant", "VirtualBox"
        ]

    },
    displayBio: function () {
        var x = 0;
        x = displayBefore(this, "#topContacts", this.name, '<h1 id ="name">', '</h1>', x);
        x = displayBefore(this, "#topContacts", this.role, '<span>', '</span><hr>', x);
        x = displayAfter(this, ('#topContacts, #footerContacts'), this.contacts, '<li class="flex-item"><span class="white-text">', '</span></li>', x);
        x = displayBefore(this, "#skills-h3", this.welcomeMessage, '<span class="welcome-message">', '</span>', x);
        x = displayBefore(this, "#skills-h3", this.biopic, '<img src="', '" class="biopic">', x);
        x = 0;
        x = displayAfter(this.skills, "#lang", this.skills.languages, '<span class="white-text">', ',</span>', x);
        x = displayAfter(this.skills, "#soft", this.skills.software, '<span class="white-text">', ',</span>', x);
    }
};
var education = {
    school: [ /*new School(name, location, degree, majors, dates, link)*/
        new School("Year Up Greater Atlanta", "730 Peachtree St. Suite 900, Atlanta GA 30308", "Year Up Technical Training Certificate", "QA/Programming", "March 2016 - January 2017"),
        new School("Northside High School", "2002 American Way, Columbus, GA 31909", "High School Diploma", "N/A", "August 2013 - May 2014")
    ],
    onlineCourses: [ /*new Online(title, school, dates, link)*/
        new Online("HTML & CSS", "Codecademy", "March 2016 - April 2016", "https://www.codecademy.com/learn/web"),
        new Online("Make a Website", "Codecademy", "June 2016 - July 2016", "https://www.codecademy.com/learn/web")
    ],
    displayEdu: function () {
        for (var x in this.school) {
            this.school[x].displaySchool("#education", '<div class="education-entry">', '</div><br>');
        }
        $('#education').append('<h3 id="oH">Online Classes</h3>');
        for (var y in this.onlineCourses) {
            this.onlineCourses[y].displayOnline('#oH', '<div class="education-entry">', '</div><br>');
        }
    }
};

var work = {
    jobs: [ /*new Job(employer, title, location, dates, description)*/
        new Job("Carter's | OshKosh B'gosh", "Jr. Programming Intern", "Atlanta, GA", "August 2016 - January 2017", `Create documentation of Carter’s applications for 
						store iPod devices to enhance customer experience, push applications to over 600 stores using the AirWatch Console, troubleshoot 
						store iPod device tickets dealing with the applications and connectivity issues, actively developed VBA program in Excel resulting 
						in improved daily operation`),
        new Job("FedEx Ground", "Parcel Assistant", "Atlanta, GA", "July 2015 - February 2016", `Quickly and properly place packages in the assigned 
						area, maintain smalls under 25lbs and perform other duties as necessary`),
        new Job("Journeys", "Part-Time Sales Associate", "Columbus, GA", "October 2014 - February 2015", `Arranged and organized the sales; maintained 
						stockroom, process cash, check and credit card transactions; shared product knowledge to enhance customer experience and promote sales; 
						maintained knowledge of current promotions, policies regarding payment and exchanges, and security practice`)
    ],
    displayWork: function () {
        for (var x in this.jobs) {
            this.jobs[x].displayJob('#workExperience', '<div class="work-entry">', '</div>');
        }
    }
}

var projects = {
    projects: [ /*new Project(title, dates, description, images),*/
        new Project("Music Playlist", "December 2016 - Present", "You are going to create and manage a music playlist. You will read an existing playlist from a file and you will allow users to submit new songs to the playlist. Users will also be able to vote existing songs up and down on the playlist. Users cannot delete songs from the list. You will sort the playlist based on user votes. You will also routinely save the playlist to a file so that changes are not lost. \nYou will also link to the Spotify api to get information about the songs in the playlist. Info about each song includes artist, album, year first recorded. From spotify you will get the 30 second preview_url  for the track and you will play the 30 second preview upon the users request.", "images/MusicPlaylist2.jpg"),
        new Project("Favorite Movies", "September 2016", " Usign python, create a website to display the poster of your favorite movies. When you click on the poster, a trailer for the movie will pop up (along with the title, rating, and summary). ", "images/movie.jpg"),
        new Project("Sorts", "August 2016 - September 2016", "Using a bubble sort and the Lomuto and Hoare quick sort, create an algorithm to calculate the perfomance of each sort to identify the fastest search. ", "images/sort.jpg"),
        new Project("Linked List", "October 2016", "In this assignment you will create a node object and a linked list object. The node object contains two attributes: data and next (pointer to the next node). The node also contains a print() function which will print its data attribute to the page. You will also want a build function that takes a data element and creates a new node with that data element. The linked list object has three attributes: head, tail and length. The head is the first node in the list. The tail is the last node in the list. Note if you only have one element, then your head and tail point to the same node. If the list is empty, both head and tail are null. The length of the node is 0 if it is empty, otherwise it is the count of the number of nodes in the list.", "images/list.jpg")
    ],
    displayProj: function () {
        for (var x in this.projects) {
            this.projects[x].displayProject('#projects', '<div class="project-entry">', '</div>')
        }
    }
}

function displayBefore(section, id, info, openTag, closingTag, arrInx) {
    var tempArr = Object.getOwnPropertyNames(section)
    var tempVarInfo = ""
    if (typeof (section[tempArr[arrInx]]) != "string") {
        var objArr = Object.getOwnPropertyNames(section[tempArr[arrInx]])
        for (var y in objArr) {
            if (objArr[y] != "length") {
                tempVarInfo += openTag + objArr[y] + ": " + section[tempArr[arrInx]][objArr[y]] + closingTag;
            }
        }
    } else {
        tempVarInfo = openTag + info + closingTag

    }

    $(id).before(tempVarInfo)
    arrInx++
    return arrInx
}

function displayAfter(section, id, info, openTag, closingTag, arrInx) {
    var tempArr = Object.getOwnPropertyNames(section)
    var tempVarInfo = ""
    if (typeof (section[tempArr[arrInx]]) != "string") {
        var objArr = Object.getOwnPropertyNames(section[tempArr[arrInx]])
        for (var y in objArr) {
            if (objArr[y] != "length") {
                if (id === "#lang" || id === "#soft") {
                    tempVarInfo += openTag + section[tempArr[arrInx]][objArr[y]] + closingTag
                } else {
                    tempVarInfo += openTag + '<span class="orange-text">' + objArr[y] + ": " + '</span>' + section[tempArr[arrInx]][objArr[y]] + closingTag;
                }
            }
        }
        if (id === "#lang" || id === "#soft") {
            tempVarInfo = tempVarInfo.substring(0, tempVarInfo.length - 8) + tempVarInfo.substring(tempVarInfo.length - 7)
        }
    } else {
        tempVarInfo = openTag + info + closingTag
    }

    $(id).append(tempVarInfo)
    arrInx++
    return arrInx
}
bio.displayBio();
education.displayEdu();
work.displayWork();
projects.displayProj();
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.school.forEach(function (school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function (job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function () {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function (place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);