// state manager for favourites movies

import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

// this provides state to any of the components that are wrapped arounnd it
export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites");

        if (storedFavs) setFavourites(JSON.parse(storedFavs));
        
    }, [])


    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    }, [favourites])

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId)
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }
    
    
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
};
