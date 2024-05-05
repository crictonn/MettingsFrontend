import SignUp from "../../../WebstormProjects/meetings/src/pages/SignUp";
import SignIn from "../../../WebstormProjects/meetings/src/pages/SignIn";
import Landing from "./pages/Landing";



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
    // {
    //     path: "/home",
    //     Component: Home
    // },
    // {
    //     path: "/createOrder",
    //     Component: CreateOrder
    // },
    // {
    //     path: "/account",
    //     Component: Profile
    // }
]