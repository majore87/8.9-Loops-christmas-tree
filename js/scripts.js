var userNumber = prompt("Prompt height of the Christmas tree: ");

function drawATree (heightOfTree) {
	for (var i = 0; i <= heightOfTree; i++) {
		var star = ' ';

		for (var k = 0; k < i; k++) {
			star += '*';
			var space = ' ';
		}
	console.log(star);
	}
}

drawATree(userNumber);