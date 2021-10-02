class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

setElementPosition(){
  this.titleImg.position(120,160)
  this.titleImg.size(1000,70)
  this.input.position(width/2-60,height/2-80)
  this.playButton.position(width/2-90,height/2-20)
  this.greeting.position(width/2-300,height/2-100)
}

setElementStyle(){
  this.titleImg.class("gametitle")
  this.input.class("custominput")
  this.playButton.class("custombutton")
  this.greeting.class("greeting")
}

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

display(){
  this.setElementPosition();
  this.setElementStyle();
 }
}