function activateOffer(itemId) {
    var offerActivation = mcd.bridge.message('offerActivation');
    offerActivation.send({
        'loyaltyId': 1012,
        'autoActivate': false, //autoActivate true works only if you have only one reward in loyalty card.
        'rewardId': itemId
    });
    offerActivation.on('data', (data) => {
        console.log('offerActivation data' + JSON.stringify(data));
    });
    offerActivation.on('error', (error) => {
        console.log('offerActivation error' + JSON.stringify(error));
    });
    offerActivation.on('done', () => {
        console.log('offerActivation done');
    });
}