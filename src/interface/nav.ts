export interface NavItem {
  key: number
  label: string
  remark?: string
}
export interface ArtNavItem {
  key: number
  label: string
}
export interface NavProps {
  navList: NavItem[]
  artnavList?: ArtNavItem[]
}
export interface ArtNavProps {
  artnavList: ArtNavItem[]
  selectKey: string
}
