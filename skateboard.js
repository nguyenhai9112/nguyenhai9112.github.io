let Board = function (x, y, width, height, color) {
    let ctx = canvas.getContext("2d")
    this.x = x
    this.y = y
    this.xV = 0
    this.yV = 0
    this.width = width
    this.height = height
    this.color = color
    let seft = this
    this.draw = function () {
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.color
        ctx.fill()
    }


    this.move = function () {
        window.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 37:
                    seft.x -= 30
                    break
                case 39:
                    seft.x += 30
                    break
            }
        });
    };
    
    this.moment = function () {
        seft.draw()
        seft.roll()
    }

    this.roll = function () {
        if(this.x <= 0){
            this.x = 0
        }
        if(this.x >= canvas.width - this.width){
            this.x = canvas.width - this.width
        }
    }
    
    this.collisionBallBroad = function (object) {

    }
}
let skate = new Board(550, 500, 200, 30, "black")
skate.move()
object.push(skate)
