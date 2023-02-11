enum TypesArticle {
  IT = 'IT'
}

enum ArticleBlockTypes {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE'
}

type ArticleBaseBlock = {
  id: string,
  type: ArticleBlockTypes
}

type ArticleCodeBlock = ArticleBaseBlock & {
  type: ArticleBlockTypes.CODE,
  code: string
}

type ArticleImageBlock = ArticleBaseBlock & {
  type: ArticleBlockTypes.IMAGE,
  title: string,
  src: string
}

type ArticleTextBlock = ArticleBaseBlock & {
  type: ArticleBlockTypes.TEXT,
  title?: string,
  paragraphs: string[]
}

type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

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
