import GameController from "../game/game.controller.js";

test('selectPlayerCard should return 2 different cards', () => {
    const [card1, card2] = GameController.selectPlayerCard();
    expect(card1).toHaveProperty('card');
    expect(card1).toHaveProperty('score');
    expect(card2).toHaveProperty('card');
    expect(card2).toHaveProperty('score');
    if(card1.score === card2.score){
        expect(card1.card).not.toEqual(card2.card);
    }
});

test('selectDealerCard should return 2 different cards', () => {
    const [playerCard1, playerCard2] = GameController.selectPlayerCard();
    const [dealerCard1, dealerCard2] = GameController.selectDealerCard([playerCard1, playerCard2]);
    expect(dealerCard1).toHaveProperty('card');
    expect(dealerCard1).toHaveProperty('score');
    expect(dealerCard2).toHaveProperty('card');
    expect(dealerCard2).toHaveProperty('score');

    if(dealerCard1.score === dealerCard2.score){
        expect(dealerCard1.card).not.toEqual(dealerCard2.card);
    }
});

test('selectDealerCard should return 2 different cards from player cards', () => {
    const playerCard1 = {card: 'Hearts-Ace', score: 1};
    const playerCard2 = {card: 'Hearts-2', score: 2};
    const [dealerCard1, dealerCard2] = GameController.selectDealerCard([playerCard1, playerCard2]);
    expect(dealerCard1).toHaveProperty('card');
    expect(dealerCard1).toHaveProperty('score');
    expect(dealerCard2).toHaveProperty('card');
    expect(dealerCard2).toHaveProperty('score');
    if(playerCard1.score === dealerCard1.score){
        expect(playerCard1.card).not.toEqual(dealerCard1.card);
    }
    if(playerCard1.score === dealerCard2.score){
        expect(playerCard1.card).not.toEqual(dealerCard2.card);
    }
    if(playerCard2.score === dealerCard2.score){
        expect(playerCard2.card).not.toEqual(dealerCard2.card);
    }
    if(playerCard2.score === dealerCard1.score){
        expect(playerCard2.card).not.toEqual(dealerCard1.card);
    }
});