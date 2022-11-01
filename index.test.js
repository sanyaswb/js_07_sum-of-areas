const sumOfAreas = require('./index');

test('Функция должна вернуть число', () => {
	const type = typeof sumOfAreas(20, 30, 40, 10, 15, 10);

	expect(type).toBe('number');
});

test('Тест. squareSize: 20, rectSideA: 30, rectSideB: 40, circleRadius: 10, ellipseMajorAxis: 15, ellipseMinorAxis: 10', () => {
	const res = sumOfAreas(20, 30, 40, 10, 15, 10);

	expect(res).toBeCloseTo(2385.398163397448, 0.05);
});

test('Тест. squareSize: 52.2, rectSideA: 523, rectSideB: 60, circleRadius: 6.12, ellipseMajorAxis: 16.17, ellipseMinorAxis: 4', () => {
	const res = sumOfAreas(52.2, 523, 60, 6.12, 16.17, 4);

	expect(res).toBeCloseTo(34425.704680718794, 0.05);
});

test('Тест. squareSize: 202, rectSideA: 32, rectSideB: 5, circleRadius: 101, ellipseMajorAxis: 155, ellipseMinorAxis: 67', () => {
	const res = sumOfAreas(202, 32, 5, 101, 155, 67);

	expect(res).toBeCloseTo(105636.82636679948, 0.05);
});

test('Тест. squareSize: 0.2, rectSideA: 0.6, rectSideB: 0.72, circleRadius: 0.12, ellipseMajorAxis: 0.5, ellipseMinorAxis: 0.04', () => {
	const res = sumOfAreas(0.2, 0.6, 0.72, 0.12, 0.5, 0.04);

	expect(res).toBeCloseTo(0.5800707872834888, 0.5);
});