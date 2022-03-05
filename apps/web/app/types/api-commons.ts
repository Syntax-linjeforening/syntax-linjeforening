export interface PaginatedRequestOptions {
  skip?: number;
  take?: number;
}

export interface Pagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}