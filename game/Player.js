class Player {
    constructor() {
        this.balance = 0;
    }

    addBalance(inputBalance){
        this.balance += inputBalance;
    }

    getBalance(){
        return this.balance;
    }
}

export default Player;