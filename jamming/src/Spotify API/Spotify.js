import React from "react";

let userAccessToken = "";

const clientID = '8f0370d8bc9b47e1b982db349ddcb2c6';
const redirectURI = `http://localhost:3000/`;

const Spotify = {
    getAccessToken() {
        // First check
        if (userAccessToken) return userAccessToken;

        const token = window.location.href.match(/access_token=([^&]*)/);
        const expiry = window.location.href.match(/expires_in=([^&]*)/);

        // Second check for the access token
        if (token && expiry) {
            // Setting values for token and expiration time
            const userAccessToken = token[1];
            const expiresIn = Number(expiry[1]);

            // Setting the access token to expire at the value for expiration time
            window.setTimeout(() => (userAccessToken = ''), expiresIn * 1000);
            window.history.pushState('Access token', null, '/');
            
            // Returning the access token
            return userAccessToken;
        }

        //Redirect
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = redirect;
    },

    // Search method
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (!jsonResponse) {
                    console.error('Response error!');
                }
                return jsonResponse.tracks.items.map((t) => ({
                    id: t.id,
                    name: t.name,
                    artist: t.artists[0].name,
                    album: t.album.name,
                    uri: t.uri,
                }));
            }); // Second .then() statement
    }, // getAccessToken function

    savePlaylist(name, trackUris) {
        if (!name || !trackUris) return;
        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, { headers: header })
            .then((response) => response.json())
            .then((jsonResponse) => {
                userId = jsonResponse.id
                let playlistId;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, { 
                    headers: header, 
                    method: 'post', 
                    body: jsonResponse.stringify({ name: name }), 
                })
                .then((response) => response.json())
                .then((jsonResponse) => {
                    playlistId = jsonResponse.id
                    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,  {
                        headers: header,
                        method: 'post',
                        body: JSON.stringify({ uris: trackUris }),
                    })
                });
            });
    },
}; // Spotify Initializer

export {Spotify};