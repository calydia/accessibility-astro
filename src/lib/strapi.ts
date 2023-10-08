interface Props {
  endpoint: string;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  lang?: string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param lang - What languages to fetch
 * @param isMenu - If the query is for a menu
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  wrappedByKey,
  wrappedByList,
  lang,
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  if (lang) {
    if ( lang == 'en') {
      lang = '&locale=en';
    } else {
      lang = 'locale=fi';
    }
  } else {
    lang = '&locale=en&locale=fi';
  }
  
  const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}?pagination[limit]=999&populate=localizations&${lang}`);

  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}