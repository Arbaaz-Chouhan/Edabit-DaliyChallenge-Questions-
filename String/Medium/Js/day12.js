// 131 => Replacing Letters with Hashes
// Write a function that replaces all letters within a specified range with the hash symbol #.

function replace(str1, str2) {
    let res = "";
    let startChar = str2.charAt(0);
    let endChar = str2.charAt(2);

    for (let i = 0; i < str1.length; i++) {
        let prevChar = str1[i - 1];
        let nextChar = str1[i + 1];
        
        if ((prevChar && prevChar >= startChar && prevChar <= endChar) || 
            (nextChar && nextChar >= startChar && nextChar <= endChar)) {
            res += "#";
        } else {
            res += str1[i];
        }
    }

    return res;
}

// console.log(replace("abcdef", "c-e")); // "ab###f"
// console.log(replace("rattle", "r-z")); // "#a##le"
// console.log(replace("microscopic", "i-i")); // "m#croscop#c"
// console.log(replace("", "a-z")); // ""

// Strategy Interface
class PaymentStrategy {
    pay(amount) {
        throw new Error("This method should be overridden");
    }
}

// Concrete Strategy 1
class CreditCardPayment extends PaymentStrategy {
    constructor(cardNumber, cvv, expiryDate) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    pay(amount) {
        console.log(`Paid ${amount} using Credit Card ending with ${this.cardNumber.slice(-4)}`);
    }
}

// Concrete Strategy 2
class PayPalPayment extends PaymentStrategy {
    constructor(email) {
        super();
        this.email = email;
    }

    pay(amount) {
        console.log(`Paid ${amount} using PayPal with email ${this.email}`);
    }
}

// Context Class
class ShoppingCart {
    constructor() {
        this.items = [];
        this.paymentStrategy = null;
    }

    addItem(item) {
        this.items.push(item);
    }

    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout() {
        const amount = this.items.reduce((total, item) => total + item.price, 0);
        this.paymentStrategy.pay(amount);
    }
}

// Usage
const cart = new ShoppingCart();
cart.addItem({ name: 'Laptop', price: 1000, });
cart.addItem({ name: 'Mouse', price: 50 });

// Set Payment Strategy to Credit Card
const creditCardPayment = new CreditCardPayment('1234567890123456', '123', '12/23');
cart.setPaymentStrategy(creditCardPayment);
cart.checkout(); // Output: Paid 1050 using Credit Card ending with 3456

// Set Payment Strategy to PayPal
const payPalPayment = new PayPalPayment('user@example.com');
cart.setPaymentStrategy(payPalPayment);
cart.checkout(); // Output: Paid 1050 using PayPal with email user@example.com
