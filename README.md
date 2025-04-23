# 🍽️ Restaurant POS Backend

A simple backend service for managing restaurant orders using Node.js, Express, and MongoDB. It includes endpoints to create and fetch orders, with validation and total price calculation.

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose

---

## 📁 Project Structure

```
.
├── controllers/
│   └── menu.js      
    └── orders.js       
    └── restaurant.js      
├── models/
│   ├── restaurant.js
│   ├── Menu.js
│   └── order.js
├── routes/
│   ├── orders.js
│   └── menu.js
│   └── restaurant.js                 
├── .env
├── server.js
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/alfeztintoiya/RebelMinds-Backend-Task.git
cd restaurant-pos-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_atlas_uri
PORT=3000
```

### 4. Start the Server

```bash
npm start
```

Server will run at: `http://localhost:3000`

---

## 📦 API Endpoints

### ➕ Create Order

```http
POST /orders
Content-Type: application/json
```

#### 📅 Sample Request Body

```json
{
  "restaurant_id": "643a9a1f2f1234567890abcd",
  "customer_name": "Alice",
  "order_type": "DINE_IN",
  "items": [
    { "menu_item_id": "643a9b2f1d1234567890efgh", "quantity": 2 },
    { "menu_item_id": "643a9b2f1d1234567890ijkl", "quantity": 1 }
  ]
}
```

#### ✅ Response

```json
{
  "order_id": "66270ff2bd23da4a6c0df20c",
  "customer_name": "Alice",
  "order_type": "DINE_IN",
  "created_at": "2025-04-23T10:34:10.021Z",
  "items": [
    { "name": "Margherita Pizza", "quantity": 2, "total": 600 },
    { "name": "Farmhouse Pizza", "quantity": 1, "total": 350 }
  ],
  "total_price": 950
}
```


---

### 📄 Get Order Details

```http
GET /orders/:id
```

#### ✅ Response

```json
{
  "order_id": "66270ff2bd23da4a6c0df20c",
  "customer_name": "Alice",
  "order_type": "DINE_IN",
  "created_at": "2025-04-23T10:34:10.021Z",
  "items": [
    { "name": "Margherita Pizza", "quantity": 2, "total": 600 },
    { "name": "Farmhouse Pizza", "quantity": 1, "total": 350 }
  ],
  "total_price": 950
}
```



---

## 🌐 Deployment Instructions

1. Push your code to GitHub
2. Deploy the project
3. Connect to MongoDB Atlas using your connection string in `.env`

---

## 🛠️ Future Improvements

- Add user authentication
- Order status tracking (e.g., PREPARING, READY, COMPLETED)
- Admin dashboard for managing restaurants and menus
- Pagination & filtering for orders

---
##📧 Contact

Created by Alfez Tintoiya — feel free to reach out for feedback or questions!
<p>
  <a href="https://www.linkedin.com/in/alfez-tintoiya/" rel="nofollow noreferrer">
    <img src="https://i.sstatic.net/gVE0j.png" alt="linkedin"> LinkedIn
  </a> &nbsp; 
  <a href="https://github.com/alfeztintoiya" rel="nofollow noreferrer">
    <img src="https://i.sstatic.net/tskMh.png" alt="github"> Github
  </a>
</p>