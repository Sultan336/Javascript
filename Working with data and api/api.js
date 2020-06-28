var x = 0;

var space_data;

function setup() {
    createCanvas(400, 400);
    loadJSON("http://api.open-notify.org/astros.json", got_data, 'jsonp');
}

function got_data(data) {
    console.log(data);
    console.log(data.people[1].name);

    space_data = data;
}

function draw() {
    background(0);
    if (space_data) {
        randomSeed(4);
        for (var i = 0; i < space_data.number; i++) {
            fill(random(255), random(255), random(255));
            noStroke();
            ellipse(random(width), random(height), 32, 32);

        }

        stroke(255);
        line(x, 0, x, height);
        x = x + 1;
        if (x > width) {
            x = 0;
        }
    }

}