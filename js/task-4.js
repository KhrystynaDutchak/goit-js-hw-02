function getShippingCost(country) {

    const australiaCost = 170;
    const chinaCost = 100;
    const chileCost = 250;
    const jamaicaCost = 120;

    switch (country) {
        case "Australia":
            return `Shipping to Australia will cost ${australiaCost} credits`;
        case "China":
            return `Shipping to China will cost ${chinaCost} credits`;
        case "Chile":
            return `Shipping to Chile will cost ${chileCost} credits`;
        case "Jamaica":
            return `Shipping to Jamaica will cost ${jamaicaCost} credits`;
        default:
            return "Sorry, there is no delivery to your country";
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"