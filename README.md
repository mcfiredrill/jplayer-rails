# jplayer-rails

jplayer for rails asset pipeline

![CirclePlayer](https://github.com/maboa/circleplayer/raw/master/screencaps/circleplayer.png)

http://www.jplayer.org/

https://github.com/happyworm/jPlayer

## Installation

Add this line to your application's Gemfile:

    gem 'jplayer-rails'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jplayer-rails

## Usage

There are two basic options to setup the player. 
# You can just include the jplayer into your project and do the reset in your project. 
# You can use the built-in skin and player to get up and running quickly.

### Full Control (Option 1)

- Add to your application.js
- This just provides you with jplayer itself.

```
//= require 'jquery.jplayer'
```

### Simple (Option 2)

To Add circle player by default:

- Add to your application.js

```
//= require 'jquery.transform'
//= require 'jquery.grab'
//= require 'jquery.jplayer'
//= require 'mod.csstransforms.min'
//= require 'circle.player'
//= require 'simple.players'
```

- Add to your application.css

```
@import "circle.player"
```

- In your layouts you will need

```
<!DOCTYPE html>
<html lang="en">
  <head>

    <script type="text/javascript">
    $(document).ready(function(){
       new initSimplePlayer('.add-jplayer');
    });
    </script>
  </head>
  <body>
    <!-- Needed to hold the players -->
    <div id="simple-jplayer"></div>
    <div id="content"> 

      <%= yield %>

    </div>
  </body>
</html>

```

- Html to add a player, in any view

```
  Player 1
  <div class="add-jplayer" data-m4a="http://www.jplayer.org/audio/m4a/Miaow-04-Lismore.m4a" data-oga="http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"></div>
  Player 2
  <div class="add-jplayer" data-m4a="http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a" data-oga="http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"></div>
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
