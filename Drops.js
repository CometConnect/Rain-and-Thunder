class DROP
{
    constructor( x , y , width ) 
    {
      var options = 
        {
          'isStatic' : false ,
          'friction' : 0.1
        }
      this.body = Bodies.circle( x , y , width , options );
      this.width = width;
      
      World.add( world , this.body );
    }
  
    display( color )
    {
        var pos = this.body.position;
        push();
        translate( pos.x , pos.y );
        fill( color );
        circle( 0 , 0 , this.width , this.height );
        pop();
        //if( pos.y > DISHEIGHT )
        //{
        //  Matter.Body.setPosition( this.body , { x : random( 1 , DISWIDTH ) , y : 1  } )
        //}
    }
}