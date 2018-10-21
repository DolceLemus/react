import React from 'react'
import ImageProperty from 'images'

const PropertyItem = () => {
    return(
        <li className="item">
            <ImageProperty imagen={this.props.imagen} />
            <div>
                <p>Codigo {this.props.codigo}</p>
                <p>{this.props.municipio}, {this.props.colonia}</p>
                <p>{this.props.terreno}m² {this.props.habitaciones} {this.props.banos} {this.props.estacionamiento}</p>
                <p>{this.props.precio} {this.props.moneda}</p>
            </div>
        </li>
    )
}

export default PropertyItem