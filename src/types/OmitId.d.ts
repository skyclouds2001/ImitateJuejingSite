interface OmitId<T extends { id: number }> {
  id: T['id']
  attributes: Omit<T, 'id'>
}
