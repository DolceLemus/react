import React from 'react'
import PropertyItem from 'property'

const PropertiesList = () =>{
    return(
        <div className="container_list">
            <ul className="list">
                {
                    this.props.list.map((properties) => {
                        return <PropertyItem codigo={properties.id}
                                             municipio={properties.municipio}
                                             colonia={properties.colonia}
                                             terreno={properties.terreno}
                                             habitaciones={properties.habitaciones}
                                             banos={properties.banos}
                                             estacionamiento={properties.estacionamiento}
                                             precio={properties.precio}
                                             moneda={properties.moneda} />
                    })
                }
            </ul>
        </div>
    )
}

export default PropertiesList