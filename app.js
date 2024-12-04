import readline from "readline";
import GameController from "./game/game.controller.js";
import Player from "./game/Player.js";

const rl = readline.createInterface({
    input: process.stdin,
});

const player = new Player();

const main = () =>{
    console.log('Please put your bet');
    rl.question('', (bet) => {
        let betNumber = 0;
        try{
            betNumber = parseInt(bet);
            player.addBalance(betNumber);
        }
        catch(e){
            console.log('Error: Please input a number!');
            main();
        }
        
        const [userCard1, userCard2] = GameController.selectPlayerCard();
        const userScore = GameController.getUserScore(userCard1, userCard2);
        console.log(`You got ${userCard1.card}, ${userCard2.card}`);

        const [dealerCard1, dealerCard2] = GameController.selectDealerCard([userCard1, userCard2]);
        const dealerScore = GameController.getUserScore(dealerCard1, dealerCard2);
        console.log(`Dealer got ${dealerCard1.card}, ${dealerCard2.card}`);

        GameController.compareScore(userScore, dealerScore, betNumber, player);

        console.log('Wanna play more (Yes/No)?');
        rl.question('', (answer) => {
            if(answer === 'Yes'){
                main();
            }
            else{
                console.log(`You got total ${player.getBalance()} chips`);
                rl.close();
            }
        });
    });
}

export default main;