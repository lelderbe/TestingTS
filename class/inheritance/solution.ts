class Point {
	private x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	getX() {
		return this.x;
	}
}

class D3Point extends Point {
	z: number;

	constructor(x: number, y: number, z: number) {
		super(x, y);
		this.z = z;
	}
}

const p1 = new Point(1, 2);
console.log(p1, p1.getX());

const p2 = new D3Point(4, 5, 9);
console.log(p2, p2.getX());
