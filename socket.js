function gDO(event, data) {
    return JSON.stringify({
        event,
        data
    })
}

function activateOffer(itemId) {
    if (!myGameInstance)
     return console.error('myGameInstance isn\' avaliable')
    var offerActivation = mcd.bridge.message('offerActivation');
    offerActivation.send({
        'loyaltyId': 1012,
        'autoActivate': false, //autoActivate true works only if you have only one reward in loyalty card.
        'rewardId': itemId
    });
    offerActivation.on('data', (data) => {
        myGameInstance.SendMessage('', '', gDO('data', data))
    });
    offerActivation.on('error', (error) => {
        myGameInstance.SendMessage('', '', gDO('data', error))
    });
    offerActivation.on('done', () => {
        myGameInstance.SendMessage('', '', gDO('done'))
    });
}