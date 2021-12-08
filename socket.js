
var socket = null

function onAuth(token) {
    socket = io('https://flyingsantagame.live', {
        auth: {
            token
        }
    })
}

function reciveReward() {
    if (!socket)
        return console.error('Socket is undefined')

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


    socket.on('recive-reward', (itemId) => {
        // use reward
        activateOffer(itemId)
    })
}
