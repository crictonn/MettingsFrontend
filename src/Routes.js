import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Meeting from "./pages/Meeting";
import NewMeeting from "./pages/NewMeeting";
import Location from "./pages/Location";
import Users from "./pages/Users";



export const adminRoutes = [
    // {
    //     path: "/companies",
    //     Component: Companies
    // },
    // {
    //     path: "/company/add",
    //     Component: AddCompany
    // },
    {
        path: "/users",
        Component: Users
    },
    // {
    //     path: "/users/:id",
    //     Component: User
    // }
]

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
    {
        path: "/meeting/:id",
        Component: Meeting
    },
    {
        path: "/account",
        Component: Profile
    },
    {
        path: "/meeting/new",
        Component: NewMeeting
    },
    {
        path: "/location/new",
        Component: Location
    }
]