// Your code goes here:


let handleImageClick = function(){
  let newSource = jQuery(this)
  let scrValue = newSource.attr("src")
  jQuery("#main-image").attr("src", scrValue)
}


jQuery("img").on("click", handleImageClick)
