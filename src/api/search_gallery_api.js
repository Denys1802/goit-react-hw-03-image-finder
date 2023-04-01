import axios from 'axios';

const API_KEY = '33053445-8e719516e42e334ba5c285b92';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchName, page) {
  const fetchImage = await axios('', {
    params: {
      key: API_KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q: searchName,
    },
  });

  return fetchImage.data;
}
