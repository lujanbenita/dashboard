import { useQuery } from 'react-query';

const COVID_API = import.meta.env.VITE_APP_COVID_API_KEY

const fetchCovid = async () => {
  const res = await fetch(`https://api.apify.com/v2/key-value-stores/${COVID_API}/records/LATEST?disableRedirect=true`)
  const response = await res.json()
  return response
}

const fetchCovidWorld = async () => {
  const res = await fetch(`https://corona.lmao.ninja/v2/all?yesterday`)
  const response = await res.json()
  return response
}

const UseFecthCovid = () => {

  const {data: dataCovid, isLoading: isLoadingCovid} = useQuery("covid", fetchCovid, {
    staleTime: 60000 * 60, // 1 hora de caché
    notifyOnChangePropsExclusions: ['isStale']
  })

  const {data:dataWorld, isLoading: isLoadingWorld} = useQuery("covidWorld", fetchCovidWorld, {
    staleTime: 60000 * 60, // 1 hora de caché
    notifyOnChangePropsExclusions: ['isStale']
  })

  const isLoading = isLoadingCovid && isLoadingWorld
  const dataRegion = dataCovid?.regions[0]

  const handleOnChange = (e) => {
    const res = dataCovid.regions.find(item => item.name === e.target.value)
    setDataRegion(res)
  }

  return {
    isLoading,
    dataWorld,
    dataCovid,
    dataRegion,
    handleOnChange
  }
};

export default UseFecthCovid;