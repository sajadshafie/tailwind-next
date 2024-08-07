type CountryItemType = {
  slug: string;
  id: number;
  name: string;
  image: any;
  population: string;
  region: string;
  capital: string;
  topLevelDomain?: string;
  currencies?: string;
  Languages?: string[];
  borderCountries?: string[];
  nativeName?:string
};

export default CountryItemType;
