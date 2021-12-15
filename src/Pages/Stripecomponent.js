import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeComponent = () => {

    const onToken = (token) => {
        console.log(token)
    }
    return (
        <div className="container_stripe">
            <h3 className="stripe">If you want to make a donation...</h3>
            <div className="component-stripe">
                <StripeCheckout className="stripe-payment"
                token={onToken}
                stripeKey="pk_test_51K5vf0Fd0VZtXGKinmd26dLaxahe2Elo3lCh8GQ0D4uw1exDdBDfJrcE2xQ0NgJnM47Wp4eaa7CKCK39BN6MjMOX00zDo5iQB7"
                />
            </div>
        </div>
    )
}
export default StripeComponent