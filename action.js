let object = []
let canvas = document.getElementById("myCanvas")
canvas.height = window.innerHeight - 50
canvas.width = window.innerWidth - 50

animate(object)
function animate(object) {
    setInterval(function () {
        let ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        render(object)
    }, 20)
}

function render(object) {
    for (let ob of object) {
        ob.moment()
        ob.collisionBallBroad(object)
    }
}