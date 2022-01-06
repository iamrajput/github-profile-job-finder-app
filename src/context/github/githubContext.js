import {
    createContext,
    useReducer
} from 'react'
import githubReducer from './githubReducer'

const GithubContext = createContext()

export const GithubProvider = ({
    children
}) => {
    // const [users, setUsers] = useState([])
    // const [loading, setloading] = useState(true)
    //here we are using the useReducer hook
     const initailState = {
         users:[],
         user:{},
         loading:false,
         repos:[]
     }

    const [state,dispatch] = useReducer(githubReducer,initailState)

    //get the users
    // const fetchUsers = async () => {
    //     setLoader()
    //     const response = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //     const data = await response.json()
    //     // setUsers(data)
    //     // setloading(false)
    //     dispatch({
    //         type:'GET_USERS',
    //         payload: data
    //     })
    // }

 //clear the search result
//    const clearSearch = () => dispatch({
//       type: 'CLEAR_USERS'
//    })


  //search users

    // const searchUsers = async (text) => {
    //     setLoader()
    //     const params = new URLSearchParams({
    //         q:text
    //     })
    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //     const {items} = await response.json()
    //     // setUsers(data)
    //     // setloading(false)
    //     dispatch({
    //         type:'GET_USERS',
    //         payload: items
    //     })
    // }

// //fetch single user

//     const getUser = async (login) => {
//         setLoader()
//         const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`
//             }
//         })
//         if(response.status === 404) {
//             window.location = '/notfound'
//         }else{
//             const data = await response.json()
//             dispatch({
//                 type:'GET_USER',
//                 payload: data
//             })
//         }
//     }

// //get the repos

// const getUsersRepos = async (login) => {
//     setLoader()
//     const params = new URLSearchParams({
//         sort:'created',
//         per_page:10
//     })
//     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//         headers: {
//             Authorization: `token ${GITHUB_TOKEN}`
//         }
//     })
//     const data = await response.json()
//     // setUsers(data)
//     // setloading(false)
//     dispatch({
//         type:'GET_REPOS',
//         payload: data
//     })
// }


    //set loader
    // const setLoader = () => dispatch({
    //     type:"SET_LOADING"
    // })
    
    return <GithubContext.Provider value = {
            {
                ...state,
                dispatch
            }
        }>
        {children}
        </GithubContext.Provider>
}

export default GithubContext 