class Track{
    constructor(colour,x,y){
        this.colour = color(colour);
        this.x = x;
        this.y = y;
        this.alpha = 255;
        this.maxLifetime = 80;
        this.lifetime = this.maxLifetime; //in frames
    }
    set settrackAlpha(newalpha){
        this.alpha = newalpha;
    }
    updateAndGetAlpha(colour,alpha){
        colour.setAlpha(alpha);
        return colour;
    }
}
