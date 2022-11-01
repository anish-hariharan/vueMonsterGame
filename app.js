let randomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
      battleLog: "",
      winner: null,
      playerscr : 0,
      monsterscr : 0,
      logList : []
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterLife + "%" };
    },
    playerBarStyle() {
      return { width: this.playerLife + "%" };
    },
    battle(player, monster) {
      console.log(player, monster);
      this.battleLog = `${player} and monster is ${monster}`;
    },
  },
  methods: {
    monsterAttack() {
      let attackPower = randomNumber(15, 8);
      this.playerLife -= attackPower;
    },
    attack() {
      let attackPower = randomNumber(12, 5);
      this.monsterLife -= attackPower;
      this.monsterAttack();
      this.winOrLoss(this.playerLife, this.monsterLife);
      console.log(
        `Hello ${this.playerLife} and monster is ${this.monsterLife}`
      );
    },
    specialAttack() {
      let attackPower = 20;
      this.monsterLife -= attackPower;
      this.winOrLoss(this.playerLife, this.monsterLife);
    },
    surrender() {
      alert("You Lost $ ");
      this.winner = "monster";
      this.monsterscr += 1
      this.battleeLog(this.playerscr, this.monsterscr)
    },
    onHeal() {
      this.playerLife <= 90
        ? (this.playerLife += 10)
        : alert("you can use when life lesss than 90");
    },
    winOrLoss() {
      if (this.playerLife <= 0) {
        alert("You Lost");
        this.winner = "monster";
        this.monsterscr += 1
        this.battleeLog(this.playerscr, this.monsterscr)
      } else if (this.monsterLife <= 0) {
        alert("You Win");
        this.winner = "player";
        this.playerscr += 1
        this.battleeLog(this.playerscr, this.monsterscr)
      }
    },
    newGame () {
        this.playerLife = 100;
        this.monsterLife = 100;
        this.winner = null
    },
    battleeLog(playerscr, monsterscr) {
        console.log(playerscr, monsterscr)
        this.battleLog = `player score is ${playerscr} and monster score is ${monsterscr}`
        this.logList.push(this.battleLog)
    }
  },
});

app.mount("#game");
