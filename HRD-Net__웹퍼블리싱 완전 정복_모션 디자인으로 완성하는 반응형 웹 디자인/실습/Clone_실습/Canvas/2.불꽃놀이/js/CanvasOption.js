 export default class CanvasOption{
    constructor(){
        this.canvas = document.querySelector('canvas')
        this.ctx = canvas.getContext('2d')
        this.dpr = window.devicePixelRatio //1,2
        this.fps = 60
        this.interval = 1000 / fps   
        this.canvasWidth = innerWidth
        this.canvasHeight = innerHeight
    }
}