const Card = require("../../Card");

module.exports = class MakeVisitorsInsane extends Card {

	constructor(role) {
		super(role);

		this.actions = [
			{
				priority: 100,
				labels: ["absolute"],
				run: function () {
					if (this.game.getStateName() == "Night") {
						for (let action of this.game.actions[0]) {
							if (action.target == this.actor && !action.hasLabel("hidden")) {
								action.actor.giveEffect("Insanity");
								action.actor.queueAlert("Reality fades as your mind is consumed by insanity.");
							}
						}
					}
				}
			}
		];
	}

}