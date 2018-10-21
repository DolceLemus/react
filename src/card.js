import React from 'react'
import PropertiesList from './properties'

class CardApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            propiedades : []
        }
    }
    
    componentWillMount(){
        fetch('https://whcyt.herokuapp.com/propiedades')
        .then((response) => {
            return response.json()
        })
        .then((propiedades) => {
            this.setState({ propiedades: propiedades })
        })
    }

    render(){
        console.log(this.state.propiedades.propiedades);
        if(this.state.propiedades.length > 0){
            return (
                <div>
                    <PropertiesList list={this.state.propiedades} />
                </div>
            )
        }
        return <p className="mesage_wait"> Please wait...</p> 
    }
}

export default CardApp

 /* let allData = []

            properties.propiedades.forEach( (property) =>{
                let data = {
                    codigo: property.id,
                    municipio: property.municipio,
                    colonia: property.colonia,
                    terreno: property.terreno,
                    habitaciones: property.habitaciones,
                    banos: property.banos,
                    estacionamiento: property.estacionamiento,
                    precio: property.precio,
                    moneda: property.moneda

                }
                allData.push(data)
                console.log(allData);
                this.setState({ properties: allData})
            })
        return allData;*/