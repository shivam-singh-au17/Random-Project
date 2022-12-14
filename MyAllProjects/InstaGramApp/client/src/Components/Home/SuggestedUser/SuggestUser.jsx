import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { loadData } from '../../../Utils/localStorage'
import { Details } from './Details'
import {Link} from "react-router-dom"
import { IndividualUserSuggestion } from './IndividualUserSuggestion'
import axios from 'axios'

const SuggestUser = () => {
    const [profile, setProfile] = useState({})
    const [followings, setFollowings] = useState([])
    const [newPerson, setNewPerson] = useState([])
    const suggestions = useSelector(state => state.user.user)
    useEffect(() => {
        let b = loadData("users")
        setProfile(b)
        let u_id = loadData('users')._id
        axios.get(`http://localhost:2511/users/${u_id}`)
        .then((res) => setFollowings(res.data.data.following))

        let updatednew = suggestions?.filter((item) => !followings.includes(item._id))
        setNewPerson(updatednew)
    }, [suggestions, followings])

    
    return (
        <SuggestionsWrapper>
            <UserProfile>
                <img src={profile.profilePic} alt="profile" />
                <div>
                    <Link to={`/${profile.username}`}>
                    <h4>{profile.username}</h4>
                    <p>{profile.fullname}</p>
                    </Link>
                </div>
            </UserProfile>
            <br />
            <SuggestionHead>
                <h4>Suggestions For You</h4>
                <p>See All</p>
            </SuggestionHead>
            {newPerson &&
                <>
                    <IndividualUserSuggestion profilePic={newPerson[0]?.profilePic} username={newPerson[0]?.username} id={newPerson[0]?._id} />
                    <IndividualUserSuggestion profilePic={newPerson[1]?.profilePic} username={newPerson[1]?.username} id={newPerson[1]?._id} />
                    <IndividualUserSuggestion profilePic={newPerson[2]?.profilePic} username={newPerson[2]?.username} id={newPerson[2]?._id} />
                    <IndividualUserSuggestion profilePic={newPerson[3]?.profilePic} username={newPerson[3]?.username} id={newPerson[3]?._id} />
                    <IndividualUserSuggestion profilePic={newPerson[4]?.profilePic} username={newPerson[4]?.username} id={newPerson[4]?._id} />
                </>
            }
            <Details />
        </SuggestionsWrapper>

    )
}

export { SuggestUser }

const SuggestionsWrapper = styled.div`
    width:24%;
    right:15%;
    position: fixed;
    height:480px;
    margin-top: 30px;
    padding: 30px 10px 10px 20px;
    @media (max-width: 1000px) {
        display: none;
    }
`
const UserProfile = styled.div`
    height: 60px;
    display: flex;
    gap:15px;
    img {
        background: white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    div {
        padding-top: 12px;
        font-size: 13px;
        cursor: pointer;
        a{
            color:black;
        text-decoration: none;
        }
    }
    p{
        color: #9C9C9C;
    }
    h4{
        font-weight: 600;
    }
`
const SuggestionHead = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 14px;
    h4{
        color: #9C9C9C;
        font-weight: 500;
    }
    p{
        cursor: pointer;
        font-weight: 400
    }
`