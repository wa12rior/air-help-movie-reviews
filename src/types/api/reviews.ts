export interface Person {
  original: string;
  person: any[];
  organization: null;
}

export interface Headline {
  main: string;
  kicker: string;
  content_kicker: null;
}

export interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Multimedia {
  rank: number;
  subtype: string;
  caption: null;
  credit: null;
  type: string;
}

export interface Review {
  abstract: string;
  byline: Person;
  document_type: string;
  headline: Headline;
  keywords: Keyword[];
  lead_paragraph: string;
  multimedia: Multimedia[];
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
}

export interface ReviewResponse {
  data: {
    error: null | string;
    copyright?: string;
    response?: {
      docs: Review[];
    };
    status?: string;
  };
}
