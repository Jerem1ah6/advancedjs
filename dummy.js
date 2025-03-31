// Dummy User Data
 const users = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      address: "123 Main St, Springfield, IL",
      phone: "123-456-7890",
      role: "customer"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@yahoo.com",
      address: "456 Oak St, Springfield, IL",
      phone: "987-654-3210",
      role: "customer"
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@ecommerce.com",
      address: "Admin Street, Springfield, IL",
      phone: "555-000-1234",
      role: "admin"
    }
  ];
  
  // Dummy Product Data
 const products = [
    {
      id: 1,
      name: "Laptop",
      description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
      price: 999.99,
      stock: 50,
      category: "Electronics",
      imageUrl: "https://via.placeholder.com/150?text=Laptop"
    },
    {
      id: 2,
      name: "Smartphone",
      description: "A smartphone with a 6.5-inch display and 128GB storage.",
      price: 499.99,
      stock: 100,
      category: "Electronics",
      imageUrl: "https://via.placeholder.com/150?text=Smartphone"
    },
    {
      id: 3,
      name: "Running Shoes",
      description: "Comfortable running shoes with cushioned soles.",
      price: 79.99,
      stock: 150,
      category: "Apparel",
      imageUrl: "https://via.placeholder.com/150?text=Running+Shoes"
    },
    {
      id: 4,
      name: "Wireless Headphones",
      description: "Noise-cancelling wireless headphones with excellent sound quality.",
      price: 129.99,
      stock: 75,
      category: "Accessories",
      imageUrl: "https://via.placeholder.com/150?text=Headphones"
    }
  ];
  
  // Function to display users
  function displayUsers() {
    const userList = document.getElementById('userList');
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Role:</strong> ${user.role}</p>
      `;
      userList.appendChild(userDiv);
    });
  }

  // Function to display products
  function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" width="150">
        <div>
          <h3>${product.name}</h3>
          <p><strong>Description:</strong> ${product.description}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>Stock:</strong> ${product.stock}</p>
          <p><strong>Category:</strong> ${product.category}</p>
        </div>
      `;
      productList.appendChild(productDiv);
    });
  }

  // Calling functions to display data
  displayUsers();
  displayProducts();