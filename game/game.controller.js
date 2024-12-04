import Card from "./Card.js";

const GameController = {
    selectPlayerCard(){
        const [card1, card2] = Card.selectCard();
        return [card1, card2];
    },

    selectDealerCard(playerCard){
        let dealerCard1, dealerCard2;
        while(true){
            const [dealerRandomCard1, dealerRandomCard2] = Card.selectCard();
            if (dealerRandomCard1.card === playerCard[0].card || 
                dealerRandomCard1.card === playerCard[1].card || 
                dealerRandomCard2.card === playerCard[0].card || 
                dealerRandomCard2.card === playerCard[1].card){
                continue;
            }
            dealerCard1 = dealerRandomCard1;
            dealerCard2 = dealerRandomCard2;
            break;
        }
        return [dealerCard1, dealerCard2];
    },

    getUserScore(userCard1, userCard2){
        return userCard1.score + userCard2.score;
    },

    compareScore(userScore, dealerScore, betNumber, player){
        if(userScore > dealerScore){
            console.log(`You won!!!, received ${betNumber} chips`);
            player.addBalance(betNumber);
        }
        else if(userScore < dealerScore){
            console.log(`You lose!!!, lost ${betNumber} chips`);
            player.addBalance(-betNumber);
        }
        else{
            console.log(`It's a draw!!!`);
        }
    },
}

export default GameController;