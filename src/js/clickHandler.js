export default class ClickHandler {
	constructor(element) {
		this.element = document.querySelector(element);
		this.testGoblinClick = this.testGoblinClick.bind(this);
		this.pKills = document.getElementById('goblinsKills');
		this.element.addEventListener('click', this.testGoblinClick);
		this.kills = 0;
	}

	testGoblinClick(e) {
		if (e.target.className === 'box goblin') {
			e.target.className = 'box';
			this.kills += 1;
			this.pKills.textContent = `Убито: ${this.kills}`;
		} else throw new Error('No Goblin');
	}
}
