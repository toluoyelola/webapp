import React from 'react'

export default function ProfileCard({ name, bio, imageUrl }) {
    return (
        <div>
            <img src={imageUrl} alt="Profile" />
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}