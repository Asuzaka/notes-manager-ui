export interface StrapiBase<T> {
  id: number;
  attributes: T;
}

export interface StrapiResponse<T> {
  data: StrapiBase<T>;
}

export interface StrapiListResponse<T> {
  data: StrapiBase<T>[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface FetchNotesQuery {
  page?: number;
  pageSize?: number;
  search?: string;
  tag?: string;
  publicOnly?: boolean;
}
