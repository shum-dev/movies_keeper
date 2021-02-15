import axios from 'axios';

export type SearchItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type SearchResult = {
  Search: SearchItem[];
  totalResults: string;
  Response: string;
};

export type MovieDetails = {
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Title: string;
  Year: string;
  imdbRating: string;
  Runtime: string;
  Plot: string;
  Poster: string;
  Actors: string;
  Awards: string;
};

const omdbApi = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: process.env.API_KEY,
  },
});

type SearchMovieArgs = {
  title: string;
  type: string | null;
  page: string | null;
};

export const apiSearchMovie = ({ title, type, page }: SearchMovieArgs): Promise<SearchResult> =>
  omdbApi.get('', { params: { s: title, type, page } }).then(({ data }) => data);

export const apiGetMovieById = (id: string): Promise<MovieDetails> =>
  omdbApi.get(`?i=${id}`).then(({ data }) => data);
