// 0. Get originKey
getOriginKey().then(originKey => {
    // 1. Create an instance of AdyenCheckout
    const checkout = new AdyenCheckout({
        originKey, // Mandatory. originKey from Customer Area
        environment: 'test',
        amount: { currency: 'EUR', value: 1000 },
        onAdditionalDetails: result => {
            console.log(result);
        },
        onError: error => {
            console.log(error);
        }
    });

    const swishData = {
        paymentMethod: {
            type: 'swish'
        },
        countryCode: 'SE',
        amount: {
            currency: 'SEK',
            value: 10000
        }
    };

    makePayment(swishData).then(response => {
        checkout.createFromAction(response.action).mount('#swish-container');
    });
});
