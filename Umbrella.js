class UMBRELLA
{
    constructor( x , y , width , height , r , f , fA , d , a , s ) 
    {
      var options = 
        {
          'restitution': r ,
          'friction': f ,
          'frictionAir': fA ,
          'density': d ,
          'angle': a ,
          'isStatic': s ,
      }
      this.body = Bodies.rectangle( x , y , width , height , options );
      this.width = width;
      this.height = height;
      
      World.add( world , this.body );
    }
  
    display( color )
    {
      var pos = this.body.position;
      push();
      translate( pos.x , pos.y );
      rectMode( CENTER );
      fill( color );
      image( ManWalk , 0 , 0 , this.width , this.height );
      pop();
    }
}