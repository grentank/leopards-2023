export type CardType = {
  id: number;
  name: string;
  status: string;
  gender: 'Male' | 'Female';
  location: {
    name: string;
    url: string;
  };
  image: string;
};

export type ApiResponse = {
  info: never;
  results: CardType[];
};
