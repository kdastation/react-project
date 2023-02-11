export enum TypesArticle {
  IT = 'IT'
}

export enum ArticleBlockTypes {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE'
}

export type ArticleBaseBlock = {
  id: string,
  type: ArticleBlockTypes
}

export type ArticleCodeBlock = ArticleBaseBlock & {
  type: ArticleBlockTypes.CODE,
  code: string
}

export type ArticleImageBlock = ArticleBaseBlock & {
  type: ArticleBlockTypes.IMAGE,
  title: string,
  src: string
}

export type ArticleTextBlock = ArticleBaseBlock & {
  type: ArticleBlockTypes.TEXT,
  title?: string,
  paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export type Article = {
  id: string,
  title: string
  subtitle: string,
  img: string,
  views: number,
  createdAt: string,
  userId: string,
  type: TypesArticle[],
  blocks: ArticleBlock[]
}
