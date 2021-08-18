// import {
//     PRODUCT_LIST
// } from './productListTypes'

const initialState = {
    productList: {
        data: [
            {
                name: "All",
                list: [
                    {
                        name: "Pizza one",
                        image: "/assets/images/food/pizza1.jpg",
                        price: 50,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger",
                        image: "/assets/images/food/burger.jpg",
                        price: 350,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Sandwich",
                        image: "/assets/images/food/sandwich2.png",
                        price: 250,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Biryani",
                        image: "/assets/images/food/biryani2.png",
                        price: 150,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Manchurian",
                        image: "/assets/images/food/manchurian.jpg",
                        price: 50,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Noodle",
                        image: "/assets/images/food/noodle.jpg",
                        price: 350,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Sandwich",
                        image: "/assets/images/food/sandwich3.jpg",
                        price: 250,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Pizza four",
                        image: "/assets/images/food/pizza4.jpg",
                        price: 150,
                        veg: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fress meat stuffed in to bakery fress burger buns. Tomato, lettuce, cheese"
                    }
                ]
            },
            {
                name: "Burger",
                list: [
                    {
                        name: "Burger one",
                        image: "/assets/images/food/burger.jpg",
                        price: 50,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger two",
                        image: "/assets/images/food/burger.jpg",
                        price: 350,
                        veg: true,
                        best_seller: false,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger three",
                        image: "/assets/images/food/burger.jpg",
                        price: 250,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger four",
                        image: "/assets/images/food/burger.jpg",
                        price: 150,
                        veg: true,
                        best_seller: false,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger one",
                        image: "/assets/images/food/burger.jpg",
                        price: 50,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger two",
                        image: "/assets/images/food/burger.jpg",
                        price: 350,
                        veg: true,
                        best_seller: false,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger three",
                        image: "/assets/images/food/burger.jpg",
                        price: 250,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Burger four",
                        image: "/assets/images/food/burger.jpg",
                        price: 150,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    }
                ]
            },
            {
                name: "Pizza",
                list: [
                    {
                        name: "Pizza three",
                        image: "/assets/images/food/pizza.jpg",
                        price: 250,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Pizza four",
                        image: "/assets/images/food/pizza.jpg",
                        price: 150,
                        veg: true,
                        best_seller: false,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Pizza one",
                        image: "/assets/images/food/pizza.jpg",
                        price: 50,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Pizza two",
                        image: "/assets/images/food/pizza.jpg",
                        price: 350,
                        veg: true,
                        best_seller: false,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Pizza three",
                        image: "/assets/images/food/pizza.jpg",
                        price: 250,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Pizza four",
                        image: "/assets/images/food/pizza.jpg",
                        price: 150,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    }
                ]
            },
            {
                name: "Noodle",
                list: [
                    {
                        name: "Noodle one",
                        image: "/assets/images/food/noodle.jpg",
                        price: 50,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Noodle two",
                        image: "/assets/images/food/noodle.jpg",
                        price: 350,
                        veg: true,
                        best_seller: false,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    },
                    {
                        name: "Noodle three",
                        image: "/assets/images/food/noodle.jpg",
                        price: 250,
                        veg: true,
                        best_seller: true,
                        stars: 4,
                        cal: "140",
                        description:
                            "Tomato, lettuce, cheese and oh-so-juicy and fresh meat stuffed in to bakery fresh burger buns. Tomato, lettuce, cheese"
                    }
                ]
            }
        ]
    },
    productDetail: null
};

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCT_LIST":
            return {
                productList: action.payload
            };
        case "PRODUCT_DETAIL":
            return {
                productDetail: action.payload
            };

        default:
            return state;
    }
};

export default productListReducer;
