import { useEffect, useState } from 'react';

//https://metals-api.com/quickstart
// const API_METALS = import.meta.env.VITE_APP_COVID_API_METALS

const UseFetchCryptos = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [bitcoin, setBitcoin] = useState()
  const [selectedCoin, setSelectedCoin] = useState()
  const [seriesData, setSeriesData] = useState()
  const [mainData, setMainData] = useState()
  // const [metalsData, setMetalsData] = useState([])
  
  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true)
  
      const resCoins = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=solana%2C%20bitcoin%2Ccardano%2C%20ethereum%2Cpolkadot%2C%20dogecoin%2Cshiba-inu%2Cavalanche-2%2Calgorand&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C48h%2C7d`)
     // const resMetals = await fetch(`https://metals-api.com/api/latest?access_key=${API_METALS}`)

      const responseCoins = await resCoins.json()
      //const responseMetals = await resMetals.json()
     // console.log('responseMetals', responseMetals);

      setMainData(responseCoins)
      //setMetalsData(responseMetals.rates)

      setIsLoading(false)
    }

    if (selectedCoin === undefined || selectedCoin === null) {
      fetching()
    } 

  }, [selectedCoin === null])

  useEffect(() => {
    const fetching = async () => {
      setIsLoading(true)
  
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}`)
      const response = await res.json()

      const res2 = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart/range?vs_currency=eur&from=1628345411&to=1636301452`)
      const response2 = await res2.json()
      setBitcoin(response)
      setSeriesData(response2)

      setIsLoading(false)
    }

    if (selectedCoin !== undefined && selectedCoin !== null) {
      fetching()
    } 

  }, [selectedCoin])

  return {
    isLoading,
    mainData,
    // metalsData,
    bitcoin,
    seriesData,
    selectedCoin,
    setSelectedCoin,
  }
};

export default UseFetchCryptos;