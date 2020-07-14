(function exportController() {
  function Controller(ship) {
    this.ship = ship;

    this.initialiseSea();

    document.querySelector("#sailbutton").addEventListener("click", () => {
      this.setSail();
    });
  }

  Controller.prototype = {
    initialiseSea() {
      const backgrounds = ["./images/water0.png", "./images/water1.png"];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url('${
          backgrounds[backgroundIndex % backgrounds.length]
        }')`;
        backgroundIndex += 1;
      }, 1000);
    },

    renderPorts(ports) {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";
      ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        newPortElement.className = "port";
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;

        let i = Math.random();
        if (i <= 0.3) {
          newPortElement.style.backgroundImage = "url('./images/port2.png')";
        }
      });
    },

    renderShip() {
      const ship = this.ship;

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );

      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    },

    setSail() {
      const ship = this.ship;
      const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
      const portElement = document.querySelector(
        `[data-port-index = "${nextPortIndex}"]`
      );
      if (!portElement) {
        this.renderMessage("End of the line, skip!");
        return;
      }

      const portPosition = portElement.offsetLeft;
      const shipElement = document.querySelector("#ship");
      let shipPosition = shipElement.offsetLeft;
      ship.setSail();

      const sailing = setInterval(() => {
        document.getElementById("sailbutton").textContent = "Sailing...";

        if (shipPosition === portPosition - 32) {
          clearInterval(sailing);
          document.getElementById("sailbutton").textContent = "Set Sail!";
        }
        shipElement.style.left = `${shipPosition + 1}px`;
        shipPosition += 1;
      }, 20);
      ship.dock();
      this.renderMessage(`Departing from ${ship.previousPort.name}`);
      window.setTimeout(() => {
        this.renderMessage(`Approaching ${ship.currentPort.name}`);
      }, 2500);
    },

    renderMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.id = "message";
      messageElement.textContent = message;
      const viewport = document.querySelector("#viewport");
      viewport.appendChild(messageElement);
      window.setTimeout(() => {
        viewport.removeChild(messageElement);
      }, 2000);
    },
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
