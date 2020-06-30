import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID nH5ksuQ1D0w0hG27Wbry-bd_WIO7iBw8t9Hr284EJzM',
  },
});

export default api;
