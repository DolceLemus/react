import React from 'react'
import PropertiesList from './properties'

class CardApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            properties : []
        }
    }
    
    componentWillMount(){
        fetch('https://whcyt.herokuapp.com/propiedades')
        .then((response) => {
            return response.json()
        })
        .then((properties) => {
            this.setState({ properties: properties })
        })
    }

    render(){
        console.log(this.state.properties.propiedades);
        if(this.state.properties.length > 0){
            return (
                <div>
                    <PropertiesList list={this.state.properties} />
                </div>
            )
        }
        return <span className="mesage_wait"> Please wait...</span> 
        
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