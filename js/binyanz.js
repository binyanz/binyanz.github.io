function show(block) {
	var home = document.getElementById("home");
	var education = document.getElementById("education");
	var publication = document.getElementById("publication");
	var work = document.getElementById("work");
	var life = document.getElementById("life");
	home.style.display = "none";
	education.style.display = "none";
	publication.style.display = "none";
	work.style.display = "none";
	life.style.display = "none";
	var selected = document.getElementById(block);
	if (selected != undefined) {
		selected.style.display = "block"
	}
	return true;
}