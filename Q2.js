const getIDs = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([532, 543, 753, 1, 5]);
        }, 1500);
    });
const getRecipe = (recipeID) => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {
                title: "Fresh tomato pasta",
                publisher: "Pinchas Hodadad",
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recipeID);
    });
};

async function asyncAwait() {
    try {
        const getIt = await getIDs();
        const second = await getRecipe(getIt[2]);
        console.log(`success : ${getIt} `);
        console.log(`${second}`);


    } catch (error) {
        console.log("It is an error!");
    }

}
asyncAwait();

