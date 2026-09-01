const DEFAULT_PAGE_SIZE = 100;
const MAX_LIMIT = 100;

const getQueryOptions = (query) => {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  let limit = parseInt(query.limit, 10) || DEFAULT_PAGE_SIZE;
  if (limit > MAX_LIMIT) {
    limit = MAX_LIMIT;
  }
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy || 'createdAt:desc';
  const [sortField, sortOrder] = sortBy.split(':');
  const sort = { [sortField]: sortOrder === 'asc' ? 1 : -1 };

  return { limit, skip, sort };
};

module.exports = {
  getQueryOptions,
  DEFAULT_PAGE_SIZE,
  MAX_LIMIT,
};
