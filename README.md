# 🚀 Next.js 14 Starter Kit with Auth.js, PostgreSQL, Prisma, ShadCN, and TypeScript

Welcome to **NextPress**, a robust starter template designed to get you up and running quickly with the latest stack, including **Next.js 14**, **Auth.js**, **PostgreSQL**, **Prisma**, **ShadCN**, and **TypeScript**. Whether you're starting a new project or looking to streamline your development process, **NextPress** has you covered with the best practices and tools. 
Note: Uncomment the Adapter for Database to use it. (server/auth.ts)

## 📦 What's Inside?

- **Next.js 14** – The latest version of the React framework with improved features and performance.
- **Auth.js** – Flexible authentication with multiple providers like Google, GitHub, and more.
- **PostgreSQL** – A powerful and open-source database.
- **Prisma** – Next-generation ORM for seamless database interaction.
- **ShadCN** – A styling solution for modern UI components.
- **TypeScript** – Strongly typed JavaScript for better code quality and developer experience.

## 🚀 Get Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/HasaanAhmad/NextPress-Starter
cd NextPress-Starter
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Setup Environment Variables

Create your `.env` files based on the `.env.example` provided in the repository.

**Example:**

```bash
# DATABASE
DATABASE_URL='YOUR DATABASE URL'

# AUTHJS
AUTH_GOOGLE_ID='GOOGLE CLIENT ID FROM GCP CONSOLE'
AUTH_GOOGLE_SECRET='GOOGLE SECRET ID'
AUTH_SECRET=""

# Add more providers if necessary
```

### STEP 3.1(Optional): Push to DB
```bash
npx prisma db push
```

### Step 4: Migrate the Database

```bash
npx prisma migrate dev
```

### Step 5: Generate Prisma Client

```bash
npx prisma generate
```



### Step 6: Run the Development Server

```bash
npm run dev
```

Now, navigate to `http://localhost:3000` to see the app live.

## 💻 Stack Overview: **NextAuth PrismaPress**

**NextAuth PrismaPress** is your go-to solution for building full-stack applications with:

- Fast and efficient **Next.js 14** routing and rendering.
- Scalable **PostgreSQL** database.
- Secure and customizable authentication using **Auth.js**.
- Intuitive **Prisma ORM** for database modeling and querying.
- Beautiful UI styling with **ShadCN** components.
- Type-safe code with **TypeScript** integration.

## 🌟 Features

- 🔒 **Secure Authentication**: Pre-configured with Auth.js for easy setup of Google and other providers.
- 📊 **Database Ready**: PostgreSQL with Prisma for smooth migrations and database operations.
- 💅 **Customizable UI**: Use ShadCN to quickly style your components.
- 🧩 **Modular Codebase**: Clean and structured project for scalability and maintainability.
- 🚀 **Enhanced Folder Structure**: Folder structure with Modern Practises for Server Actions, Hooks, Providers etc.

## 🎨 Live Demo

Check out the live version of **NextPress** hosted at [NextPress-Starter]().

## ❤️ Made with Love

Crafted with ❤️ by **Hasaan Ahmad**.

If you find this template useful, feel free to star the repository, and contribute to make it even better!

## 🤝 Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request.