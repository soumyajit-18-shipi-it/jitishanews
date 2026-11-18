export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  annotation?: string;
  dateOrMemory?: string;
  tag?: string;
}

export interface PunjabiPhraseItem {
  id: string;
  phrase: string;
  meaning: string;
  stamp: string;
  accent: string;
}

export interface InvestigationFinding {
  id: string;
  number: string;
  subject: string;
  verdict: string;
}

export interface HiddenClue {
  id: string;
  label: string;
  hint: string;
  foundText: string;
}

export interface NewspaperData {
  masthead: {
    title: string;
    subtitle: string;
    edition: string;
    date: string;
    issueNo: string;
    price: string;
    weather: string;
  };
  frontPage: {
    breakingTag: string;
    mainHeadline: string;
    leadKicker: string;
    mainCaption: string;
    mainAnnotation: string;
    sideHeadline: string;
    sideArticle: string;
    sideStamp: string;
    localBoyHeadline: string;
    localBoyArticle: string;
    localBoyAnnotation: string;
  };
  pageTwo: {
    pageNumber: string;
    headline: string;
    subhead: string;
    dateStamp: string;
    pullQuote: string;
    articleParagraphs: string[];
    byline: string;
  };
  pageThreeGaming: {
    pageNumber: string;
    headline: string;
    pullQuote: string;
    article: string;
    incidentReport: {
      status: string;
      witness: string;
      diagnosis: string;
    };
  };
  pageFourPunjabi: {
    pageNumber: string;
    sectionTitle: string;
    subtitle: string;
    phrases: PunjabiPhraseItem[];
    editorNote: string;
  };
  pageFiveEditorial: {
    pageNumber: string;
    headline: string;
    subheadline: string;
    leadQuote: string;
  };
  pageSixInvestigation: {
    pageNumber: string;
    headline: string;
    intro: string;
    findings: InvestigationFinding[];
    editorialVerdict: string;
  };
  miniGame: {
    sectionTag: string;
    headline: string;
    subheadline: string;
    instructions: string;
    clues: HiddenClue[];
    completionBadge: string;
    successHeadline: string;
    successMessage: string;
  };
  specialInsert: {
    sectionTag: string;
    badge: string;
    headline: string;
    subhead: string;
    noteParagraphs: string[];
    closingPhrase: string;
  };
  finalPrincessPage: {
    pageNumber: string;
    editorialLabel: string;
    headline: string;
    preamble: string[];
    centralDeclaration: {
      line1: string;
      line2: string;
    };
    promises: string[];
    punjabiBlessing: string;
    closingLines: string;
    signOff: string;
    author: string;
    replayCta: string;
  };
  photos: PhotoItem[];
  music: {
    title: string;
    artist: string;
    audioUrl: string;
  };
}
