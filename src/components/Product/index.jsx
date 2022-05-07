import React, { useState, useEffect } from "react";
import Axios from "axios";
import Format from '../numberFormat'
import { Card, Image, Label, Button } from 'semantic-ui-react'
//Imports

function Product(props) {

  return(
    <Card style={{ marginTop: 15 }}>
      <Image size="small" src={props.picture}  />
      <Card.Content>
        <Card.Header style={{fontSize: 15}}>{props.name}</Card.Header>
        <Card.Meta>
          <Format number={props.price}/>
        </Card.Meta>
        <Card.Description>
          <Label>{props.marca}</Label>
          <Label>{props.availabilityStatusDisplayValue}</Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          basic
          compact
          color='blue'
          floated='right'
          onClick={props.onSaveProduct}
        >
          Agregar al carrito
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Product
