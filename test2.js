var parentNode = new paper.Group();
var childNode = new paper.Group();
childNode.addTo(parentNode);

childNode.position = new paper.Point(3, 4);

// child node position: 3, 4

parentNode.translate(new paper.Point(2, 5));

// child node position: add your answer here

parentNode.rotate(90);  // rotation is clockwise, in degrees

// child node position: add your answer here

parentNode.scale(10);

// child node position: add your answer here

parentNode.translate(new paper.Point(-2, -5));

// child node position: add your answer here