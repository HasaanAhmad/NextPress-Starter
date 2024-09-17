import { auth } from "./server/auth";

// Routes
// import {
//     PUBLIC_ROUTES,
//     PROTECTED_ROUTES,
//     AUTH_ROUTES,
//     API_AUTH_PREFIX,
//     DEFAULT_LOGIN_REDIRECT,
//   } from "./routes";
  

export default auth(async (req) => {
    const pathname = req.nextUrl.pathname;
    // YOU CAN USE THE PATHNAME TO CHECK IF THE USER IS ALLOWED TO ACCESS THE ROUTE
    console.log(pathname);

});
export const config = {
    matcher: [
      "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
      "/(api|trpc)(.*)",
    ],
  };