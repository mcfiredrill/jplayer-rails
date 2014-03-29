/*
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * SimplePlayer by: Ziemek Wolski @ziemekwolski
 *
 * Speacial thanks to original Authors of JPlayer and Circle player
 * Mark J Panaghiston @thepag
 *
 * CirclePlayer prototype developed by:
 * Mark Boas @maboa
 * Silvia Benvenuti @aulentina
 * Jussi Kalliokoski @quinirill
 *
 * Inspired by :
 * Neway @imneway http://imneway.net/ http://forrst.com/posts/Untitled-CPt
 * and
 * Liam McKay @liammckay http://dribbble.com/shots/50882-Purple-Play-Pause
 *
 * Standing on the shoulders of :
 * John Resig @jresig
 * Mark Panaghiston @thepag
 * Louis-Rémi Babé @Louis_Remi
*/

var initSimplePlayer = function(selector) {
  $(selector).each(function( index ) {
    var playerId = 'sm_jquery_jplayer_' + index;
    var palyerSelector = '#' + playerId;
    var playerDiv = '<div id="' + playerId + '" class="cp-jplayer"></div>';
    var playerSnippetClass = 'cp2_container_' + index;
    var playerSnippetSelector = '#' + playerSnippetClass;
    var playerSnippet = $([
      '<div class="cp-title">' + $(this).text() + '</div>',
      ' <div id="' + playerSnippetClass + '" class="cp-container">',
      '  <div class="cp-buffer-holder"> <!-- .cp-gt50 only needed when buffer is > than 50% -->',
      '    <div class="cp-buffer-1"></div>',
      '    <div class="cp-buffer-2"></div>',
      '  </div>',
      '  <div class="cp-progress-holder"> <!-- .cp-gt50 only needed when progress is > than 50% -->',
      '    <div class="cp-progress-1"></div>',
      '    <div class="cp-progress-2"></div>',
      '  </div>',
      '  <div class="cp-circle-control"></div>',
      '  <ul class="cp-controls">',
      '    <li><a href="#" class="cp-play" tabindex="1">play</a></li>',
          //Needs the inline style here, or jQuery.show() uses display:inline instead of display:block
      '    <li><a href="#" class="cp-pause" style="display:none;" tabindex="1">pause</a></li>', 
      '  </ul>',
      ' </div>',
      '</div>',
    ].join(""));
    var playerFiles = $(this).data();

    $('#simple-jplayer').append(playerDiv);
    $(this).replaceWith(playerSnippet);

    //Add the player
    var myCirclePlayer = new CirclePlayer(palyerSelector, playerFiles, { cssSelectorAncestor: playerSnippetSelector});

  });
};