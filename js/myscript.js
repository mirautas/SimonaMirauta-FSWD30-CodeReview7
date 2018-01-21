var Persons = [
        { "name":"John", "surname": "Doe", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran", "Emma Watson"], "age": 25, "myPhoto": "img/image1.jpg", "likes": 0, "gender": "male", "inRelation": true},
        { "name":"Jane", "surname": "Doe", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran", "Emma Watson"], "age": 25, "myPhoto": "img/image2.jpg", "likes": 0, "gender": "female", "inRelation": true},
        { "name":"Maxima", "surname": "Musterman", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran", "Emma Watson"], "age": 25, "myPhoto": "img/image3.jpg", "likes": 0, "gender": "female", "inRelation": true},
        { "name":"Max", "surname": "Musterman", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran", "Emma Watson"], "age": 25, "myPhoto": "img/image4.jpg", "likes": 0, "gender": "male", "inRelation": true},
        { "name":"Kevin", "surname": "Wood", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran", "Emma Watson"], "age": 20, "myPhoto": "img/KevinWood.jpg", "likes": 0, "gender": "male", "inRelation": false},
        { "name":"Mia", "surname": "Eggbauer", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran", "Emma Watson"], "age": 23, "myPhoto": "img/MiaEggbauer.jpg", "likes": 0, "gender": "female", "inRelation": false},
        { "name":"Andrea", "surname": "Richter", "favoritePerformers": ["Frank Sinatra", "Ed Sheeran", "Il Divo"], "age": 42, "myPhoto": "img/AndreaRichter.jpg", "likes": 0, "gender": "female", "inRelation": true},
        { "name":"Walter", "surname": "Klimt", "favoritePerformers": ["Frank Sinatra", "Ed Sheeran", "Celine Dion"], "age": 49, "myPhoto": "img/WalterKlimt.jpg", "likes": 0, "gender": "male", "inRelation": true},
        { "name":"Johanna", "surname": "Engelbert", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Nena"], "age": 28, "myPhoto": "img/JohannaEngelbert.jpg", "likes": 0, "gender": "female", "inRelation": false},
        { "name":"Manuel", "surname": "Neumayer", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran", "Emma Watson"], "age": 27, "myPhoto": "img/ManuelNeumayer.jpg", "likes": 0, "gender": "male", "inRelation": true},
        { "name":"Ali", "surname": "Fatih", "favoritePerformers": ["Justin Timberlake", "Ed Sheeran",], "age": 28, "myPhoto": "img/AliFatih.jpg", "likes": 0, "gender": "male", "inRelation": false},
        { "name":"Li", "surname": "Ming", "favoritePerformers": ["Ed Sheeran", "Emma Watson"], "age": 37, "myPhoto": "img/LiMing.jpg", "likes": 0, "gender": "female", "inRelation": false},
        { "name":"Thomas", "surname": "Zettel", "favoritePerformers": ["Elton John", "Ed Sheeran", "Michael Buble"], "age": 35, "myPhoto": "img/ThomasZettel.jpg", "likes": 0, "gender": "male", "inRelation": true},
        { "name":"Aylin", "surname": "Zafar", "favoritePerformers": ["Ed Sheeran", "Emma Watson"], "age": 34, "myPhoto": "img/AylinZafar.jpg", "likes": 0, "gender": "female", "inRelation": true},
        { "name":"Michael", "surname": "Bauer", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 26, "myPhoto": "img/MichaelBauer.jpg", "likes": 0, "gender": "male", "inRelation": false},
        { "name":"Katharina", "surname": "White", "favoritePerformers": ["Marc Forster", "Michael Buble", "Rooftop"], "age": 31, "myPhoto": "img/KatharinaWhite.jpg", "likes": 0, "gender": "female", "inRelation": false},
        { "name":"Josephine", "surname": "Parker", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 29, "myPhoto": "img/JosephineParker.jpg", "likes": 0, "gender": "female", "inRelation": true},
        { "name":"Daniel", "surname": "Egger", "favoritePerformers": ["Marc Forster", "Nena", "Rooftop"], "age": 44, "myPhoto": "img/DanielEgger.jpg", "likes": 0, "gender": "male", "inRelation": true},
        { "name":"John", "surname": "Williams", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 40, "myPhoto": "img/JohnWilliams.jpg", "likes": 0, "gender": "male", "inRelation": false},
        { "name":"Celina", "surname": "Hunt", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 23, "myPhoto": "img/CelinaHunt.jpg", "likes": 0, "gender": "female", "inRelation": true},
        { "name":"Vanessa", "surname": "Braun", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 30, "myPhoto": "img/VanessaBraun.jpg", "likes": 0, "gender": "female", "inRelation": false},
        { "name":"Angelika", "surname": "Schmidt", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 36, "myPhoto": "img/AngelikaSchmidt.jpg", "likes": 0, "gender": "female", "inRelation": true},
        { "name":"Vigan", "surname": "Hajdari", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 34, "myPhoto": "img/ViganHajdari.jpg", "likes": 0, "gender": "male", "inRelation": false},
        { "name":"David", "surname": "Green", "favoritePerformers": ["Marc Forster", "Ed Sheeran", "Rooftop"], "age": 24, "myPhoto": "img/DavidGreen.jpg", "likes": 0, "gender": "male", "inRelation": false},
   
    ];



/*

var Persons = [
            {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image1.jpg",	
			likes: 0,
			gender: 'male',
			inRelation: false
			},
			{
			name: 'Jane',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image2.jpg",	
			likes: 0,
			gender: 'female',
			inRelation: false			
			},
			{
			name: 'Maxina',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image3.jpg",	
			likes: 0,
			gender: 'female',
			inRelation: true			
			},
			{
			name: 'Max',
			surname: 'Musterman',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/image4.jpg",	
			likes: 0,
			gender: 'male',
			inRelation: false			
			}
];	

*/



//we get the page name from the URL
var href = document.location.href; // file:///D:/Simona%20-%20Web%20Courses/CR7/index.html
var pageName = document.location.href.substr(href.lastIndexOf('/') + 1);

for (var i=0; i<Persons.length; i++) {
	//we show the current person if we are on the index.html page (where we show all), or if the persons gender is of interest for the current page
	if (pageName == "index.html" || (pageName == "male.html" && Persons[i].gender == "male") || (pageName == "female.html" && Persons[i].gender == "female")){
		if ( $("#profiles > .row").length == 0 || $("#profiles > .row:last").children().length == 2){ //if there are no rows yet OR the last row already has 2 columns,then create new row
			var row = $('<div class="row"></div>');
			$("#profiles").append(row);
		}

		var column = $('<div class="col-xs-12 col-md-6"></div>');
		var media = $('<div class="media"></div>');
		column.append(media);
		var mediaLeft = $('<div class="media-left media-top"><img src="' + Persons[i].myPhoto + '" class="media-object" style="height: 225px; width: 180px;"></div>');
		media.append(mediaLeft);
		var mediaBody = $('<div class="media-body"></div>');
		media.append(mediaBody);
		var firstName = $('<h2><small>Name:  </small>'+ Persons[i].name +'</h2>');
		mediaBody.append(firstName);
		var surname = $('<h2><small>Surname:  </small>'+ Persons[i].surname +'</h2>');
		mediaBody.append(surname);
		var age = $('<h2><small>Age:  </small>'+ Persons[i].age +'</h2>');
		mediaBody.append(age);
		var text;
		if (Persons[i].inRelation == true){
			text = "Currently in a relationship";
		} else {
			text = "Currently <u>not</u> in a relationship";
		}
		var inRelation = $('<h3>' + text + '</h3><br/>');
		mediaBody.append(inRelation);
		var list = $('<ul class="list-inline pull-right"></ul>');
		mediaBody.append(list);
		var button = $('<li><button type="button" onclick="incrementLikes(' + i + ', Persons[' + i + '])">Like</button></li>');
		list.append(button);
		var nrLikes = $('<li id="person' + i +'_likes" class="nrLikes">'+ Persons[i].likes +'</li>');
		list.append(nrLikes);
		var img = $('<li><img src="img/like.png"></li>');
		list.append(img);
		$('#profiles > .row:last').append(column);
	}
}


function incrementLikes(index, person){
	person.likes++;
	document.getElementById("person" + index + "_likes").innerHTML = person.likes;
}