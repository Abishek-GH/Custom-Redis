# **Custom Redis Server (Minimal Implementation) 🚀**

This is a simple in-memory key-value store that mimics basic **Redis functionality** (`SET` and `GET`). It runs on **TCP** and follows **Redis Serialization Protocol (RESP)**. You can connect using the **Redis CLI** and perform basic operations.

---

## **📌 Features**

✅ Stores data in **memory** (No database required).  
✅ Supports **SET** and **GET** commands.  
✅ Follows **Redis Protocol (RESP)** for communication.  
✅ Works with **Redis CLI** for easy interaction.

---

## **📥 Installation**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/custom-redis.git
cd custom-redis
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

---

## **🚀 Usage**

### **1️⃣ Start the Server**

Run the following command:

```sh
node index.js
```

You should see:

```
Custom Redis Server is Running...
```

### **2️⃣ Open Redis CLI and Connect**

In another terminal, connect using:

```sh
redis-cli -p 8000
```

Now, you can execute commands just like in Redis!

### **3️⃣ Test Commands**

#### **SET a Key**

```sh
SET myname Abishek
```

✅ Output:

```
OK
```

#### **GET the Value**

```sh
GET myname
```

✅ Output:

```
"Abishek"
```

#### **GET a Non-Existing Key**

```sh
GET unknownkey
```

✅ Output:

```
(nil)
```

---

## **🛠 How It Works**

- Creates a **TCP server** using `net` module.
- Uses `redis-parser` to parse commands.
- Stores key-value pairs in **memory** (`store` object).
- Sends responses in **Redis protocol format**.

---

## **📌 Future Enhancements**

🔹 Add **key expiration (TTL)**.  
🔹 Support **more Redis commands**.  
🔹 Implement **persistence (save to disk)**.

---

## **📄 License**

This project is **open-source** and free to use.  
Feel free to **fork**, improve, and contribute! 🚀🔥
