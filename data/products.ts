export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "lassi",
        name: "Smoodh Lassi",
        subName: "Creamy tradition.",
        price: "₹30",
        description: "Real Dahi - Rose Infused - No Artificial Flavors",
        folderPath: "/images/lassi",
        themeColor: "#E91E63",
        gradient: "linear-gradient(135deg, #FFEEF4 0%, #F8BBD0 100%)",
        features: ["Real Dahi", "Rose Infused", "No Artificial Flavors"],
        stats: [{ label: "Artificial", val: "0%" }, { label: "Dahi", val: "100%" }, { label: "Freshness", val: "Max" }],
        section1: { title: "Smoodh Lassi.", subtitle: "Creamy tradition." },
        section2: { title: "Real dahi, real taste.", subtitle: "Thick, creamy lassi made from fresh churned dahi with a delicate hint of rose." },
        section3: { title: "Probiotic goodness.", subtitle: "Natural gut-friendly cultures that refresh your body from the inside out." },
        section4: { title: "Made from dahi, not powder.", subtitle: "" },
        detailsSection: {
            title: "The Classic Reimagined",
            description: "Smoodh Lassi brings the beloved street-side lassi experience into a perfectly crafted bottle. Made with 100% real dahi, gently blended to a silky smooth consistency, and kissed with natural rose essence. Every sip is a nostalgic journey — thick, creamy, and refreshingly authentic. No artificial thickeners, no shortcuts.",
            imageAlt: "Lassi Details"
        },
        freshnessSection: {
            title: "Chill-Chain Perfection",
            description: "Our lassi is prepared in small batches using fresh dahi and immediately chilled to lock in the live cultures and creamy texture. The cold-chain is maintained from our dairy to your doorstep, ensuring every bottle delivers the same fresh-from-the-matka taste. Real ingredients, real freshness."
        },
        buyNowSection: {
            price: "₹30",
            unit: "per 150ml bottle",
            processingParams: ["Real Dahi", "Rose Infused", "Probiotic Rich"],
            deliveryPromise: "Available at stores near you. Chilled packaging ensures peak freshness.",
            returnPolicy: "100% Satisfaction Guarantee. Not happy? We'll replace it, no questions asked."
        }
    },
    {
        id: "chocolate",
        name: "Smoodh Chocolate",
        subName: "Velvety indulgence.",
        price: "₹30",
        description: "Rich Cocoa - Flavoured Milk - Smooth & Creamy",
        folderPath: "/images/Chocolate",
        themeColor: "#C62828",
        gradient: "linear-gradient(135deg, #5D4037 0%, #3E2723 100%)",
        features: ["Rich Cocoa", "Creamy Milk", "Smooth Texture"],
        stats: [{ label: "Cocoa", val: "Rich" }, { label: "Milk", val: "100%" }, { label: "Smoothness", val: "Max" }],
        section1: { title: "Smoodh Chocolate.", subtitle: "Velvety indulgence." },
        section2: { title: "Decadence in every sip.", subtitle: "Rich, dark cocoa blended with creamy milk for a smooth, irresistible chocolate experience." },
        section3: { title: "The chocolate fix you deserve.", subtitle: "A perfectly balanced blend that satisfies your chocolate cravings anytime, anywhere." },
        section4: { title: "Real cocoa, real satisfaction.", subtitle: "" },
        detailsSection: {
            title: "Chocolate Done Right",
            description: "Smoodh Chocolate Flavoured Milk is crafted for true chocolate lovers. We blend premium cocoa with fresh, creamy milk to create a drink that's rich without being heavy, sweet without being cloying. The iconic red bottle houses a velvety smooth chocolate experience that hits different — whether it's your morning pick-me-up or your afternoon indulgence.",
            imageAlt: "Chocolate Details"
        },
        freshnessSection: {
            title: "Blended for Perfection",
            description: "Our chocolate milk is blended using a precise cocoa-to-milk ratio that delivers maximum flavor with a silky mouthfeel. We use quality cocoa sourced for its deep, robust profile and combine it with farm-fresh milk. The result is a smooth, consistent chocolate drink that's leagues ahead of the competition."
        },
        buyNowSection: {
            price: "₹30",
            unit: "per 150ml bottle",
            processingParams: ["Rich Cocoa", "Fresh Milk", "Perfectly Blended"],
            deliveryPromise: "Available at stores nationwide. Enjoy chilled for the best experience.",
            returnPolicy: "Taste the smoothness or get your money back."
        }
    },
    {
        id: "chocolate-hazelnut",
        name: "Smoodh Chocolate Hazelnut",
        subName: "Nutty perfection.",
        price: "₹30",
        description: "Chocolate & Hazelnut - Flavoured Milk - Premium Blend",
        folderPath: "/images/Chocolate Hazelnut",
        themeColor: "#1565C0",
        gradient: "linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)",
        features: ["Chocolate & Hazelnut", "Creamy Milk", "Premium Blend"],
        stats: [{ label: "Hazelnut", val: "Rich" }, { label: "Cocoa", val: "100%" }, { label: "Blend", val: "Premium" }],
        section1: { title: "Smoodh Chocolate Hazelnut.", subtitle: "Nutty perfection." },
        section2: { title: "Where chocolate meets hazelnut.", subtitle: "A luxurious fusion of rich chocolate and roasted hazelnut in every creamy sip." },
        section3: { title: "Elevated indulgence.", subtitle: "The sophisticated flavor combination that turns an ordinary moment into something extraordinary." },
        section4: { title: "Two flavors, one smooth experience.", subtitle: "" },
        detailsSection: {
            title: "The Premium Fusion",
            description: "Smoodh Chocolate Hazelnut takes our chocolate milk to the next level. We infuse premium cocoa with the warm, nutty richness of roasted hazelnuts, creating a flavor profile that's reminiscent of the finest European pralines — but in a refreshing, drinkable form. The distinctive blue bottle is your passport to a premium taste experience that's unmatched in the market.",
            imageAlt: "Chocolate Hazelnut Details"
        },
        freshnessSection: {
            title: "Crafted with Precision",
            description: "The balance between chocolate and hazelnut is an art. Too much of either and the magic is lost. Our blend masters have perfected the ratio — the cocoa provides depth and richness, while the hazelnut adds a buttery, aromatic finish. Combined with fresh milk, the result is a harmonious drink that's smooth, nutty, and utterly addictive."
        },
        buyNowSection: {
            price: "₹30",
            unit: "per 150ml bottle",
            processingParams: ["Rich Cocoa", "Roasted Hazelnut", "Fresh Milk"],
            deliveryPromise: "Available at stores nationwide. Best served chilled.",
            returnPolicy: "Not impressed? Full replacement guaranteed."
        }
    }
];
