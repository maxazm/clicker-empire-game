const config = {
    loginPage : document.getElementById("loginPage"),
    mainPage : document.getElementById("mainPage")
}

class User {
    constructor(name, age, money, daysHavePassed, item, burgers, earnableMoneyPerClick, dailyIncome){
        this.name = name; 
        this.age = age;
        this.money = money;
        this.daysHavePassed = daysHavePassed;
        this.item = item; 
        this.burgers = burgers;
        this.earnableMoneyPerClick = earnableMoneyPerClick;
        this.dailyIncome = dailyIncome;
    }
}

class Item {
    constructor(name, type, amount, price, totalPrice,effectmoney,effect, maximumAmount, itemImg){
        this.name = name;
        this.type = type;
        this.amount = amount;
        this.price = price;
        this.totalPrice = totalPrice;
        this.effectmoney = effectmoney;
        this.effect = effect;
        this.maximumAmount = maximumAmount;
        this.itemImg = itemImg;
    }
}

//アイテム情報（name, amount, price, totalPrice, effectMoney, effect, maximumAmount ) 
const ItemInfo = [
    new Item("Flip Machine", "ability", 0, 15000, 0, 25, "+$25/click", 500,"https://images.unsplash.com/photo-1522244451342-a41bf8a13d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJicXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Item("ETFStock", "investment",0, 300000, 0, 0.001,"+0.1% / day", Infinity,"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0b2NrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Item("ETFBonds", "investment", 0, 300000, 0, 0.0007,"+0.07% / day", Infinity,"https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0b2NrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Item("Lemonade Stand", "real-estate",0, 30000, 0 ,30,"+$30 / day", 1000,"https://images.unsplash.com/photo-1525610268297-344cdb8dc9af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb25hZGUlMjBzdGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"),
    new Item("Ice Cream Truck", "real-estate",0, 100000, 0 ,120,"+$120 / day", 500,"https://images.unsplash.com/photo-1574927720559-72bb4889c6be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"),
    new Item("House", "real-estate",0, 20000000, 0, 32000,"+$32,000 / day", 100,"https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Item("TownHouse", "real-estate" ,0, 40000000, 0, 64000,"+$64,000 / day", 100,"https://images.unsplash.com/photo-1430285561322-7808604715df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRvd25ob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Item("Mansion", "real-estate" ,0, 250000000, 0, 500000,"+$500,000 / day", 20,"https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFuc2lvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Item("Industrial Space", "real-estate",0, 1000000000, 0, 2200000,"+$2,200,000 / day", 10, "https://images.unsplash.com/photo-1580674287256-40141f08e9a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdhcmVob3VzZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Item("Hotel SkyScraper", "real-estate",0, 10000000000, 0, 25000000,"+$25,000,000 / day", 5, "https://images.unsplash.com/photo-1516422641841-cd9803ab02c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"),
    new Item("Bullet-Speed Sky Railway", "real-estate" ,0, 10000000000000, 0, 30000000000, "+$30,000,000,000 / day", 1, "https://images.unsplash.com/photo-1514337224818-9787cf717f2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80")
];

function loginProcedure(){

    let newBtn = document.getElementById("new");
    let name = document.getElementById("username");
    let loginBtn = document.getElementById("login");

    name.addEventListener("change", function(){
            newBtn.addEventListener("click", function(){
            displayNone(config.loginPage);
            initializeUserData();
        });
    });

    newBtn.addEventListener("click",function(){
        let userInput = name.querySelectorAll(`input[name="username"]`).item(0).value;

        if(userInput === ""){
            alert("Please enter your name");
        }
    })

    loginBtn.addEventListener("click", function(){
        let user =  JSON.parse(localStorage.getItem("userInfo"));

        displayNone(config.loginPage);
        config.mainPage.append(mainPage(user));
    })
}


function initializeUserData(){

    const name = document.getElementById("username").querySelectorAll(`input[name="username"]`).item(0).value;

    let user = (name == "cheater")? new User(name, 20, 1000000000, 0, ItemInfo, 0, 25, 0) : new User(name, 20, 50000, 0, ItemInfo, 0, 25, 0);

    config.mainPage.append(mainPage(user));
}


function mainPage(user){

    document.getElementById("mainPage").classList.add("d-flex","mainPage","bg-lightNavy");

    //左側コンテンツ
    let leftCon = document.createElement("div");
    leftCon.classList.add("d-flex", "flex-column","justify-content-center","content-box-Left", "mt-2","mx-2","bg-dark");

    leftCon.innerHTML += `
        <div class="text-center text-white bg-lightNavy mx-1 mb-5 py-4 w-90" style="height: 17%;">
            <h5 id="userBurger">${user.burgers.toLocaleString()} Burgers</h5>
            <p id= "userMoneyClick">$${user.earnableMoneyPerClick.toLocaleString()} / Click</p>
        </div>
        <div id="burgerImg" class="d-flex align-items-center justify-content-center bg-dark h-75 w-100">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" class="w-50 burger-img">
        </div>
    `;  


    //右側コンテンツ
    let rightCon = document.createElement("div");
    rightCon.classList.add("d-flex", "align-items-center","flex-column", "rightCon", "pr-3");

    rightCon.innerHTML += `
        <div class="d-flex flex-wrap text-white text-center bg-dark justify-content-center mt-2 ml-2 w-100" style="min-height: 100px;">
            <div id="name" class="info-box bg-lightNavy mx-1 mt-1 pt-2">${user.name}</div>
            <div id="userAge" class="info-box bg-lightNavy mx-1 mt-1 pt-2">${user.age} yrs old</div>
            <div id="userDays" class="info-box bg-lightNavy mx-1 mt-1 pt-2">${user.daysHavePassed.toLocaleString()} days</div>
            <div id="userMoney" class="info-box bg-lightNavy mx-1 mt-1 pt-2">$${parseInt(user.money).toLocaleString()}</div>
        </div>

        <div id="itemBox" class="d-flex flex-column bg-dark ml-3 mt-2 w-100"></div>

        <div class="my-1 mr-2">

            <button type="button" id="reset"class="btn btn-lg btn-outline-secondary rounded-0 mr-2">
            <i class="fas fa-redo-alt text-white"></i>
            </button>

            <button type="button" id="save" class="btn btn-lg btn-outline-secondary rounded-0">
                <i class="fas fa-save text-white"></i>
            </button>
        </div>

    `;

    let itemBox = rightCon.querySelectorAll("#itemBox").item(0);
    createItemBox(itemBox, user);

    let burgerImg = leftCon.querySelectorAll("img").item(0);
    let burgerAmount = leftCon.querySelectorAll("h5").item(0);
    let userMoney = rightCon.querySelectorAll("#userMoney").item(0);
    let userDays = rightCon.querySelectorAll("#userDays").item(0);
    let userAge = rightCon.querySelectorAll("#userAge").item(0);
    let saveBtn = rightCon.querySelectorAll("#save").item(0);
    let resetBtn = rightCon.querySelectorAll("#reset").item(0);
    Interval.earnMoneyFromItemPerDay(userMoney, user);

     //burgerクリックのカウントとお金の増加
    burgerImg.addEventListener("click", function(){
        user.burgers += 1;
        user.money += user.earnableMoneyPerClick;
        burgerAmount.innerHTML = user.burgers.toLocaleString() + " Burgers";
        userMoney.innerHTML = "$" + parseInt(user.money).toLocaleString();

    });

    //セーブ機能
    saveBtn.addEventListener("click", function(){
        localStorage.setItem("userInfo", JSON.stringify(user));
        alert("Your data has been successfully saved! You can login by using same username.");
    });

    //データリセット機能
    resetBtn.addEventListener("click",function(){
        const ans = confirm("Are you sure you want to delete your account?");
        if(ans){
            localStorage.removeItem("userInfo")
            alert("Your data has been deleted. Please reload your browser to restart.");
        }
    })

    Interval.dayAge(userDays, userAge, user);

    let container = document.createElement("div");
    container.classList.add("d-flex", "w-100"); 
    container.append(leftCon,rightCon);

    return container;
};


function createItemBox(itemBox, user){
    
    for(let i = 0; i < ItemInfo.length; i++){

        itemBox.innerHTML += `
        <button class="btn rounded-0">
            <div class="bg-lightNavy mx-2 d-flex text-white w-90">
                <div class="d-flex justify-content-start">
                    <img src="${user.item[i].itemImg}" class="p-2 img-size">
                </div>
                <div class="d-flex flex-column justify-content-center align-items-start w-50">
                    <h4 class="pl-2 pb-3">${user.item[i].name}</h4>
                    <h5 class="pl-2">$${user.item[i].price.toLocaleString()}</h5>
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center w-25 position-relative">
                    <h4 id="itemAmount">${user.item[i].amount.toLocaleString()}</h4>
                    <h5 class="pl-1 text-success">${user.item[i].effect}</h5>
                </div>
            </div>
        </button>`;
    }

    //アイテムボタンを押した後の個別アイテムページ作成
    let detailedItemPage = itemBox.querySelectorAll(".btn");
    
    for(let i = 0; i < detailedItemPage.length; i++){

        detailedItemPage[i].addEventListener("click", function(){
            displayNone(detailedItemPage);
            itemBox.append(createItemPage(itemBox, i, user));
        })
    }

}

//アイテムボタンを押した後の個別アイテムページ作成
function createItemPage(itemBox, i, user){

    let container = document.createElement("div");
    let ItemObject = user.item[i];

    container.classList.add("bg-lightNavy", "w-90", "h-90", "d-flex", "flex-column","align-self-center", "mt-2",  "text-white","overflow-hidden");

    container.innerHTML = `
        <div class="m-4 d-flex w-100">
            <div>
                <h3 class ="mb-4">${ItemObject.name}<h3>
                <h4 class ="mb-4">Max Purchases: ${ItemObject.maximumAmount}<h4>
                <h4 class ="mb-4 pricetag${i}">Price: $${ItemObject.price.toLocaleString()}</h4>
                <h4 class ="mb-4">Get ${ItemObject.effect}</h4>
            </div>
            <div class="d-flex flex-row justify-content-end position-relative mt-3"  style="width: 450px;">
                <img src="${ItemObject.itemImg}" class="img-size">
            </div>
        </div>
        <div>
            <div class="ml-4">
                <h4>How Many would you like to purchase?</h4>
                <div class="form-group row">
                <div class="col-11">
                    <input type="number" class="form-control form-control-sm text-right item-input py-4" name="item${i}" placeholder="0" min = 1 style="font-size: 20px;">
                </div>
                </div>
                <h4 class="text-right total-cost" style="margin-right:58px;">Total: $0</h4>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center mt-4 mx-4">
                <div class="col-12 pl-0 mb-3 ml-3">
                    <button class="btn btn-primary btn-lg col-12 next-btn rounded-0">Purchase</button>
                </div>
                <div class="col-12 pl-0 ml-3">
                <button class="btn btn-outline-primary btn-lg col-12 back-btn rounded-0 text-primary bg-white">Go Back</button>
                </div>
            </div>
        </div>
    `;

    let currItem = container.querySelectorAll("input")[0];
    let totalCost = container.querySelectorAll(".total-cost")[0];
    let backBtn = container.querySelectorAll(".back-btn")[0];
    let nextBtn = container.querySelectorAll(".next-btn")[0];
    let userMoneyDisplay = document.getElementById("userMoney");
    let itemAmountDisplay= document.getElementById("itemAmount");

    //選択されたアイテム量によって金額合計をアップデート
    currItem.addEventListener("change", function(){
        let cost = ItemProcessing.costSummation(ItemObject.price, parseInt(currItem.value));
        totalCost.innerHTML = `Total: $${cost.toLocaleString()}`
    })
    
    //購入キャンセル => メインメニューに戻る
    backBtn.addEventListener("click", function(){
        itemBox.innerHTML = "";
        createItemBox(itemBox, user);
    })

    //購入確定ボタン
    nextBtn.addEventListener("click", function(){

        let cost = ItemProcessing.costSummation(ItemObject.price, parseInt(currItem.value));

        if(ItemProcessing.isAffordable(cost, user.money) && ItemProcessing.isAmountValid(ItemObject, parseInt(currItem.value)) && ItemObject.type !== "investment"){
            user.money -= cost;
            ItemObject.amount += parseInt(currItem.value);
            ItemProcessing.itemEffect(user, i, currItem.value);

            userMoneyDisplay.innerHTML = `$${parseInt(user.money).toLocaleString()}`;
            itemAmountDisplay.innerHTML = `${ItemObject.amount}`;

            //画面切り替え
            itemBox.innerHTML = "";
            createItemBox(itemBox, user);
        } 
        else if(ItemObject.type == "investment" && ItemProcessing.isAffordable(cost, user.money)){

            user.money -= cost;
            ItemObject.amount += parseInt(currItem.value);

            ItemObject.totalPrice += ItemObject.price;
            ItemObject.price = (ItemObject.name == "ETFStock") ? parseInt(ItemObject.price * 1.1) : ItemObject.price;
            container.querySelectorAll(`.pricetag${i}`).innerHTML = `Price: $${ItemObject.price.toLocaleString()}`;

            ItemProcessing.itemEffect(user, i, parseInt(currItem.value));

            userMoneyDisplay.innerHTML = `$${parseInt(user.money).toLocaleString()}`;
            itemAmountDisplay.innerHTML = `${ItemObject.amount}`;

            itemBox.innerHTML = "";
            createItemBox(itemBox, user);
        } 
        else if(!ItemProcessing.isAffordable(cost, user.money)){
            alert("Sorry! You don't have enough money to purchase this item.");
        } 
        else{
            alert("You've already purchased this item up to the maximum amount.");
        }
    })

    return container;
}

const ItemProcessing = {

    costSummation(cost, quantity){
        return cost * parseInt(quantity, 10);
    },
    
    isAffordable(cost, userMoney){
        return (userMoney >= cost && (userMoney-cost) >= 0);
    },
    
    isAmountValid(ItemObject, quantity){
        let x =  ItemObject.maximumAmount - ItemObject.amount;
        let y = ItemObject.maximumAmount - (ItemObject.amount + quantity);
    
        return (x >= 0 && y >= 0);
    },
    
    itemEffect(user, i, quantity){
    
        const burgerClickMoney = document.getElementById("userMoneyClick");
        const item = user.item[i];
    
        if(item.type == "ability"){
            user.earnableMoneyPerClick += 25 * quantity;
            burgerClickMoney.innerHTML = `$${user.earnableMoneyPerClick.toLocaleString()} / Click`;
        } 
        else if(item.type == "investment"){
            user.dailyIncome += item.totalPrice * item.effectmoney;
        } 
        else {
            user.dailyIncome += (item.effectmoney * quantity);
        }
            
    }
}

const Interval = {

    //日にちと年齢のカウント
    dayAge(userDays, userAge, user){
        setInterval(function(){
        userDays.innerHTML = user.daysHavePassed.toLocaleString() + " days";
        user.daysHavePassed++; 

        if(user.daysHavePassed % 365 == 0 && user.daysHavePassed !== 0){
            user.age += 1;
            userAge.innerHTML = user.age + " yrs old";
        }
        }, 1000);
    }, 

    earnMoneyFromItemPerDay(userMoney, user){ 
        setInterval(function(){
                user.money += parseInt(user.dailyIncome);
                console.log(user.dailyIncome);
                userMoney.innerHTML = `$${(parseInt(user.money).toLocaleString())}`;
            }, 1000);
    }
}

function displayNone(ele){
    if(ele == config.loginPage){
        let cssText = ele.style.cssText;
        ele.style.cssText = cssText + "display: none!important;";
    }  
    if(ele.length > 1){
        for(let i = 0; i < ele.length; i++){
            ele[i].classList.remove("d-block");
            ele[i].classList.add("d-none");
        }
    } else{
        ele.classList.remove("d-block");
        ele.classList.add("d-none");
    }
}

function displayBlock(ele){
    if(ele.length>1){
        for(let i = 0; i < ele.length; i++){
            ele[i].classList.remove("d-none");
            ele[i].classList.add("d-block");
        }
    } else {
        ele.classList.add("d-block");
        ele.classList.remove("d-none");
    }

}

loginProcedure();


