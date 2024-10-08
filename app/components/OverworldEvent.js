export default class OverworldEvent {
  constructor({ map, event }) {
    this.map = map;
    this.event = event;
  }

  stand(resolve) {
    const who = this.map.gameObjects[this.event.who];
    who.startBehavior(
      {
        map: this.map,
      },
      {
        type: "stand",
        direction: this.event.direction,
        time: this.event.time,
      }
    );
    //Set up a handler to complete when correct person is done standing, then resolve the event
    const completeHandler = (e) => {
      if (e.detail.whoId === this.event.who) {
        console.log("Standing event completed for:", this.event.who);
        document.removeEventListener("PersonStandComplete", completeHandler);
        resolve();
      }
    };

    document.addEventListener("PersonWalkingComplete", completeHandler);
  }

  walk(resolve) {
    const who = this.map.gameObjects[this.event.who];

    who.startBehavior(
      {
        map: this.map,
      },
      {
        type: "walk",
        direction: this.event.direction,
      }
    );

    //Set up a handler to complete when correct person is done walking, then resolve the event
    const completeHandler = (e) => {
      if (e.detail.whoId === this.event.who) {
        document.removeEventListener("PersonWalkingComplete", completeHandler);
        resolve();
      }
    };

    document.addEventListener("PersonWalkingComplete", completeHandler);
  }

  init() {
    return new Promise((resolve) => {
      this[this.event.type](resolve);
    });
  }
}
