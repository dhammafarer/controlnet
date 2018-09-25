declare type Lang = 'en' | 'zh'

declare interface ChildImageSharp {
  childImageSharp: {
    sizes: {
      src: string
    }
  }
}

declare interface NavLink {
  to: string
  label: string
  links: Array<NavLink>
}
