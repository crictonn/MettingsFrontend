import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";



// export const authRoutes = [
//     {
//         path: "/companies",
//         Component: Companies
//     },
//     {
//         path: "/company/add",
//         Component: AddCompany
//     },
//     {
//         path: "/users",
//         Component: Users
//     },
//     {
//         path: "/users/:id",
//         Component: User
//     }
// ]

export const publicRoutes = [
    {
        path: "/",
        Component: Landing,
    },
    {
        path: "/registration",
        Component: SignUp
    },
    {
        path: "/login",
        Component: SignIn
    },
    {
        path: "/home",
        Component: Home
    },
    // {
    //     path: "/createOrder",
    //     Component: CreateOrder
    // },
    {
        path: "/account",
        Component: Profile
    }
]