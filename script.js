function openNav(){
	document.getElementById("sideNav").style.width = "250px";
console.log("click works");

}
function closeNav(){
	document.getElementById("sideNav").style.width = "0";
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i =0; i<dropdown.length; i++){
	dropdown[i].addEventListener("click", function(){
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if(dropdownContent.style.display === "block")
		{
			dropdownContent.style.display = "none";
		} else{
			dropdownContent.style.display = "block"
		}
	});
}
// $(window).on("load", function(){
// 	$(".loader-wrapper").fadeOut("slow");
// })