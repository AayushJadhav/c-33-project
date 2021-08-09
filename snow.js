class Snow {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(this.x, this.y, this.r);
        World.add(world, this.body);
    };

    display() {
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        push();
        stroke("#f2f2f2");
        fill("#ffffff");
        ellipse(0, 0, this.r, this.r);
        pop();
    };
}
