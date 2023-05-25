export interface Videogame {
  rating: number;
  website: string;
  background_image: string;
  released: string;
  description: string;
  name: string;
  platforms: Platform[];
}

interface Platform {
  name: string;
}
