var colorList = new Array();
var playerColors = new Array();
var gamePaused = false;
var waiting = true;
var score = 0;
var colorIndex = 0;
var gameStyle = 1;


$( document ).ready( function()
{

  startGame();


  $( '.ball' ).on( 'click', function(){
    var ball = $( this );
    $( this ).fadeOut( 200 );
    setTimeout( function(){
      ball.fadeIn( 200 );
    }, 200 );
  });

});



function startGame()
{
  //functions to flash balls
  setTimeout( function(){
    $( '#seven' ).fadeIn( 200 );
  }, 200 );

  setTimeout( function(){
    $( '#six' ).fadeIn( 200 );
  }, 400 );

  setTimeout( function(){
    $( '#three' ).fadeIn( 200 );
  }, 600 );

  setTimeout( function(){
    $( '#one' ).fadeIn( 200 );
  }, 800 );

  setTimeout( function(){
    $( '#two' ).fadeIn( 200 );
  }, 1000 );

  setTimeout( function(){
    $( '#five' ).fadeIn( 200 );
  }, 1200 );

  setTimeout( function(){
    $( '#four' ).fadeIn( 200 );
  }, 1400 );

  //function to count start time
  setTimeout( function(){
    $( '#four' ).text( '3' );
  }, 1500 );

  setTimeout( function(){
    $( '#four' ).text( '2' );
  }, 2500 );

  setTimeout( function(){
    $( '#four' ).text( '1' );
  }, 3500 );

  setTimeout( function(){
    $( '#four' ).text( '' );
    addColor();
  }, 4500 );

}

function changeWaiting( status )
{
//    if (status && ! gamePaused) {
//        [self highlightWaiting];
//        highlightTimer = [NSTimer scheduledTimerWithTimeInterval:1.0
//                                                          target:self
//                                                        selector:@selector(highlightWaiting)
//                                                        userInfo:nil
//                                                         repeats:YES];
//
//    } else {
//        [highlightTimer invalidate];
//    }
    waiting = status;
}



function addColor()
{
  colorList.push( Math.floor((Math.random()*7)+1) );
  highligh();
}



function highligh()
{
  if (! gamePaused ) {
    if ( colorIndex < colorList.length ){
      //[self playSound:[colorList objectAtIndex:colorIndex]];
      c = colorList[colorIndex];
      changeColor( c );

      if ( gameStyle == 2) {
        setTimeout( function(){
          backColor( c );
        }, 200 );
        setTimeout( function(){
          highligh();
        }, 300 );
      } else {
        setTimeout( function(){
          backColor( c );
        }, 500 );
        setTimeout( function(){
          highligh();
        }, 700 );
      }
      colorIndex++;
    } else {
      colorIndex = 0;
      changeWaiting( false );
    }
  } else {
     setTimeout( function(){
      highligh();
    }, 400 );
  }
}



function backColor ( colorId )
{
  if ( colorId == 1 )
  {
    $( '#one' ).fadeIn( 100 );
  }
  if ( colorId == 2 )
  {
    $( '#two' ).fadeIn( 100 );
  }
  if ( colorId == 3 )
  {
    $( '#three' ).fadeIn( 100 );
  }
  if ( colorId == 4 )
  {
    $( '#four' ).fadeIn( 100 );
  }
  if ( colorId == 5 )
  {
    $( '#five' ).fadeIn( 100 );
  }
  if ( colorId == 6 )
  {
    $( '#six' ).fadeIn( 100 );
  }
  if ( colorId == 7 )
  {
    $( '#seven' ).fadeIn( 100 );
  }
}

function changeColor( colorId )
{
  if ( colorId == 1 )
  {
    $( '#one' ).fadeOut( 100 );
  }
  if ( colorId == 2 )
  {
    $( '#two' ).fadeOut( 100 );
  }
  if ( colorId == 3 )
  {
    $( '#three' ).fadeOut( 100 );
  }
  if ( colorId == 4 )
  {
    $( '#four' ).fadeOut( 100 );
  }
  if ( colorId == 5 )
  {
    $( '#five' ).fadeOut( 100 );
  }
  if ( colorId == 6 )
  {
    $( '#six' ).fadeOut( 100 );
  }
  if ( colorId == 7 )
  {
    $( '#seven' ).fadeOut( 100 );
  }
}
