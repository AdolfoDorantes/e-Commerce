import React, { Component,useState, useEffect } from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import Product from '../Product'
import { Draggable } from 'drag-react';


function ProductList(props) {
  return (
      <Segment>
        <Grid>
          <Grid.Row columns={4}>
              {props.products.map(p => {
                return (
                  
                  <Grid.Column>
                      <Product
                        key={p.id}
                        name={p.name.substr(0,43) + '...'}
                        picture={p.image}
                        price={p.price}
                        status={p.availabilityStatusDisplayValue}
                        onSaveProduct={() => props.onSaveProduct(p.id)}
                        onIncrementProduct={() => props.onIncrementProduct(p.id)}
                        onRemoveProduct={() => props.onRemoveProduct(p.id)}
                      />
                  </Grid.Column>
                  
                )
              })}
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default ProductList
