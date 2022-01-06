import GithubContext from '../context/github/githubContext'
import {useEffect,useContext} from  'react'
import Spinner from '../componenets/layouts/Spinner'
import {getUser} from '../context/github/githubAction'

function About() {
  const {user,loading,dispatch} = useContext(GithubContext)
   useEffect(() => {
        dispatch({type:'SET_LOADING'})
        const getUserData = async() => {
          const userData = await getUser('iamrajput')
          dispatch({type:'GET_USER',payload:userData})
     }
     getUserData()
   }, [dispatch]);

   const {
    name,
    avatar_url,
    bio,
    login,
    followers,
    following,
    public_repos
  } = user


   if(loading){
       return <Spinner />
   }
    return (
        <>
              <div className="flex items-center w-full px-4 py-10 bg-cover card">
                <div className="card glass lg:card-side text-neutral-content">
                  {/* <figure className="p-6">
                    <img src={avatar_url} className="rounded-lg shadow-lg" />
                  </figure>  */}
                   <div className='custom-card-image'>
                      <div className='rounded-lg shadow-xl card image-full'>
                        <figure>
                          <img src={avatar_url} alt=''  className="h-48 w-96"/>
                        </figure>
                        <div className='card-body justify-end'>
                          <h2 className='card-title mb-0'>{name}</h2>
                          <p>{login}</p>
                        </div>
                  </div>
                  <div className="max-w-md card-body">
                    {/* <h2 className="card-title">Glass</h2>
                     <div className="badge mb-2 badge-secondary">NEW</div> */}
                <p>{bio}</p>
                <div className="card-actions mt-2">
                <div className="shadow stats">
                    <div className="stat">
                      <div className="stat-title">Following</div> 
                         <div className="stat-value">{following}</div> 
                    </div>
                  </div>
                  <div className="shadow stats">
                    <div className="stat">
                      <div className="stat-title">Followers</div> 
                         <div className="stat-value">{followers}</div> 
                    </div>
                  </div>
                  <div className="shadow stats">
                    <div className="stat">
                      <div className="stat-title"> Repos</div> 
                         <div className="stat-value"> {public_repos}</div> 
                    </div>
                  </div>
                </div>
                    <div className="card-actions justify-end">
                    <a
                      href="https://iamatul.netlify.app"
                      target='_blank'
                      rel='noreferrer'
                      className="btn glass rounded-full"
                    >
                       More Info
                    </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
        </>
      )
    }
export default About
