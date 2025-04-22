let customs = [
    {
        userId: 101,
        fullName: "Kamoliddin Abdullayev",
        age: 35,
        contact: {
            emailAddress: "kamoliddin@gmail.com",
            phoneNumber: "+998901234567",
            addressDetails: {
                region: "Toshkent viloyati",
                district: "Yunusobod tumani",
                houseNumber: "47B",
                zipCode: "100200"
            }
        },
        purchases: {
            groceryItems: [
                { itemName: "kartoshka", priceAmount: 23, quantity: "3kg", inStock: true, supplier: "Dehqon Bozori" },
                { itemName: "uzum", priceAmount: 54, quantity: "1kg", inStock: false, supplier: "Bozor Dasturxon" },
                { itemName: "qovun", priceAmount: 89, quantity: "2kg", inStock: true, supplier: "Bozor Maxsuloti" }
            ],
            clothingItems: [
                { itemName: "kurtka", priceAmount: 2999, sizeType: "L", brandName: "Armani", seasonal: "winter", discountAvailable: true },
                { itemName: "shapka", priceAmount: 1200, sizeType: "M", brandName: "Lacoste", seasonal: "winter", discountAvailable: false }
            ]
        },
        transactionHistory: [
            { transactionId: "TXN_202501", totalPrice: 5500, purchaseDate: "2025-01-05", paymentMethod: "credit_card", deliveryStatus: "completed" },
            { transactionId: "TXN_202502", totalPrice: 3200, purchaseDate: "2025-02-11", paymentMethod: "cash", deliveryStatus: "shipped" }
        ]
    },
]

let { district } = addressDetails;
let { quantity } = groceryItems[0];
let { itemName: firstClothingItem } = clothingItems[0];
let { purchaseDate } = transactionHistory[0];

console.log(`${district}, ${quantity}, ${firstClothingItem}, ${purchaseDate}`);