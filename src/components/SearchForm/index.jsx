import React, { Component,useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react'
import Axios from "axios";

function searchForm (props) {
  function _valueToStat(valor){
    console.log('Entro', valor);
    const fetchData = async () => {
      const options = {
        headers: { "X-IBM-Client-Id": "adb8204d-d574-4394-8c1a-53226a40876e" },
      };
      const { data } = await Axios.get(
        `https://00672285.us-south.apigw.appdomain.cloud/demo-gapsi/search?&query=${valor}&page=1`,
        options
      );
  
      console.log(data);
      //localStorage['data'] = data.item.props.pageProps.initialData.searchResult.itemStacks[0].items;
      if(data.item.props.pageProps.initialData.searchResult.itemStacks[0].items != ''){
        console.log('Datas');
        localStorage['data'] = data.item.props.pageProps.initialData.searchResult.itemStacks[0].items;
      }
      console.log(data.item.props.pageProps.initialData.searchResult.itemStacks[0].items)
      //this.setState({ products: data.item.props.pageProps.initialData.searchResult.itemStacks[0].items })
      return data.item.props.pageProps.initialData.searchResult.itemStacks[0].items
    };
  
    let data = fetchData();
  }
    return(
      <Input
        action={{ icon: 'search', color: 'teal' }}
        onChange={(event) => _valueToStat(event.target.value)}
        placeholder='Buscar...' />
    )
}

export default searchForm;
