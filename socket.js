let isMcdDefined = false
document.addEventListener('mcdBridgeReady', () => isMcdDefined = true)

function gDO(event, data) {
    return JSON.stringify({
        eventName: event,
        data
    })
}



function activateOffer(itemId) {
    if (!myGameInstance)
        return console.error('myGameInstance isn\'t defined')
    if (!isMcdDefined)
        return myGameInstance.SendMessage('VoucherPanel', 'Callback', gDO('error', 'mcd isb\'t defined'))

    var offerActivation = mcd.bridge.message('offerActivation');
    offerActivation.send({
        'loyaltyId': 2919,
        'rewardId': itemId
    });
    offerActivation.on('data', (data) => {
        myGameInstance.SendMessage('VoucherPanel', 'Callback', gDO('data', data))
    });
    offerActivation.on('error', (error) => {
        myGameInstance.SendMessage('VoucherPanel', 'Callback', gDO('data', error))
    });
    offerActivation.on('done', () => {
        myGameInstance.SendMessage('VoucherPanel', 'Callback', gDO('done'))
    });
}