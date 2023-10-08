import { MeiliSearch } from "meilisearch";
import type { FormEvent, ReactNode } from 'react';
import { useState } from 'react';
import type { SearchResults } from '../interfaces/searchInterfaces';

const searchClient = new MeiliSearch({
  host: "https://accessibility-meilisearch.ampere.corrupted.pw", apiKey: "06d78bd068226f2d9cfc2a0faa0b8e1630a0220adbf69b74eab82610aa4fa9ef"
});


export default function SearchComponent({ searchLabel, searchButton, searchDescription, searchLangLabelEn, searchLangLabelFi, searchMainHeading,
  searchResultPageLabel, searchResultDemoLabel, searchResultLabel, searchDemoLink, searchNoResults }: {
  searchLabel: string,
  searchButton: string,
  searchDescription: string,
  searchLangLabelEn: string,
  searchLangLabelFi: string,
  searchMainHeading: string,
  searchResultPageLabel: string,
  searchResultDemoLabel: string,
  searchResultLabel: string,
  searchDemoLink: string,
  searchNoResults: string
}) {

  const [searchWords, setSearchWords] = useState("");
  const [searchDemoResult, setSearchDemoResult] = useState<any>();
  const [searchPageResult, setSearchPageResult] = useState<any>();
  const [searchPageResultNumber, setSearchPageResultNumber] = useState<ReactNode>();
  const [searchDemoResultNumber, setDemoPageResultNumber] = useState<ReactNode>();
  const [totalEstimatedHits, setTotalEstimatedHits] = useState<ReactNode>();


  const GetSearchResults = async (searchWords: string) => {
    try {
      const pageResults = await searchClient.index('page').search(searchWords, {
        limit: 100,
        attributesToRetrieve: [
          'title',
          'locale',
          'pageUrl',
          'metaDescription'
        ]
      });
      setSearchPageResult(pageResults.hits);
      setSearchPageResultNumber(pageResults.estimatedTotalHits);

      const demoResults = await searchClient.index('demo-page').search(searchWords, {
        limit: 100,
        attributesToRetrieve: [
          'title',
          'locale',
          'pageUrl',
          'metaDescription'
        ]
      });
      setSearchDemoResult(demoResults.hits);
      setDemoPageResultNumber(demoResults.estimatedTotalHits);
      setTotalEstimatedHits(pageResults.estimatedTotalHits + demoResults.estimatedTotalHits);
      document.getElementById('result-focus')?.focus();
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearchWords(event.currentTarget.value);
  }

  const formSubmit = (event: FormEvent) => {
    event.preventDefault();

    GetSearchResults(searchWords);
  }

  return (
    <div>
      <div className="text-lt-gray dark:text-dk-gray py-2 px-4-px max-w-xl mx-auto md:py-6 md:px-8-px lg:max-w-4xl">
        <form id="site-search" onSubmit={formSubmit} role="search" className="mt-8 flex flex-col flex-wrap w-full md:items-center md:gap-x-6 md:gap-y-2 md:flex-row">
          <label htmlFor="search-input" className="text-black dark:text-white w-full">{searchLabel}</label>
          <input id="search-input" type="text" className="w-full md:max-w-sm" onChange={handleChange} />
          <button type="submit" className="button item--transition max-md:my-4">{searchButton}</button>
        </form>
      </div>
      <div className="sr-only" role="status">
        {(totalEstimatedHits as number > 0) ? totalEstimatedHits + ' ' + searchResultLabel : searchNoResults}
      </div>
      <div className="text-lt-gray dark:text-dk-gray pt-4 pb-2 px-4-px max-w-xl mx-auto md:py-6 md:px-8-px lg:max-w-4xl">
        { ((searchPageResult || searchDemoResult) && totalEstimatedHits as number > 0) ?
          <div className="border-t-4 gradient-border-light dark:gradient-border-dark pt-4">
            <h2>{searchMainHeading} {searchWords}, {totalEstimatedHits} {searchResultLabel}</h2>
            <p>{searchDescription}</p>
            <p>
              <a href="#search-result-demos">{searchDemoLink}</a>
            </p>
          </div>
        : null }

        { (searchPageResult && searchPageResultNumber as number > 0) ?
        <>
          <h3 id="search-result-pages">{searchResultPageLabel} {searchPageResultNumber} {searchResultLabel}</h3>
          <ul>
            {searchPageResult.map((result: SearchResults, index: number) => {
              const resultPrefix = (result.locale == 'en') ? '/' : '/fi/';
              const languageLabel = (result.locale == 'en') ? searchLangLabelEn : searchLangLabelFi;
              return (
                  <li key={`result-${index}`} className="my-2 py-6 flex flex-col border-t-2
                  ">
                    <span className="w-full self-end text-sm">{languageLabel}</span>
                    <a className="my-2 text-xl" lang={result.locale} href={`${resultPrefix}${result.pageUrl}`}>
                      <h4 className="mt-0">{result.title}</h4>
                    </a>
                    <span lang={result.locale} className="block text-lg">{result.metaDescription}</span>
                  </li>
              );
            })}
          </ul>
        </>
      : null }

      { (searchDemoResult && searchDemoResultNumber as number > 0) ?
        <>
          <h3 id="search-result-demos">{searchResultDemoLabel} {searchDemoResultNumber} {searchResultLabel}</h3>
          <ul>
            {searchDemoResult.map((demoResult: SearchResults, index: number) => {
              const demoResultPrefix = (demoResult.locale == 'en') ? '/' : '/fi/';
              const languageLabel = (demoResult.locale == 'en') ? searchLangLabelEn : searchLangLabelFi;
              return (
                  <li key={`result-demo-${index}`} className="my-2 py-6 flex flex-col border-t-2
                  ">
                    <span className="w-full self-end text-sm">{languageLabel}</span>
                    <a className="my-2 text-xl" lang={demoResult.locale} href={`${demoResultPrefix}${demoResult.pageUrl}`}>
                      <h4 className="mt-0">{demoResult.title}</h4>
                    </a>
                    <span lang={demoResult.locale} className="block text-lg">{demoResult.metaDescription}</span>
                  </li>
              );
            })}
          </ul>
        </>
      : null }

      {(totalEstimatedHits as number == 0) ?
      <p>No results.</p>
      : null}
    </div>
    </div>
  );
}