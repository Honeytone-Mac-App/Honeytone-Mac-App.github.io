window.onload = function() {
	document.querySelectorAll(".item").forEach(function(link) {
	  link.addEventListener("click", function(event) {
	    
	    // Remove "active" class from all links
	    document.querySelectorAll(".item").forEach(function(link) {
	      link.classList.remove("active-item");
	    });

	    // Add "active" class to the clicked link
	    this.classList.add("active-item");
	  });
	});
}
