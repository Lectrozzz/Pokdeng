const Card = {
    selectCard(){
        let selectedCard;
        while(true){
            const card1 = this.randomCard();
            const card2 = this.randomCard();
            if (card1.card === card2.card){
                continue;
            }
            selectedCard = [card1, card2];
            break
        }
        
        return selectedCard;
    },

    randomCard(){
        const cardType =['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        const cardValue = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

        const randomCardType = Math.floor(Math.random() * cardType.length);
        const randomCardValue = Math.floor(Math.random() * cardValue.length);

        const card = cardType[randomCardType]+'-'+cardValue[randomCardValue];
        const score = (randomCardValue+1 >= 10) ? 0 : randomCardValue+1;
        return {card, score};
    }
}

export default Card;