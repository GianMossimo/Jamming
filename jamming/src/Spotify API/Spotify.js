import React from "react";

let userAccessToken = "";

const clientID = '8f0370d8bc9b47e1b982db349ddcb2c6';
const redirectURI = `http://localhost:3000/`;

const Spotify = {
    getAccessToken() {
        // First check
        if (userAccessToken) {
            return userAccessToken
        }

        const token = window.location.href.match(/access_token=([^&]*)/);
        const expiry = window.location.href.match(/expires_in=([^&]*)/);
        if (token && expiry) {
            userAccessToken = token[1];
            const expiresIn = Number(expiry[1]);
            window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
            window.history.pushState('Access token', null, '/');
            return userAccessToken;
        } else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirect;
        }
    },

    // Search method
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    art: track.album.images[0].url,
                    uri: track.uri,
                }));
            }); // Second .then() statement
    }, // getAccessToken function

    savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        }

        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userId;

        return fetch('https://api.spotify.com/v1/me', { headers: header })
            .then(response => response.json())
            .then(jsonResponse => {
                userId = jsonResponse.id
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, { 
                    headers: header, 
                    method: 'POST', 
                    body: JSON.stringify({ name: name }), 
                })
                .then((response) => response.json())
                .then((jsonResponse) => {
                    const playlistId = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/users/${userId}playlists/${playlistId}/tracks`,  {
                        headers: header,
                        method: 'POST',
                        body: JSON.stringify({ uris: trackUris }),
                    })
                });
            });
    },
}; // Spotify Initializer

export {Spotify};