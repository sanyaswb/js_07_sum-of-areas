function sumOfAreas(squareSide, rectSideA, rectSideB, circleRadius, ellipseMajorAxis, ellipseMinorAxis) {
	return squareSide ** 2 + rectSideA * rectSideB + Math.PI * (circleRadius ** 2) + Math.PI * ellipseMajorAxis * ellipseMinorAxis;
}

module.exports = sumOfAreas;