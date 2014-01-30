$( document ).ready( function() {

  screenW = $( document ).width();
  screenH = $( document ).height();

  marginX = screenW / 8;
  marginY = screenH / 10;

  ballSize = screenW / 4;

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
