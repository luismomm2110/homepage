import React, { useEffect } from  "react";
import { useIterator } from "./hooks";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export default function RepoMenu({ repositories, 
    onSelect = f => f })

    { 
        const  [{ name, description, html_url}, previous, next] = useIterator(repositories);

        useEffect(() => {
            if (!name) return;
            onSelect(name);        
        }, [name]);

        return(
            <div>
                <div> 
                    <p> <a href={html_url}>{name}</a></p>
                </div>
                <div> 
                    <p>{description}</p>        
                </div>
                    <button style={{"margin" : "3%"}} onClick={previous}><FaAngleLeft /></button>
                    <button onClick={next}><FaAngleRight /></button>
            </div>
        )


    }
