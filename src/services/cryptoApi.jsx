import axios from 'axios'

export const getCryptos = async (url,limit) => {
  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/${url}`,
    params: {
      limit: limit.toString(),
    },
    headers: {
      'X-RapidAPI-Key': '3b5a947230msh4129efa77eed8aep1601cajsne65613e0fb81',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCryptoDetails = async (url) => {
  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/${url}`,
    headers: {
      'X-RapidAPI-Key': '3b5a947230msh4129efa77eed8aep1601cajsne65613e0fb81',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCryptoHistory = async (url, timeperiod) => {
  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/${url}`,
    params: {
      timePeriod: timeperiod
    },
    headers: {
      'X-RapidAPI-Key': '3b5a947230msh4129efa77eed8aep1601cajsne65613e0fb81',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

