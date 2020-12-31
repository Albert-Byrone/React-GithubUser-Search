import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


const GithubContext = React.createContext();
const GithubProvider = ({ children }) =>{
    const [ githubUser, setGithubUser] = useState(mockUser);
    const [ repos, setRepos] = useState(mockRepos);
    const [ followers, setFollowers] = useState(mockFollowers);
    const [requests, setRequests] = useState(0);
    const [isLoading, setIsLoading]  = useState(false);

    const [error, setError] = useState({ show:false, msg: ""})

    const searchGithubUser = async(user)=>{
        toggleError();
        setIsLoading(true)
        const response = await axios(`${rootUrl}/users/${user}`)
            .catch((err)=>console.log(err))

        if(response){
            setGithubUser(response.data);
            const { login, followers_url } = response.data;
             //repos
            //https://api.github.com/users/Albert-Byrone/repos?per_page=30
            axios(`${rootUrl}/users/${login}?per_pages=30`).then((response)=>{
                setRepos(response.data)
            }).catch(err=>console.log(err))
            // followers
            //https://api.github.com/users/Albert-Byrone/followers
            axios(`${followers_url}?per_pages=30`).then((response)=>{
                setFollowers(response.data)
            }).catch(err=>console.log(err))
        }else{
            toggleError(true, "The user does not exist")
        }
        checkRequests();
        setIsLoading(false);
    }

    const checkRequests = () =>{
        axios(`${rootUrl}/rate_limit`)
            .then(({data})=>{
                let { rate: {remaining} } = data;
                setRequests(remaining);
                if(remaining === 0){
                    // throw an error
                    toggleError(true, "Limit reached.Please try after one hour");
                }
            })
            .catch((err)=> console.log(err))
    }

    function toggleError(show=false, msg=''){
        setError({show, msg});
    }
    useEffect(checkRequests, [])

    return <GithubContext.Provider value={{followers,githubUser,repos, requests, error, searchGithubUser, isLoading}}>
        {children}
    </GithubContext.Provider>
}                                       

export{ GithubContext, GithubProvider};