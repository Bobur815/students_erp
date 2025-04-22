document.addEventListener("DOMContentLoaded", () => {
    let userForm=document.getElementById("userAdd");
    let usernameInput=document.getElementById("usernameInput");
    let telephoneInput=document.getElementById("telephoneInput");
    let customersList=document.querySelector(".customers-list");
    let clientIdElement=document.getElementById("clientId");
    let userHeader=document.getElementById("userHeader");
    let foodForm=document.getElementById("foodsForm");
    let foodsSelect=document.getElementById("foodsSelect");
    let foodsCount=document.getElementById("foodsCount");
    let ordersList=document.querySelector(".orders-list");
    let users=JSON.parse(localStorage.getItem("users")) || [
        { userId: 1, userName: "Abduraxmon", phone: "+1234567890" },
        { userId: 2, userName: "Muxammadaziz", phone: "+0987654321" },
        { userId: 3, userName: "Azizbek", phone: "+1122334455" },
    ];

    let foods=[
        { id: 1, name: "Pizza", image: "pizza.jpg" },
        { id: 2, name: "Burger", image: "burger.jpg" },
        { id: 3, name: "Pasta", image: "pasta.webp" },
    ];

    let orders=JSON.parse(localStorage.getItem("orders")) || [];
    let currentUserId=JSON.parse(localStorage.getItem("currentUserId")) || null;

    function saveToLocalStorage() {
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("orders", JSON.stringify(orders));
        localStorage.setItem("currentUserId", JSON.stringify(currentUserId));
    }

    function renderUsers() {
        customersList.innerHTML="";
        users.forEach(user => {
            let listItem=document.createElement("li");
            listItem.classList.add("customer-item");
            listItem.innerHTML=`<span class="customer-name">${user.userName}</span>
                                  <a class="customer-phone" href="https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnl8ZW58MHx8MHx8fDA%3D">${user.phone}</a>`;

            listItem.addEventListener("click", () => {
                clientIdElement.textContent=user.userId;
                userHeader.textContent=user.userName;
                currentUserId=user.userId;
                saveToLocalStorage();
                renderOrders();
            });

            customersList.appendChild(listItem);
        });
    }

    function renderOrders() {
        ordersList.innerHTML="";
        let userOrders = orders.filter(order => order.userId === currentUserId);
        userOrders.forEach(order=>{
            let selectedFood=foods.find(f => f.id === order.foodsId);
            if (selectedFood) {
                let orderItem=document.createElement("li");
                orderItem.classList.add("order-item");
                orderItem.innerHTML=`<img src="${selectedFood.image}" alt="${selectedFood.name}">
                                       <div>
                                           <span class="order-name">${selectedFood.name}</span>
                                           <span class="order-count">${order.count}</span>
                                       </div>`;
                ordersList.appendChild(orderItem);
            }
        });
    }

    userForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let username=usernameInput.value.trim();
        let telephone=telephoneInput.value.trim();

        if (username && telephone) {
            let newUserId=users.length + 1;
            users.push({ userId: newUserId, userName: username, phone: telephone });
            saveToLocalStorage();
            renderUsers();
            usernameInput.value="";
            telephoneInput.value="";
        }
    });

    foodForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let selectedFoodId=parseInt(foodsSelect.value);
        let count=parseInt(foodsCount.value.trim());
        if (selectedFoodId && count > 0 && currentUserId) {
            orders.push({ id: orders.length + 1, userId: currentUserId, foodsId: selectedFoodId, count: count });
            saveToLocalStorage();
            renderOrders();
            foodsCount.value="";
        }
    });

    foods.forEach(food => {
        let option=document.createElement("option");
        option.value=food.id;
        option.textContent=food.name;
        foodsSelect.appendChild(option);
    });

    renderUsers();

    if (currentUserId) {
        let selectedUser=users.find(user=>user.userId===currentUserId);
        if (selectedUser) {
            clientIdElement.textContent = selectedUser.userId;
            userHeader.textContent = selectedUser.userName;
            renderOrders();
        }
    }
});
