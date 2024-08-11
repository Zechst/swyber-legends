import GameObject from "./gameObjects";

export default class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

// Ensure window is only accessed on the client side
if (typeof window !== "undefined") {
  window.overworldMaps = {
    demoRoom: {
      lowerSrc: "/images/maps/DemoLower.png",
      upperSrc: "/images/maps/DemoUpper.png",
      gameObjects: {
        hero: new GameObject({
          x: 5,
          y: 6,
        }),
        npc1: new GameObject({
          x: 7,
          y: 4.2,
          src: "/images/characters/people/npc1.png",
        }),
      },
    },
    kitchen: {
      lowerSrc: "/images/maps/KitchenLower.png",
      upperSrc: "/images/maps/KitchenUpper.png",
      gameObjects: {
        hero: new GameObject({
          x: 3,
          y: 5,
        }),
        npc2: new GameObject({
          x: 9,
          y: 6,
          src: "/images/characters/people/npc2.png",
        }),
        npc3: new GameObject({
          x: 10,
          y: 8,
          src: "/images/characters/people/npc3.png",
        }),
      },
    },
  };
}
