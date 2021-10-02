class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
HandleMousePressed() {
  this.playButton.mousePressed(() =>{
  this.input.hide();
  this.playButton.hide();
  var message = `
   hello ${this.input.value()}
  </br>waiting for another player to join... `;
  this.greeting.html(message);
  });
}
  display(){
    this.HandleMousePressed();
    this.setElementPosition();
    this.setElementStyle();
  }
}