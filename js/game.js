var colorList = new Array();
var playerColors = new Array();
var gamePaused = false;
var waiting = true;
var score = 0;
var colorIndex = 0;
var gameStyle = 2;
var blink;

$( document ).ready( function()
{
  startGame();

  $( '.ball' ).on( 'click', function(){
    if( ! waiting )
    {
      var ball = $( this );
      checkColors( ball );
      $( this ).fadeOut( 100 );
      setTimeout( function(){
        ball.fadeIn( 100 );
      }, 100 );
    }
  });

  $( '#nextButton' ).on( 'click', function(){
      $( '#nextScreen' ).fadeOut( 100 );
      setTimeout( function(){
        gamePaused = false;
        addColor();
      }, 200 );
  });

  $( '#loseButton' ).on( 'click', function(){
      $( '#loseScreen' ).fadeOut( 100 );
      $( '#score' ).text( 0 );
      setTimeout( function(){
        gamePaused = false;
        addColor();
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
    $( '#score' ).text( '0' );
    addColor();
  }, 4500 );

  changeWaiting( false );

}

function changeWaiting( status )
{
  if (status && ! gamePaused) {
    blink = setInterval( function(){
      $( '#waiting' ).fadeOut( 200 );
      setTimeout( function(){
        $( '#waiting' ).fadeIn( 200 );
      }, 200);
    }, 400 );
  } else {
    clearInterval( blink );
    setTimeout( function(){
      $( '#waiting' ).fadeOut();
    }, 200 );
  }
  waiting = status;
}



function addColor()
{
  colorList.push( Math.floor((Math.random()*7)+1) );
  highligh();
}

function checkColors( color )
{
  if (! waiting && ! gamePaused)
  {
    if ( colorList.length > playerColors.length )
    {
      //[self playSound:[NSNumber numberWithInt:(int)sender.tag]];
      playerColors.push( parseInt( $( color ).attr( 'data-id' ) ) );

      var pass = true;
      var i = 0;
      while ( i < playerColors.length )
      {
        if ( colorList[i] != playerColors[i] )
        {
          pass = false;
          loseGame();
        }
          i++;
      }
      if ( colorList.length == playerColors.length && JSON.stringify( colorList ) === JSON.stringify( playerColors ) && pass )
      {
        nextLevel();
      }
    }
  }
}

function loseGame()
{
  if ( ! waiting )
  {
    gamePaused = true;
    changeWaiting( true );

    colorList.length = 0;
    playerColors.length = 0;

    $( '#loseScreen' ).fadeIn();
  }
}



function nextLevel()
{
  if ( ! waiting ) {
    if ( gameStyle == 2) {
      directNext();
      changeWaiting( true );
    } else{
      gamePaused = true;
      changeWaiting( true );
      $( '#score' ).text( parseInt( $( '#score' ).text() ) + 1 );
      playerColors.length = 0;
      $( '#nextScreen' ).fadeIn();
    }
  }
}


function directNext()
{
  //[scoreDisplay setText:[NSString stringWithFormat:@"%i", score]];
  $( '#score' ).text( parseInt( $( '#score' ).text() ) + 1 );
  playerColors.length = 0;
  gamePaused = false;

  setTimeout( function(){
      $( '#blinkBG' ).fadeIn( 100 );
    }, 200 );

  setTimeout( function(){
      $( '#blinkBG' ).fadeOut( 100 );
    }, 200 );

  setTimeout( function(){
      addColor();
    }, 700 );


//  messageView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, screenW, screenH)];
//  [messageView setBackgroundColor:[UIColor whiteColor]];
//  [messageView setAlpha:0];
//  [self.view addSubview:messageView];
//
//  [UIView beginAnimations:nil context:nil];
//  [UIView setAnimationDuration:0.2];
//  [UIView setAnimationDelegate:self];
//  [UIView setAnimationDidStopSelector:@selector(closeFlash)];
//  [messageView setAlpha:1];
//  [UIView commitAnimations];
//  [self waiting:YES];
//  [self performSelector:@selector(addColor) withObject:nil afterDelay:0.8];

}

function highligh()
{
  if (! gamePaused )
  {
    if ( colorIndex < colorList.length )
    {
      //[self playSound:[colorList objectAtIndex:colorIndex]];
      c = colorList[colorIndex];
      changeColor( c );

      if ( gameStyle == 2)
      {
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
    } else
    {
      colorIndex = 0;
      changeWaiting( false );
    }
  } else
  {
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
