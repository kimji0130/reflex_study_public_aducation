import CanvasOption from "./js/CanvasOption"


class Canvas extends CanvasOption{
    constructor(){
    super()
    }
    init() {
        //미리 사이즈를 초기화 시켜주기 위해서 변수를 만들어준다
        this.canvasWidth = innerWidth
        this.canvasHeight = innerHeight
        // canvasWidth = 400
        // canvasHeight = 400


        this.canvas.width  = this.canvasWidth * dpr
        this.canvas.height = this.canvasHeight * dpr
        this.ctx.scale(this.dpr, this.dpr)

        this.canvas.style.width = this.canvasWidth + 'px'
        this.canvas.style.height = this.canvasHeight + 'px'

    }
}




render() {
    let now, delta
    let then = Date.now()

        const frame = () => {

            requestAnimationFrame(frame)
            now = Date.now()
            delta = now - then
            if (delta < this.interval) return
        
            ctx.fillRect(100, 100, 200, 200)
        
            them = now - (delta % this.interval)
    }
    requestAnimationFrame(frame)
}


window.addEventListener('load', () =>{
    init()
    render()
})
