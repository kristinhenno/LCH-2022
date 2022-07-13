import React from 'react'
import boho from '../images/portfolioCovers/boho.jpg'
import bungalow from '../images/portfolioCovers/bungalow.jpg'
import cabana from '../images/portfolioCovers/cabana.jpg'
import casita from '../images/portfolioCovers/casita.jpg'
import hacienda from '../images/portfolioCovers/hacienda.jpg'
import maison from '../images/portfolioCovers/maison.jpg'
import ImgScrollOverlay from '../components/ImgScrollOverlay'

const projects = [
    {
        'image': casita,
        'url': '/portfolio/casita',
        'name': 'Casita Blanquita'
    },

    {
        'image': bungalow,
        'url': '/portfolio/bungalow',
        'name': "Lauren's Bungalow"
    },
    {
        'image': maison,
        'url': '/portfolio/maison',
        'name': 'Eclectic Maison'
    },
    {
        'image': boho,
        'url': '/portfolio/boho',
        'name': 'Boho Casa'
    },
    {
        'image': cabana,
        'url': '/portfolio/cabana',
        'name': 'Summer Cabana'
    },
    {
        'image': hacienda,
        'url': '/portfolio/hacienda',
        'name': 'Santa Fe Hacienda'
    }
]

function Portfolio() {

    return (
        <div>
            {ImgScrollOverlay(projects)}
        </div>

    )
}

export default Portfolio;
