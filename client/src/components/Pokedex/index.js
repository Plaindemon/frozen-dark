import React from 'react';

import Hero from '../Hero';

import mystery from "../../assets/images/mystery.jpg"

import PokeCard from "./PokeCard";

function Pokedex() {
    return (
        <div>
            <section>
                <Hero img={mystery} />
                <p className="panel-heading">
                    Pokedex:

                </p>
            </section>



            <div>
                <div>
                    <PokeCard />

                </div>
                
            </div>
        </div>
    );
}

export default Pokedex;