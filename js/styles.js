$( document ).ready( function() {

  screenW = $( document ).width();
  screenH = $( document ).height();

  marginX = screenW / 8;
  marginY = screenH / 10;

  ballSize = screenW / 4;


  $( '.button' ).css( {
    width: ballSize * 2,
    height: ballSize * 0.8,
    lineHeight: '' + ( ballSize * 0.8 ) + 'px',
    left: ( screenW / 2 ) - ballSize,
    top: ( screenH / 2 ) - ballSize
  } );



  $( '#pauseButton' ).css( {
    width: ballSize / 2,
    height: ballSize / 2,
    right: marginX / 2,
    top: marginY / 4,
    lineHeight: '' + ballSize / 1.75 + 'px'
  } );


  $( '#messageLabel' ).css( {
    marginTop: marginY * 2
  } );
  $( '#finishScore' ).css( {
    marginTop: marginY// / 2
  } );
  $( '#loseButton' ).css( {
    marginTop: marginY// / 2
  } );




  $( '.ball' ).css( {
    width: ballSize,
    height: ballSize,
    lineHeight: '' + ballSize + 'px'
  } );


  $( '#score' ).css( {
    width: screenW,
    height: screenH / 10,
    textAlign: 'center',
    lineHeight: '' + ballSize + 'px',
  } );





  $( '#one' ).css( {
    left: ( screenW / 2 ) - ( ballSize * 1.2 ),
    top: ( screenH / 2 ) - ( ballSize * 1.8 )
  } );


  $( '#two' ).css( {
    left: ( screenW / 2 ) + ( ballSize * 0.2 ),
    top: ( screenH / 2 ) - ( ballSize * 1.8 )
  } );


  $( '#three' ).css( {
    left: ( screenW / 2 ) - ( ballSize * 1.9 ),
    top: ( screenH / 2 ) - ( ballSize / 2 )
  } );


  $( '#four' ).css( {
    left: ( screenW / 2 ) - ( ballSize / 2 ),
    top: ( screenH / 2 ) - ( ballSize / 2 )
  } );



  $( '#five' ).css( {
    left: ( screenW / 2 ) + ( ballSize * 0.9 ),
    top: ( screenH / 2 ) - ( ballSize / 2 )
  } );


  $( '#six' ).css( {
    left: ( screenW / 2 ) - ( ballSize * 1.2 ),
    top: ( screenH / 2 ) + ( ballSize * 0.8 )
  } );


  $( '#seven' ).css( {
    left: ( screenW / 2 ) + ( ballSize * 0.2 ),
    top: ( screenH / 2 ) + ( ballSize * 0.8 )
  } );



});
