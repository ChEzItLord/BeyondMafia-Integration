const Role = require("../../Role");

module.exports = class BloodWitch extends Role {

	constructor(player, data) {
		super("Blood Witch", player, data);

		this.alignment = "Monsters";
		this.cards = [
			"VillageCore",
			"WinWithMonsters",
			"MeetingMonster",
			"MakeVisitorsInsane"
		];
	}

}
