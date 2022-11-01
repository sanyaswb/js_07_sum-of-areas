function sumOfAreas(squareSide, rectSideA, rectSideB, circleRadius, ellipseMajorAxis, ellipseMinorAxis) {
	const areaSquare = squareSide ** 2;
	const areaRectangle = rectSideA * rectSideB;
	const areaCircle = Math.PI * (circleRadius ** 2);
	const areaAxis = Math.PI * ellipseMajorAxis * ellipseMinorAxis;
	const totalAreaOfFigures = areaSquare + areaRectangle + areaCircle + areaAxis;

	return totalAreaOfFigures;
}

module.exports = sumOfAreas;