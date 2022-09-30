"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripeCheckoutSession = void 0;
const _1 = require("./");
// Creates a Stripe Checkout session with line items
async function createStripeCheckoutSession(line_items) {
    //Example Item (IDK what im doing anymore)
    // {
    //     name: 'big room',
    //     description: 'a room thats big duh',
    //     images: ['https://i.pinimg.com/originals/fd/98/73/fd9873a4da721436f7b96c3cc518a4d7.jpg'],
    //     amount: 69420,       //Retard amount go brrrr (cents)... dont ask me
    //     currency: 'usd',     
    //     quantity: 1,
    // }
    //const url = process.env.WEBAPP_URL;
    const url = process.env.WEBAPP_URL;
    const session = await _1.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        success_url: `http://${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://${url}/failed`,
    });
    return session;
}
exports.createStripeCheckoutSession = createStripeCheckoutSession;
//# sourceMappingURL=checkout.js.map