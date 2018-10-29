function topNav() {
	var x = document.getElementById("navbar");
	var mains = document.getElementsByTagName("main");
	
	if (nav.style.display == '') {
		nav.style.display = 'block';
		mains[0].style.display = 'none';
	} else {
		nav.style.display = '';
		mains[0].style.display = 'block';
	}
}

function hideSubs() {
  document.getElementById('tutorials').style.display='none';
  document.getElementById('flashcards').style.display='none';
}

function showMenu(e) {
  hideSubs();
  document.getElementById(e).style.display='inline-block';
}


var code = "";
code += '  <div class="navbar" id="navbar">';
code += '	<ul class="nav">';
code += '	  <li><a href="index.html" onmouseover=\"hideSubs()\">Home</a></li>';
code += '	  <li onmouseover=\"showMenu(\'workouts\')\">';
code += '	  <a href="workouts.html">Workouts<img src="images/expand_arrow_white.png" class="drop"></a>';
code += '	  <div class="submenu" id="workouts" onmouseout="hideMenu(\'workouts\')">';
code += '		<ul class="subnav">';
code += '		  <a href="strength.html"><li>&emsp; Strength</li></a>';
code += '		  <a href="toning.html"><li>&emsp; Toning</li></a>';
code += '		</ul>';
code += '	  </div>';
code += '	  </li>';
code += '	</div>';