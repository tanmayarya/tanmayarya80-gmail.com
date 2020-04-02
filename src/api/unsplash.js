import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID o7MMHnip1mhEkYHyi54c1gTDEKnDx02YSmT5F4YWaVg'
  }
});