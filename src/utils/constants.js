export const queryTypes = {
  select: 'get',
  update: 'updateOrCreate',
  delete: 'destroy',
  insert: 'create'
};

export const allConditions = {
  and: 'where',
  or: 'orWhere',
  in: 'whereIn',
  '>': 'where',
  '<': 'where',
  'between': 'whereBetween',
  'not in': 'whereNotIn',
  'null': 'whereNull',
  'not null': 'whereNotNull',
  'exists': 'whereExists',
  'created_at': 'whereDate'

};