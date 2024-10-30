AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
      var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
  
      this.movieImageEl;
      this.movieTitleEl = document.querySelector('#movieTitle');
      this.movieDescriptionEl = document.querySelector('#movieDescription');
  
      this.movieInfo = {
        hippogrifButton: {
          title: 'Hippogrif',
          imgEl: document.querySelector('#hippogrifMovieImage'),
          description: 'A Hippogriff was a magical beast that had the front legs, wings, and head of a giant eagle and the body, hind legs and tail of a horse. It was very similar to another magical creature, the Griffin, with the horse rear replacing the lion rear.'
        },
        houseelfButton: {
          title: 'House Elf',
          imgEl: document.querySelector('#houseelfMovieImage'),
          description: 'A house-elf (sometimes also referred to as just elf) was a magical being which was immensely devoted and loyal to the one designated as their master. A house-elf could only be freed when their master presented them with clothes.'
        },
        goblinButton: {
          title: 'Goblin',
          imgEl: document.querySelector('#goblinMovieImage'),
          description: 'Goblins were a highly intelligent race of small magical humanoid beings with long fingers and feet that coexisted with the wizarding world. Their diet consisted of meat, roots, and fungi. Goblins conversed in a language known as Gobbledegook, and were adept metalsmiths notable for their silverwork; they even minted coins for wizarding currency.'
        },
        phoenixButton: {
          title: 'Phoenix',
          imgEl: document.querySelector('#phoenixMovieImage'),
          description: 'The phoenix was a large swan-sized scarlet magical bird with red and gold plumage, along with a golden beak and talons, black eyes, and a tail as long as a peacock\'s. Its scarlet feathers glowed faintly in darkness, while its golden tail feathers were hot to the touch. A phoenix was also one of the most independent and detached creatures in the world.'
        },
        dementorButton: {
          title: 'Dementor',
          imgEl: document.querySelector('#dementorMovieImage'),
          description: 'A Dementor was a gliding, wraithlike Dark creature, widely considered to be one of the foulest of the dark creatures to inhabit the wizarding world. Dementors fed on human happiness and thus generated feelings of depression and despair in any person in close proximity to them. They could also consume a person\'s soul, leaving their victims in a permanent vegetative state.'
        }
      };
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);
      this.backgroundEl = document.querySelector('#background');
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
      }
      this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      
      this.el.object3D.depthTest = false;  fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
    },
  
    onMenuButtonClick: function (evt) {
      var movieInfo = this.movieInfo[evt.currentTarget.id];
  
      this.backgroundEl.object3D.scale.set(1, 1, 1);
  
      this.el.object3D.scale.set(1, 1, 1);
      this.el.object3D.visible = true;
      this.fadeBackgroundEl.object3D.visible = true;
  
      if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
      this.movieImageEl = movieInfo.imgEl;
      this.movieImageEl.object3D.visible = true;
  
      this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
      this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
    }
  });