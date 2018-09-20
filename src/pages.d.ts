declare interface LandingPageProps {
  sections: Array<Tile>
  lang: Lang
  background?: any
}

declare interface Tile {
  label: string
  home: string
  logo: any
  lang: Lang
}
