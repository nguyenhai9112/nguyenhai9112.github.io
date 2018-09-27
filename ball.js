let Ball = function (x, y, size, color, xV, yV) {
    let ctx = canvas.getContext("2d")
    this.x = x || 10;
    this.y = y || canvas.height / 2;
    this.size = size || 10;
    this.xV = xV || Math.floor(Math.random() * 10);
    this.yV = yV ||  Math.floor(Math.random() * 10 +5);
    this.color = color || "black"
    let self = this
    this.draw = function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
    }

    this.roll = function () {
        this.x += this.xV
        this.y += this.yV
        //chạm thành tường
        if (this.x >= canvas.width - this.size || this.x <= this.size) {
            if (this.x > canvas.width - this.size) {
                this.x = canvas.width - this.size
            }
            if (this.x<0){
                this.x = this.size
            }
            this.xV = -this.xV
        }
        if (this.y <= this.size) {
            if (this.y<0){
                this.y = this.size
            }
            this.yV = -this.yV
        }
        //die
        if (this.y >= canvas.height - this.size) {
            this.y = canvas.height - this.size
            this.yV = 0
            this.xV = 0
            self.drawLost()
        }
    }

    this.moment = function () {
        self.draw()
        self.roll()
    }

    this.collisionBallBroad = function (object) {
        for (let ob of object) {
            if (this != ob && collisioned(this, ob)) {
                self.xV = -Math.floor(Math.random() * 20 - 5);
                self.yV = -self.yV
            }
        }

        function collisioned(cicler, rect) {
            let left = rect.x - (rect.width/15)
            let right = rect.x + (rect.width)
            let top = rect.y - (rect.height/4)
            let bottom = rect.y +(rect.height/4)
            let px = cicler.x
            let py = cicler.y
            if (px < left){
                px = left
            }else if(px > right){
                px = right
            }
            if (py < top){
                py = top
            }else if(py > bottom){
                py = bottom
            }

            let dx = cicler.x - px
            let dy = cicler.y - py
            return (dx*dx + dy*dy) <= cicler.size * cicler.size
        }
        
        this.drawLost = function () {
            ctx.font = "80px Verdana";
            ctx.fillStyle = "blue"
            ctx.fillText("YOU LOST", canvas.width/3, canvas.height/2)
            ctx.shadowOffX = 20
            ctx.shadowOffY = 20
            ctx.shadowBlur = 20
            ctx.shadowColor = "red"
        }
    }
}

object.push(new Ball(500, 100, 20, "black"))
