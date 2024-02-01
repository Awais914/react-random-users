export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface SortMethods {
  none: { method: () => null };
  ascending: { method: (a: User, b: User) => number };
  descending: { method: (a: User, b: User) => number };
}

export interface UserFilterControlsProps {
  filterGender: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
