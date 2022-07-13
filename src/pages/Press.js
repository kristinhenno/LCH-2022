import React from 'react'
import ch from '../images/pressCovers/ch.jpg'
import cowboy from '../images/pressCovers/cowboy.jpg'
import domino from '../images/pressCovers/domino.jpg'
import domino2 from '../images/pressCovers/domino2.jpg'
import eg from '../images/pressCovers/eg.jpg'
import eg2 from '../images/pressCovers/eg2.jpg'
import gg from '../images/pressCovers/gg.jpg'
import luxe from '../images/pressCovers/luxe.jpg'
import micasa from '../images/pressCovers/micasa.png'
import micasa2 from '../images/pressCovers/micasa2.png'
import mydomaine from '../images/pressCovers/mydomaine.png'
import sbls from '../images/pressCovers/sbls.jpg'
import sbls2 from '../images/pressCovers/sbls2.png'
import sbmag from '../images/pressCovers/sbmag.jpg'
import ImgScrollOverlay from '../components/ImgScrollOverlay'

const projects = [
    {
        'image': sbls,
        'url': '/press/sbls',
        'name': 'Santa Barbara Life & Style'
    },

    {
        'image': luxe,
        'url': '/press/luxe',
        'name': "Luxe Design & Interiors"
    },
    {
        'image': ch,
        'url': '/press/ch',
        'name': 'California Homes'
    },
    {
        'image': sbmag,
        'url': '/press/sb',
        'name': 'Santa Barbara Magazine'
    },
    {
        'image': sbls2,
        'url': '/press/sbls2',
        'name': 'Santa Barbara Life & Style'
    },
    {
        'image': cowboy,
        'url': '/press/cowboys',
        'name': 'Cowboys & Indians'
    },
    {
        'image': domino,
        'url': '/press/domino',
        'name': 'Domino'
    }
    ,
    {
        'image': domino2,
        'url': '/press/domino2',
        'name': 'Domino'
    }
    ,
    {
        'image': mydomaine,
        'url': '/press/domaine',
        'name': 'My Domaine'
    }
    ,
    {
        'image': micasa,
        'url': '/press/micasa',
        'name': 'Mi Casa'
    },
    {
        'image': micasa2,
        'url': '/press/micasa2',
        'name': 'Mi Casa'
    }
    ,
    {
        'image': eg,
        'url': '/press/eg',
        'name': 'The Every Girl'
    }
    ,
    {
        'image': eg2,
        'url': '/press/eg2',
        'name': 'The Every Girl'
    }
    ,
    {
        'image': gg,
        'url': '/press/glitter',
        'name': 'The Glitter Guide'
    }

]

function Press() {

    return (
        <div>
            {ImgScrollOverlay(projects)}
        </div>

    )
}

export default Press;
