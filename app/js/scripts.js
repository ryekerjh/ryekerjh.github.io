var sidebarLinks = document.querySelectorAll('.sidebar-link'),
i = 0,
howManyTimes = sidebarLinks.length;

function f() {
	sidebarLinks[i].style.animation = "drop-in .5s ease-in";
	sidebarLinks[i].style.visibility = 'visible';
    i++;
    if( i < howManyTimes ){
        setTimeout( f, 450 );
    }
}
f();

setTimeout(function() {
	var typeText = document.querySelector('.typewriter-text');
	typeText.style.width = "100%";
}, 6000);